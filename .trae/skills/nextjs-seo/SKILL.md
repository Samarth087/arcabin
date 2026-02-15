---
name: "nextjs-seo"
description: "Implements Next.js SEO: metadata, Open Graph, JSON-LD, sitemap/robots. Invoke when optimizing pages or adding SEO to Next.js routes."
---

# Next.js SEO

Purpose-built guidance to add robust SEO to a Next.js App Router project: default site metadata, page-level overrides, Open Graph/Twitter cards, canonical tags, JSON-LD structured data, sitemap.xml, and robots.txt.

## When To Invoke
- User asks to add or improve SEO for any Next.js page
- Creating landing, pricing, blog, docs, or portfolio pages
- Setting site-wide metadata and social share previews
- Generating sitemap/robots or adding structured data

## What This Skill Does
- Sets site-wide defaults in `app/layout.tsx` via Next.js `metadata`
- Adds page-level SEO in `page.tsx` using `generateMetadata`
- Configures Open Graph and Twitter cards
- Adds canonical URLs and alternates
- Injects JSON-LD structured data for Organization/Product/Article
- Provides routes for `sitemap.xml` and `robots.txt`
- Suggests verification and testing with Lighthouse and validators

## Prerequisites
- Next.js App Router (Next.js 13+)
- Project routes under `src/app`
- Base URL configured (e.g., `https://example.com`)

## Site-Wide Defaults (app/layout.tsx)
Define global metadata to cover title, description, open graph, twitter, robots, and icons. Keep defaults concise and override per page as needed.

Key fields:
- `metadataBase`: set to your production origin
- `title`: default and template values
- `description`: short, compelling summary
- `openGraph` and `twitter`: name, images, type
- `robots`: indexing rules
- `alternates`: canonical URL

## Page-Level SEO (generateMetadata)
For each page (e.g., `src/app/page.tsx`, `src/app/pricing/page.tsx`), implement `export async function generateMetadata()` to tailor title/description/og images/canonical. Use dynamic params when applicable.

Guidelines:
- Title: ≤60 chars, include key phrase
- Description: 120–160 chars, benefit-led
- OG image: 1200×630, static or generated
- Canonical: point to the primary URL

## Open Graph & Twitter
Always set:
- `openGraph.type`: `"website"` for landing pages
- `openGraph.images`: absolute URLs
- `twitter.card`: `"summary_large_image"`
- `twitter.site`: brand handle if available

## Canonical & Alternates
Use `alternates: { canonical: "<abs-url>" }` to prevent duplicate content issues. Add `languages` or `types` if you have i18n or alternate formats.

## JSON-LD Structured Data
Inject schema.org JSON-LD via a component in pages that need it. Common types:
- Organization on the homepage
- Product/Offer on pricing/detail pages
- Article/BlogPosting on posts

Render with a script tag:
- `<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />`
Ensure absolute URLs and accurate fields (name, description, brand, offers, image).

## Sitemap & Robots
App Router supports route handlers:
- `src/app/sitemap.ts`: export a function returning URL entries with `lastModified`, `changeFrequency`, `priority`
- `src/app/robots.ts`: export a function for `rules`, `sitemap`, `host`

Populate sitemap using known static routes and dynamic slugs from data sources if available.

## Verification & Testing
- Run Lighthouse: check SEO score and best practices
- Validate JSON-LD: https://search.google.com/test/rich-results
- Verify Open Graph/Twitter: Facebook Sharing Debugger, Twitter Card Validator
- Check indexing: `site:yourdomain.com` in Google

## Implementation Steps
1) Set `metadataBase` and defaults in `app/layout.tsx`
2) Add `generateMetadata` in key pages (home, pricing, portfolio)
3) Create a reusable `StructuredData` component for JSON-LD
4) Configure `sitemap.ts` and `robots.ts` under `src/app`
5) Ensure image assets are available and absolute
6) Test with Lighthouse and validators

## Triggers Recap
- "add SEO", "improve metadata", "add OG", "add canonical"
- "make pricing page SEO-friendly", "structure data for product"
- "generate sitemap/robots for Next.js"

