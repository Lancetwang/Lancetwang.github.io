(function () {
  "use strict";

  var root = document.documentElement;

  // --- Theme toggle ---------------------------------------------------------
  var toggle = document.querySelector(".theme-toggle");

  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = root.dataset.theme === "dark" ? "light" : "dark";
      root.dataset.theme = next;
      try {
        localStorage.setItem("theme", next);
      } catch (e) {
        /* storage unavailable (e.g. private mode) — theme still applies */
      }
    });
  }

  // --- Scroll reveal ----------------------------------------------------------
  var reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!reduceMotion && "IntersectionObserver" in window) {
    var targets = document.querySelectorAll(
      ".hero, main > section, .compact-grid, footer"
    );

    targets.forEach(function (el) {
      el.classList.add("reveal");
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06, rootMargin: "0px 0px -36px 0px" }
    );

    targets.forEach(function (el) {
      observer.observe(el);
    });
  }
})();
