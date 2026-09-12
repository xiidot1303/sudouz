@AGENTS.md

# sudo.uz — Shakhzod Yuldoshev's personal site

Personal landing page / portfolio for **Shakhzod Yuldoshev** (uz: *Shahzod
Yo'ldoshev*, ru: *Шахзод Юлдошев*), a software engineer with 6 years of
experience. The site presents his projects, clients, experience and contact
information. Deployment target: **Vercel**.

## Stack

| Concern          | Choice                                          |
| ---------------- | ----------------------------------------------- |
| Framework        | Next.js 16 (App Router, Turbopack, React 19)    |
| Language         | TypeScript (strict)                             |
| Styling          | Tailwind CSS v4 + shadcn/ui-style primitives     |
| i18n             | next-intl — `en` (default), `uz`, `ru`          |
| Icons            | lucide-react                                     |
| Dark mode        | next-themes (`class` strategy, system default)   |
| Content          | Typed TS modules in `src/content`                |
| Package manager  | pnpm                                             |

## Commands

```bash
pnpm dev      # dev server (Turbopack)
pnpm build    # production build
pnpm start    # serve the production build
pnpm lint     # ESLint
```

## Project layout

```
src/
├── app/
│   ├── layout.tsx           # pass-through root; <html> lives in [locale]
│   ├── not-found.tsx        # global 404 (non-locale requests)
│   ├── robots.ts
│   ├── sitemap.ts
│   ├── globals.css          # design tokens + Tailwind base layer
│   └── [locale]/
│       ├── layout.tsx       # <html>, fonts, providers, header/footer, metadata
│       ├── page.tsx         # home page, composed of sections
│       └── not-found.tsx
├── components/
│   ├── brand/logo.tsx       # SUDO wordmark
│   ├── layout/              # site-header, site-footer, mobile-nav, nav-items
│   ├── sections/            # hero, team, placeholder — one per page section
│   ├── ui/                  # button, container, section primitives
│   ├── language-switcher.tsx
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
├── content/                 # all site data, typed
│   ├── site.ts              # name, domain, email, socials
│   ├── company.ts           # Venons — employer facts, products, stats
│   ├── types.ts             # Project, Client, ExperienceItem, SkillGroup
│   ├── projects.ts          # (empty — awaiting content)
│   ├── clients.ts           # (empty — awaiting content)
│   ├── experience.ts        # (empty — awaiting content)
│   └── skills.ts            # (empty — awaiting content)
├── i18n/
│   ├── routing.ts           # locale list, default, localePrefix
│   ├── navigation.ts        # locale-aware Link / useRouter / usePathname
│   └── request.ts           # per-request message loading
├── messages/                # en.json, uz.json, ru.json
├── lib/utils.ts             # cn() class merge helper
└── proxy.ts                 # next-intl locale negotiation (Next 16 name for middleware)
```

## Conventions

- **Routing.** Every page lives under `src/app/[locale]/`. `localePrefix` is
  `as-needed`: English serves at `/`, other locales at `/uz` and `/ru`.
- **Links.** Import `Link`, `useRouter`, `usePathname` from `@/i18n/navigation`,
  never from `next/link` or `next/navigation` — otherwise the locale is lost.
- **Static rendering.** Every page calls `setRequestLocale(locale)` before
  translating, and `generateStaticParams` lists all locales, so all pages
  prerender at build time.
- **Copy vs. data.** UI strings (headings, labels, buttons) go in
  `src/messages/*.json`; all three files must stay key-for-key in sync. Content
  data (projects, clients) goes in `src/content` and uses the `Localized<T>`
  type for per-locale fields.
- **Server first.** Components are server components by default. Add `"use
  client"` only for interactivity (theme toggle, language switcher).
- **Styling.** Use semantic tokens (`bg-background`, `text-muted-foreground`,
  `border-border`) rather than raw colors, so light and dark stay in sync.
- **Middleware.** Next.js 16 renamed `middleware.ts` to `proxy.ts`; use
  `src/proxy.ts`.
- **Localized data.** Content in `src/content` uses `Localized<T>` maps. Read
  them with the `pick(value, locale)` helper from `@/lib/utils`, which falls
  back to English when a translation is missing.

## Brand

The brand is **SUDO** — a play on the Unix `sudo` command, fitting for an
engineer's site. It is the wordmark; "Shakhzod Yuldoshev" is the person's name
and appears as the hero headline, not as the logo.

### Logo

Rendered by [src/components/brand/logo.tsx](src/components/brand/logo.tsx) as
live text in the mono typeface, not an image, so it stays sharp at any size,
inherits the current text color, and remains selectable. A mint block follows
the wordmark as a terminal-style cursor. Pass `showCursor={false}` for contexts
where the block is noise.

### Colors

| Token        | Hex       | OKLCH                        | Role                       |
| ------------ | --------- | ---------------------------- | -------------------------- |
| Brand ink    | `#231f20` | `oklch(0.2442 0.0064 0.59)`  | Dark background, text on mint |
| Brand accent | `#1feace` | `oklch(0.8412 0.1492 179.69)` | Accent, CTAs, highlights   |

Contrast measurements that drive the whole system:

| Pair            | Ratio     | Consequence                                  |
| --------------- | --------- | -------------------------------------------- |
| mint on ink     | 10.65:1   | Mint is safe as text on dark                  |
| ink on mint     | 10.65:1   | Dark text on mint fills — the button pattern  |
| mint on white   | **1.53:1** | Mint must **never** be text on light          |

**The one rule to remember: never put pure `#1feace` text on a light
background.** It fails WCAG badly. Light mode therefore uses a darkened mint
(`--brand-mint-deep`) wherever the accent carries text, and reserves pure mint
for fills and decoration.

### Using the tokens

- `bg-accent` + `text-accent-foreground` — mint surface with ink text. Safe in
  both themes.
- `text-accent-text` — accent-colored **text**. Resolves to deep mint in light
  mode and pure mint in dark, so it is always readable. Use this, never
  `text-accent`, for colored text.
- `bg-brand-mint` / `text-brand-ink` — the raw brand colors, which do *not*
  flip with the theme. For elements that must stay on-brand in both, like the
  primary CTA (`<Button variant="brand">`).
- `bg-primary` — flips: ink in light mode, mint in dark.

Both themes are brand-derived: dark mode uses brand ink as the page background
and is the brand-native mode; light mode uses a near-white with a faint mint
cast so it still reads as the same family. The CSS source of truth is the token
block at the top of [src/app/globals.css](src/app/globals.css); the hexes are
mirrored in `siteConfig.colors` for non-CSS consumers (OG images, manifest).

## Responsive design

Mobile-first, verified in a real browser rather than assumed.

- **Breakpoints.** Tailwind defaults. The layout shifts at `md` (768px), where
  the hamburger is replaced by the inline nav.
- **Gutters.** `Container` holds a 16px minimum side gutter at every width
  (`px-4 sm:px-6 lg:px-8`), capped at `max-w-5xl`.
- **Typography.** The hero headline uses `clamp(2rem, 8vw, 4.5rem)` so it scales
  continuously instead of jumping at breakpoints. Section headings step through
  `text-2xl sm:text-3xl lg:text-4xl`.
- **Tap targets.** The `.tap-target` utility enforces a 44×44px minimum, applied
  only under `@media (pointer: coarse)` so it does not bloat desktop controls.
- **Mobile nav.** [mobile-nav.tsx](src/components/layout/mobile-nav.tsx) is a
  full-height drawer below the header. It locks body scroll while open, closes
  on Escape or on navigating, and holds the language switcher (which is hidden
  in the header below `sm` to save width).
- **Overflow guard.** `body` carries `overflow-x: hidden` as a backstop, but the
  layout is built not to need it — verified at 320px in all three locales.
- **Reduced motion.** A `prefers-reduced-motion` block neutralizes animations
  and smooth scrolling.

### Gotcha: fixed positioning inside the header

The header uses `backdrop-blur`. **A `backdrop-filter` makes an element a
containing block for `position: fixed` descendants**, so a fixed overlay
rendered inside the header is positioned against the header's 64px box and
collapses. The mobile drawer therefore portals to `document.body`. Any future
overlay (modal, popover, command palette) triggered from the header must do the
same.

### Verifying responsiveness

There is no committed test suite yet. Changes to layout were checked with a
throwaway Playwright script across 320/390/768/1440px in both themes, asserting:
no horizontal overflow, no element past the viewport, a >=16px gutter, correct
nav mode per breakpoint, drawer behavior, 44px tap targets, and that computed
colors equal the brand hexes. Worth reproducing after significant layout work.

## Shakhzod and Venons

Two distinct identities live on this site; keep them separate.

- **SUDO** is Shakhzod's personal brand — the wordmark, the mint/ink palette,
  the whole visual system.
- **Venons** (`VENONS MChJ`) is the company he works at. It has its own
  identity and its own blue (`#2160F3`, recorded in `company.brandColor`).

The site is Shakhzod's, so **SUDO's palette always wins**. Venons appears as
an employer he is part of, never as a co-brand: do not restyle sections in
Venons blue, and do not place the Venons logo in the header or footer. The
blue appears only where it genuinely belongs — the shirt in his photo.

### Venons facts

Sourced from [venons.uz](https://venons.uz) (a single-page site) on
2026-09-12 and stored in [src/content/company.ts](src/content/company.ts):
founded 2020, based in Samarkand, products VSALES and VERP, industries FMCG /
pharma / auto parts / AI, and the headline stats (20+ projects, 5 innovative
products, 600+ users). Descriptions are translated into all three locales.

If these numbers go stale, `company.ts` is the single place to edit.

**Not yet recorded:** Shakhzod's job title at Venons and his start year. He
opted to leave the title generic for now, so the site says "Software Engineer"
and the team section does not claim a role. Add a `role` field to `company.ts`
and a `since` value when he provides them — the `team.since` message key is
already translated and waiting.

### Images

Both live in [public/images/](public/images/) and are referenced by path, not
imported, so they are served statically and can be swapped without a code
change.

- `hero.png` (844×1168, RGBA) — cut-out portrait, transparent background, in
  a Venons shirt. The figure **bleeds to the bottom edge of its canvas**, so
  it is bottom-aligned against the hero's closing border and must not have
  padding beneath it, or the crop looks like a mistake rather than a design.
- `team.jpg` (1280×853) — the Venons group photo, used in the team section.

Both go through `next/image`. The portrait is `priority` (it is the LCP
element); the team photo is lazy by default. Alt text is translated —
the portrait uses the localized spelling of his name.

## Deployment (Vercel)

Zero-config: Vercel detects Next.js and pnpm automatically.

1. Push the repository to GitHub.
2. Import it at vercel.com → New Project.
3. Deploy — no build settings or env vars are needed at this stage.
4. Add the `sudo.uz` domain in Project → Settings → Domains.

Before going live, update `siteConfig.url` in [src/content/site.ts](src/content/site.ts)
if the final domain differs, since it seeds `metadataBase`, the sitemap and robots.txt.

## Status

The shell, brand system and the hero and team sections are complete and
verified: `pnpm build` and `pnpm lint` pass, and the layout was checked in a
real browser at 320/390/768/1440px in both themes across all three locales.
About, Projects, Clients and Experience are still placeholders — their
`src/content/*` modules are intentionally empty arrays awaiting real material.

### Open items

- [ ] Real content: projects, clients, experience, skills, about text
- [ ] Shakhzod's job title at Venons and the year he joined (see
      "Shakhzod and Venons")
- [ ] OG image, favicon in brand colors
- [ ] Social links in `siteConfig.socials`
- [ ] Confirm the production domain
- [ ] Per-project detail pages (`/[locale]/projects/[slug]`), if wanted

## Changelog

### 2026-09-12 — Hero portrait and the Venons team section

- Added the cut-out portrait to the hero, right-aligned beside the copy and
  bottom-aligned against a new closing border so the figure stands on the
  section edge. On mobile it stacks under the text. Served through
  `next/image` with `priority` as the LCP element, behind a mint disc.
- Added a **My team** section covering Venons: the group photo, company name
  linking to venons.uz, tagline, location and founding year, mission, a stat
  row (20+ projects / 5 products / 600+ users), the VSALES and VERP product
  cards, and industry pills.
- Created [src/content/company.ts](src/content/company.ts) holding every
  Venons fact, gathered from venons.uz. All prose is translated into English,
  Uzbek and Russian.
- Added a `pick(localized, locale)` helper in `@/lib/utils` for reading
  `Localized<T>` content, with an English fallback.
- Added the `team` nav entry (now six items; verified they still fit the
  desktop bar at 476px and appear in the mobile drawer) and `team.*` message
  keys plus `hero.portraitAlt` in all three locales.
- Documented the SUDO-vs-Venons brand separation, so Venons' blue never
  displaces the site's own palette.
- **Adjusted after review:** the portrait first rendered floating with a gap
  beneath it, which made the mid-torso crop look accidental. Removing the
  gap and adding the section border fixed it.
- Verified: full responsive suite passes (56 checks), and all three locales
  render the Venons copy with images loading and localized alt text at
  320/390/768/1440px.

### 2026-09-12 — SUDO brand identity and responsive pass

- Adopted the **SUDO** wordmark as the logo, replacing the plain `sudo.uz`
  text in the header, and added it to the footer. Built as a text component
  with a mint terminal-cursor block.
- Rebuilt the color system around brand ink `#231f20` and mint `#1feace`.
  Measured contrast first and found mint fails on light backgrounds (1.53:1),
  so the system adds a separate `--accent-text` token that darkens the mint in
  light mode while keeping pure mint in dark. Dark mode uses brand ink as the
  page background.
- Added a `brand` button variant (always mint fill + ink text, 10.65:1 in both
  themes) and pointed accent hovers, focus rings and text selection at the
  brand color.
- Made the site properly responsive: a full-height mobile drawer with scroll
  lock and Escape-to-close, `clamp()` hero typography, a 44px `.tap-target`
  utility gated to touch devices, tightened section rhythm, and a
  `prefers-reduced-motion` block.
- Added mobile viewport metadata: `viewportFit: "cover"` and per-scheme
  `themeColor` so mobile browser chrome picks up the brand colors.
- **Fixed:** the mobile drawer rendered at zero height. The header's
  `backdrop-blur` makes it a containing block for fixed descendants, so the
  drawer was sized against the 64px header. It now portals to `document.body`.
  Documented under "Gotcha: fixed positioning inside the header".
- Verified in Chromium across 320/390/768/1440px × light/dark: no horizontal
  overflow, 16px gutters held, correct nav per breakpoint, drawer behavior,
  tap-target sizes, and computed colors matching the brand hexes exactly.
  Also confirmed no overflow in all three locales at 320px, including the
  longer Uzbek and Cyrillic headlines.

### 2026-09-12 — Project scaffolded

- Created the Next.js 16 app: App Router, TypeScript, Tailwind v4, ESLint,
  `src/` directory, `@/*` import alias, Turbopack, pnpm.
- Added trilingual routing with next-intl (`en` default, `uz`, `ru`):
  `src/i18n/{routing,navigation,request}.ts`, `src/proxy.ts`, and message
  catalogs for all three locales.
- Set up the design system: shadcn/ui-compatible OKLCH token set in
  `globals.css` with light and dark palettes, plus `Button`, `Container` and
  `Section` primitives and the `cn()` helper.
- Built the app shell: locale layout owning `<html>` with Geist fonts
  (latin + cyrillic subsets), theme provider, sticky header with nav,
  language switcher and theme toggle, and a footer.
- Added the home page with a hero and placeholder About / Projects / Clients /
  Experience / Contact sections.
- Added the typed content layer in `src/content` (`Project`, `Client`,
  `ExperienceItem`, `SkillGroup`, `Localized<T>`) with empty data modules.
- Added SEO plumbing: per-locale metadata with OpenGraph, Twitter cards and
  `alternates.languages`, plus `sitemap.ts` and `robots.ts`.
- Renamed `middleware.ts` to `proxy.ts` to clear the Next.js 16 deprecation.
- Rewrote the theme toggle to switch icons with CSS instead of mount state,
  resolving a `react-hooks/set-state-in-effect` lint error.
