import { forwardRef } from "react";
import { Link as RouterLink, LinkProps, useLocation } from "react-router-dom";

import { languageOfPath, localizePath } from "./paths";

const isExternal = (to: string) => /^([a-z][a-z0-9+.-]*:|\/\/|#)/i.test(to);

/**
 * Drop-in replacement for react-router's `Link` that keeps the visitor
 * in the language they are reading. Write `to="/pricing"` and an English
 * reader gets `/en/pricing`.
 *
 * Import this instead of `react-router-dom`'s `Link` everywhere inside
 * the site; external links (`https:`, `mailto:`, ...) pass through
 * untouched.
 */
const Link = forwardRef<HTMLAnchorElement, LinkProps>(({ to, ...props }, ref) => {
  const location = useLocation();
  const language = languageOfPath(location.pathname);

  const localizedTo =
    typeof to === "string"
      ? isExternal(to)
        ? to
        : localizePath(to, language)
      : { ...to, pathname: to.pathname ? localizePath(to.pathname, language) : to.pathname };

  return <RouterLink ref={ref} to={localizedTo} {...props} />;
});

Link.displayName = "LocalizedLink";

export { Link };
export default Link;
