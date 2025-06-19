const translations = {
  en: {
    appTitle: "🌵 TUC Aid",
    tagline: "Earn TUC tokens by helping neighbors and saving water.",
    navHome: "🏠 Home",
    navHelp: "🛠️ Help Board",
    navBalance: "🎒 TUC Balance",
    navRewards: "🎁 Redeem",
    whatTitle: "🌊 What Is TUC Aid?",
    whatDescription: "A local blockchain-based platform. Earn TUC by helping others. Spend on food, water, cannabis, and services.",
    footer: "Built by Jacob Miller • Tucson, AZ",
    formSubmit: "Submit",
    checkBalance: "Check",
    rewardsIntro: "Available Rewards",
    mintSuccess: "Tokens sent!"
  },
  es: {
    appTitle: "🌵 Ayuda TUC",
    tagline: "Gana tokens TUC ayudando a vecinos y ahorrando agua.",
    navHome: "🏠 Inicio",
    navHelp: "🛠️ Ayuda",
    navBalance: "🎒 Balance",
    navRewards: "🎁 Canjear",
    whatTitle: "🌊 ¿Qué es Ayuda TUC?",
    whatDescription: "Una plataforma comunitaria local. Gana tokens TUC ayudando a otros. Úsalos en comida, agua, cannabis y servicios.",
    footer: "Creado por Jacob Miller • Tucson, AZ",
    formSubmit: "Enviar",
    checkBalance: "Consultar",
    rewardsIntro: "Recompensas disponibles",
    mintSuccess: "¡Tokens enviados!"
  }
};

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    el.textContent = translations[lang][key] || key;
  });
  localStorage.setItem("lang", lang);
}

const languageSelect = document.getElementById("language-select");
if (languageSelect) {
  languageSelect.addEventListener("change", (e) => setLanguage(e.target.value));
  const lang = localStorage.getItem("lang") || "en";
  languageSelect.value = lang;
  setLanguage(lang);
}
