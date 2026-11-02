'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Logo } from './Logo';

export function Nav() {
  const t = useTranslations('nav');

  const scrollToWaitlist = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const formEl = document.getElementById('waitlist-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Logo />

        <div className="flex items-center gap-4">
          <a
            href="#waitlist-form"
            onClick={scrollToWaitlist}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-signal-lime text-background font-display font-bold text-xs hover:opacity-90 transition-opacity shadow-lg"
          >
            {t('join')}
          </a>
        </div>
      </div>
    </header>
  );
}
