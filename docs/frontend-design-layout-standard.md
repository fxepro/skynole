# Universal Frontend Design & Layout System Standard

> **Scope:** All public and authenticated UI in **`frontend/`**.  
> **Companion doc:** [`design-system.md`](design-system.md) — legacy notes and early token reference (kept for history; this document supersedes it for governance).  
> **Backend:** API, mail, and persistence live in **`backend/`** — not covered here except where the frontend consumes config/content from an API.

---

## Table of contents

Sections are ordered by **implementation priority**. Build from top to bottom.

| # | Section | Priority | Why first |
| - | ------- | -------- | --------- |
| 1 | [Purpose](#1-purpose) | — | Align on what this standard is for |
| 2 | [Core rule](#2-core-rule) | P0 | Single sentence that governs every decision |
| 3 | [Project structure standard](#3-project-structure-standard) | P0 | Folder layout before any UI work |
| 4 | [Definition of done](#4-definition-of-done) | P0 | Know “finished” before shipping pages |
| 5 | [Anti-patterns](#5-anti-patterns) | P0 | What caused past failures |
| 6 | [Design token layer](#6-design-token-layer) | P1 | One source of truth for visual values |
| 7 | [Component ownership](#7-component-ownership) | P1 | Who owns what; where files live |
| 8 | [Layout / shell layer](#8-layout--shell-layer) | P1 | Header, footer, nav — never on pages |
| 9 | [Content & config layer](#9-content--config-layer) | P1 | Nav, links, CTAs out of JSX |
| 10 | [Section layer](#10-section-layer) | P2 | Reusable page body blocks |
| 11 | [Page composition rules](#11-page-composition-rules) | P2 | How pages assemble sections |
| 12 | [Navigation governance](#12-navigation-governance) | P2 | One nav model, no drift |
| 13 | [Header, footer & global chrome](#13-header-footer--global-chrome) | P2 | Shell pieces and rules |
| 14 | [Variant system](#14-variant-system) | P2 | One component, many modes — no forks |
| 15 | [Theme system (cross-project)](#15-theme-system-cross-project) | P3 | Same structure, different brand |
| 16 | [Responsive rules](#16-responsive-rules) | P3 | Breakpoints and layout behavior |
| 17 | [Accessibility rules](#17-accessibility-rules) | P3 | Non-negotiable baseline |
| 18 | [App Router conventions](#18-app-router-conventions) | P3 | Next.js routing + layout groups |
| 19 | [Migration checklist](#19-migration-checklist) | — | Move messy projects into compliance |
| A | [Appendix: Redcloud reference](#appendix-a-redcloud-reference) | — | Current implementation snapshot |
| B | [Appendix: Related documents](#appendix-b-related-documents) | — | Landing formulas, indexes |

---

## 1. Purpose

This standard defines how every frontend in the monorepo is structured, styled, and composed so that:

- A rebrand or layout change touches **one layer**, not dozens of pages.
- New pages are **assembled** from shells, sections, and config — not copy-pasted.
- AI and human contributors follow the **same rules** without guessing where code belongs.
- Multiple products can share **architecture and components** while swapping **brand tokens**.

This document covers: design system, layout system, component ownership, content/config ownership, reuse rules, and project structure. It does **not** replace product copy, SEO strategy, or backend API design.

---

## 2. Core rule

> **Pages contain structure and content — never design.**

| Pages MAY | Pages MUST NOT |
| -------- | -------------- |
| Import shells, sections, and UI components | Define hex colors, raw radii, shadows, or font stacks |
| Pass data and copy into section props | Duplicate header, footer, sidebar, or nav markup |
| Use layout grids and spacing utilities for **structure** | Hardcode navigation trees, footer links, or legal URLs |
| Reference token **names** (`brand-600`, `.btn-primary`) | Copy-paste decorative patterns (orbs, step grids, heroes) |
| Compose `<SectionX {...data} />` blocks | Create one-off `HeroV2`, `FooterAlt`, `NavCustom` components |

If a visual or structural element appears on more than one page, it belongs in the **design layer** — not in the page file.

---

## 3. Project structure standard

Every product repo uses a **two-app monorepo**. UI and API are never mixed at the repo root.

```
repo/
├── frontend/                    # All UI (framework may vary; this project uses Next.js)
│   ├── src/
│   │   ├── app/                 # Routes only — thin composition
│   │   ├── components/
│   │   │   ├── ui/              # Primitives: Button, Input, Badge, Icon
│   │   │   ├── layout/          # Shells + chrome: Header, Footer, Shell wrappers
│   │   │   └── sections/        # Page body blocks: Hero, FAQ, CTA, FeatureGrid
│   │   ├── config/              # Nav, footer, site meta, feature flags (no prose)
│   │   ├── content/             # Static copy blobs, MD/JSON (optional)
│   │   └── lib/                 # API clients, utils, types, data loaders
│   ├── public/
│   ├── tailwind.config.ts       # Token extension (or theme/ equivalent)
│   └── package.json
├── backend/                     # API, auth, forms, CMS, jobs (e.g. Laravel)
├── docs/                        # Standards, formulas, indexes
└── netlify.toml                 # Deploy config → frontend/ only (if applicable)
```

### Path rules

- Docs and reviews **always** prefix `frontend/` or `backend/`.
- Never treat `src/app/...` as repo-root paths.
- Each app has its own env file (`.env.example` → `.env.local` / `.env`).

### Integration

- Frontend calls backend via a base URL env var (e.g. `NEXT_PUBLIC_API_URL`).
- Frontend may ship **seed content** for offline builds; production content/forms should target **backend** when available.

### Folder ownership

| Path | Owns |
| ---- | ---- |
| `components/ui` | Visual primitives, variants, a11y for controls |
| `components/layout` | Shells, header, footer, topbar, mobile menu, cookie banner slot |
| `components/sections` | Marketing/content blocks used inside `<main>` |
| `config/` | Structural data: nav trees, footer columns, CTAs, social, legal link lists |
| `content/` | Long-form static copy where not yet in CMS |
| `lib/` | Fetchers, formatters, shared types — no JSX layout |
| `app/` | Route files, metadata, static params — **thin** composition only |

---

## 4. Definition of done

A page is **not done** if any of the following are true:

- [ ] Contains hex colors, arbitrary Tailwind values (`text-[13px]`, `bg-[#…]`), or inline `style={{}}` for design
- [ ] Defines its own header, footer, sidebar, topbar, or mobile menu
- [ ] Hardcodes nav links, footer links, legal URLs, or contact info in JSX
- [ ] Duplicates a hero, step grid, CTA band, or orb background instead of using a section/shell component
- [ ] Introduces a one-off component that could be a **variant** of an existing one
- [ ] Adds a new icon import on the page instead of the icon registry
- [ ] Bypasses the shell for its route group (e.g. marketing page without `MarketingShell`)

A page **is done** when:

- [ ] It renders inside the correct **shell** for its route group
- [ ] Body is built from **sections** and/or shared layout components
- [ ] All chrome and menus come from **config**
- [ ] Styling uses **tokens** and design-layer classes only
- [ ] Passes responsive and accessibility baseline (sections 16–17)

Use this checklist in PR review.

---

## 5. Anti-patterns

These caused measurable failure in prior projects (~1,800 styling references across 60+ files; single palette changes requiring page-by-page edits):

| Anti-pattern | Result | Correct layer |
| ------------ | ------ | --------------- |
| Centralize colors only; inline everything else | Duplicated radii, shadows, cards on every page | Full token + component + section stack |
| Nav/footer markup inside each page | Drift between header and footer links | `config/` + `layout/` |
| Copy-paste hero with blur orbs per landing | 20+ files to change one visual | `sections/Hero` or `CampaignHero` |
| Mega menu data inside header component | Marketing and eng edit same 400-line file | `config/navigation.ts` |
| `Hero`, `HeroDark`, `HeroLandingV3` | Variant explosion | One component + `tone` / `variant` prop |
| Business logic only in Next.js API routes when backend exists | Split brain for forms and content | `backend/` controllers |
| Page-specific footer column | Inconsistent IA | Footer driven from config |

---

## 6. Design token layer

**Single source of truth** for values that can change in a rebrand.

| Token type | Typical location (Next.js + Tailwind) |
| ---------- | ------------------------------------- |
| Colors, shadows | `frontend/tailwind.config.ts` → `theme.extend` |
| Global utilities (`.btn`, `.card`, `.section`) | `frontend/src/app/globals.css` `@layer components` |
| Fonts | `next/font` in root layout + CSS variables |
| Type scale | `tailwind.config.ts` → `theme.extend.fontSize` |
| Container width | `tailwind.config.ts` → `theme.extend.container` |

### Rules

- Each hex / font name appears **once** in the token layer.
- Pages use token **names** only: `brand-600`, `ink-700`, `.btn-primary`.
- **16px is the floor** for body text in this project (see Appendix A).
- No warm/orange tints unless added deliberately to the token set.

### What tokens do not include

- Component structure (that is the component/section layer).
- Nav labels or URLs (that is config).
- Page copy (that is content or CMS).

---

## 7. Component ownership

Four tiers — **never skip a tier** (pages do not jump straight to raw HTML + tokens).

```
┌─────────────────────────────────────────┐
│  app/page.tsx          ← composition   │
├─────────────────────────────────────────┤
│  sections/             ← page blocks    │
├─────────────────────────────────────────┤
│  layout/               ← shells, chrome │
├─────────────────────────────────────────┤
│  ui/                   ← primitives     │
├─────────────────────────────────────────┤
│  tokens (tailwind + globals.css)        │
└─────────────────────────────────────────┘
```

| Tier | Folder | Examples | Edited by |
| ---- | ------ | -------- | --------- |
| **UI** | `components/ui` | Button, Input, Label, Badge | Design system / platform |
| **Layout** | `components/layout` | `MarketingShell`, SiteHeader, SiteFooter, TopBar | Design system / platform |
| **Sections** | `components/sections` | Hero, PageBanner, StepGrid, CtaSection, FAQ | Product + design system |
| **Page** | `app/**/page.tsx` | Wire data, pick sections, export metadata | Feature team |

**Reuse rule:** If it appears twice, promote it down one tier (page → section → layout → ui).

---

## 8. Layout / shell layer

**Shells** wrap entire experiences. They own persistent chrome; pages never reimplement it.

### Shell types

| Shell | Use | Typical chrome |
| ----- | --- | -------------- |
| **MarketingShell** | Public marketing site | TopBar, header, mega nav, footer, cookie banner slot |
| **DashboardShell** | Logged-in app | Sidebar, topbar, user menu |
| **AuthShell** | Login / register / reset | Minimal header, centered content |
| **DocsShell** | Documentation | Side nav, search, version switcher |
| **AppShell** | Generic product UI | Configurable sidebar + header |
| **AdminShell** | Internal admin | Dense nav, breadcrumbs, action bar |

This project currently uses an informal **MarketingShell** via root `layout.tsx` (`TopBar` → `SiteHeader` → `main` → `SiteFooter`). Target state: explicit `components/layout/MarketingShell.tsx` selected by route group.

### Shell vs layout vs section

| Layer | Scope | Example |
| ----- | ----- | ------- |
| **Shell** | Whole app surface | `MarketingShell` wraps all `(marketing)` routes |
| **Layout** | Next.js `layout.tsx` | Picks shell, sets metadata defaults |
| **Section** | Block inside `<main>` | `<Hero />`, `<FAQSection />` |

### Global chrome ownership

These **always** live in `components/layout`, never in pages:

- Header / site header  
- Footer  
- Sidebar (dashboard)  
- Top bar / announcement bar  
- Primary navigation + mobile menu  
- Cookie banner (slot or component)  
- Search overlay (when used)  

---

## 9. Content & config layer

Separate **structure** from **prose** from **API data**.

| Layer | Holds | Does not hold |
| ----- | ----- | ------------- |
| **Config** | Nav tree, footer columns, social URLs, phone/email, CTA labels/hrefs, legal link list, feature flags | Paragraphs, headlines, blog body |
| **Content** | Static MD/JSON copy, legal HTML imports, seed catalog | Route definitions, React components |
| **CMS / API** | Dynamic posts, portfolio, form handling | CSS classes, layout markup |

### Config file examples (target)

```
frontend/src/config/
├── site.ts          # name, tagline, default email, locale
├── navigation.ts    # header mega menus, mobile nav
├── footer.ts        # footer columns, legal row
├── ctas.ts          # Primary/secondary CTA presets
└── social.ts        # Social profile URLs
```

### Rules

- Adding a nav item = edit **config**, not `SiteHeader.tsx`.
- Footer and header must read from the **same** nav source of truth where links overlap.
- Pages import config; they do not embed `{ label, href }[]` literals for global chrome.

---

## 10. Section layer

Sections are **reusable blocks inside `<main>`**. They compose UI primitives; they are not full pages.

### Standard section catalog

Implement as needed — do not fork per campaign:

| Section | Role |
| ------- | ---- |
| **Hero / CampaignHero** | Site home + campaign landing top fold |
| **PageBanner** | Section hub + context sub-page banner |
| **PageHeader** | Utility pages (contact, legal index) |
| **SubtextBar** | Supporting line under banner |
| **FeatureGrid** | Benefits or capabilities grid |
| **StepGrid** | Numbered “how it works” process |
| **CTASection / CtaBanner** | End-of-page conversion band |
| **LogoCloud** | Partner / trust logos |
| **TestimonialSection** | Quotes + attribution |
| **FAQSection** | Accordion FAQ |
| **PricingSection** | Tier cards |
| **CaseStudySection** | Proof / portfolio highlight |
| **ContactSection** | Form + supporting copy |
| **MediaSplit** | Image + prose split |
| **SectionHeading** | Eyebrow + H2 + description |

### Section rules

- Sections accept **props/data**; they do not fetch unless explicitly a “smart section” pattern (prefer fetch in page, pass data down).
- Decorative backgrounds (blur orbs, gradients) live **inside** the section component — never copied on pages.
- New landing page = **same sections**, different copy and props — not a new page template file with 300 lines of markup.

---

## 11. Page composition rules

A valid page file looks like:

```tsx
// app/(marketing)/example/page.tsx — illustrative only

export default function ExamplePage() {
  const data = …; // fetch or import content

  return (
    <>
      <PageBanner tone="light" title={…} … />
      <SubtextBar>{…}</SubtextBar>
      <MediaSplit image={…}>{…}</MediaSplit>
      <FeatureGrid items={…} />
      <StepGrid steps={…} />
      <ContactSection formKey="…" fields={…} />
    </>
  );
}
```

### Page types (vocabulary)

| Type | Purpose | Typical sections |
| ---- | ------- | ---------------- |
| **Site home** | Brand entry | CampaignHero, FeatureGrid, StepGrid, CtaBanner |
| **Section hub** | Catalog index | PageBanner (dark), card grid |
| **Context sub-page** | Detail under a context | PageBanner (light), SubtextBar, MediaSplit, CTASection |
| **Campaign landing** | Conversion long-form | CampaignHero, problem, benefits, StepGrid, ContactSection |
| **Utility page** | Forms, legal, blog index | PageHeader, prose or LeadForm |

### Thin page rule

- **Target:** page files &lt; 80 lines of JSX (excluding metadata and data constants).
- Long copy lives in **content** files or CMS; long layout lives in **sections**.

---

## 12. Navigation governance

| Rule | Detail |
| ---- | ------ |
| **Single source** | Header, footer, and mobile menu read from `config/navigation.ts` (+ `footer.ts` for columns) |
| **Max depth** | Mega menu: 2 levels default; 3 only with explicit approval |
| **Link parity** | If a link appears in footer and header, href must match config |
| **New routes** | Add to config + sitemap; never link to orphan pages from one chrome only |
| **CTAs** | Primary site CTAs defined in `config/ctas.ts`; pages override sparingly |
| **Review** | Nav changes require checklist: config updated, mobile tested, footer synced |

---

## 13. Header, footer & global chrome

### Header

- Logo, primary nav, mega menus, mobile drawer, optional utility links (contact, quote).
- Reads **only** from config + site metadata.
- Active state derived from pathname — not hardcoded per page.

### Footer

- Multi-row layout defined once in `SiteFooter` (layout component).
- Column **content** from config (company, contexts, legal).
- “View all →” links inline with section titles — pattern defined in layout, URLs from config.

### Top bar / announcement bar

- Optional; lives in layout above header.
- Copy and link from config; dismiss state in client component if needed.

### Cookie banner

- Single component in layout; not duplicated on legal pages only.

---

## 14. Variant system

**One component, multiple modes** — never duplicate components for visual differences.

### Approved mechanisms

| Mechanism | Use for |
| --------- | ------- |
| `tone="light \| dark"` | Surfaces on light vs dark backgrounds |
| `variant="primary \| ghost \| …"` | Buttons, badges |
| `size="sm \| md \| lg"` | Density |
| CVA / class map in component file | Co-located variant styles |
| Preset props on decorative components | `BlurOrbs preset="campaign"` |

### Banned

- `HeroLanding`, `HeroLandingDark`, `Footer2024`
- Copy-paste class strings across pages “because this one is slightly different”

If a new mode is needed, **extend the variant API** of the existing component and document it here or in Appendix A.

---

## 15. Theme system (cross-project)

Goal: **same components and shells**, different **brand tokens** per client/product.

| Swappable per project | Fixed across projects |
| --------------------- | --------------------- |
| Color scales (`brand`, `accent`, `ink`) | Folder structure |
| Font families (display + sans) | Shell architecture |
| Logo assets | Section catalog and APIs |
| Shadow/radius tokens (optional) | Page composition rules |
| | Accessibility baseline |
| | Config schema shape |

### Implementation pattern

```
frontend/
├── theme/
│   └── tokens.ts       # or tailwind preset package
├── tailwind.config.ts  # imports active theme
└── …                   # components unchanged
```

Switching brand = swap theme import, not rewrite sections.

---

## 16. Responsive rules

| Rule | Standard |
| ---- | -------- |
| **Mobile-first** | Base styles for small; `sm:`, `md:`, `lg:` enhance |
| **Container** | Use `container` class; max width from token config |
| **Navigation** | Mega menu desktop; drawer/hamburger below `lg` (or project breakpoint) |
| **Typography** | Responsive steps defined in token layer (e.g. H1 `text-4xl sm:text-5xl`) |
| **Grids** | Section internals own breakpoints; pages do not ad-hoc `grid-cols-5` without section support |
| **Touch** | Interactive targets ≥ 44px where feasible |
| **No horizontal scroll** | Except intentional carousels |

---

## 17. Accessibility rules

| Requirement | Implementation |
| ----------- | -------------- |
| **Semantic landmarks** | `<header>`, `<main>`, `<footer>`, `<nav>` via shell |
| **Heading order** | One H1 per page; no skipped levels for styling |
| **Focus** | Visible focus rings on interactive elements (`.btn` includes focus styles) |
| **Images** | Meaningful `alt` on content images; decorative `alt=""` |
| **Forms** | Labels associated with inputs; error text announced |
| **Color** | Contrast meets WCAG AA for body text; do not rely on color alone |
| **Motion** | Respect `prefers-reduced-motion` for large animations (when added) |
| **Keyboard** | Mobile menu and mega menu operable via keyboard |

---

## 18. App Router conventions

For Next.js projects (this repo):

| Convention | Practice |
| ---------- | -------- |
| **Route groups** | `(marketing)`, `(auth)`, `(dashboard)` each bind one shell |
| **Layouts nest shells** | `app/(marketing)/layout.tsx` → `<MarketingShell>{children}</MarketingShell>` |
| **Pages stay thin** | `page.tsx` exports metadata + section composition |
| **Shared chrome** | Never import SiteHeader in a page — only in shell layout |
| **API routes** | `app/api/` for BFF/dev fallback only when backend absent |
| **Metadata** | `generateMetadata` on pages; defaults in layout |
| **Static params** | `generateStaticParams` for catalog slugs |

### Target route group map (this project)

| Group | Shell | Routes |
| ----- | ----- | ------ |
| `(marketing)` | MarketingShell | `/`, `/landing/*`, `/solutions/*`, catalog pages |
| `(utility)` | MarketingShell | `/contact`, `/quote`, legal |
| Future `(dashboard)` | DashboardShell | Admin / app |

---

## 19. Migration checklist

Apply in order when moving an existing messy project into compliance.

### Phase 0 — Structure
- [ ] Confirm `frontend/` and `backend/` split at repo root
- [ ] Create `components/ui`, `components/layout`, `components/sections`
- [ ] Create `config/` and move nav/footer/site data out of components

### Phase 1 — Shell
- [ ] Extract `MarketingShell` (or appropriate shell) from root layout
- [ ] Remove any header/footer markup from individual pages
- [ ] Wire route groups to shells

### Phase 2 — Tokens & UI
- [ ] Consolidate colors, type, shadows in token layer
- [ ] Promote buttons, cards, inputs to `components/ui` or globals `@layer components`
- [ ] Delete hex and arbitrary values from pages

### Phase 3 — Sections
- [ ] Extract duplicated heroes → `CampaignHero` / `Hero`
- [ ] Extract step grids → `StepGrid`
- [ ] Extract CTA bands → `CtaSection`
- [ ] Audit landing pages: compose from sections only

### Phase 4 — Config & governance
- [ ] Single `navigation.ts` feeds header, mobile menu, footer
- [ ] Legal links from config
- [ ] Run **Definition of done** on every route

### Phase 5 — Backend (optional)
- [ ] Move form POST handling to `backend/`
- [ ] Point `NEXT_PUBLIC_API_URL` at API; keep seed fallback for build

---

## Appendix A: Redcloud reference

Current state vs target (as of this writing). Use for migration tracking — not as the universal standard.

| Area | Current | Target |
| ---- | ------- | ------ |
| Repo split | `frontend/` + `backend/` (README only) | Laravel API live |
| Components folder | Flat `components/` | `ui/`, `layout/`, `sections/` |
| Shell | Implicit in `app/layout.tsx` | Named `MarketingShell` + route groups |
| Nav/footer | Partially in `site-header.tsx`, `site-footer.tsx` | `config/navigation.ts`, `config/footer.ts` |
| Decorative patterns | Centralized in `decorative.tsx`, `step-grid.tsx` | Move to `sections/` |
| Tokens | `tailwind.config.ts` + `globals.css` | ✓ Compliant |
| Campaign landings | Composed with shared sections; some page-specific JSX remains | Full section composition |
| Forms | `LeadForm` + API route / Web3Forms | `backend` POST `/api/forms/{key}` |

### Active token summary

- **Colors:** `brand` (red), `accent` / `navy` (blue), `ink` (slate), `cream`, `sand`
- **Fonts:** Fraunces (display), Plus Jakarta Sans (body)
- **Container:** 1350px max
- **Key globals:** `.btn`, `.btn-primary`, `.card`, `.eyebrow`, `.section`, `.banner-surface`, `.banner-surface-light`

Detailed token tables: see [`design-system.md`](design-system.md) (legacy reference).

### Page type → section mapping (this product)

| Type | Header section | Common body sections |
| ---- | -------------- | -------------------- |
| Site home | `CampaignHero` | ServiceCard grid, StepGrid (navy), CtaBanner |
| Section hub | `PageBanner` | Card grids |
| Context sub-page | `PageBanner light` + `SubtextBar` | `MediaSplit`, `CoreServices`, `CtaBanner` |
| Campaign landing | `CampaignHero` | Problem, benefits, `StepGrid`, `LeadForm` |
| Utility | `PageHeader` | `LeadForm` or prose |

---

## Appendix B: Related documents

| Document | Purpose |
| -------- | ------- |
| [`design-system.md`](design-system.md) | Legacy principles + detailed Redcloud token tables |
| [`universal-landing-page-formula.md`](universal-landing-page-formula.md) | Campaign landing content structure |
| [`landing-pages-index.md`](landing-pages-index.md) | Route inventory for this product |
| [`backend/README.md`](../backend/README.md) | API conventions |

---

*When this standard and `design-system.md` disagree, **this document wins** for structure, ownership, and governance; use `design-system.md` for historical token detail until merged.*
