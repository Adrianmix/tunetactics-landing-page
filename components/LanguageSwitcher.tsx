'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const nextLocale = locale === 'fa' ? 'en' : 'fa';
    // Replace current locale segment in pathname
    const newPathname = pathname.startsWith('/en')
      ? pathname.replace('/en', nextLocale === 'fa' ? '' : '/en')
      : nextLocale === 'en'
      ? `/en${pathname}`
      : pathname;
    router.push(newPathname || '/');
  };

  return (
    <button
      onClick={toggleLocale}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border text-xs font-display font-medium text-bone hover:border-signal-lime/50 transition-colors"
      aria-label="Toggle language"
    >
      <Globe className="w-3.5 h-3.5 text-signal-lime" />
      <span>{locale === 'fa' ? 'EN | فا' : 'FA | en'}</span>
    </button>
  );
}
