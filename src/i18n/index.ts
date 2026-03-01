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
      // Detect language from the first path segment (e.g. /en/...).
      // If no language segment is present, fall back to `localStorage` and
      // finally to the configured `fallbackLng` (which is `cs`).
      // We intentionally omit `navigator` here so an empty path doesn't
      // automatically pick the browser language.
      order: ["path", "localStorage"],
      // Use the first path segment as the language (0 -> /<lang>/...)
      lookupFromPathIndex: 0,
      // Do not cache language in localStorage so root path (`/`) falls back
      // to `fallbackLng` (cs) even if user previously visited `/en`.
      caches: [],
    },
  });

export default i18n;
