/* ==========================================================
   GiaHao One — Interactions
   ========================================================== */
(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const CFG = window.SITE_CONFIG;
  const DICT = window.I18N;
  const PRODUCTS = window.PRODUCTS || [];
  const MACHINE = { max4: "Qidi Max 4", u1: "Snapmaker U1", cnc: null };

  /* ---------- Language ---------- */
  const supported = window.LANGS.map((l) => l.code);
  const pickLang = () => {
    const q = new URLSearchParams(location.search).get("lang");
    if (supported.includes(q)) return q;
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
  document.addEventListener("click", () => langWrap.classList.remove("is-open"));
  langMenu.addEventListener("click", (e) => {
    const b = e.target.closest("[data-lang]");
    if (!b) return;
    setLang(b.dataset.lang);
    langWrap.classList.remove("is-open");
  });

  const setLang = (code) => {
    lang = code;
    localStorage.setItem("lang", code);
    document.documentElement.lang = code;
    document.title = t("meta.title");
    $$("[data-i18n]").forEach((el) => (el.textContent = t(el.dataset.i18n)));
    $$("[data-i18n-html]").forEach((el) => (el.innerHTML = t(el.dataset.i18nHtml)));
    $("#langLabel").textContent = window.LANGS.find((l) => l.code === code).short;
    $$("[data-lang]", langMenu).forEach((b) => b.setAttribute("aria-selected", b.dataset.lang === code));
    renderBento();
    renderGrid();
    renderHeroSwatches();
    moveSegPill();
  };

  /* ---------- Contact wiring ---------- */
  const zaloURL = `https://zalo.me/${CFG.zalo}`;
  $("#zaloTile").href = zaloURL;
  $("#phoneTile").href = `tel:${CFG.phone}`;
  $$("[data-phone]").forEach((el) => (el.textContent = CFG.phoneDisplay));
  $("#mapLink").href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CFG.mapQuery)}`;
  $("#mapFrame").src = `https://www.google.com/maps?q=${encodeURIComponent(CFG.mapQuery)}&z=13&output=embed`;
  $("#year").textContent = new Date().getFullYear();

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

  /* ---------- Bento ---------- */
  const renderBento = () => {
    const feats = PRODUCTS.filter((p) => p.featured).sort((a, b) => a.featured.localeCompare(b.featured));
    $("#bento").innerHTML = feats.map((p) => `
      <button class="bento__tile bento__tile--${p.featured} reveal is-visible" data-id="${p.id}">
        <img src="${p.image}" alt="${L(p.name)}" loading="lazy" />
        <div class="bento__text">
          <h3>${L(p.name)}</h3>
          <p>${L(p.tagline)}</p>
        </div>
      </button>`).join("");
  };

  /* ---------- Collection ---------- */
  let filter = "all";
  const tagHTML = (p) => {
    const cls = p.tech === "u1" ? "card__tag--multi" : p.tech === "cnc" ? "card__tag--wood" : "";
    return `<span class="card__tag ${cls}">${t("tag." + p.tech)}</span>`;
  };
  const renderGrid = () => {
    $("#grid").innerHTML = PRODUCTS.map((p) => `
      <button class="card" data-id="${p.id}" data-cat="${p.cat}" ${filter !== "all" && p.cat !== filter ? "hidden" : ""}>
        <div class="card__media"><img src="${p.image}" alt="${L(p.name)}" loading="lazy" onerror="this.parentNode.classList.add('noimg')" /></div>
        <div class="card__body">
          ${tagHTML(p)}
          <h3>${L(p.name)}</h3>
          <p>${L(p.tagline)}</p>
          <div class="card__dots">${(p.colors || []).map((c) => `<span style="background:${c}"></span>`).join("")}</div>
          <span class="link-chevron">${t("card.more")}</span>
        </div>
      </button>`).join("");
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
    let i = 0;
    $$(".card", $("#grid")).forEach((c) => {
      const show = filter === "all" || c.dataset.cat === filter;
      c.hidden = !show;
      c.classList.remove("is-in");
      if (show) { void c.offsetWidth; c.style.animationDelay = `${i++ * 60}ms`; c.classList.add("is-in"); }
    });
  });
  addEventListener("resize", moveSegPill);
  document.fonts?.ready.then(moveSegPill);

  /* ---------- Product sheet ---------- */
  const sheet = $("#sheet"), body = $("#sheetBody");
  const openSheet = (id) => {
    const p = PRODUCTS.find((x) => x.id === id);
    if (!p) return;
    const machine = MACHINE[p.tech] || t("craft.c3.title");
    body.innerHTML = `
      <div class="sheet__media"><img src="${p.image}" alt="${L(p.name)}" /></div>
      <div class="sheet__info">
        ${tagHTML(p)}
        <h2>${L(p.name)}</h2>
        <p class="tagline">${L(p.tagline)}</p>
        <p class="desc">${L(p.desc)}</p>
        <dl class="specs">
          <div><dt>${t("sheet.made")}</dt><dd>${machine}</dd></div>
          <div><dt>${t("sheet.material")}</dt><dd>${L(p.material)}</dd></div>
          <div><dt>${t("sheet.size")}</dt><dd>${L(p.size)}</dd></div>
          <div><dt>${t("sheet.colors")}</dt><dd><span class="card__dots" style="margin:0;justify-content:flex-end">${(p.colors || []).map((c) => `<span style="background:${c}"></span>`).join("")}</span></dd></div>
        </dl>
        <div class="sheet__actions">
          <a class="btn btn--primary" href="${zaloURL}" target="_blank" rel="noopener">${t("sheet.ask")}</a>
          <a class="link-chevron" href="tel:${CFG.phone}">${t("sheet.call")}</a>
        </div>
      </div>`;
    sheet.showModal();
    sheet.scrollTop = 0;
  };
  document.addEventListener("click", (e) => {
    const el = e.target.closest(".card, .bento__tile");
    if (el) openSheet(el.dataset.id);
  });
  $("#sheetClose").addEventListener("click", () => sheet.close());
  sheet.addEventListener("click", (e) => { if (e.target === sheet) sheet.close(); });

  /* ---------- Init ---------- */
  setLang(lang);
  observeReveal();
})();
