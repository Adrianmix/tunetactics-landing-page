import type { Metadata } from 'next';
import { Space_Grotesk, Rubik, Vazirmatn } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '../../i18n';
import '../globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const rubik = Rubik({
  subsets: ['latin', 'arabic'],
  variable: '--font-rubik',
  display: 'swap',
});

const vazirmatn = Vazirmatn({
  subsets: ['arabic'],
  variable: '--font-vazirmatn',
  display: 'swap',
});

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const messages: any = await getMessages();
  return {
    title: messages.meta?.title || 'TuneTactics',
    description: messages.meta?.description || 'Show your sound. Find your people.',
    alternates: {
      languages: {
        'fa': '/',
        'en': '/en',
      },
    },
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
  const isFa = locale === 'fa';

  // Fonts assignment per typography spec:
  // Latin display: Space Grotesk, body: Rubik
  // Persian display (Alan Sans / Vazirmatn), body (Estedad / Vazirmatn)
  const displayFont = isFa ? vazirmatn.variable : spaceGrotesk.variable;
  const bodyFont = isFa ? vazirmatn.variable : rubik.variable;

  return (
    <html lang={locale} dir={isFa ? 'rtl' : 'ltr'} className={`${displayFont} ${bodyFont} ${spaceGrotesk.variable} ${rubik.variable} ${vazirmatn.variable}`}>
      <body className={isFa ? 'font-sans' : 'font-sans'}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
