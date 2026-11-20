(function () {
  "use strict";

  var C = window.CONTENT;
  var root = document.documentElement;

  /* ---------- UI-Texte ---------- */
  var UI = {
    de: {
      skip: "Zum Inhalt springen",
      "nav.about": "Über mich", "nav.projects": "Projekte", "nav.experience": "Erfahrung", "nav.skills": "Skills", "nav.certs": "Zertifikate", "nav.contact": "Kontakt",
      "hero.status": "Offen für Stellen als Full-Stack Developer & AI Engineer",
      "hero.lead": "Ich entwickle Webanwendungen, KI-Systeme und Automatisierungen vom Datenbankschema bis zur Oberfläche, mit Schwerpunkt auf RAG, Agentic AI, Prozessautomatisierung und vertrauenswürdigen, datenschutzkonformen Systemen.",
      "hero.cv": "Lebenslauf ansehen", "cv.title": "Lebenslauf (PDF)", "cv.text": "QR-Code scannen oder direkt öffnen.", "cv.open": "Ansehen", "cv.download": "Herunterladen", "cv.big": "QR groß anzeigen", "cv.qrAlt": "QR-Code zum Lebenslauf (PDF)", "hero.contact": "Kontakt", "hero.photo": "Profilfoto ergänzen",
      "stats.users": "gleichzeitige Nutzer im Lasttest (Harbour2025)", "stats.aucValue": "0,957", "stats.auc": "ROC-AUC im ML-Modell (MediFlow)",
      "stats.sinceValue": "seit 2023", "stats.since": "Berufserfahrung neben dem Studium", "stats.certs": "Zertifikate, u. a. von IBM, AWS und Meta",
      "about.h": "Über mich",
      "about.text": "Ich studiere Informatik im Master mit Schwerpunkt Vertrauenswürdige Systeme an der Hochschule Bremerhaven. Davor habe ich den B.Sc. Technische Informatik an der Hochschule Bremen abgeschlossen, mit Bachelorarbeit (Note 1,3) und gefördert durch das Deutschlandstipendium. Seit 2023 arbeite ich neben dem Studium als Entwickler: zuerst im Full-Stack-Umfeld mit Java/Spring Boot und React, heute als Software- und KI-Entwickler. Mein Schwerpunkt sind KI-Anwendungen mit LLMs, RAG und Agenten, die nachvollziehbar arbeiten und mit sensiblen Daten verantwortungsvoll umgehen.",
      "about.msc": "M.Sc. Informatik – Vertrauenswürdige Systeme", "about.mscWhere": "Hochschule Bremerhaven · laufend",
      "about.bsc": "B.Sc. Technische Informatik", "about.bscWhere": "Hochschule Bremen · Bachelorarbeit 1,3 · Deutschlandstipendium",
      "about.lang": "Sprachen", "about.langList": "Französisch (Muttersprache) · Deutsch (C1) · Englisch (B2)",
      "projects.h": "Projekte", "projects.sub": "Jeweils mit Problem, Lösung und Ergebnis.", "filter.all": "Alle",
      "projects.more": "Weitere Projekte auf GitHub",
      "exp.h": "Berufserfahrung", "certs.h": "Zertifikate", "nav.refs": "Referenzen", "refs.h": "Referenzen", "refs.sub": "Wörtliche Auszüge aus meinen Arbeitszeugnissen.", "refs.more": "Vollständige Arbeitszeugnisse auf Anfrage", refTranslated: "", qOpen: "\u201E", qClose: "\u201C",
      "contact.h": "Kontakt", "contact.text": "Ich suche eine Stelle als Full-Stack Software Developer oder AI Engineer",
      "contact.when": "ab Datum · Werkstudent/Vollzeit · Region/remote", "contact.text2": "Am schnellsten erreichen Sie mich per E-Mail.",
      "footer.imprint": "Impressum",
      problem: "Problem", solution: "Lösung", result: "Ergebnis",
      demo: "Live-Demo", github: "GitHub", missingLink: "Link ergänzen", verify: "Verifizieren", courses: "Kurse", showCourses: "Alle {n} Kurse anzeigen",
      screens: "Screenshots", enlarge: "Bild vergrößern", featured: "Highlight", empty: "Keine Projekte in dieser Kategorie.",
      themeToDark: "Dunkles Design aktivieren", themeToLight: "Helles Design aktivieren", langSwitch: "Switch to English",
      menuOpen: "Menü öffnen", menuClose: "Menü schließen", close: "Schließen"
    },
    en: {
      skip: "Skip to content",
      "nav.about": "About", "nav.projects": "Projects", "nav.experience": "Experience", "nav.skills": "Skills", "nav.certs": "Certificates", "nav.contact": "Contact",
      "hero.status": "Open to roles as Full-Stack Developer & AI Engineer",
      "hero.lead": "I build web applications, AI systems and automations from the database schema to the user interface, focusing on RAG, agentic AI, process automation and trustworthy, privacy-compliant systems.",
      "hero.cv": "View CV", "cv.title": "CV (PDF, German)", "cv.text": "Scan the QR code or open it directly.", "cv.open": "View", "cv.download": "Download", "cv.big": "Show QR full screen", "cv.qrAlt": "QR code linking to the CV (PDF)", "hero.contact": "Contact", "hero.photo": "Add profile photo",
      "stats.users": "concurrent users in load test (Harbour2025)", "stats.aucValue": "0.957", "stats.auc": "ROC-AUC of ML model (MediFlow)",
      "stats.sinceValue": "since 2023", "stats.since": "industry experience alongside studies", "stats.certs": "certificates, including IBM, AWS and Meta",
      "about.h": "About me",
      "about.text": "I am studying for a master’s degree in Computer Science (Trustworthy Systems) at Bremerhaven University of Applied Sciences. Before that, I completed a B.Sc. in Computer Engineering at Bremen University of Applied Sciences, with a bachelor’s thesis graded 1.3 and funded by the Deutschlandstipendium scholarship. Since 2023 I have been working as a developer alongside my studies: first in full-stack development with Java/Spring Boot and React, now as a software and AI developer. My focus is on AI applications with LLMs, RAG and agents that work transparently and handle sensitive data responsibly.",
      "about.msc": "M.Sc. Computer Science – Trustworthy Systems", "about.mscWhere": "Bremerhaven University of Applied Sciences · ongoing",
      "about.bsc": "B.Sc. Computer Engineering", "about.bscWhere": "Bremen University of Applied Sciences · thesis grade 1.3 · Deutschlandstipendium",
      "about.lang": "Languages", "about.langList": "French (native) · German (C1) · English (B2)",
      "projects.h": "Projects", "projects.sub": "Each with problem, solution and result.", "filter.all": "All",
      "projects.more": "More projects on GitHub",
      "exp.h": "Experience", "certs.h": "Certificates", "nav.refs": "References", "refs.h": "References", "refs.sub": "Verbatim excerpts from my employment references.", "refs.more": "Full references available on request", refTranslated: "Translated from the German original.", qOpen: "\u201C", qClose: "\u201D",
      "contact.h": "Contact", "contact.text": "I am looking for a position as Full-Stack Software Developer or AI Engineer",
      "contact.when": "from date · working student/full-time · region/remote", "contact.text2": "Email is the fastest way to reach me.",
      "footer.imprint": "Legal notice",
      problem: "Problem", solution: "Solution", result: "Result",
      demo: "Live demo", github: "GitHub", missingLink: "add link", verify: "Verify", courses: "courses", showCourses: "Show all {n} courses",
      screens: "Screenshots", enlarge: "Enlarge image", featured: "Highlight", empty: "No projects in this category.",
      themeToDark: "Enable dark theme", themeToLight: "Enable light theme", langSwitch: "Auf Deutsch umschalten",
      menuOpen: "Open menu", menuClose: "Close menu", close: "Close"
    }
  };

  var CAT_LABEL = { ai: "KI/LLM", fullstack: "Full-Stack", data: "Data Science", sim: "Simulation" };
  var CAT_LABEL_EN = { ai: "AI/LLM", fullstack: "Full-Stack", data: "Data Science", sim: "Simulation" };

  var ICONS = {
    code: '<path d="M8 6l-6 6 6 6M16 6l6 6-6 6" />',
    brain: '<path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 6 0V4.5A2.5 2.5 0 0 0 9 4zM15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-6 0" />',
    server: '<rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 7.5h.01M7 16.5h.01"/>',
    layout: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M9 9v11"/>',
    db: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
    cloud: '<path d="M7 18a5 5 0 0 1-.5-10A6 6 0 0 1 18 9a4.5 4.5 0 0 1-.5 9z"/>',
    spark: '<path d="M12 3l2 5.5L19.5 10 14 12l-2 5.5L10 12 4.5 10 10 8.5z"/><path d="M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z"/>'
  };

  var lang = "de";
  var filter = "all";
  // Standard ist Deutsch; ?lang=en im Link oder der Umschalter wählt Englisch
  try {
    var q = new URLSearchParams(location.search).get("lang");
    lang = q || localStorage.getItem("lang") || "de";
  } catch (e) {}
  if (lang !== "de" && lang !== "en") lang = "de";

  /* ---------- Helfer ---------- */
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; });
  }
  // ⟦…⟧ → gelb markierter Platzhalter
  function rich(s) {
    return esc(s)
      .replace(/⟦(.*?)⟧/g, '<mark class="ph">$1</mark>')
      .replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
  }
  function t(v) { return v && typeof v === "object" ? (v[lang] != null ? v[lang] : v.de) : v; }
  function ui(key) { return UI[lang][key] || UI.de[key] || key; }
  var ext = '<svg class="ext" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  /* ---------- Projekte ---------- */
  function renderProjects() {
    var list = document.getElementById("project-list");
    var items = C.projects.filter(function (p) { return filter === "all" || p.cats.indexOf(filter) !== -1; });
    if (!items.length) { list.innerHTML = '<p class="empty">' + esc(ui("empty")) + "</p>"; return; }
    var labels = lang === "en" ? CAT_LABEL_EN : CAT_LABEL;

    list.innerHTML = items.map(function (p) {
      var hasScreens = p.screens && p.screens.length;
      var imgSrc = hasScreens ? p.screens[0].src : p.cover;
      var imgAlt = hasScreens ? t(p.screens[0].alt) : "";
      var media = imgSrc
        ? '<div class="card-media' + (hasScreens ? " is-screen" : "") + '">' +
            (hasScreens
              ? '<button class="media-btn" data-project="' + p.id + '" aria-label="' + esc(ui("enlarge")) + ": " + esc(t(p.title)) + '">'
              : "") +
            '<img src="' + esc(imgSrc) + '" alt="' + esc(imgAlt) + '" loading="lazy" decoding="async" width="800" height="450">' +
            (hasScreens ? '<span class="media-badge">' + esc(ui("screens")) + " · " + p.screens.length + "</span></button>" : "") +
          "</div>"
        : "";

      var metric = p.metric
        ? '<div class="metric"><span class="metric-value">' + esc(lang === "en" && p.metric.valueEn ? p.metric.valueEn : p.metric.value) + '</span><span class="metric-label">' + esc(t(p.metric.label)) + "</span></div>"
        : "";

      var links = (p.links || []).map(function (l) {
        var label = l.label ? t(l.label) : ui(l.type);
        if (!l.url) return '<span class="link-btn is-missing"><mark class="ph">' + esc(label) + ": " + esc(ui("missingLink")) + "</mark></span>";
        return '<a class="link-btn" href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(label) + ext + "</a>";
      }).join("");

      return (
        '<article class="card' + (p.featured ? " is-featured" : "") + '">' +
          media +
          '<div class="card-body">' +
            '<div class="card-meta">' +
              p.cats.map(function (c) { return '<span class="cat cat-' + c + '">' + esc(labels[c]) + "</span>"; }).join("") +
              '<span class="context">' + rich(t(p.context)) + "</span>" +
            "</div>" +
            "<h3>" + rich(t(p.title)) + "</h3>" +
            '<p class="summary">' + rich(t(p.summary)) + "</p>" +
            metric +
            '<dl class="psr">' +
              '<div><dt><span class="psr-dot d1"></span>' + esc(ui("problem")) + "</dt><dd>" + rich(t(p.problem)) + "</dd></div>" +
              '<div><dt><span class="psr-dot d2"></span>' + esc(ui("solution")) + "</dt><dd>" + rich(t(p.solution)) + "</dd></div>" +
              '<div><dt><span class="psr-dot d3"></span>' + esc(ui("result")) + "</dt><dd>" + rich(t(p.result)) + "</dd></div>" +
            "</dl>" +
            '<ul class="tags" aria-label="Tech-Stack">' + p.tech.map(function (x) { return "<li>" + rich(t(x)) + "</li>"; }).join("") + "</ul>" +
            (links ? '<div class="card-links">' + links + "</div>" : "") +
          "</div>" +
        "</article>"
      );
    }).join("");
  }

  /* ---------- Timeline ---------- */
  function renderTimeline() {
    document.getElementById("timeline").innerHTML = C.experience.map(function (e, i) {
      return (
        '<li class="tl-item' + (i === 0 ? " is-current" : "") + '">' +
          '<div class="tl-badge" aria-hidden="true">' + esc(e.initials) + "</div>" +
          '<div class="tl-card">' +
            '<p class="tl-date">' + esc(e.from) + " – " + esc(t(e.to)) + "</p>" +
            "<h3>" + esc(t(e.role)) + "</h3>" +
            '<p class="tl-company">' + esc(e.company) + "</p>" +
            "<ul>" + t(e.points).map(function (x) { return "<li>" + rich(x) + "</li>"; }).join("") + "</ul>" +
            '<ul class="tags tags-sm">' + e.tech.map(function (x) { return "<li>" + esc(t(x)) + "</li>"; }).join("") + "</ul>" +
          "</div>" +
        "</li>"
      );
    }).join("");
  }

  /* ---------- Referenzen ---------- */
  function renderTestimonials() {
    var el = document.getElementById("testimonial-list");
    if (!el || !C.testimonials) return;
    el.innerHTML = C.testimonials.map(function (r) {
      return (
        '<figure class="ref">' +
          '<svg class="ref-mark" viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M13 8C7.5 9.6 4 13.8 4 19.5 4 23 6.2 25 9 25c2.6 0 4.5-1.9 4.5-4.4 0-2.4-1.7-4.1-4-4.1-.5 0-.9 0-1.2.1.6-2.8 2.7-5 5.7-6.2zm15 0c-5.5 1.6-9 5.8-9 11.5 0 3.5 2.2 5.5 5 5.5 2.6 0 4.5-1.9 4.5-4.4 0-2.4-1.7-4.1-4-4.1-.5 0-.9 0-1.2.1.6-2.8 2.7-5 5.7-6.2z"/></svg>' +
          "<blockquote>" + t(r.quotes).map(function (q) { return "<p>" + esc(ui("qOpen") + q + ui("qClose")) + "</p>"; }).join("") + "</blockquote>" +
          (lang === "en" ? '<p class="ref-note">' + esc(ui("refTranslated")) + "</p>" : "") +
          '<figcaption><span class="ref-logo" aria-hidden="true">' + esc(r.initials) + "</span>" +
            "<span><strong>" + esc(r.company) + "</strong><span>" + esc(t(r.source)) + "</span></span></figcaption>" +
        "</figure>"
      );
    }).join("");
  }

  /* ---------- Skills ---------- */
  function renderSkills() {
    document.getElementById("skill-list").innerHTML = C.skills.map(function (g) {
      return (
        '<div class="skill-group">' +
          '<div class="skill-head"><span class="skill-icon"><svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + ICONS[g.icon] + "</svg></span>" +
          "<h3>" + esc(t(g.name)) + "</h3></div>" +
          '<ul class="tags">' + g.items.map(function (x) { return "<li>" + esc(t(x)) + "</li>"; }).join("") + "</ul>" +
        "</div>"
      );
    }).join("");
  }

  /* ---------- Zertifikate ---------- */
  function issuerClass(iss) {
    if (iss.indexOf("IBM") === 0) return "iss-ibm";
    if (iss.indexOf("AWS") === 0) return "iss-aws";
    if (iss.indexOf("Meta") === 0) return "iss-meta";
    return "";
  }
  function renderCerts() {
    document.getElementById("cert-list").innerHTML = C.certificates.map(function (c) {
      var initials = c.issuer.split(/[\s·]+/)[0].slice(0, 4);
      return (
        '<li class="cert' + (c.highlight ? " is-highlight" : "") + (c.courses ? " has-courses" : "") + '">' +
          '<span class="cert-logo ' + issuerClass(c.issuer) + '" aria-hidden="true">' + esc(initials) + "</span>" +
          '<div class="cert-text"><h3>' + esc(c.title) + "</h3>" +
          "<p>" + esc(c.issuer) + (c.date ? " · " + esc(t(c.date)) : "") + (c.courses ? " · " + c.courses.length + " " + esc(ui("courses")) : "") + "</p>" +
          (c.note ? '<p class="cert-note">' + esc(t(c.note)) + "</p>" : "") + "</div>" +
          '<a class="link-btn" href="' + esc(c.url) + '" target="_blank" rel="noopener" aria-label="' + esc(ui("verify") + ": " + c.title) + '">' + esc(ui("verify")) + ext + "</a>" +
          (c.courses
            ? '<details class="cert-courses"><summary>' + esc(ui("showCourses").replace("{n}", c.courses.length)) + "</summary><ol>" +
                c.courses.map(function (k) {
                  return "<li><span>" + esc(k.title) + "</span>" +
                    (k.url ? '<a href="' + esc(k.url) + '" target="_blank" rel="noopener" aria-label="' + esc(ui("verify") + ": " + k.title) + '">' + esc(ui("verify")) + ext + "</a>" : "") + "</li>";
                }).join("") + "</ol></details>"
            : "") +
        "</li>"
      );
    }).join("");
  }

  /* ---------- Sprache ---------- */
  function applyLang() {
    root.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (UI[lang][key] != null) el.textContent = UI[lang][key];
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-alt");
      if (UI[lang][key] != null) el.alt = UI[lang][key];
    });
    var lt = document.getElementById("lang-toggle");
    lt.querySelector("[data-lang-label]").textContent = lang === "de" ? "EN" : "DE";
    lt.setAttribute("aria-label", ui("langSwitch"));
    document.getElementById("lightbox-close").setAttribute("aria-label", ui("close"));
    var filterBtns = document.querySelectorAll("#filters .chip");
    var labels = lang === "en" ? CAT_LABEL_EN : CAT_LABEL;
    filterBtns.forEach(function (b) { var f = b.dataset.filter; if (f !== "all") b.textContent = labels[f]; });
    updateThemeLabel();
    updateMenuLabel();
    renderProjects(); renderTimeline(); renderTestimonials(); renderSkills(); renderCerts();
  }
  document.getElementById("lang-toggle").addEventListener("click", function () {
    lang = lang === "de" ? "en" : "de";
    try { localStorage.setItem("lang", lang); } catch (e) {}
    applyLang();
  });

  /* ---------- Theme ---------- */
  function updateThemeLabel() {
    var dark = root.getAttribute("data-theme") === "dark";
    document.getElementById("theme-toggle").setAttribute("aria-label", ui(dark ? "themeToLight" : "themeToDark"));
  }
  document.getElementById("theme-toggle").addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
    updateThemeLabel();
  });

  /* ---------- Filter ---------- */
  document.getElementById("filters").addEventListener("click", function (e) {
    var b = e.target.closest(".chip");
    if (!b) return;
    filter = b.dataset.filter;
    this.querySelectorAll(".chip").forEach(function (x) {
      var on = x === b;
      x.classList.toggle("is-active", on);
      x.setAttribute("aria-pressed", on ? "true" : "false");
    });
    renderProjects();
  });

  /* ---------- Mobile-Menü ---------- */
  var navToggle = document.querySelector(".nav-toggle");
  var navLinks = document.getElementById("nav-links");
  function updateMenuLabel() {
    navToggle.setAttribute("aria-label", ui(navToggle.getAttribute("aria-expanded") === "true" ? "menuClose" : "menuOpen"));
  }
  navToggle.addEventListener("click", function () {
    var open = navToggle.getAttribute("aria-expanded") !== "true";
    navToggle.setAttribute("aria-expanded", String(open));
    navLinks.classList.toggle("is-open", open);
    updateMenuLabel();
  });
  navLinks.addEventListener("click", function (e) {
    if (e.target.closest("a")) { navToggle.setAttribute("aria-expanded", "false"); navLinks.classList.remove("is-open"); updateMenuLabel(); }
  });

  /* ---------- Lightbox ---------- */
  var lb = document.getElementById("lightbox");
  var lbImg = document.getElementById("lightbox-img");
  var lbCap = document.getElementById("lightbox-cap");
  var lbState = { shots: [], i: 0 };
  function showShot() {
    var s = lbState.shots[lbState.i];
    lbImg.src = s.src; lbImg.alt = t(s.alt);
    lbCap.textContent = t(s.alt) + (lbState.shots.length > 1 ? "  (" + (lbState.i + 1) + "/" + lbState.shots.length + ")" : "");
  }
  document.getElementById("project-list").addEventListener("click", function (e) {
    var b = e.target.closest(".media-btn");
    if (!b) return;
    var p = C.projects.filter(function (x) { return x.id === b.dataset.project; })[0];
    lbState = { shots: p.screens, i: 0 };
    showShot();
    if (typeof lb.showModal === "function") lb.showModal(); else window.open(p.screens[0].src, "_blank");
  });
  lbImg.addEventListener("click", function () {
    if (lbState.shots.length > 1) { lbState.i = (lbState.i + 1) % lbState.shots.length; showShot(); }
  });
  document.getElementById("lightbox-close").addEventListener("click", function () { lb.close(); });
  lb.addEventListener("click", function (e) { if (e.target === lb) lb.close(); });
  document.addEventListener("keydown", function (e) {
    if (!lb.open || lbState.shots.length < 2) return;
    if (e.key === "ArrowRight") { lbState.i = (lbState.i + 1) % lbState.shots.length; showShot(); }
    if (e.key === "ArrowLeft") { lbState.i = (lbState.i - 1 + lbState.shots.length) % lbState.shots.length; showShot(); }
  });

  /* ---------- Aktiver Nav-Link + Einblenden ---------- */
  var sections = document.querySelectorAll("main section[id]");
  if ("IntersectionObserver" in window) {
    var navObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        document.querySelectorAll(".nav-links a").forEach(function (a) {
          a.classList.toggle("is-current", a.getAttribute("href") === "#" + en.target.id);
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (s) { navObs.observe(s); });

    root.classList.add("js-reveal");
    var revObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("is-visible"); revObs.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px" });
    document.querySelectorAll(".section .container").forEach(function (el) { revObs.observe(el); });
  }

  document.getElementById("year").textContent = new Date().getFullYear();
  applyLang();
})();
