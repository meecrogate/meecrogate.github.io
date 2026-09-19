import { DEFAULT_LANGUAGE, LANGUAGES, getLanguage } from "./languages";

/**
 * Splits a router pathname into the language its prefix names and the
 * language-independent part of the path.
 *
 * `/en/pricing` -> { language: "en", path: "/pricing" }
 * `/pricing`    -> { language: null, path: "/pricing" }
 *
 * `language` is null when the URL carries no prefix, which the default
 * language uses. Callers that need a language either way fall back to
 * `DEFAULT_LANGUAGE`; the auto-redirect relies on the distinction.
 */
export const splitLanguagePath = (pathname: string): { language: string | null; path: string } => {
  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`;

  for (const language of LANGUAGES) {
    if (!language.pathPrefix) continue;
    if (normalized === language.pathPrefix || normalized.startsWith(`${language.pathPrefix}/`)) {
      return {
        language: language.code,
        path: normalized.slice(language.pathPrefix.length) || "/",
      };
    }
  }

  return { language: null, path: normalized };
};

/** Language a pathname renders in, prefix or not. */
export const languageOfPath = (pathname: string): string =>
  splitLanguagePath(pathname).language ?? DEFAULT_LANGUAGE;

/** Rewrites a path so it points at the given language. Idempotent. */
export const localizePath = (path: string, language: string): string => {
  const { path: bare } = splitLanguagePath(path);
  const { pathPrefix } = getLanguage(language);

  if (!pathPrefix) return bare;
  return bare === "/" ? pathPrefix : `${pathPrefix}${bare}`;
};

/**
 * Absolute URL of a path in a given language, for canonical and
 * `hreflang` tags. The site is served by a HashRouter, so router paths
 * live behind the `#`.
 */
export const absoluteUrl = (path: string, language: string): string => {
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  return `${origin}/#${localizePath(path, language)}`;
};
