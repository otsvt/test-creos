import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locales/en.json";
import ruTranslation from "./locales/ru.json";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  debug: true,
  resources: {
    en: { translation: enTranslation },
    ru: { translation: ruTranslation },
  },
});

export default i18n;
