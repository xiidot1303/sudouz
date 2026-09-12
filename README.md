# sudo.uz

Personal site of **Shakhzod Yuldoshev** — software engineer, 6 years of experience.

Built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4 and next-intl.
Available in English, Uzbek and Russian.

## Getting started

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000 — Uzbek at `/uz`, Russian at `/ru`.

## Scripts

| Command      | Description                 |
| ------------ | --------------------------- |
| `pnpm dev`   | Start the dev server        |
| `pnpm build` | Production build            |
| `pnpm start` | Serve the production build  |
| `pnpm lint`  | Run ESLint                  |

## Editing content

- **UI strings** — `src/messages/{en,uz,ru}.json` (keep all three in sync).
- **Projects, clients, experience, skills** — typed modules in `src/content/`.
- **Name, domain, email, socials** — `src/content/site.ts`.

See [CLAUDE.md](CLAUDE.md) for architecture notes and the changelog.

## Deployment

Deployed on [Vercel](https://vercel.com). Zero configuration — import the
repository and deploy.
