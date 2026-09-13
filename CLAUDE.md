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
│   ├── terminal/            # prompt, cursor, typing, terminal window
│   ├── detail/              # shared detail-page layout
│   ├── layout/              # header, footer, desktop-nav, mobile-nav
│   ├── sections/            # hero, about, solutions, services, team, ...
│   ├── ui/                  # button, container, section primitives
│   ├── language-switcher.tsx
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
├── content/                 # all site data, typed
│   ├── site.ts              # name, domain, email, socials
│   ├── company.ts           # Venons — employer facts, products, stats
│   ├── services.ts          # what he builds (ERP, CRM, bots, ...)
│   ├── solutions.ts         # what he fixes (warehouse, sales, HR, ...)
│   ├── detail/              # long-form copy, one file per page
│   ├── guarantees.ts        # the four confirmed commitments + integrations
│   ├── process.ts           # the six delivery steps
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

- **Breakpoints.** Tailwind defaults. The inline nav appears at `lg`
  (1024px); below that the hamburger drawer is used. Russian and Uzbek labels
  run longer than English, so **re-measure at 768/1024px in every locale after
  adding a nav item** — an eight-item bar once overflowed at 768px in all
  three locales while looking fine in English alone.
- **Navigation is four items:** Solutions, Services, About, Contact. Solutions
  and Services open dropdowns listing their detail pages
  ([desktop-nav.tsx](src/components/layout/desktop-nav.tsx)); the drawer
  expands them inline. Keep the bar at four — the long lists belong in the
  menus, not the header.
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

## Terminal aesthetic

Shakhzod is a Linux developer, so the site is dressed as a shell. The theme is
**accent, not costume**: it decorates a normal portfolio rather than turning
the page into a terminal emulator, so a non-technical client can still read it.

### Components — [src/components/terminal/](src/components/terminal/)

| Component        | Purpose                                                     |
| ---------------- | ----------------------------------------------------------- |
| `Prompt`         | `shakhzod@sudo:~$` label; `path` prop sets the directory     |
| `Cursor`         | Blinking block cursor (`animate-blink`)                      |
| `TypingRole`     | Types and deletes a cycling list of roles                    |
| `TerminalWindow` | Framed block with a title bar and traffic-light dots         |
| `useTypewriter`  | The hook behind `TypingRole`                                 |

Import from `@/components/terminal`.

### Where it shows up

- **Hero** — a `whoami` prompt above the name, then `role = <typing>` cycling
  through the roles from `hero.roles`.
- **Section headings** — each takes a `command` prop rendering a matching
  shell line above the title (`ls -la`, `cat clients.txt`, `groups shakhzod`,
  `history | grep work`). Pass `path` when the directory should differ.
- **Empty sections** — `Placeholder` renders as a `TerminalWindow` showing the
  command and its output, so unfinished areas still look deliberate.
- **Nav** — each item reveals its shell equivalent on hover (desktop) or shows
  it inline (mobile drawer), from the `nav.commands.*` message keys.
- **Footer** — the SUDO wordmark followed by a live blinking cursor.

### Rules

- **Prompts are decorative.** `Prompt` is `aria-hidden` so screen readers get
  the heading text without shell punctuation read out symbol by symbol.
- **Commands must be plausible.** They are read by developers; keep them valid
  and idiomatic. Do not repeat the path in the command when `path` already
  shows it (`~/projects$ ls -la`, never `~/projects$ ls -la ~/projects`).
- **Mono type is for chrome**, not body copy. Prompts, commands, labels and
  stat values are mono; paragraphs stay in the sans face for readability.

### Motion and accessibility

Animation is real motion, so it is gated:

- `useTypewriter` watches `prefers-reduced-motion` through
  `useSyncExternalStore` and, when reduce is set, returns the **complete first
  role** immediately rather than withholding it.
- The server snapshot reports `true` (reduced), so nothing animates before
  hydration and there is no flash of a half-typed word.
- The cursor blinks under `motion-safe:` only.
- `TypingRole` renders the full role list in an `sr-only` node and marks the
  animated copy `aria-hidden`, so the roles are announced once instead of on
  every keystroke.
