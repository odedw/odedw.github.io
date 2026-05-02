import "../styles/main.css";
document.addEventListener("DOMContentLoaded", function () {
  var title = document.title
    .replace(" · Oded Welgreen", "")
    .replace("Oded Welgreen", "Index");

  if (mixpanel) {
    mixpanel.track("PageView", { Page: title });
  }

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll("video[autoplay]").forEach(function (v) {
      v.removeAttribute("autoplay");
      v.pause();
    });
  }
});
