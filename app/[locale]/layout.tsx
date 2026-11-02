import type { Metadata } from 'next';
import { Space_Grotesk, Rubik } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '../../i18n';
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from '@vercel/speed-insights/next';
import '../globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
  display: 'swap',
});

export async function generateMetadata(): Promise<Metadata> {
  const messages: any = await getMessages();
  return {
    title: messages.meta?.title || 'TuneTactics',
    description: messages.meta?.description || 'Show your sound. Find your people.',
  };
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} dir="ltr" className={`${spaceGrotesk.variable} ${rubik.variable}`}>
      <body className="font-sans">
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
      <Analytics/>
      <SpeedInsights/>
    </html>
  );
}
