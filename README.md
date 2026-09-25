

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS




## Languages

The site is published in French (default, at `/...`) and English (at
`/en/...`), with a language switcher in the navigation bar. Visitors
whose browser asks for French get French; everybody else gets English.

All wording lives in `src/i18n/locales/<language>/<namespace>.json`.
See [`src/i18n/README.md`](src/i18n/README.md) for how to change a
string, add a page or add a language.

```sh
npm run i18n:check   # every language defines the same keys
```

Old links from when the site routed behind a `#` (`/#/pricing`) are
rewritten to the real path on load, so they keep working.

## Prerendering, SEO and link previews

After the build, every page is rendered once per language into its own
`dist/<path>/index.html`, so search engines and link previews (LinkedIn,
Slack, Teams...) read each page's title, description, canonical URL,
`hreflang` tags and content without running JavaScript. The same step
writes `dist/sitemap.xml` (declared in `public/robots.txt`) and
`dist/404.html`.

```sh
npm run build
npm run prerender    # needs Google Chrome installed
```

The deploy workflow runs both. New routes in `src/AppRoutes.tsx` are
picked up automatically. The link preview image is
`public/og-image.png` (1200×630).

## Analytics (Matomo)

Page views are sent to Matomo from `MatomoTracker` in `src/App.tsx`. The
instance and site come from the `VITE_MATOMO_URL` and
`VITE_MATOMO_SITE_ID` secrets at build time.

- **One URL per page.** `/pricing/` (direct visit) and `/pricing`
  (navigation inside the site) are reported as `/pricing`.
- **Traffic sources.** The first page view keeps the real referrer
  (search engine, LinkedIn, ad); later ones record the previous page.
- **Campaigns.** The query string is kept, so tag every link you share
  or pay for, and it shows up under *Acquisition → Campaigns*:

  ```
  https://www.meecrogate.com/pricing?mtm_campaign=launch&mtm_source=linkedin&mtm_medium=post
  ```

  `utm_campaign`, `utm_source` and `utm_medium` work too.
- **Leads.** Each successful form submission sends an event in the
  `Lead` category:

  | Form | Action | Name |
  |---|---|---|
  | Demo page | `Demo request` | |
  | Pricing quote dialog | `Quote request` | edition |
  | Service page | `Integration request` | |

  To count them as conversions, create a goal in Matomo (*Goals → Add a
  goal*) triggered by an event whose category is `Lead`.

The prerender step blocks Matomo, so building the site never records
visits.
