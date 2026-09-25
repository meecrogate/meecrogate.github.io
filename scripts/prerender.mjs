#!/usr/bin/env node
/**
 * Turns the single-page build in `dist/` into one HTML file per page and
 * language, so search engines and link previews (LinkedIn, Slack, ...)
 * get each page's own title, description, canonical URL and content
 * without running any JavaScript. React still takes over in the browser.
 *
 * It also writes `dist/sitemap.xml`, and `dist/404.html` so GitHub Pages
 * hands unknown URLs to the app, which shows its own "not found" page.
 *
 * Run with `npm run prerender`, after `npm run build`. It drives the
 * Google Chrome already installed on the machine (GitHub's Ubuntu runners
 * ship one), so nothing is downloaded.
 */
import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { chromium } from "playwright-core";
import { preview } from "vite";

const ROOT = new URL("..", import.meta.url).pathname;
const DIST = join(ROOT, "dist");
const SITE_ORIGIN = "https://www.meecrogate.com";

/** Kept in sync by hand with `LANGUAGES` in src/i18n/languages.ts. */
const LANGUAGES = [
  { code: "fr", htmlLang: "fr-FR", pathPrefix: "" },
  { code: "en", htmlLang: "en", pathPrefix: "/en" },
];

/** Published in French only (see AppRoutes.tsx): no English copy. */
const FRENCH_ONLY = new Set(["/mentions-legales", "/politique-confidentialite"]);

/** Page paths, read from the route table so a new route is picked up. */
const readRoutes = () => {
  const source = readFileSync(join(ROOT, "src/AppRoutes.tsx"), "utf8");
  const paths = [...source.matchAll(/<Route path="([^"*]+)"/g)].map(([, path]) => `/${path}`);
  return ["/", ...paths];
};

const localize = (path, language) =>
  language.pathPrefix ? (path === "/" ? language.pathPrefix : `${language.pathPrefix}${path}`) : path;

const url = (path, language) => `${SITE_ORIGIN}${localize(path, language).replace(/\/+$/, "")}/`;

const languagesFor = (path) =>
  FRENCH_ONLY.has(path) ? LANGUAGES.filter((language) => language.code === "fr") : LANGUAGES;

const sitemap = (routes) => {
  const entries = routes.flatMap((path) => {
    const languages = languagesFor(path);
    const alternates = languages
      .map((language) => `    <xhtml:link rel="alternate" hreflang="${language.htmlLang}" href="${url(path, language)}"/>`)
      .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${url(path, LANGUAGES[0])}"/>`)
      .join("\n");
    return languages.map(
      (language) => `  <url>\n    <loc>${url(path, language)}</loc>\n${alternates}\n  </url>`,
    );
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join("\n")}
</urlset>
`;
};

const main = async () => {
  const routes = readRoutes();
  const pages = routes.flatMap((path) => languagesFor(path).map((language) => localize(path, language)));

  // Unknown URLs get the bare app, before any page overwrites index.html.
  copyFileSync(join(DIST, "index.html"), join(DIST, "404.html"));

  const server = await preview({ preview: { port: 4173, strictPort: false }, logLevel: "warn" });
  const origin = server.resolvedUrls.local[0].replace(/\/$/, "");
  const browser = await chromium.launch({ channel: "chrome" });

  try {
    // A French browser, so unprefixed (French) pages are not redirected to English.
    const context = await browser.newContext({ locale: "fr-FR" });
    // Third-party images, fonts and styles may load; third-party scripts and
    // calls (analytics, form service) may not, so no fake visits are counted.
    await context.route("**/*", (route) => {
      const request = route.request();
      const sameSite = request.url().startsWith(origin);
      const passive = ["image", "font", "stylesheet", "media"].includes(request.resourceType());
      return sameSite || passive ? route.continue() : route.abort();
    });
    const page = await context.newPage();

    for (const path of pages) {
      await page.goto(`${origin}${path}`, { waitUntil: "load" });
      await page.waitForSelector('link[rel="canonical"]', { state: "attached" });
      // Let images and lazy content settle; some pages keep polling, so cap it.
      await page.waitForLoadState("networkidle", { timeout: 3000 }).catch(() => {});

      const html = await page.evaluate(() => {
        // Scripts injected at runtime (analytics) are injected again on load.
        document.querySelectorAll('script:not([type="module"])').forEach((script) => script.remove());
        return `<!DOCTYPE html>\n${document.documentElement.outerHTML}`;
      });

      const file = join(DIST, path, "index.html");
      mkdirSync(dirname(file), { recursive: true });
      writeFileSync(file, html);
      console.log(`  ${path}`);
    }
  } finally {
    await browser.close();
    await new Promise((resolve) => server.httpServer.close(resolve));
  }

  writeFileSync(join(DIST, "sitemap.xml"), sitemap(routes));
  console.log(`✓ prerendered ${pages.length} pages, wrote sitemap.xml and 404.html`);
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
