import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import languageDetector from "i18next-browser-languagedetector";
import uzTranslation from "./assets/locals/uz.json";
import ruTranslation from "./assets/locals/ru.json";
import enTranslation from "./assets/locals/en.json";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  lng: "ru",
  debug: true,
  resources: {
    uz: { translation: uzTranslation },
    ru: { translation: ruTranslation },
    en: { translation: enTranslation },
  },
});

export default i18n;
