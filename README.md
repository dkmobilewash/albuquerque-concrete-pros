# Albuquerque Concrete Pros — albuquerqueconcretepro.com

Local-SEO marketing site for a premium concrete contractor serving the Albuquerque, NM metro.
Next.js 16 (App Router) · React 19 · TypeScript (strict) · Tailwind CSS 4 · self-hosted Fraunces + Manrope via `next/font`.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static generation of all pages
npm run qa         # post-build QA over .next output (run after build)
npm run lint
```

Copy `.env.example` to `.env.local` and fill in values as they become available.

---

## ⚠️ Open items to confirm with the client before launch

Nothing below has been invented. Each item is empty/null in code and the site renders around its absence;
setting the real value in the noted place activates it everywhere (visible copy **and** JSON-LD).

1. **NAP — street address, phone, business hours.** `lib/site-config.ts` → `address`, `phone`, `openingHours`
   (also `email` if a public address should be shown). Until set, no phone/address appears anywhere and every CTA
   routes to the contact form. Confirm whether the business has a public address or is a service-area business.
2. **Logo file.** Add to `/public` and set `siteConfig.logoPath`. Until then the header shows a text wordmark and
   schema omits `logo`. A branded Open Graph image should be added at the same time (currently Twitter card is
   `summary` with no image).
3. **Review data.** `lib/site-config.ts` → `reviewData` (rating, count, source, as-of date). `null` means no stars,
   counts, testimonials or `aggregateRating` schema anywhere. Only set from a real, current source.
4. **Project photography.** Add real, client-owned photos to `/public/projects/…` and entries to
   `data/portfolio.ts` (slug-referenced). They then appear on `/portfolio/`, the home page and the matching area
   page automatically. Every image slot currently shows a labeled "Project photography pending" placeholder
   (`components/PlaceholderImage.tsx` — pass `src` to swap in a real photo). No stock photography.
5. **License & insurance.** `siteConfig.licenseNumber` (NM Construction Industries Division license # and
   classification) and `siteConfig.insuranceStatement`. Shown in footer/About only once set. Copy deliberately never
   says "licensed and insured" until confirmed.
6. **Founding year / years in business.** `siteConfig.foundingYear` (`null`). No tenure claims appear anywhere.
7. **GA4 measurement ID.** Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` in the production environment.
8. **Social / citation URLs.** `lib/site-config.ts` → `socialProfiles` (Google Business Profile, Facebook,
   Instagram, YouTube, Nextdoor, Yelp, Houzz, Angi, BBB). Only populated URLs are emitted in `sameAs` and the footer.
9. **Lead destination email.** Set `LEAD_NOTIFICATION_EMAIL` + `RESEND_API_KEY`, verify the sending domain in Resend
   and set `RESEND_FROM_EMAIL`. Until then leads are logged to the server console (see "Forms" below).
10. **Permitting departments per jurisdiction — verify before launch.** Copy names only the governing
    authority and tells readers to confirm specifics; no fees, department names or URLs were invented. Each area's
    `jurisdiction.verifyBeforeLaunch` in `data/areas.ts` holds the detailed checklist. Summary:
    - **City of Albuquerque** — which department/division handles residential flatwork & building permits; the
      right-of-way process for driveway aprons, curb cuts and public sidewalks.
    - **City of Rio Rancho** — department handling building permits; right-of-way/curb-cut process; Sandoval vs.
      Bernalillo County portion.
    - **Village of Corrales** — confirm the Village development-review permit flow and whether building/structural
      permits and inspections go through the NM Construction Industries Division (CID); whether NMDOT is involved for
      driveway access off Corrales Road (NM 448); ditch/acequia crossing approvals.
    - **Village of Los Ranchos de Albuquerque** — Village Planning & Zoning flow and whether building permits involve
      state CID; acequia/ditch approvals.
    - **North Valley** — city vs. unincorporated Bernalillo County per address; county Planning & Development
      Services process; Middle Rio Grande Conservancy District involvement for work near ditches/laterals.
    - **Tanoan** — confirm City of Albuquerque jurisdiction; whether streets are private (affects right-of-way
      permits); HOA architectural-review process for each association.
    - **Paradise Hills** — county vs. city per address; whether the area's special county zoning framework still
      applies.
    - **Albuquerque Acres** — current city vs. county split; per-address verification process.
