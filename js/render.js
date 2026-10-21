/* ==========================================================
   Render helpers — dùng chung cho trình duyệt (main.js)
   và script build (scripts/build.js) để HTML tĩnh và HTML động giống hệt nhau.
   ========================================================== */
(function (root) {
  const esc = (s) => String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

  function make(lang, dict, prefix) {
    prefix = prefix || "";
    const t = (k) => (dict[lang] && dict[lang][k] != null ? dict[lang][k] : dict.vi[k] != null ? dict.vi[k] : k);
    const L = (o) => (o && typeof o === "object" ? (o[lang] != null ? o[lang] : o.vi != null ? o.vi : o.en) : o);
    const alt = (p) => `${L(p.name)} – ${t("tag." + p.tech)} | GiaHao One`;
    const img = (p) => prefix + p.image;
    const dots = (p) => (p.colors || []).map((c) => `<span style="background:${c}"></span>`).join("");

    const tag = (p) => {
      const cls = p.tech === "u1" ? "card__tag--multi" : p.tech === "cnc" ? "card__tag--wood" : p.tech === "hybrid" ? "card__tag--hybrid" : "";
      return `<span class="card__tag ${cls}">${esc(t("tag." + p.tech))}</span>`;
    };

    const bento = (products) => products
      .filter((p) => p.featured)
      .sort((a, b) => a.featured.localeCompare(b.featured))
      .map((p) => `
        <button class="bento__tile bento__tile--${p.featured} reveal is-visible" data-id="${p.id}">
          <img src="${img(p)}" alt="${esc(alt(p))}" width="900" height="900" loading="lazy" decoding="async" />
          <div class="bento__text">
            <h3>${esc(L(p.name))}</h3>
            <p>${esc(L(p.tagline))}</p>
          </div>
        </button>`).join("");

    const grid = (products) => products.map((p) => `
        <article class="card" data-id="${p.id}" data-cat="${p.cat}" id="p-${p.id}" tabindex="0" role="button" aria-label="${esc(L(p.name))}">
          <div class="card__media"><img src="${img(p)}" alt="${esc(alt(p))}" width="900" height="900" loading="lazy" decoding="async" onerror="this.parentNode.classList.add('noimg')" /></div>
          <div class="card__body">
            ${tag(p)}
            <h3>${esc(L(p.name))}</h3>
            <p>${esc(L(p.tagline))}</p>
            <p class="visually-hidden">${esc(L(p.desc))}</p>
            <div class="card__dots">${dots(p)}</div>
            <div class="card__foot">
              ${p.price ? `<span class="card__price">${esc(L(p.price))}</span>` : ""}
              <span class="link-chevron">${esc(t("card.more"))}</span>
            </div>
          </div>
        </article>`).join("");

    return { t, L, esc, alt, img, tag, dots, bento, grid };
  }

  root.Render = { make, esc };
})(typeof window !== "undefined" ? window : this);
