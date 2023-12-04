function addScriptSrc(src, callback) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = src;
  script.onload = callback;
  document.head.appendChild(script);
}

function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    { pageLanguage: "en" },
    "google_translate_element",
  );
}

addScriptSrc(
  "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit",
  function () {
    googleTranslateElementInit();
  },
);

// https://arc.io/widget.js
