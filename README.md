# Qiyang's Blog

[中文](./README.zh-CN.md)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fqiyangdev%2Fportfolio)

Personal site and blog built with Next.js — a centered dark landing page with bilingual bio, shader background, and MDX-powered posts.

## Features

- **Bilingual homepage** — English / Chinese content based on the `Accept-Language` header
- **Shader background** — animated mesh gradient on the homepage via `@paper-design/shaders-react`
- **Tech stack links** — inline links (SwiftUI, Expo, Next.js) with hover OG previews
- **Blog** — MDX posts with syntax highlighting (Fumadocs MDX + Shiki)
- **Social footer** — icon-only links; China-only icons shown when geo headers indicate CN
- **SEO** — sitemap, robots, Open Graph image route, RSS feed

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Content | Fumadocs MDX |
| Runtime | React 19 |
| Package manager | Bun |

## Getting Started

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build

```bash
bun run build
bun start
```

### Lint

```bash
bun run lint
```

## Project Structure

```
app/
  page.tsx              # Homepage (avatar, bio, tech links)
  blog/                 # Blog list and post pages
  api/link-preview/     # OG metadata for tech link previews
  components/           # UI (footer, shader, tech-link, posts, mdx)
  site.ts               # Site metadata and social links
content/
  blog/                 # MDX blog posts
lib/
  locale.ts             # Locale detection (en / zh)
  i18n.ts               # Homepage strings
  geo.ts                # China geo detection for footer icons
source.config.ts        # Fumadocs MDX collection config
```

## Writing Posts

Add an MDX file under `content/blog/`:

```mdx
---
title: Hello World
description: My first post
date: 2025-01-01
---

Your content here.
```

Frontmatter fields: `title`, `description`, `date`, and optional `author` (defaults to `Qiyang`).

## Configuration

### Site & social links

Edit `app/site.ts` for name, description, and social URLs. The footer reads from `socialLinks` in the same file.

### Homepage copy

Edit `lib/i18n.ts` for English and Chinese homepage strings.

### Link preview whitelist

The `/api/link-preview` route only fetches OG metadata from allowed hosts. Add new hosts in `app/api/link-preview/route.ts` if you link to other domains.

### Locale

Locale is inferred from the `Accept-Language` header (`zh` / `zh-*` → Chinese, otherwise English). `html lang` is set accordingly in the root layout.

## Deployment

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fqiyangdev%2Fportfolio)

Designed for [Vercel](https://vercel.com). Click the button to clone this repo and deploy in one step.

Geo-based footer icons use `x-vercel-ip-country`; Cloudflare (`cf-ipcountry`) is also supported.

Analytics and Speed Insights are included via `@vercel/analytics` and `@vercel/speed-insights`.

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL for metadata and RSS |

## License

Private — see repository settings.
