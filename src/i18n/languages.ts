/**
 * Single source of truth for the languages the site supports.
 *
 * To add a language:
 *   1. add an entry below (the `pathPrefix` must be unique and non-empty
 *      for every language except the default one),
 *   2. create `src/i18n/locales/<code>/` and copy the JSON files from
 *      `src/i18n/locales/fr/`, then translate the values.
 * Nothing else needs to change: the routes, the language switcher, the
 * `hreflang` tags and the resource loading are all derived from this list.
 */
export interface Language {
  /** ISO 639-1 code, also the name of the folder under `locales/`. */
  code: string;
  /** Name of the language, written in that language. */
  label: string;
  /** Two-letter label used in the compact language switcher. */
  shortLabel: string;
  /** Value used for the `lang` attribute and the `hreflang` tags. */
  htmlLang: string;
  /** URL prefix, empty for the default language. */
  pathPrefix: string;
}

export const LANGUAGES: Language[] = [
  { code: "fr", label: "Français", shortLabel: "FR", htmlLang: "fr-FR", pathPrefix: "" },
  { code: "en", label: "English", shortLabel: "EN", htmlLang: "en", pathPrefix: "/en" },
];

/** Language served on the URLs without a prefix, and fallback for missing keys. */
export const DEFAULT_LANGUAGE = "fr";

/** Language served to visitors whose browser asks for something we do not speak. */
export const INTERNATIONAL_LANGUAGE = "en";

export const getLanguage = (code: string): Language =>
  LANGUAGES.find((language) => language.code === code) ??
  LANGUAGES.find((language) => language.code === DEFAULT_LANGUAGE)!;

export const isSupportedLanguage = (code: string): boolean =>
  LANGUAGES.some((language) => language.code === code);
