import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../components/locales/en.json";
import id from "../components/locales/id.json";

function deepMerge(target, source) {
  for (const key of Object.keys(source)) {
    if (source[key] && typeof source[key] === "object" && !Array.isArray(source[key])) {
      target[key] = target[key] ?? {};
      deepMerge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}

function withLocalOverride(base, lang) {
  if (!import.meta.env.DEV) return base;
  try {
    const stored = localStorage.getItem(`i18n_override_${lang}`);
    if (stored) return deepMerge({ ...base }, JSON.parse(stored));
  } catch {}
  return base;
}

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: withLocalOverride({ ...en }, "en") },
      id: { translation: withLocalOverride({ ...id }, "id") },
    },
    lng: "en",
    fallbackLng: "id",
    interpolation: { escapeValue: false },
  });

// Listen for realtime updates from the dev editor tab
if (import.meta.env.DEV) {
  try {
    const editorChannel = new BroadcastChannel("dev-editor");
    editorChannel.onmessage = (e) => {
      if (e.data?.type === "content-update") {
        const { lang, content } = e.data;
        i18n.addResourceBundle(lang, "translation", content, false, true);
      } else if (e.data?.type === "content-reset") {
        window.location.reload();
      }
    };
  } catch {}
}

export default i18n;
