import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../components/locales/en.json";
import id from "../components/locales/id.json";

i18n
  .use(initReactI18next) // Menghubungkan i18n dengan React
  .init({
    resources: {
      en: {
        translation: en, // Sumber terjemahan untuk bahasa Inggris
      },
      id: {
        translation: id, // Sumber terjemahan untuk bahasa Indonesia
      },
    },
    lng: "en", // Bahasa default
    fallbackLng: "en", // Bahasa fallback jika bahasa yang diminta tidak tersedia
    interpolation: {
      escapeValue: false, // React sudah melindungi dari XSS
    },
  });

export default i18n;
