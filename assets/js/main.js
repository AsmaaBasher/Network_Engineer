/* Portfolio interactions: mobile menu, active nav link, header shadow,
   back-to-top button, and gentle reveal-on-scroll. No dependencies. */
(function () {
  "use strict";
  var doc = document.documentElement;
  doc.classList.add("js");

  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("nav-menu");
  var toTop = document.querySelector(".to-top");
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  /* ---- Mobile menu ---- */
  function setMenu(open) {
    if (!menu || !toggle) return;
    menu.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    var use = toggle.querySelector("use");
    if (use) use.setAttribute("href", open ? "#i-x" : "#i-menu");
  }
  if (toggle) {
    toggle.addEventListener("click", function () {
      setMenu(toggle.getAttribute("aria-expanded") !== "true");
    });
  }
  if (menu) {
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) setMenu(false);
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && menu && menu.classList.contains("open")) {
      setMenu(false);
      toggle.focus();
    }
  });

  /* ---- Header shadow + back-to-top ---- */
  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (header) header.classList.toggle("scrolled", y > 8);
    if (toTop) toTop.classList.toggle("show", y > 700);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Active nav link ---- */
  var links = menu ? Array.prototype.slice.call(menu.querySelectorAll('a[href^="#"]')) : [];
  var map = {};
  links.forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });
  // The labs section belongs to the "Cloud Journey" menu item.
  if (map.cloud) map.labs = map.cloud;

  if ("IntersectionObserver" in window) {
    var sections = Object.keys(map)
      .map(function (id) { return document.getElementById(id); })
      .filter(Boolean);
    var navObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (a) { a.classList.remove("active"); a.removeAttribute("aria-current"); });
        var link = map[entry.target.id];
        if (link && !link.classList.contains("nav-cta")) {
          link.classList.add("active");
          link.setAttribute("aria-current", "true");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (s) { navObserver.observe(s); });

    /* ---- Reveal on scroll ---- */
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduce) {
      var items = document.querySelectorAll(".skill-card, .tl-card, .project, .lab, .cert, .edu, .topic, .honesty-col, .stat");
      var revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            revealObserver.unobserve(entry.target);
          }
        });
      }, { rootMargin: "0px 0px -8% 0px" });
      items.forEach(function (el) { el.classList.add("reveal"); revealObserver.observe(el); });
    }
  }
})();
