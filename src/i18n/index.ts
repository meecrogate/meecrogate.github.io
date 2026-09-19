import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { applyInitialLanguageRedirect, resolveInitialLanguage } from "./detect";
import { DEFAULT_LANGUAGE, LANGUAGES } from "./languages";

/**
 * Translation files are picked up automatically: every
 * `src/i18n/locales/<language>/<namespace>.json` becomes the namespace
 * `<namespace>` for `<language>`. Adding a page means adding one JSON
 * file per language, with no wiring to update here.
 */
const files = import.meta.glob<{ default: Record<string, unknown> }>(
  "./locales/*/*.json",
  { eager: true },
);

const resources: Record<string, Record<string, Record<string, unknown>>> = {};

for (const [path, module] of Object.entries(files)) {
  const match = path.match(/\.\/locales\/([^/]+)\/([^/]+)\.json$/);
  if (!match) continue;

  const [, language, namespace] = match;
  resources[language] ??= {};
  resources[language][namespace] = module.default;
}

// Must happen before the language is resolved, and before the router reads
// the URL, so that both already see the redirected location.
applyInitialLanguageRedirect();

i18n.use(initReactI18next).init({
  resources,
  lng: resolveInitialLanguage(),
  fallbackLng: DEFAULT_LANGUAGE,
  supportedLngs: LANGUAGES.map((language) => language.code),
  defaultNS: "common",
  interpolation: {
    // React escapes for us.
    escapeValue: false,
  },
  // Keep deliberately empty strings empty instead of echoing the key.
  returnEmptyString: true,
});

export default i18n;