11. **Area elevations** in `data/areas.ts` are hedged estimates ("roughly…") — a quick check against USGS data is
    worthwhile.
12. **Privacy policy & terms** (`app/privacy-policy`, `app/terms`) are reasonable starting drafts, not legal advice —
    have them reviewed, and update if a CRM/webhook or additional processors are added.
13. **Domain & hosting.** Point both `albuquerqueconcretepro.com` and `www.` at the host; the app 308-redirects apex →
    www. Submit `https://www.albuquerqueconcretepro.com/sitemap.xml` in Search Console.

---

## Architecture

### URL structure (flat, all statically generated, trailing slashes)

| Route | Source | Count |
| --- | --- | --- |
| `/{service}/` | `app/[slug]/page.tsx` → `components/pages/ServicePage.tsx` | 13 |
| `/{area}/` | `app/[slug]/page.tsx` → `components/pages/AreaPage.tsx` | 8 |
| `/{service}/{area}/` | `app/[slug]/[area]/page.tsx` → `components/pages/ComboPage.tsx` | 104 |
| `/blog/{slug}/` | `app/blog/[slug]/page.tsx` | 7 |
| Static: `/`, `/services/`, `/service-areas/`, `/portfolio/`, `/about/`, `/reviews/`, `/contact/`, `/blog/`, `/privacy-policy/`, `/terms/` | `app/*/page.tsx` | 10 |
| **Total indexable pages** | | **142** |

`app/[slug]/page.tsx` resolves a slug against both the services and areas lists; `lib/lookup.ts` asserts at build
time that no slug is both. All dynamic routes export `dynamicParams = false`, so any unknown slug (including
reversed `/{area}/{service}/`) returns a real **404** status via the branded `app/not-found.tsx`.

`cacheComponents` (on by default in the Next 16 template) is **disabled** in `next.config.ts`: this is a fully static
site, and `dynamicParams = false` (the guarantee of hard 404s) isn't available under Cache Components.

### Content model (`lib/types.ts`)

- `data/services/part-{a,b,c}.ts` → `data/services/index.ts` — 13 services: overview, 5-step process, signs,
  materials, FAQs, permit note, timeline, climate note, and a note for **each** of 5 metro soil factors.
  Stamped Concrete is the `flagship`.
- `data/areas.ts` — 8 areas: character, soil & climate summaries, `soilFactors`, jurisdiction
  (type/authority/county/permitting + internal `verifyBeforeLaunch`), 2 local FAQs, landmarks, nearby areas.
- `data/posts.ts` — 7 FAQ-driven posts with inline links (`[anchor](/path/)`), related services and related posts.
  `whats-under-your-slab` is the custom, non-templated slug.
- `data/portfolio.ts` — completed projects (empty until real photography exists).

**Slugs, never indexes.** Every cross-reference is a typed slug (`ServiceSlug`, `AreaSlug`) resolved through
`getServiceBySlug` / `getAreaBySlug` / `getPostBySlug` in `lib/lookup.ts`. That module also fails the build on unknown
slugs, duplicates, a service/area slug clash, more or fewer than 13/8 entries, or uneven related-service references
(each service is referenced exactly 3× across all "related services" lists).

### Combo engine (`lib/combo.ts`)

Each of the 104 service × area pages is composed from:
1. one of 6 opening templates, chosen by an FNV-1a hash of `service::area` (deterministic — same inputs, same page);
2. **"Why this is different here"** — the service's note for each soil factor the area actually has, plus the
   service's climate note tied to the area's elevation;
3. a jurisdiction-specific permitting lead (municipality / mixed city-county / city neighborhood + HOA) joined with
   the service's permit note;
4. a combo FAQ set (permit, soils, timeline + rotated seasonal note, one rotated service FAQ).

