import {
  DEFAULT_LANGUAGE,
  INTERNATIONAL_LANGUAGE,
  isSupportedLanguage,
} from "./languages";
import { localizePath, splitLanguagePath } from "./paths";

const STORAGE_KEY = "meecrogate.language";

/** Language the visitor picked in the switcher on a previous visit, if any. */
export const readStoredLanguage = (): string | null => {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored && isSupportedLanguage(stored) ? stored : null;
  } catch {
    // Private browsing, or storage disabled: fall back to detection.
    return null;
  }
};

export const storeLanguage = (language: string): void => {
  try {
    window.localStorage.setItem(STORAGE_KEY, language);
  } catch {
    // Not being able to remember the choice is not worth failing over.
  }
};

/**
 * Language the browser asks for. Visitors configured in a language we
 * speak get that language; everybody else gets the international one.
 *
 * This runs entirely in the browser and reads no IP address, so it adds
 * nothing to declare in the privacy policy.
 */
export const detectBrowserLanguage = (): string => {
  const requested =
    typeof navigator !== "undefined"
      ? navigator.languages?.length
        ? navigator.languages
        : [navigator.language]
      : [];

  for (const tag of requested) {
    if (!tag) continue;
    const base = tag.toLowerCase().split("-")[0];
    if (isSupportedLanguage(base)) return base;
  }

  return INTERNATIONAL_LANGUAGE;
};

/** Stored choice first, browser language otherwise. */
export const resolvePreferredLanguage = (): string =>
  readStoredLanguage() ?? detectBrowserLanguage();

/**
 * Language to start i18next with, read from the URL before React mounts
 * so the first paint is already in the right language. A prefixed URL
 * always wins, so a shared link shows what the sender saw.
 */
export const resolveInitialLanguage = (): string => {
  if (typeof window === "undefined") return DEFAULT_LANGUAGE;

  const hash = window.location.hash.replace(/^#/, "");
  const pathname = hash.split("?")[0] || "/";
  const fromUrl = splitLanguagePath(pathname).language;
  if (fromUrl) return fromUrl;

  return resolvePreferredLanguage();
};

/**
 * Sends a visitor who landed on an unprefixed URL to their language,
 * before React mounts, so the first paint is already correct and no
 * history entry is spent on the redirect.
 *
 * A URL that names its language is left alone: shared links win over
 * detection. So does a language the visitor picked in the switcher,
 * which `resolvePreferredLanguage` reads first.
 */
export const applyInitialLanguageRedirect = (): void => {
  if (typeof window === "undefined") return;

  const hash = window.location.hash.replace(/^#/, "");
  const separator = hash.search(/[?#]/);
  const pathname = (separator === -1 ? hash : hash.slice(0, separator)) || "/";
  const suffix = separator === -1 ? "" : hash.slice(separator);

  if (splitLanguagePath(pathname).language) return;

  const preferred = resolvePreferredLanguage();
  if (preferred === DEFAULT_LANGUAGE) return;

  window.history.replaceState(
    window.history.state,
    "",
    `${window.location.pathname}${window.location.search}#${localizePath(pathname, preferred)}${suffix}`,
  );
};
