/* ==========================================================
   GiaHao One — Build script (JavaScript for Automation, có sẵn trên macOS)

   Chạy từ thư mục gốc của website:
       osascript -l JavaScript scripts/build.js

   Sinh ra:
     index.html        (Tiếng Việt  → https://giahao.vn/)
     en/index.html     (English     → https://giahao.vn/en/)
     sitemap.xml       (kèm hreflang + ảnh sản phẩm)
   từ src/index.template.html + js/config.js + js/i18n.js + js/products.js
   ========================================================== */
ObjC.import("Foundation");

function run() {
  const fm = $.NSFileManager.defaultManager;
  const ROOT = fm.currentDirectoryPath.js;
  const read = (p) => {
    const s = $.NSString.stringWithContentsOfFileEncodingError(`${ROOT}/${p}`, $.NSUTF8StringEncoding, null);
    if (!s || s.isNil()) throw new Error(`Không đọc được ${p} — hãy chạy lệnh từ thư mục gốc website.`);
    return s.js;
  };
  const write = (p, content) => {
    const full = `${ROOT}/${p}`;
    const dir = full.replace(/\/[^/]+$/, "");
    fm.createDirectoryAtPathWithIntermediateDirectoriesAttributesError(dir, true, $(), null);
    $(content).writeToFileAtomicallyEncodingError(full, true, $.NSUTF8StringEncoding, null);
  };

  // Nạp dữ liệu với một đối tượng window giả
  var window = (this.window = {});
  eval(read("js/config.js"));
  eval(read("js/i18n.js"));
  eval(read("js/products.js"));
  eval(read("js/render.js"));
  const CFG = window.SITE_CONFIG, DICT = window.I18N, LANGS = window.LANGS, PRODUCTS = window.PRODUCTS, Render = window.Render;
  const esc = Render.esc;
  const template = read("src/index.template.html");

  const SITE = CFG.siteUrl.replace(/\/$/, "");
  const urlFor = (code) => (code === CFG.defaultLang ? `${SITE}/` : `${SITE}/${code}/`);
  const pathFor = (code) => (code === CFG.defaultLang ? "" : `${code}/`);
  const today = new Date().toISOString().slice(0, 10);

  const hreflang = LANGS.map((l) => `<link rel="alternate" hreflang="${l.code}" href="${urlFor(l.code)}" />`)
    .concat(`<link rel="alternate" hreflang="x-default" href="${urlFor(CFG.defaultLang)}" />`).join("\n  ");

  LANGS.forEach((L) => {
    const lang = L.code;
    const root = lang === CFG.defaultLang ? "" : "../";
    const R = Render.make(lang, DICT, root);
    const t = R.t;

    // Relative links to other language versions
    const relTo = (code) => (root + pathFor(code)) || "./";
    const langLinks = LANGS.map((o) =>
      `<li><a href="${relTo(o.code)}" hreflang="${o.code}" lang="${o.code}"${o.code === lang ? ' aria-current="true"' : ""}>${esc(o.label)}</a></li>`).join("\n            ");
    const footerLangs = LANGS.map((o) =>
      `<a href="${relTo(o.code)}" hreflang="${o.code}" lang="${o.code}"${o.code === lang ? ' aria-current="true"' : ""}>${esc(o.label)}</a>`).join(" · ");
    const ogLocaleAlt = LANGS.filter((o) => o.code !== lang)
      .map((o) => `<meta property="og:locale:alternate" content="${esc((DICT[o.code] || {})["meta.ogLocale"] || o.code)}" />`).join("\n  ");

    // ---------- Schema.org JSON-LD ----------
    const orgId = `${SITE}/#organization`;
    const jsonld = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LocalBusiness",
          "@id": orgId,
          name: CFG.brand,
          alternateName: CFG.altNames,
          url: `${SITE}/`,
          logo: `${SITE}/assets/icon-512.png`,
          image: `${SITE}/assets/og-image.jpg`,
          description: t("meta.desc"),
          telephone: CFG.phoneIntl,
          address: {
            "@type": "PostalAddress",
            streetAddress: CFG.address.street,
            addressLocality: CFG.address.locality,
            addressRegion: CFG.address.region,
            addressCountry: CFG.address.country
          },
          areaServed: { "@type": "Country", name: "Vietnam" },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: CFG.phoneIntl,
            contactType: "customer service",
            availableLanguage: ["Vietnamese", "English"]
          },
          knowsAbout: ["3D printing", "In 3D", "Multicolor 3D printing", "CNC wood milling", "Phay gỗ CNC"],
          ...(CFG.sameAs && CFG.sameAs.length ? { sameAs: CFG.sameAs } : {})
        },
        {
          "@type": "WebSite",
          "@id": `${SITE}/#website`,
          url: `${SITE}/`,
          name: CFG.brand,
          alternateName: CFG.altNames,
          inLanguage: LANGS.map((l) => l.code),
          publisher: { "@id": orgId }
        },
        {
          "@type": "WebPage",
          "@id": `${urlFor(lang)}#webpage`,
          url: urlFor(lang),
          name: t("meta.title"),
          description: t("meta.desc"),
          inLanguage: lang,
          isPartOf: { "@id": `${SITE}/#website` },
          about: { "@id": orgId },
          primaryImageOfPage: `${SITE}/assets/og-image.jpg`,
          dateModified: today
        },
        {
          "@type": "ItemList",
          "@id": `${urlFor(lang)}#collection`,
          name: t("col.title").replace(/\.$/, ""),
          numberOfItems: PRODUCTS.length,
          itemListElement: PRODUCTS.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: R.L(p.name),
            description: R.L(p.desc),
            url: `${urlFor(lang)}#p-${p.id}`,
            image: `${SITE}/${p.image}`
          }))
        }
      ]
    };
    const jsonText = JSON.stringify(jsonld, null, 2).replace(/</g, "\\u003c");

    // ---------- Fill template ----------
    let html = template;
    html = html.replace(/<!--\s*⚠️[\s\S]*?-->\n?/, `<!-- Generated by scripts/build.js on ${today}. Edit src/index.template.html instead. -->\n`);
    html = html.replace(/(<([a-z0-9]+)\b[^>]*?\sdata-i18n="([^"]+)"[^>]*>)([\s\S]*?)(<\/\2>)/g,
      (m, open, tag, key, _inner, close) => open + esc(t(key)) + close);
    html = html.replace(/(<([a-z0-9]+)\b[^>]*?\sdata-i18n-html="([^"]+)"[^>]*>)([\s\S]*?)(<\/\2>)/g,
      (m, open, tag, key, _inner, close) => open + t(key) + close);
    html = html.replace(/\{\{t:([\w.]+)\}\}/g, (m, key) => esc(t(key)));

    const vars = {
      lang, root, url: urlFor(lang), siteUrl: SITE, hreflang, ogLocaleAlt, langLinks, footerLangs,
      langShort: L.short, jsonld: jsonText, bento: R.bento(PRODUCTS), grid: R.grid(PRODUCTS),
      zalo: CFG.zalo, phone: CFG.phone, phoneDisplay: esc(CFG.phoneDisplay),
      fbUrl: (CFG.social && CFG.social.facebook && CFG.social.facebook.url) || "#",
      fbHandle: esc((CFG.social && CFG.social.facebook && CFG.social.facebook.handle) || "@giahaoone"),
      igUrl: (CFG.social && CFG.social.instagram && CFG.social.instagram.url) || "#",
      igHandle: esc((CFG.social && CFG.social.instagram && CFG.social.instagram.handle) || "@giahaoone"),
      tiktokUrl: (CFG.social && CFG.social.tiktok && CFG.social.tiktok.url) || "#",
      tiktokHandle: esc((CFG.social && CFG.social.tiktok && CFG.social.tiktok.handle) || "@giahaoone"),
      mapQuery: encodeURIComponent(CFG.mapQuery), year: String(new Date().getFullYear())
    };
    html = html.replace(/\{\{(\w+)\}\}/g, (m, k) => (k in vars ? vars[k] : m));

    write(`${pathFor(lang)}index.html`, html);
  });

  // ---------- sitemap.xml ----------
  const alt = LANGS.map((l) => `    <xhtml:link rel="alternate" hreflang="${l.code}" href="${urlFor(l.code)}"/>`)
    .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${urlFor(CFG.defaultLang)}"/>`).join("\n");
  const urls = LANGS.map((l) => {
    const R = Render.make(l.code, DICT, "");
    const imgs = PRODUCTS.map((p) =>
      `    <image:image><image:loc>${SITE}/${p.image}</image:loc><image:title>${esc(R.L(p.name))} – GiaHao One</image:title></image:image>`).join("\n");
    return `  <url>\n    <loc>${urlFor(l.code)}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${l.code === CFG.defaultLang ? "1.0" : "0.8"}</priority>\n${alt}\n${imgs}\n  </url>`;
  }).join("\n");
  write("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>
`);

  return `✓ Build xong: ${LANGS.map((l) => pathFor(l.code) + "index.html").join(", ")}, sitemap.xml (${today})`;
}
