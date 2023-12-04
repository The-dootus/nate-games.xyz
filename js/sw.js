var allowedDomains = [
  "https://nate-games.xyz",
  "https://old.nate-games.xyz",
  "http://localhost:8080",
  "http://localhost:53483",
];

var currentDomain = window.location.origin;

if (allowedDomains.indexOf(currentDomain) === -1) {
  window.top.location.href = "https://pxpgrp-8080.csb.app/";
}

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
