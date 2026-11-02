# TuneTactics Pre-Launch Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and launch a high-converting pre-launch validation landing page for TuneTactics in Next.js 14+ App Router with bilingual support (FA default at `/` and EN at `/en`), full RTL layout fidelity, custom JSX/CSS mockups, and client-side Supabase waitlist capture.

**Architecture:** Next.js 14 App Router paired with `next-intl` for routing and translations. The site is structured into 9 cohesive sections with a tactical dark theme and strict 4-accent color palette. All components and mockups strictly use CSS logical properties (`ps-`, `pe-`, `ms-`, `me-`, `start-`, `end-`) for seamless LTR/RTL symmetry. Waitlist submissions connect directly to Supabase with PostgreSQL duplicate constraint handling, client-side UTM/referrer attribution, and inline messaging.

**Tech Stack:** Next.js 14+ (App Router), TypeScript, Tailwind CSS, `next-intl`, `@supabase/supabase-js`, `lucide-react`, `next/font/google`.

**Spec:** `docs/superpowers/specs/2026-11-01-tunetactics-landing-page-design.md`

## Global Constraints
- Root `/` defaults to Farsi (`fa`) with `dir="rtl"`. `/en` renders English with `dir="ltr"`.
- Typography: Latin display is Space Grotesk, Latin body is Rubik, Persian display is Alan Sans / Estedad (weight 900), Persian body is Estedad (with Vazirmatn fallback).
- Color system: Dark base (`#0A0A0C`, `#141418`, `#1C1C22`, Bone `#F2EDE4`, Muted `#8C887E`) with accents Signal Lime (`#D4F24A`), Hot Coral (`#FF6B4A`), Electric Violet (`#9B7BFF`), and Ice Mint (`#5EEAD4`).
- No physical left/right CSS properties: use logical properties throughout (`ps-`, `pe-`, `ms-`, `me-`, `start-`, `end-`, `text-start`, `text-end`).
- Waitlist table migration file saved in `supabase/migrations/0001_waitlist.sql`.

## Review Focus
1. **RTL icon and layout inversion:** Directional arrows and the Reels action stack mirror to the opposite side correctly when in Farsi mode.
2. **Duplicate email submission:** Submitting an already registered email displays the localized "already" warning without page reloads.
3. **UTM parameter & Referrer persistence:** Hidden inputs capture and send `utm_source`, `utm_medium`, `utm_campaign`, and `document.referrer` to Supabase.
4. **Language switcher preservation:** Switching language on any sub-path or hash anchor preserves the current route and navigates cleanly between `/` and `/en`.
5. **Fluid responsive behavior:** Mobile screens (375px), tablets (768px), and desktops (1280px+) render all mockups without horizontal overflow or clipped text.

---

### Task 1: Project Scaffolding & Tailwind Design Tokens

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.mjs`, `postcss.config.js`, `tailwind.config.ts`, `app/globals.css`

**Interfaces:**
- Produces: Base Next.js app with Tailwind configuration defining the custom color palette (`background`, `surface`, `surface-2`, `bone`, `muted`, `signal-lime`, `hot-coral`, `electric-violet`, `ice-mint`) and font variables.

- [ ] **Step 1: Initialize Next.js project with dependencies**
Run `npx --yes create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*" --use-npm` or install `next`, `react`, `react-dom`, `next-intl`, `@supabase/supabase-js`, `lucide-react`.

- [ ] **Step 2: Configure `tailwind.config.ts`**
Add the exact custom theme colors, logical spacing rules, and font families:
```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0C",
        surface: "#141418",
        "surface-2": "#1C1C22",
        bone: "#F2EDE4",
        "text-muted": "#8C887E",
        "signal-lime": "#D4F24A",
        "hot-coral": "#FF6B4A",
        "electric-violet": "#9B7BFF",
        "ice-mint": "#5EEAD4",
        border: "rgba(242, 237, 228, 0.10)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
```

- [ ] **Step 3: Setup `app/globals.css`**
Define font variables, `@font-face` definitions for Estedad and Alan Sans with Vazirmatn fallbacks, and base body styles.

- [ ] **Step 4: Verify build works**
Run `npm run build` and ensure clean compile.

---

### Task 2: i18n Configuration & Locale Layout

**Files:**
- Create: `i18n.ts`, `middleware.ts`, `messages/en.json`, `messages/fa.json`
- Create: `app/[locale]/layout.tsx`

**Interfaces:**
- Consumes: `next-intl`
- Produces: Multi-language routing where `/` renders `fa` with `dir="rtl"` and `/en` renders `en` with `dir="ltr"`.

