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
│   ├── layout/              # site-header, site-footer
│   ├── sections/            # hero, placeholder — one file per page section
│   ├── ui/                  # button, container, section primitives
│   ├── language-switcher.tsx
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
├── content/                 # all site data, typed
│   ├── site.ts              # name, domain, email, socials
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

## Deployment (Vercel)

Zero-config: Vercel detects Next.js and pnpm automatically.

1. Push the repository to GitHub.
2. Import it at vercel.com → New Project.
3. Deploy — no build settings or env vars are needed at this stage.
4. Add the `sudo.uz` domain in Project → Settings → Domains.

Before going live, update `siteConfig.url` in [src/content/site.ts](src/content/site.ts)
if the final domain differs, since it seeds `metadataBase`, the sitemap and robots.txt.

## Status

Scaffolding is complete and verified: `pnpm build` and `pnpm lint` both pass,
and `/`, `/uz`, `/ru` all render with correct `lang` attributes and translated
copy. Section content is placeholder — the `src/content/*` modules are
intentionally empty arrays awaiting real material.

### Open items

- [ ] Real content: projects, clients, experience, skills, about text
- [ ] Profile photo / OG image (`public/`), favicon
- [ ] Social links in `siteConfig.socials`
- [ ] Confirm the production domain
- [ ] Per-project detail pages (`/[locale]/projects/[slug]`), if wanted

## Changelog

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
