# TuneTactics Pre-Launch Landing Page Specification

**Date**: 2026-11-01  
**Product**: TuneTactics (Farsi: تیون‌تاکتیکس)  
**Type**: Pre-launch validation landing page (EN + FA, i18n + RTL)  
**Stack**: Next.js 14+ App Router, TypeScript, Tailwind CSS, `next-intl`, `@supabase/supabase-js`, `lucide-react`, `framer-motion`

---

## 1. Objectives & Conversion Goal
- One core goal: Convert musician visitors into waitlist signups and capture:
  1. Role (`producer`, `singer`, `songwriter`, `other`)
  2. Intent / What they are looking for (`collabs`, `feedback`, `paid_work`, `showcasing`)
- Validate interest in TuneTactics: portfolio profiles + collaboration matching + music reels feed.
- Target audience: Producers and singers/vocalists seeking high-quality collaborations.

---

## 2. Locales, Routing & RTL
- **Locales**: `fa` (default) and `en`.
- **URL Routing**:
  - Root `/` renders Farsi (`fa`) with `dir="rtl"`.
  - `/en` renders English (`en`) with `dir="ltr"`.
  - Configured with `next-intl` using `localePrefix: 'as-needed'`.
- **Locale Persistence**: Cookie-based + URL fallback + Accept-Language detection in `middleware.ts`.
- **RTL Standards**:
  - Exclusively use CSS logical properties (`ps-`, `pe-`, `ms-`, `me-`, `start-`, `end-`, `text-start`, `text-end`).
  - Directional icons (arrows, chevrons, play buttons where appropriate) flip via `rtl:rotate-180`.
  - Mockups mirror naturally (e.g. action stack in `ReelsFeed` on the end side: right in LTR, left in RTL).

---

## 3. Typography
- **Latin Display**: Space Grotesk (`--font-space-grotesk`) via `next/font/google`.
- **Latin Body**: Rubik (`--font-rubik`) via `next/font/google`.
- **Persian Body / General**: Estedad (`--font-estedad`) via webfont / @font-face with Vazirmatn fallback.
- **Persian Display**: Alan Sans (`--font-alan-sans`) via webfont / @font-face with Estedad / Vazirmatn fallback at weight 900.
- Fluid clamp typography for responsive headings.

---

## 4. Visual Design System
- **Theme**: Dark, editorial, tactical.
- **Base Colors**:
  - Background: `#0A0A0C`
  - Surface: `#141418`
  - Surface 2: `#1C1C22`
  - Border: `rgba(242, 237, 228, 0.10)`
  - Text: `#F2EDE4` (Warm Bone)
  - Text Muted: `#8C887E`
- **Accents**:
  1. Signal Lime `#D4F24A` (Primary CTA, active states, step numbers)
  2. Hot Coral `#FF6B4A` (Live/new indicators, singer role chips)
  3. Electric Violet `#9B7BFF` (Pro badges, songwriter role chips)
  4. Ice Mint `#5EEAD4` (Success states, instrumentalist chips)
- **Role Chip Color System**:
  - Producer: Signal Lime
  - Singer: Hot Coral
  - Songwriter: Electric Violet
  - Other / Instrumentalist: Ice Mint

---

## 5. Components & Page Architecture (9 Sections)
1. **Nav**:
   - SVG Brand Mark (overlapping angular waveform bars forming stylized "T").
   - Locale-aware Wordmark (`TuneTactics` / `تیون‌تاکتیکس`).
   - Sticky with subtle blur & border on scroll.
   - Language Switcher pill (`EN | فا`) with Signal Lime active state.
   - "Join waitlist" button scrolling smoothly to form.
2. **Hero**:
   - Headline & Subheadline.
   - Signal Lime primary CTA button ("Join the waitlist" / "به لیست انتظار بپیوند").
   - Trust badge ("Founding members get Pro free for life" / "اعضای بنیان‌گذار، پرو مادام‌العمر").
   - Interactive `ProfileCard` mockup on the end side.
3. **Problem**:
   - Large editorial typography, max-width ~720px, centered narrative.
4. **How It Works**:
   - 3 numbered steps with Signal Lime rounded number badges.
5. **Feature Showcase**:
   - 4 alternating blocks with pure JSX/CSS rich mockups:
     1. Portfolio profiles -> `ProfileCard`
     2. Discovery that works -> `FilterPanel`
     3. Reels for musicians -> `ReelsFeed`
     4. Connect and message -> `MessageThread`
6. **Waitlist Form**:
   - Email input, Role select, Looking for select.
   - Client-side validation + inline error/success messaging.
   - Auto-captures UTM parameters (`utm_source`, `utm_medium`, `utm_campaign`) and `referrer`.
   - Direct client Supabase submission with duplicate email handling (Postgres code `23505`).
7. **FAQ**:
   - 5 accordion questions using accessible HTML disclosure with RTL-aware chevron rotation.
8. **Final CTA**:
   - Value proposition restatement with quick jump to waitlist form.
9. **Footer**:
   - Wordmark, tagline, Privacy, Terms, Contact (`mailto:support@tunetactics.ir`), copyright.

---

## 6. Backend / Database & Analytics
- Supabase SQL Migration `supabase/migrations/0001_waitlist.sql`:
  - `waitlist` table with UUID primary key, unique email, role & looking_for constraints, locale, UTM columns, referrer, and timestamps.
  - Row Level Security (RLS) enabled with anon insert policy.
- PostHog / Vercel Analytics integration in `lib/analytics.ts` (environment-variable gated).

---

## 7. SEO, Metadata & OpenGraph
- Dynamic OpenGraph generator `app/[locale]/opengraph-image.tsx` (1200x630, dark theme, 4-accent bar, localized headlines).
- `app/[locale]/icon.svg` vector favicon.
- `robots.ts` and `sitemap.ts` supporting `/` and `/en`.
