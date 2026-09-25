# Translations

The site is published in French (default) and English. Everything the
visitor reads lives in JSON files under `locales/`, one file per
language and per page or area:

```
src/i18n/locales/
  fr/common.json      nav, footer, shared buttons
  fr/home.json        home page
  fr/features.json    …one namespace per page or feature area
  en/common.json
  en/home.json
  …
```

Run `npm run i18n:check` to confirm every language defines the same
keys. The CI build runs it too, so a missing key fails the build rather
than silently showing French text to an English reader.

## Changing wording

Edit the value in `locales/<language>/<namespace>.json`. Nothing else
needs to change: files are picked up automatically by the glob in
`index.ts`, so a new namespace is just a new JSON file in each language.

## Using a translation in a component

```tsx
import { useTranslation } from "react-i18next";

const Pricing = () => {
  const { t } = useTranslation("pricing");   // the namespace, i.e. the file name
  return <h1>{t("hero.title")}</h1>;         // the key path inside that file
};
```

A key holding a list comes back with `returnObjects`:

```tsx
const features = t("items.apiGateway.capabilities", { returnObjects: true }) as string[];
```

Keys from another namespace are reachable with a prefix, e.g.
`t("common:actions.requestDemo")`.

Icons, images, colours and links stay in the components; only wording
belongs in the JSON. Pages that repeat a layout (the use cases, the
customer case studies, the component pages) share one template and
differ only by their namespace entry and their icons.

## Linking between pages

Import `Link` from `@/i18n/Link`, never from `react-router-dom`. It
keeps the visitor in the language they are reading: `to="/pricing"`
resolves to `/pricing` in French and `/en/pricing` in English.

## How the language is chosen

1. If the URL names a language (`/en/...`), that wins, so a shared link
   always shows what the sender saw.
2. Otherwise, the language the visitor last picked in the switcher,
   remembered in `localStorage`.
3. Otherwise, the browser's own language: a browser asking for French
   gets French, anything else gets English.

Step 3 runs in the browser and reads no IP address, so it adds nothing
to declare in the privacy policy. The redirect happens before React
mounts (`applyInitialLanguageRedirect` in `detect.ts`), so the first
paint is already in the right language and no history entry is spent.

## Adding a language

1. Add an entry to `LANGUAGES` in `languages.ts`, with a unique,
   non-empty `pathPrefix` (for example `/de`).
2. Copy `locales/fr/` to `locales/<code>/` and translate the values.
3. Run `npm run i18n:check`.

The routes, the language switcher, the `hreflang` alternates and the
resource loading are all derived from that list, so nothing else needs
to change.

## What is deliberately not translated

`src/pages/MentionsLegales.tsx` and
`src/pages/PolitiqueConfidentialite.tsx` are published in French only,
which is why their text is inline and their `<main>` carries
`lang="fr"`. They stay reachable from every language so the footer never
points at a 404.
