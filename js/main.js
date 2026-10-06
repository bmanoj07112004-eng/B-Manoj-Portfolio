/* B Manoj — portfolio interactions (no dependencies) */
(function () {
  "use strict";

  /* ---------- Project cards (data lives in projects.js) ---------- */
  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function renderProjects() {
    const grid = document.getElementById("projects-grid");
    if (!grid || !Array.isArray(window.PROJECTS)) return;

    window.PROJECTS.forEach(function (p) {
      const card = el("article", "project reveal");

      const art = el("div", "project__art");
      if (p.art) art.style.setProperty("--art", p.art);
      if (p.image) {
        const img = el("img");
        img.src = p.image;
        img.alt = "";
        img.loading = "lazy";
        art.appendChild(img);
      }
      art.appendChild(el("h3", null, p.title));
      card.appendChild(art);

      const body = el("div", "project__body");
      body.appendChild(el("span", "tag tag--" + (p.status || "proto"), p.statusLabel || ""));
      if (p.role) body.appendChild(el("p", "project__role", p.role));
      body.appendChild(el("p", "project__desc", p.desc));

      if (p.tools && p.tools.length) {
        const tools = el("ul", "project__tools");
        p.tools.forEach(function (t) { tools.appendChild(el("li", null, t)); });
        body.appendChild(tools);
      }
      if (p.link && p.link.href) {
        const a = el("a", "project__link", p.link.label || "View →");
        a.href = p.link.href;
        a.target = "_blank";
        a.rel = "noopener";
        body.appendChild(a);
      }
      card.appendChild(body);
      grid.appendChild(card);
    });
  }

  /* ---------- Nav: background on scroll + mobile menu ---------- */
  function initNav() {
    const nav = document.querySelector(".nav");
    const toggle = document.querySelector(".nav__toggle");
    const links = document.getElementById("nav-links");

    const onScroll = function () { nav.classList.toggle("is-scrolled", window.scrollY > 24); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    function setOpen(open) {
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      links.classList.toggle("is-open", open);
      nav.classList.toggle("is-open", open);
    }
    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });
    links.addEventListener("click", function (e) {
      if (e.target.closest("a")) setOpen(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setOpen(false);
    });
  }

  /* ---------- YouTube: load the player only when clicked ---------- */
  function initVideo() {
    document.querySelectorAll(".video[data-yt]").forEach(function (btn) {
      const thumb = btn.querySelector("img");
      // maxresdefault doesn't exist for every video; YouTube returns a 120px placeholder instead
      thumb.addEventListener("load", function () {
        if (thumb.naturalWidth < 200) thumb.src = "https://i.ytimg.com/vi/" + btn.dataset.yt + "/hqdefault.jpg";
      });

      btn.addEventListener("click", function () {
        const iframe = document.createElement("iframe");
        iframe.src = "https://www.youtube-nocookie.com/embed/" + btn.dataset.yt + "?autoplay=1&rel=0";
        iframe.title = "Blackout Arena gameplay";
        iframe.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen";
        iframe.allowFullscreen = true;
        btn.replaceChildren(iframe);
        btn.style.cursor = "default";
      }, { once: true });
    });
  }

  /* ---------- Screenshot lightbox ---------- */
  function initLightbox() {
    const dialog = document.getElementById("lightbox");
    const items = Array.from(document.querySelectorAll(".gallery button[data-full]"));
    if (!dialog || !items.length || typeof dialog.showModal !== "function") return;

    const img = dialog.querySelector("img");
    let index = 0;

    function show(i) {
      index = (i + items.length) % items.length;
      img.src = items[index].dataset.full;
      img.alt = items[index].querySelector("img").alt;
    }

    items.forEach(function (btn, i) {
      btn.addEventListener("click", function () { show(i); dialog.showModal(); });
    });
    dialog.querySelector(".lightbox__close").addEventListener("click", function () { dialog.close(); });
    dialog.querySelector(".lightbox__prev").addEventListener("click", function () { show(index - 1); });
    dialog.querySelector(".lightbox__next").addEventListener("click", function () { show(index + 1); });
    dialog.addEventListener("click", function (e) { if (e.target === dialog) dialog.close(); });
    dialog.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") show(index - 1);
      if (e.key === "ArrowRight") show(index + 1);
    });
  }

  /* ---------- Reveal on scroll ---------- */
  function initReveal() {
    const targets = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      targets.forEach(function (t) { t.classList.add("is-visible"); });
      return;
    }
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    targets.forEach(function (t) { io.observe(t); });
  }

  renderProjects();
  initNav();
  initVideo();
  initLightbox();
  initReveal();
  document.getElementById("year").textContent = new Date().getFullYear();
})();