- The role line reserves height and, below `sm`, the typed text sits in its
  own block. Both matter: the longest roles wrap on narrow screens, and
  without the reservation the hero buttons jump by tens of pixels as words are
  typed and deleted — under the reader's thumb on a phone. **After changing
  `hero.roles`, re-measure the CTA position while the animation runs**, in
  every locale; a role that fits in English may wrap in Russian or Uzbek.

### Gotcha: the typewriter dependency key

`useTypewriter` depends on `words.join(KEY_SEPARATOR)`, not the array itself —
a parent re-render passing a fresh array would otherwise restart the
animation. The separator is `"\n"`, which cannot appear in these single-line
labels. **Do not change it to a space**: the effect splits the key back apart,
and a space would shred multi-word roles like "Software Engineer" into
fragments.

## What the site sells

Shakhzod automates business processes and builds the software that runs them.
The site is aimed at **business owners and managers**, not recruiters — the
visitor usually arrives with an operational pain ("stock never matches the
shelf"), not a technology shopping list.

That decides the copy everywhere: **lead with the problem and the outcome,
treat technology as proof rather than the pitch.** Avoid jargon in headings
and symptoms; a reader who does not know what an ERP is must still recognise
their own situation.

### Two sections, deliberately distinct

They look similar but answer different questions, and the overlap between
them is the point — do not merge them.

| Section     | Question               | File                     |
| ----------- | ---------------------- | ------------------------ |
| `Solutions` | *What can you fix?*    | `src/content/solutions.ts` |
| `Services`  | *What do you build?*   | `src/content/services.ts`  |

- **Solutions** are business problems: warehouse, sales, client, HR,
  accounting, online store. Each has a `symptom` (the pain in the owner's own
  words, rendered in quotes) and an `outcome` (what changes). Solutions come
  first on the page — the visitor self-identifies before seeing technology.
- **Services** are the systems: ERP, CRM, websites, Telegram bots, mobile
  apps, e-commerce, AI integrations. Each carries a `summary` and concrete
  `points` so the offer is not abstract.

Every solution lists `delivers: string[]` — service slugs that link the two
sections together. **Keep those slugs valid**; an unknown slug is silently
skipped, so the connection would vanish without any error.

### Enquiry CTAs

Each solution card links to `mailto:` with the subject prefilled
(`"<ctaSubject>: <solution title>"`, localized), so enquiries arrive already
saying which problem they are about. If a contact form is ever added, keep
this pre-qualification.

### Icons

Content files name icons as strings (`icon: "Warehouse"`), resolved by
[src/components/ui/icon.tsx](src/components/ui/icon.tsx). This keeps
`src/content` free of component imports. **Add the icon to that map** when
introducing a new name — unmapped names silently fall back to `Boxes`.

### Adding a service or solution

1. Append to `services.ts` or `solutions.ts` with all three locales filled.
2. Register the icon in `icon.tsx` if it is new.
3. For a solution, point `delivers` at existing service slugs.
4. Update the count in the About stat row if the service total changed.

No component edits are needed — both sections render from the arrays.

## Detail pages

Every solution and service has its own page. Thirteen in total, three locales
each, all statically prerendered.

| Route                      | Source                                    |
| -------------------------- | ----------------------------------------- |
| `/solutions`               | index, cards from `solutions.ts`          |
| `/solutions/[slug]`        | `solutions.ts` + `detail/<slug>.ts`       |
| `/services`                | index, cards from `services.ts`           |
| `/services/[slug]`         | `services.ts` + `detail/<slug>.ts`        |
| `/about`                   | About + Experience + Team sections        |

### Page structure

All detail pages share [DetailPage](src/components/detail/detail-page.tsx),
whose section order follows what research of real provider sites found works:

1. Back link, shell prompt, title, lead, CTA + risk-reversal microcopy
2. **The problem** — three paragraphs, before any capability talk
3. **What you get** — six concrete capabilities, then four outcomes
4. **What every project includes** — the four guarantees
5. **How the work runs** — the six process steps
6. **Works with what you already use** — named integrations
7. **Questions people ask** — four FAQs
8. **Related** — cross-links between solutions and services
9. Final CTA with four-item microcopy

Sections 4–6 come from shared content and appear on every page, so a page is
never thin even before its long-form copy is written.

### Long-form content

`src/content/detail/<name>.ts` exports a `DetailContent` object;
[detail/index.ts](src/content/detail/index.ts) maps slugs to them.

**The map keys must match the slugs in `solutions.ts` / `services.ts`,** which
is not always the filename: `online-store` → `onlineStore`, `telegram-bots` →
`telegramBots`. A missing key is silently skipped — the page still renders
from its short summary, with no error — so verify the mapping after adding a
page rather than trusting the build.

A detail file has `lead`, `problem` (3 paragraphs), `includes` (6 items),
`outcomes` (4), and `faq` (4), each in all three locales.

## Writing copy for this site

The copy follows patterns taken from real IT provider sites. Enterprise
consultancy copy (Itransition, Netguru) is **the wrong model** — those firms
lean on brand recognition that a solo developer does not have. The closer
model is a solo operator selling to SME owners, where **transparency
substitutes for brand**.

### Rules

- **First person singular.** "I build", "I migrate", "I train" — never "we"
  or "our team". One person does this work; pretending otherwise is the first
  thing a prospect will catch.
- **"You" density.** If a paragraph contains no "you" or "your", rewrite it.
- **Concrete over abstract.** Name real things: 1C, Excel, Telegram, Payme,
  Click, Uzum, Bitrix24, Billz, Asl Belgisi, notebooks, group chats. A named
  system is worth more than any adjective.
- **Problem before capability.** Lead with the situation the reader is in.
- **Answer objections directly.** FAQ answers open with "Yes." or "No.", then
  the specifics.
- **No invented proof.** Never add prices, client names, project counts, years
  or statistics that have not been confirmed.
- **Do not narrow the offer.** Shakhzod is not only a web developer: the site
  covers ERP, CRM, mobile apps, Telegram bots, e-commerce and AI. Copy that
  says "web" or "websites" where it means "software" undersells him — the hero
  tagline made this mistake and was rewritten.

### Banned phrases

These appear on nearly every generic IT site and are checked for:

> cutting-edge · state-of-the-art · seamless · unlock the potential ·
> leveraging · world-class · end-to-end · full-cycle · digital transformation ·
> innovative · maximum efficiency · empowering · elevate your business ·
> individual approach · streamline · revolutionize · game-changing ·
> best-in-class · synergy · holistic

Replace every abstract claim with a falsifiable specific: not "seamless
integration" but "connects to 1C and keeps exchanging data"; not "we provide
support" but "bugs found in the first 30 days are fixed free of charge".

### Guarantees — confirmed, do not extend

[src/content/guarantees.ts](src/content/guarantees.ts) holds the four
commitments Shakhzod confirmed: an official contract, a fixed price agreed
before work starts, deployment with on-site staff training, and 30 days of
free bug fixes. **Source-code handover is deliberately absent** — it was not
among the commitments he confirmed. Do not add to this list without asking
him; these are promises to real customers.

Pricing is intentionally not published. The CTA offers a free consultation and
a written scope instead. If real figures are supplied later, a price row on
each detail page is the highest-converting place for them.

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

The site is structurally complete. Hero, About, Solutions and Services
sections, thirteen detail pages, the About page and the four-item navigation
are all built and verified: `pnpm build` and `pnpm lint` pass, and the layout,
navigation, typing animation and all three locales were checked in a real
browser. Projects and Clients remain placeholders — their `src/content/*`
modules are intentionally empty arrays.

### Needs Shakhzod's review

The detail-page copy was written from research, not dictation. These claims
were made on his behalf and should be confirmed before the site goes live:

- [ ] **Asl Belgisi** handling (accounting, e-commerce) — the copy is hedged,
      but confirm the real scope
- [ ] **Instagram automation** (clients) — hedged on platform rules; confirm
- [ ] **Fingerprint terminals** (HR) — implies hardware integration
- [ ] **Offline sales app** (sales) — the offline promise is repeated from
      warehouse; confirm it holds there too
- [ ] **Uzum Market stock sync** and **Billz** as a stock source (online store)
- [ ] **Fiscal receipts** (e-commerce)
- [ ] **Merchant accounts** for Telegram payments; **store accounts** for
      mobile ("you own the developer accounts")
- [ ] **AI accuracy commitment** — the AI page promises to measure accuracy on
      real documents before launch and drop the task if it does not clear the
      bar. That is a real commitment.
- [ ] **Native review of the Uzbek and Russian copy** — written as genuine
      translations, but no native speaker has signed them off

### Open items

- [ ] Real content: projects, clients, experience, skills
- [ ] Shakhzod's job title at Venons and the year he joined
- [ ] OG image, favicon in brand colors
- [ ] Social links in `siteConfig.socials`
- [ ] Confirm the production domain
- [ ] Optional: publish price floors — research found visible pricing is the
      strongest trust signal for a solo developer, and each detail page has a
      natural slot for it
- [ ] Optional: a contact form, keeping the per-page pre-qualification
- [ ] Optional: an interactive terminal section

## Changelog

### 2026-09-13 — Hero tagline and roles widened past web

- Rewrote the hero tagline in all three locales. It read "6 years of building
  web products…", which contradicted the rest of the site — Shakhzod builds
  ERP, CRM, mobile apps, bots and AI integrations, not only websites. It now
  reads "6 years of turning manual work into software that people actually
  use."
- Broadened the cycling roles: **Business Automation Engineer** replaces
  Linux Enthusiast, so the list leads with what he sells rather than what he
  runs on his laptop.
- **Fixed a layout shift the longer roles exposed.** The role line reserved
  only one line of height, so as "Business Automation Engineer" typed out and
  wrapped, the hero buttons moved 44px — on a phone, under the reader's
  thumb. The typed text now sits in its own block below `sm` with reserved
  height. Measured at 0px shift across 4 widths × 3 locales, down from 44px.
- **Test-only fix:** the content suite still expected the pre-detail-page
  structure — service headings outside a link, and mailto CTAs on the home
  page rather than links to detail pages. Expectations updated; the site was
  rendering all 7 services and 6 solutions correctly throughout.
- Note: the hero portrait was replaced upstream (now 1066×1475, black shirt).
  Nothing in the layout needed changing.

### 2026-09-13 — Detail pages, four-item nav and real copy

- **Cut the navigation from eight items to four**: Solutions, Services, About,
  Contact. Solutions and Services are dropdowns listing their detail pages;
  the mobile drawer expands them inline. Projects and Clients moved into the
  homepage only; Experience and Team moved to `/about`.
- Added **thirteen detail pages** — one per solution and service — at
  `/solutions/[slug]` and `/services/[slug]`, plus index pages for each
  section and a new `/about` page. All statically prerendered in three
  locales.
- Built [DetailPage](src/components/detail/detail-page.tsx), a shared layout
  whose section order follows researched provider-site patterns: problem →
  capabilities → guarantees → process → integrations → FAQ → related → CTA.
- Wrote long-form copy for all thirteen pages in English, Uzbek and Russian:
  a lead, three problem paragraphs, six capabilities, four outcomes and four
  FAQs each. Written from research into how real IT providers write, against
  a banned-phrase list and a "no invented proof" rule.
- Added [guarantees.ts](src/content/guarantees.ts) with the four commitments
  Shakhzod confirmed, the named integrations (1C, Excel, Asl Belgisi, Payme,
  Click, Uzum, Bitrix24, Billz, Telegram), and
  [process.ts](src/content/process.ts) with six delivery steps stated as
  commitments rather than stage names.
- Home-page cards now link to their detail pages instead of opening a mailto.
- Extended the sitemap to all 45 pages with `hreflang` alternates.
- Verified: responsive (56 checks), typing, locales at four widths, a new nav
  suite (4 top-level items, 6- and 7-entry dropdowns, mobile submenu expansion
  and navigation, no overflow in any locale), and a content check confirming
  every slug resolves to real content with no banned phrases.
- **Test-only fixes:** two suites asserted the old structure — a five-link
  drawer and Team content on the homepage. Both expectations updated; neither
  was a site defect.

### 2026-09-13 — Services, solutions and the About copy

- Reframed the site around what a business visitor needs: **problem first,
  technology as proof.** The audience is business owners, not recruiters.
- Added [src/content/solutions.ts](src/content/solutions.ts) — six business
  problems (warehouse, sales, clients, HR, accounting, online store), each
  with a `symptom` in the owner's own words and the `outcome` that follows.
- Added [src/content/services.ts](src/content/services.ts) — seven systems
  (ERP, CRM, websites, Telegram bots, mobile apps, e-commerce, AI), each with
  a summary and concrete deliverables.
- Solutions render before Services so visitors self-identify before meeting
  jargon; each solution links to the services that deliver it via `delivers`.
- Each solution card carries a `mailto:` CTA with a localized subject
  prefilled, so enquiries arrive already qualified.
- Wrote the real About section: a lead line, a paragraph on how the work
  actually starts, and a closing invitation, in all three locales.
- Added [src/components/ui/icon.tsx](src/components/ui/icon.tsx) so content
  files can name icons as strings without importing components.
- Updated the SEO title and description in all three locales to describe
  business automation rather than a generic engineer profile.
- **Fixed:** the nav grew to eight items and overflowed the header at 768px in
  every locale. The inline nav now starts at `lg` (1024px) and tablets use the
  drawer; measured headroom in all three locales afterwards.
- Verified: responsive (56 checks), typing, a new content suite (7 services,
  6 solutions, 6 prefilled CTAs, no untranslated leakage, no page errors per
  locale), and the locale suite at four widths.
- **Test-only fix:** the locale suite reported every image broken. The site
  was fine — the helper scrolled by `document.body.scrollHeight` in a loop
  that never terminated, because the page grows as images load, so the
  assertion ran before lazy images loaded. It now walks the image elements,
  which is bounded.

### 2026-09-13 — Terminal and shell theme

- Added a terminal component set under
  [src/components/terminal/](src/components/terminal/): `Prompt`, `Cursor`,
  `TerminalWindow`, `TypingRole` and the `useTypewriter` hook.
- Hero now opens with a `whoami` prompt and a typing `role = ...` line that
  cycles through four roles, translated per locale in `hero.roles`.
- Gave every section heading a shell command (`ls -la`, `cat clients.txt`,
  `groups shakhzod`, `history | grep work`, `mail -s 'hello'`) via a new
  `command` prop on `Section`.
- Restyled `Placeholder` as a terminal window with a title bar and traffic
  lights, so unfinished sections read as shell output rather than dead space.
- Nav items now carry their shell equivalent — revealed on hover on desktop,
  shown inline in the mobile drawer, which also gained a `menu` prompt header.
- Footer wordmark now ends in a live blinking cursor.
- Added `blink` keyframes plus `.terminal-window`, `.terminal-titlebar`,
  `.terminal-dot` and `.terminal-body` component classes.
- Accessibility: the typewriter returns the full first role under
  `prefers-reduced-motion` instead of withholding text, reports reduced on the
  server so nothing animates pre-hydration, exposes the whole role list to
  screen readers in one `sr-only` node, and reserves line height to avoid
  layout shift. Prompts are `aria-hidden`.
- **Fixed:** the typewriter's dependency key joined and re-split roles on a
  space, which would have shredded multi-word roles. Now uses a newline
  separator; a browser test asserts multi-word roles stay intact.
- **Fixed:** a NUL byte slipped into the hook's separator literal, and a
  render-time ref write tripped `react-hooks/refs`. Both resolved.
- **Fixed:** the Projects prompt read `~/projects$ ls -la ~/projects`
  (redundant path) and commands butted against the `$` with no space.
- Verified: responsive suite (56 checks), a new typing suite (animation
  cycles all four roles, reduced-motion static, screen-reader list correct),
  and all three locales at four widths.

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
