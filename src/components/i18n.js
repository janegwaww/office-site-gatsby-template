import i18n from "i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "zh",
    fallbackLng: "zh",
    // have a common namespace used around the full app
    ns: ["navbar"],
    defaultNS: "navbar",
    debug: true,
    interpolation: {
      escapeValue: false // not needed for react!!
    },
    react: {
      wait: true
    }
  });
export default i18n;
