# Domain configuration & migration

The site has no hardcoded production domain. Everything derives from:

| Variable | Example | Used for |
|---|---|---|
| `VITE_SITE_URL` | `https://epiphanyapps.io` | canonical, og:url, JSON-LD, sitemap, robots.txt |
| `VITE_SITE_DOMAIN` | `epiphanyapps.io` | contact emails and domain shown in legal text |
| `VITE_LEGACY_HOSTS` | `epiphanyapps.org,www.epiphanyapps.org` | old hosts forwarded to the new domain, same path |

Set in `.env.production` / `.env.development` (or the host's env settings). Code reads them only via `src/config/site.ts`.
`scripts/generate-sitemap.ts` rewrites `public/sitemap.xml` and `public/robots.txt` before every dev/build.
Internal links are relative paths, so paths and slugs are unchanged by a domain move.

## Netlify and other external hosts

Use `npm run build` and publish `dist`. The Vite asset-packaging plugin downloads every original asset referenced by `src/assets/**/*.asset.json` and places its bytes at the same relative URL in `dist`. WebP and PNG fallbacks are both included; the browser's existing `<picture>` selection is unchanged. No asset request goes to Lovable at runtime on the deployed site.

The build-time download origin is configured separately in `asset-hosting.json`. Override it with the host environment variable `LOVABLE_ASSET_SOURCE_URL` if the project is moved or the source address changes. It must be an accessible Lovable endpoint serving the existing assets (the current preview endpoint works). This is an asset source, not the site's canonical or production domain. Builds fail explicitly if any download is missing, incomplete, or returns HTML instead of the expected media type. Rebuild/redeploy Netlify after pulling this change; older deployments do not contain the image bytes.

GitHub sync and publishing are separate: Lovable saves changes to the connected repository's synced branch; Netlify deploys only if its Git integration watches that branch and automatic deployments are enabled. Lovable's Publish/Update controls deploy to Lovable hosting, not to Netlify. Check Lovable Settings → Git and Netlify's deployment history to confirm delivery. Editing the same branch in multiple builders can replace another builder's work; coordinate changes before pushing.

## Migrating (e.g. .io -> .org -> .com)
1. Connect the new domain in Lovable (Project Settings -> Domains) and keep the old one connected.
2. Update `VITE_SITE_URL` and `VITE_SITE_DOMAIN`; add the old hosts to `VITE_LEGACY_HOSTS`. Publish.
3. Redirects: setting the new domain as **Primary** makes Lovable hosting redirect all other connected domains to it, preserving the path (server-side). The app also forwards legacy hosts client-side as a fallback. Lovable does not let you choose the status code (it may be 302); canonical tags + sitemap on the new domain tell search engines the preferred URL. For a strict 301, put the old domain behind a DNS/CDN provider (e.g. Cloudflare redirect rule `old.tld/* -> https://new.tld/$1`, 301).
4. Re-submit the sitemap in Google Search Console / Bing and use the "Change of address" tool.

## Domain-dependent third-party settings to update
- **Email** (support@, legal@, privacy@): MX, SPF, DKIM, DMARC records on the new domain; mailbox aliases.
- **Featurebase** (`epiphanyapps.featurebase.app`): allowed origins / custom domain.
- **Authentication / OAuth** (when added): Site URL and redirect URL allow-list; provider consoles (Google, Apple, GitHub) authorized origins and callback URLs.
- **Payments** (when added): success/cancel URLs, webhook endpoints, Apple Pay domain verification.
- **CORS**: any backend allow-lists of origins.
- **Analytics / Search Console / ad pixels**: property URL, domain verification.
- **Social profiles**: website links on X, Instagram, YouTube, LinkedIn, Discord.
