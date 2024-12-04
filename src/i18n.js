// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./i18n/en.json";
import fr from "./i18n/fr.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fr: { translation: fr },
  },
  lng: "en", // Default language
  fallbackLng: "en", // Fallback to English
  interpolation: {
    escapeValue: false, // React already escapes
  },
});

export default i18n;
