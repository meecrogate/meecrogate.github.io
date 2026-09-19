import { useCallback, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { storeLanguage } from "./detect";
import { LANGUAGES } from "./languages";
import { absoluteUrl, languageOfPath, localizePath, splitLanguagePath } from "./paths";

/**
 * Everything a component needs to know about the language it renders in.
 * The URL is the source of truth, so this stays in sync with the router
 * without any state of its own.
 */
export const useLocale = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const language = languageOfPath(location.pathname);
  const path = splitLanguagePath(location.pathname).path;

  const localize = useCallback(
    (target: string) => localizePath(target, language),
    [language],
  );

  /** Switches language and stays on the same page. */
  const changeLanguage = useCallback(
    (next: string) => {
      if (next === language) return;
      storeLanguage(next);
      navigate({
        pathname: localizePath(location.pathname, next),
        search: location.search,
      });
    },
    [language, location.pathname, location.search, navigate],
  );

  /** `hreflang` alternates for the page currently being rendered. */
  const alternates = useMemo(
    () =>
      LANGUAGES.map((entry) => ({
        ...entry,
        url: absoluteUrl(path, entry.code),
      })),
    [path],
  );

  return { language, languages: LANGUAGES, path, localize, changeLanguage, alternates };
};
