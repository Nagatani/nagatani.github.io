# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal blog ("Nagatani's Memorandum") built with **Astro 5** and deployed to GitHub Pages. Content is written in Japanese. The site uses static site generation with zero client-side JavaScript by default.

## Commands

```bash
npm run dev        # Start dev server (http://localhost:4321)
npm run build      # Production build to ./dist
npm run preview    # Preview production build locally
node create-new.js my-post-slug  # Scaffold new blog post with JST timestamp
```

There are no test or lint commands configured.

## Architecture

- **Astro** with file-based routing in `src/pages/`
- **Content Collections** (`src/content/blog/`) — blog posts as Markdown/MDX files, schema-validated via Zod in `src/content.config.ts`
- **Layouts** — `src/layouts/BlogPost.astro` wraps all posts
- **Components** — reusable `.astro` components in `src/components/` (BaseHead, Header, Footer, ThemeIcon, TableOfContents, etc.)
- **Site constants** — `src/consts.ts` exports `SITE_TITLE` and `SITE_DESCRIPTION`
- **Global styles** — `src/styles/global.css` with CSS custom properties for light/dark theming

### Key Pages

- `/` (`src/pages/index.astro`) — homepage showing latest 5 posts
- `/memo` (`src/pages/memo/[...page].astro`) — paginated blog listing (10 per page)
- `/memo/:slug` (`src/pages/memo/[...slug].astro`) — individual post
- `/memo/og/:slug.png` (`src/pages/memo/og/[...slug].png.ts`) — dynamically generated OG images using satori + resvg-js
- `/rss.xml` (`src/pages/rss.xml.js`) — RSS feed

### Blog Post Frontmatter Schema

```yaml
title: ""           # required
description: ""     # required
pubDate: ""         # required (ISO date string, coerced to Date)
updatedDate: ""     # optional
heroImage: ""       # optional (Astro image reference)
draft: false        # optional (excluded from production)
toc: true           # optional (table of contents, default true)
```

### External Link Handling

All external links in Markdown and MDX are configured (via `rehype-external-links` in `astro.config.mjs`) to open in new tabs with `rel="nofollow noopener noreferrer"`.

## Deployment

Push to `master` triggers GitHub Actions (`.github/workflows/deploy.yml`): Node 20 → `npm ci` → `npm run build` → deploy to GitHub Pages.

## Fonts

OG image generation uses `public/fonts/NotoSansJP-Bold.otf`. Body text uses Atkinson Hyperlegible (woff files in `public/fonts/`).
