# TuneTactics Pre-Launch Landing Page

TuneTactics (تیون‌تاکتیکس) is a community app for musicians — producers and singers — to showcase their work on rich portfolio profiles and find each other to collaborate.

This repository contains the pre-launch validation landing page built with **Next.js 14+ App Router**, **TypeScript**, **Tailwind CSS**, **next-intl**, and **Supabase**.

---

## Features & Tech Stack
- **Bilingual i18n & RTL:** Farsi (`fa`) as default at `/` with `dir="rtl"`, English (`en`) at `/en` with `dir="ltr"`.
- **Typography:** Space Grotesk (Latin display), Rubik (Latin body), Estedad (Persian body), and Alan Sans (Persian display).
- **Tactical Dark Theme:** Custom design system featuring Signal Lime (`#D4F24A`), Hot Coral (`#FF6B4A`), Electric Violet (`#9B7BFF`), and Ice Mint (`#5EEAD4`).
- **Interactive UI Mockups:** Pure JSX/CSS components (`ProfileCard`, `FilterPanel`, `ReelsFeed`, `MessageThread`) that mirror cleanly in RTL.
- **Supabase Waitlist Capture:** Direct client-side insertion with RLS policy, unique email constraint handling (`23505`), and automatic UTM parameter & referrer tracking.

---

## Placeholders & Configuration to Fill In

Before deploying to production, ensure the following environment variables are configured in your Vercel project or `.env.local` file:

1. **Supabase Credentials:**
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

2. **Analytics (Optional):**
   - `NEXT_PUBLIC_POSTHOG_KEY` (if using PostHog analytics)

3. **Database Migration:**
   - Execute the SQL migration found in `supabase/migrations/0001_waitlist.sql` on your Supabase project.

4. **Copy Review:**
   - Persian copy has been structured with ZWNJ and native tone; native speaker review is recommended prior to public launch.

5. **Support:**
   - Support email: `support@tunetactics.ir`

---

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the Farsi version, and [http://localhost:3000/en](http://localhost:3000/en) for English.
