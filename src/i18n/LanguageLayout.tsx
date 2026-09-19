import { useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";

import { getLanguage } from "./languages";

/**
 * Layout route mounted once per language. It keeps i18next and the
 * `lang` attribute aligned with the URL, which is what decides the
 * language of a page, and renders the shared route table underneath.
 *
 * The update runs in a layout effect so it lands before the browser
 * paints: all translations are bundled, so `changeLanguage` resolves
 * without a round trip and no stale language is ever shown.
 */
const LanguageLayout = ({ language }: { language: string }) => {
  const { i18n } = useTranslation();

  useLayoutEffect(() => {
    if (i18n.resolvedLanguage !== language) {
      void i18n.changeLanguage(language);
    }
    document.documentElement.lang = getLanguage(language).htmlLang;
  }, [i18n, language]);

  return <Outlet />;
};

export default LanguageLayout;
