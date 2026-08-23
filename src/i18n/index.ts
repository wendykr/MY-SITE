import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import cs from "../locales/cs.json";
import en from "../locales/en.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      cs: { common: cs },
      en: { common: en },
    },
    fallbackLng: "cs",
    supportedLngs: ["cs", "en"],
    ns: ["common"],
    defaultNS: "common",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      // Detect language from the first path segment (e.g. /en/...) only.
      // We intentionally omit `navigator` and `localStorage` so an empty
      // path segment always falls back to `fallbackLng` (cs), regardless
      // of browser language or any language previously visited.
      order: ["path"],
      // Use the first path segment as the language (0 -> /<lang>/...)
      lookupFromPathIndex: 0,
      caches: [],
    },
  });

export default i18n;