- [ ] **Step 1: Write `messages/en.json` and `messages/fa.json`**
Populate the complete translation dictionary from the specification (including `meta`, `nav`, `hero`, `problem`, `how`, `features`, `form`, `faq`, `footer`, `cta_final`).

- [ ] **Step 2: Create `i18n.ts`**
Configure `getRequestConfig` to load the appropriate messages JSON file based on requested locale.

- [ ] **Step 3: Create `middleware.ts`**
Set up `createMiddleware` from `next-intl/middleware` with:
```ts
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['fa', 'en'],
  defaultLocale: 'fa',
  localePrefix: 'as-needed'
});

export const config = {
  matcher: ['/', '/(fa|en)/:path*', '/((?!_next|_vercel|.*\\..*).*)']
};
```

- [ ] **Step 4: Create `app/[locale]/layout.tsx`**
Configure `Space_Grotesk` and `Rubik` from `next/font/google`, set `lang={locale}` and `dir={locale === 'fa' ? 'rtl' : 'ltr'}` on `<html>`, and inject font CSS variables based on active locale.

- [ ] **Step 5: Verify locale routing**
Test compilation and confirm `/` and `/en` respond with respective directions.

---

### Task 3: Logo, Favicon & Brand Mark

**Files:**
- Create: `components/Logo.tsx`
- Create: `app/icon.svg`

**Interfaces:**
- Produces: `<Logo />` component rendering SVG mark and localized text wordmark (`TuneTactics` / `تیون‌تاکتیکس`).

- [ ] **Step 1: Build the SVG mark**
Create an SVG icon (~28x28) with two overlapping angular waveform bars forming a stylized "T", using Signal Lime and Hot Coral with Ice Mint overlap.

- [ ] **Step 2: Build the localized `<Logo />` component**
Render English: "Tune" in bone and "Tactics" in Signal Lime.
Render Farsi: "تیون‌تاکتیکس" with ZWNJ (U+200C), "تیون‌" in bone and "تاکتیکس" in Signal Lime.

- [ ] **Step 3: Create `app/icon.svg`**
Save the dark-background vector favicon with the TuneTactics mark.

---

### Task 4: Interactive Mockup Components (100% Logical CSS)

**Files:**
- Create: `components/mockups/ProfileCard.tsx`
- Create: `components/mockups/ReelsFeed.tsx`
- Create: `components/mockups/FilterPanel.tsx`
- Create: `components/mockups/MessageThread.tsx`

**Interfaces:**
- Produces: 4 realistic JSX/CSS UI mockups that mirror cleanly in RTL.

- [ ] **Step 1: Build `ProfileCard.tsx`**
Includes circular avatar with initials, artist name, handle, role chips (Producer in Signal Lime, Singer in Hot Coral), genre chips, 40-bar SVG waveform with play button, "Looking for: vocalist for a house EP", and Signal Lime "Connect" button.

- [ ] **Step 2: Build `ReelsFeed.tsx`**
Phone-style 9:16 aspect card, center play button, bottom overlay with artist handle and caption ("beat for a singer — who's on it?"), action stack on the end side (`end-4`), "Use this sound" pill, and peek card at bottom.

- [ ] **Step 3: Build `FilterPanel.tsx`**
Compact search bar, role filter chips with accent colors, genre chips, and 2 mini result cards with mini SVG waveforms.

- [ ] **Step 4: Build `MessageThread.tsx`**
Small chat card with 3 message bubbles (2 from collaborator at `start`, 1 from user at `end`), timestamps, and "Connect" / "Send request" action buttons.

---

### Task 5: Navigation & Language Switcher

**Files:**
- Create: `components/Nav.tsx`
- Create: `components/LanguageSwitcher.tsx`

**Interfaces:**
- Produces: Sticky header with backdrop blur, Logo, Language Switcher, and smooth scroll button to waitlist.

- [ ] **Step 1: Build `LanguageSwitcher.tsx`**
A pill toggle `EN | فا` using next-intl `Link`. Highlights the active locale in Signal Lime, preserves the current path, and changes locale on click.

- [ ] **Step 2: Build `Nav.tsx`**
Sticky bar with `bg-background/80 backdrop-blur-md border-b border-border`. Place Logo on start, Switcher and "Join waitlist" button on end.

---

### Task 6: Hero, Problem, HowItWorks & Feature Showcase

**Files:**
- Create: `components/Hero.tsx`
- Create: `components/Problem.tsx`
- Create: `components/HowItWorks.tsx`
- Create: `components/Features.tsx`

**Interfaces:**
- Consumes: Mockup components from Task 4, translation namespaces (`hero`, `problem`, `how`, `features`).
- Produces: Top-half conversion sections.

