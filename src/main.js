import "../styles/main.css";
document.addEventListener("DOMContentLoaded", function () {
  var title = document.title
    .replace(" · Oded Welgreen", "")
    .replace("Oded Welgreen", "Index");

  if (mixpanel) {
    mixpanel.track("PageView", { Page: title });
  }
});