### SEO infrastructure

- **Metadata:** every page goes through `pageMetadata()` (`lib/metadata.ts`) → canonical, Open Graph, Twitter Card.
  Titles carry a geo modifier: service hubs `"{Service} in Albuquerque, NM & the Metro"`, areas
  `"Concrete Contractor in {Area}, NM"`, combos `"{Service} in {Area}, NM"` (Albuquerque combos say "the City of
  Albuquerque, NM" so they never duplicate a hub title). The brand suffix is dropped when a title would exceed 65 chars.
- **JSON-LD** (`lib/schema.ts`): one `GeneralContractor` node (`@id: …/#organization`) + `WebSite` emitted once per page
  from the root layout, with `areaServed` (8 places) and `hasOfferCatalog` (all 13 services). `Service`,
  `BlogPosting` (author/publisher) and `WebSite` reference it by `@id`. `sameAs`, telephone, address, hours, logo,
  foundingDate and `aggregateRating` are emitted **only** when real values exist in `site-config.ts`.
  `FAQPage` comes from `components/FaqSection.tsx`; `BreadcrumbList` from `components/Breadcrumbs.tsx`, which renders
  the visible trail and the schema from the same array.
- **Headings:** every grid component (`components/Grids.tsx`) and `FaqSection` takes a **required** `heading` prop
  rendered as `<h2>` with `<h3>` cards — the TypeScript compiler won't let a call site forget it.
- `app/sitemap.ts` and the QA script both derive from `lib/routes.ts#allRoutes()`; `app/robots.ts` disallows `/api/`.
- `next.config.ts`: apex → www 308 (path, trailing slash and query preserved in one hop), security headers
  (X-Frame-Options, X-Content-Type-Options, Referrer-Policy, HSTS, Permissions-Policy), `poweredByHeader: false`.

### Internal linking

Header (desktop menus + mobile menu) and footer link all 13 services and all 8 areas on every page. Service hubs link
to their 8 combos; area hubs link to their 13 combos; each combo links to the other 12 services in that area and the
same service in the other 7 areas. Blog posts link contextually in-body; service pages automatically list posts
that name them (`getPostsForService`), and related posts are made bidirectional (`getRelatedPosts`).

### Forms (`app/api/consultation/route.ts`)

Validates required fields (name, email, area, service, message), rejects a filled honeypot (`company_website`),
emails via Resend with `replyTo` = submitter, optionally POSTs to `CONSULTATION_WEBHOOK_URL`, and **logs the full lead
to the server console** if no delivery method is configured (returns 502 only if a configured method fails, so the
visitor can retry). No destination address is hardcoded. Consider adding rate limiting / a CAPTCHA if spam appears.

### Analytics

`components/Analytics.tsx` loads GA4 only when `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set.

---

## QA (`npm run build && npm run qa`)

`scripts/qa.mjs` checks the prerendered HTML and exits non-zero on any failure:

1. sitemap URLs ≡ built pages (both directions) — currently **142 = 142**
2. exactly one `<h1>` per page and no skipped heading levels (all 142 pages)
3. every page has a unique `<title>`; all but blog posts and legal/review pages carry an ", NM" geo modifier
4. no rating/review-count/years/project-count/price/"licensed & insured" text and no `aggregateRating`
5. header + footer link every service and area an equal number of times on every page; prints sitewide totals
   (totals differ by a handful only because of contextual in-body links in blog posts and the About page)

### Dependency audit

`npm audit` reports 0 vulnerabilities. Note: `eslint-config-next` → `@next/eslint-plugin-next` depends on
`fast-glob` → `micromatch` → `braces`, and **every** published `braces` version is flagged high-severity
(GHSA-vfj7-8cjw-p6xm) with no patched release. The plugin only calls `globSync(pattern, { onlyDirectories: true })`,
so `package.json` `overrides` swaps `fast-glob` for API-compatible `tinyglobby` within that plugin. Remove the
override once a patched `braces`/`fast-glob` ships. Re-run `npm audit` before every deploy.