- [ ] **Step 1: Build `Hero.tsx`**
Headline, subheadline, primary CTA in Signal Lime (`bg-signal-lime text-background`), trust badge, with `ProfileCard` mockup on the desktop end side.

- [ ] **Step 2: Build `Problem.tsx`**
Centered narrative block with max-width ~720px and large editorial typography.

- [ ] **Step 3: Build `HowItWorks.tsx`**
3 numbered steps, horizontal on desktop, vertical on mobile. Step numbers styled in rounded squares with Signal Lime accents.

- [ ] **Step 4: Build `Features.tsx`**
4 alternating spotlight rows combining copy and mockups:
  1. Portfolio profiles -> `ProfileCard`
  2. Discovery that works -> `FilterPanel`
  3. Reels for musicians -> `ReelsFeed`
  4. Connect and message -> `MessageThread`

---

### Task 7: Waitlist Form, Supabase Integration & Migration

**Files:**
- Create: `supabase/migrations/0001_waitlist.sql`
- Create: `lib/supabase.ts`
- Create: `lib/submitWaitlist.ts`
- Create: `lib/utm.ts`
- Create: `components/WaitlistForm.tsx`

**Interfaces:**
- Produces: Fully functional waitlist submission with UTM tracking, Postgres duplicate handling (`23505`), and localized feedback.

- [ ] **Step 1: Create `supabase/migrations/0001_waitlist.sql`**
Write the complete SQL migration creating `public.waitlist`, RLS policy, and check constraints for roles and looking_for options.

- [ ] **Step 2: Implement `lib/supabase.ts` and `lib/utm.ts`**
Create client Supabase instance and UTM extraction function reading search params and `document.referrer`.

- [ ] **Step 3: Implement `lib/submitWaitlist.ts`**
Handle insert into Supabase `waitlist` table. Return `{ status: 'ok' }`, `{ status: 'already' }` for code `23505`, or `{ status: 'error' }`.

- [ ] **Step 4: Build `WaitlistForm.tsx`**
Accessible form with email input, role dropdown, looking_for dropdown, Signal Lime submit button, client-side validation, inline success state (Ice Mint), and inline error messaging.

---

### Task 8: FAQ, Final CTA, and Footer

**Files:**
- Create: `components/FAQ.tsx`
- Create: `components/FinalCTA.tsx`
- Create: `components/Footer.tsx`
- Create: `app/[locale]/page.tsx`

**Interfaces:**
- Produces: Accessible FAQ accordion, closing conversion banner, and footer with mailto link.

- [ ] **Step 1: Build `FAQ.tsx`**
Interactive `<details>` or button accordion with 5 questions from translations, RTL-flipping chevron icons.

- [ ] **Step 2: Build `FinalCTA.tsx`**
High-impact closing banner reiterating value prop and scrolling to waitlist form.

- [ ] **Step 3: Build `Footer.tsx`**
Wordmark, localized tagline, links to Privacy, Terms, and Contact (`mailto:support@tunetactics.ir`), copyright notice.

- [ ] **Step 4: Assemble `app/[locale]/page.tsx`**
Compose all 9 sections into a seamless single scrollable page.

---

### Task 9: SEO, OpenGraph & Analytics

**Files:**
- Create: `app/[locale]/opengraph-image.tsx`
- Create: `app/robots.ts`
- Create: `app/sitemap.ts`
- Create: `lib/analytics.ts`

**Interfaces:**
- Produces: 1200x630 localized OG images, `robots.txt`, `sitemap.xml`, and environment-gated analytics.

- [ ] **Step 1: Implement `app/[locale]/opengraph-image.tsx`**
Generate dynamic 1200x630 card with dark background, 4-accent strip at bottom, and localized headline.

- [ ] **Step 2: Implement `app/robots.ts` and `app/sitemap.ts`**
Provide clean sitemap listing `/` and `/en`.

- [ ] **Step 3: Implement `lib/analytics.ts`**
Add safe no-op functions for PostHog/Vercel Analytics event tracking.

---

### Task 10: Verification, Build & README

**Files:**
- Create: `README.md`
- Verify: Full project build (`npm run build`) and responsiveness.

- [ ] **Step 1: Run production build**
Run `npm run build` and resolve any TypeScript or ESLint warnings.

- [ ] **Step 2: Verify both locales and RTL rendering**
Confirm `/` displays Farsi in RTL with correct font fallback, and `/en` displays English in LTR.

- [ ] **Step 3: Document in `README.md`**
List all environment variables (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `NEXT_PUBLIC_POSTHOG_KEY`), database migration instructions, and copy review notes.
