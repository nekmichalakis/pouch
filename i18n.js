const copy = {
  en: {
    eyebrow: "Ready-made cocktails",
    title: "Pour and drink.",
    lede: "Cocktails sealed in a pouch. We mix them, we deliver them, you open, pour, and drink.",
    soon: "Ordering opens soon.",
    step1Title: "Sold",
    step1Body: "Ready-made cocktails, mixed and sealed in a pouch.",
    step2Title: "Delivered",
    step2Body: "Brought to you, cold and ready to open.",
    step3Title: "Pour and drink",
    step3Body: "Open the pouch, pour a glass, and drink.",
  },
  el: {
    eyebrow: "Έτοιμα κοκτέιλ",
    title: "Ρίξε και πιες.",
    lede: "Κοκτέιλ σφραγισμένα σε pouch. Τα φτιάχνουμε, τα παραδίδουμε, εσύ ανοίγεις, ρίχνεις και πίνεις.",
    soon: "Οι παραγγελίες ανοίγουν σύντομα.",
    step1Title: "Πωλούνται",
    step1Body: "Έτοιμα κοκτέιλ, αναμεμειγμένα και σφραγισμένα σε pouch.",
    step2Title: "Παραδίδονται",
    step2Body: "Στα χέρια σου, κρύα και έτοιμα να ανοίξουν.",
    step3Title: "Ρίξε και πιες",
    step3Body: "Άνοιξε το pouch, ρίξε σε ποτήρι και πιες.",
  },
};

const buttons = document.querySelectorAll(".lang button");
const nodes = document.querySelectorAll("[data-i18n]");

function apply(lang) {
  const strings = copy[lang] || copy.en;
  document.documentElement.lang = lang === "el" ? "el" : "en";
  document.title = "Pouch";
  nodes.forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (strings[key]) node.textContent = strings[key];
  });
  buttons.forEach((button) => {
    button.setAttribute("aria-pressed", button.dataset.lang === lang ? "true" : "false");
  });
  localStorage.setItem("pouch-lang", lang);
}

const stored = localStorage.getItem("pouch-lang");
apply(stored === "el" ? "el" : "en");

buttons.forEach((button) => {
  button.addEventListener("click", () => apply(button.dataset.lang));
});
