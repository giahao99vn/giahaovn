/* ==========================================================
   GiaHao One — Interactions
   ========================================================== */
(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const CFG = window.SITE_CONFIG;
  const DICT = window.I18N;
  const PRODUCTS = window.PRODUCTS || [];
  const ROOT = document.documentElement.dataset.root || "";
  const MACHINE = { max4: "Qidi Max 4", u1: "Snapmaker U1", cnc: null };

  /* ---------- Language ---------- */
  const supported = window.LANGS.map((l) => l.code);
  const pickLang = () => {
    const q = new URLSearchParams(location.search).get("lang");
    if (supported.includes(q)) return q;
    const htmlLang = document.documentElement.lang;
    if (ROOT && supported.includes(htmlLang)) return htmlLang;
    const saved = localStorage.getItem("lang");
    if (supported.includes(saved)) return saved;
    const nav = (navigator.language || "").slice(0, 2);
    if (nav && nav !== "vi" && supported.includes("en")) return "en";
    return CFG.defaultLang;
  };
  let lang = pickLang();
  const t = (key) => DICT[lang]?.[key] ?? DICT.vi[key] ?? key;
  const L = (obj) => (obj && typeof obj === "object" ? obj[lang] ?? obj.vi ?? obj.en : obj);

  const langMenu = $("#langMenu"), langWrap = $("#lang"), langBtn = $("#langBtn");
  langMenu.innerHTML = window.LANGS.map((l) => `<li><button data-lang="${l.code}" role="option">${l.label}</button></li>`).join("");
  langBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const open = langWrap.classList.toggle("is-open");
    langBtn.setAttribute("aria-expanded", open);
  });
  document.addEventListener("click", () => {
    langWrap.classList.remove("is-open");
    langBtn.setAttribute("aria-expanded", "false");
  });
  langMenu.addEventListener("click", (e) => {
    const b = e.target.closest("[data-lang]");
    if (!b) return;
    setLang(b.dataset.lang);
    langWrap.classList.remove("is-open");
    langBtn.setAttribute("aria-expanded", "false");
  });

  // Footer language links: switch in-place without full reload when clicked
  $$(".footer__langs a").forEach((a) => {
    a.addEventListener("click", (e) => {
      const code = a.getAttribute("hreflang");
      if (supported.includes(code)) {
        e.preventDefault();
        setLang(code);
      }
    });
  });

  const setLang = (code) => {
    lang = code;
    try { localStorage.setItem("lang", code); } catch (_) {}
    document.documentElement.lang = code;
    document.title = t("meta.title");
    $$("[data-i18n]").forEach((el) => (el.textContent = t(el.dataset.i18n)));
    $$("[data-i18n-html]").forEach((el) => (el.innerHTML = t(el.dataset.i18nHtml)));
    const labelEl = $("#langLabel") || $("span", langBtn);
    if (labelEl) labelEl.textContent = window.LANGS.find((l) => l.code === code).short;
    $$("[data-lang]", langMenu).forEach((b) => b.setAttribute("aria-selected", b.dataset.lang === code));
    $$(".footer__langs a").forEach((a) => {
      if (a.getAttribute("hreflang") === code) a.setAttribute("aria-current", "true");
      else a.removeAttribute("aria-current");
    });
    renderBento();
    renderGrid();
    renderHeroSwatches();
    moveSegPill();
    if (sheet.open && currentProductId) openSheet(currentProductId, false);
  };

  /* ---------- Contact wiring ---------- */
  const zaloURL = `https://zalo.me/${CFG.zalo}`;
  const fbURL = CFG.social?.facebook?.url || "https://www.facebook.com/giahaoone";
  if ($("#zaloTile")) $("#zaloTile").href = zaloURL;
  if ($("#phoneTile")) $("#phoneTile").href = `tel:${CFG.phone}`;
  $$("[data-phone]").forEach((el) => (el.textContent = CFG.phoneDisplay));
  if (CFG.social) {
    if ($("#fbTile") && CFG.social.facebook) {
      $("#fbTile").href = CFG.social.facebook.url;
      $$("[data-fb-handle]").forEach((el) => (el.textContent = CFG.social.facebook.handle));
    }
    if ($("#igTile") && CFG.social.instagram) {
      $("#igTile").href = CFG.social.instagram.url;
      $$("[data-ig-handle]").forEach((el) => (el.textContent = CFG.social.instagram.handle));
    }
    if ($("#tiktokTile") && CFG.social.tiktok) {
      $("#tiktokTile").href = CFG.social.tiktok.url;
      $$("[data-tiktok-handle]").forEach((el) => (el.textContent = CFG.social.tiktok.handle));
    }
  }
  if ($("#mapLink")) $("#mapLink").href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CFG.mapQuery)}`;
  if ($("#mapFrame") && !$("#mapFrame").getAttribute("src")) {
    $("#mapFrame").src = `https://www.google.com/maps?q=${encodeURIComponent(CFG.mapQuery)}&z=13&output=embed`;
  }
  if ($("#year")) $("#year").textContent = new Date().getFullYear();

  /* ---------- Nav ---------- */
  const nav = $("#nav");
  addEventListener("scroll", () => nav.classList.toggle("is-scrolled", scrollY > 8), { passive: true });
  const burger = $("#burger"), links = $("#navLinks");
  const closeMenu = () => { burger.classList.remove("is-open"); links.classList.remove("is-open"); document.body.style.overflow = ""; };
  burger.addEventListener("click", () => {
    const open = !links.classList.contains("is-open");
    burger.classList.toggle("is-open", open);
    links.classList.toggle("is-open", open);
    document.body.style.overflow = open ? "hidden" : "";
  });
  $$("a", links).forEach((a) => a.addEventListener("click", closeMenu));

  const navAnchors = $$("a", links);
  const secObs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) navAnchors.forEach((a) => a.classList.toggle("is-active", a.hash === `#${e.target.id}`));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  $$("main section[id]").forEach((s) => secObs.observe(s));

  /* ---------- Reveal ---------- */
  const revObs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("is-visible"); revObs.unobserve(e.target); }
    });
  }, { threshold: 0.15 });
  const observeReveal = (root = document) => $$(".reveal:not(.is-visible)", root).forEach((el, i) => {
    el.style.transitionDelay = `${(i % 3) * 90}ms`;
    revObs.observe(el);
  });

  /* ---------- Hero colour picker ---------- */
  window.HERO_COLORS = [
    { key: "color.terracotta", hex: "#c8643b" },
    { key: "color.porcelain", hex: "#efece6" },
    { key: "color.sage", hex: "#9caf88" },
    { key: "color.ocean", hex: "#2f6fa8" },
    { key: "color.midnight", hex: "#2b2b2e" }
  ];
  let heroColor = 0;
  const renderHeroSwatches = () => {
    $("#heroSwatches").innerHTML = window.HERO_COLORS.map((c, i) =>
      `<button style="background:${c.hex}" class="${i === heroColor ? "is-active" : ""}" data-i="${i}" aria-label="${t(c.key)}"></button>`).join("");
    $("#heroColorName").textContent = t(window.HERO_COLORS[heroColor].key);
  };
  $("#heroSwatches").addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (!b) return;
    heroColor = +b.dataset.i;
    renderHeroSwatches();
    window.dispatchEvent(new CustomEvent("herocolor", { detail: window.HERO_COLORS[heroColor].hex }));
  });

  /* ---------- Bento & Collection ---------- */
  let filter = "all";
  const tagHTML = (p) => {
    const cls = p.tech === "u1" ? "card__tag--multi" : p.tech === "cnc" ? "card__tag--wood" : p.tech === "hybrid" ? "card__tag--hybrid" : "";
    return `<span class="card__tag ${cls}">${t("tag." + p.tech)}</span>`;
  };

  const renderBento = () => {
    if (window.Render) {
      $("#bento").innerHTML = window.Render.make(lang, DICT, ROOT).bento(PRODUCTS);
      return;
    }
    const feats = PRODUCTS.filter((p) => p.featured).sort((a, b) => a.featured.localeCompare(b.featured));
    $("#bento").innerHTML = feats.map((p) => `
      <button class="bento__tile bento__tile--${p.featured} reveal is-visible" data-id="${p.id}">
        <img src="${ROOT + p.image}" alt="${L(p.name)}" width="900" height="900" loading="lazy" decoding="async" />
        <div class="bento__text">
          <h3>${L(p.name)}</h3>
          <p>${L(p.tagline)}</p>
        </div>
      </button>`).join("");
  };

  const applyFilter = (animate = false) => {
    let i = 0;
    $$(".card", $("#grid")).forEach((c) => {
      const show = filter === "all" || c.dataset.cat === filter;
      c.hidden = !show;
      c.classList.remove("is-in");
      if (show && animate) {
        void c.offsetWidth;
        c.style.animationDelay = `${i++ * 60}ms`;
        c.classList.add("is-in");
      }
    });
  };

  const renderGrid = () => {
    if (window.Render) {
      $("#grid").innerHTML = window.Render.make(lang, DICT, ROOT).grid(PRODUCTS);
      applyFilter(false);
      return;
    }
    $("#grid").innerHTML = PRODUCTS.map((p) => `
      <article class="card" data-id="${p.id}" data-cat="${p.cat}" id="p-${p.id}" tabindex="0" role="button" aria-label="${L(p.name)}" ${filter !== "all" && p.cat !== filter ? "hidden" : ""}>
        <div class="card__media"><img src="${ROOT + p.image}" alt="${L(p.name)}" width="900" height="900" loading="lazy" decoding="async" onerror="this.parentNode.classList.add('noimg')" /></div>
        <div class="card__body">
          ${tagHTML(p)}
          <h3>${L(p.name)}</h3>
          <p>${L(p.tagline)}</p>
          <div class="card__dots">${(p.colors || []).map((c) => `<span style="background:${c}"></span>`).join("")}</div>
          <div class="card__foot">
            ${p.price ? `<span class="card__price">${L(p.price)}</span>` : ""}
            <span class="link-chevron">${t("card.more")}</span>
          </div>
        </div>
      </article>`).join("");
  };

  const seg = $("#filters"), pill = $("#segPill");
  const moveSegPill = () => {
    const active = $("button.is-active", seg);
    if (!active) return;
    pill.style.width = `${active.offsetWidth}px`;
    pill.style.transform = `translateX(${active.offsetLeft}px)`;
  };
  seg.addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (!b) return;
    $$("button", seg).forEach((x) => x.classList.toggle("is-active", x === b));
    filter = b.dataset.filter;
    moveSegPill();
    applyFilter(true);
  });
  addEventListener("resize", moveSegPill);
  document.fonts?.ready.then(moveSegPill);

  /* ---------- Product sheet & Deep-linking ---------- */
  const sheet = $("#sheet"), body = $("#sheetBody");
  let currentProductId = null;

  const openSheet = (id, updateUrl = true) => {
    const p = PRODUCTS.find((x) => x.id === id);
    if (!p) return;
    currentProductId = p.id;
    const machine = p.tech === "hybrid" ? t("sheet.hybridTech") : (MACHINE[p.tech] || t("craft.c3.title"));
    body.innerHTML = `
      <div class="sheet__media"><img src="${ROOT + p.image}" alt="${L(p.name)}" width="900" height="900" /></div>
      <div class="sheet__info">
        ${tagHTML(p)}
        <h2>${L(p.name)}</h2>
        <p class="tagline">${L(p.tagline)}</p>
        <p class="desc">${L(p.desc)}</p>
        <dl class="specs">
          ${p.price ? `<div><dt>${t("sheet.price")}</dt><dd class="specs__price">${L(p.price)}</dd></div>` : ""}
          <div><dt>${t("sheet.made")}</dt><dd>${machine}</dd></div>
          <div><dt>${t("sheet.material")}</dt><dd>${L(p.material)}</dd></div>
          <div><dt>${t("sheet.size")}</dt><dd>${L(p.size)}</dd></div>
          <div><dt>${t("sheet.colors")}</dt><dd><span class="sheet__dots">${(p.colors || []).map((c) => `<span style="background:${c}" title="${c}"></span>`).join("")}</span></dd></div>
        </dl>
        <div class="sheet__actions">
          <a class="btn btn--primary" href="${zaloURL}" target="_blank" rel="noopener">${t("sheet.ask")}</a>
          <a class="btn btn--secondary" href="${fbURL}" target="_blank" rel="noopener">${t("sheet.fb")}</a>
          <button class="btn btn--ghost" id="shareProductBtn" type="button">
            <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
            <span>${t("sheet.share")}</span>
          </button>
          <a class="link-chevron" href="tel:${CFG.phone}">${t("sheet.call")}</a>
        </div>
      </div>`;
    const shareBtn = $("#shareProductBtn", body);
    if (shareBtn) {
      shareBtn.addEventListener("click", async () => {
        const shareUrl = `${location.origin && location.origin !== "null" ? location.origin + location.pathname : CFG.siteUrl + "/"}#p-${p.id}`;
        try {
          await navigator.clipboard.writeText(shareUrl);
          shareBtn.classList.add("is-copied");
          $("span", shareBtn).textContent = t("sheet.copied");
          setTimeout(() => {
            shareBtn.classList.remove("is-copied");
            $("span", shareBtn).textContent = t("sheet.share");
          }, 2000);
        } catch (_) {}
      });
    }
    if (!sheet.open) sheet.showModal();
    sheet.scrollTop = 0;
    if (updateUrl) {
      try { history.replaceState(null, "", `#p-${p.id}`); } catch (_) {}
    }
  };

  const clearProductHash = () => {
    currentProductId = null;
    if (location.hash.startsWith("#p-")) {
      try { history.replaceState(null, "", location.pathname + location.search); } catch (_) {}
    }
  };

  document.addEventListener("click", (e) => {
    const el = e.target.closest(".card, .bento__tile");
    if (el) openSheet(el.dataset.id);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const el = e.target.closest(".card[role='button']");
    if (el) {
      e.preventDefault();
      openSheet(el.dataset.id);
    }
  });
  $("#sheetClose").addEventListener("click", () => sheet.close());
  sheet.addEventListener("click", (e) => { if (e.target === sheet) sheet.close(); });
  sheet.addEventListener("close", clearProductHash);

  const checkDeepLink = () => {
    if (location.hash.startsWith("#p-")) {
      const id = location.hash.slice(3);
      if (PRODUCTS.some((p) => p.id === id)) openSheet(id, false);
    }
  };
  addEventListener("hashchange", checkDeepLink);

  /* ---------- Init ---------- */
  setLang(lang);
  observeReveal();
  checkDeepLink();
})();
