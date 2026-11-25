/* Reveal on scroll — standalone version for pages that don't load
   the home page's script.js (e.g. /story/). Same behavior as the
   home page's initReveal: .reveal elements fade/slide in the first
   time they enter the viewport.
   Safety: the hidden start state in styles.css applies only under
   html.js, which this file's companion head snippet sets — and if
   anything here can't run (no IntersectionObserver, or the reader
   prefers reduced motion), the class is removed again so every
   element stands fully visible and static. */
(function () {
  var root = document.documentElement;
  if (window.__rvT) clearTimeout(window.__rvT);
  var els = document.querySelectorAll(".reveal");
  if (!els.length) return;
  if (
    !("IntersectionObserver" in window) ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    root.classList.remove("js");
    return;
  }
  root.classList.add("js");
  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  els.forEach(function (el) {
    io.observe(el);
  });
})();
