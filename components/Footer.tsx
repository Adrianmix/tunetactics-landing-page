import React from 'react';
import { useTranslations } from 'next-intl';
import { Logo } from './Logo';

export function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Logo />
          <p className="text-xs text-text-muted">{t('tagline')}</p>
        </div>

        <div className="flex items-center gap-6 text-xs text-text-muted">
          <a href="#" className="hover:text-bone transition-colors">{t('privacy')}</a>
          <a href="#" className="hover:text-bone transition-colors">{t('terms')}</a>
          <a href="mailto:support@tunetactics.ir" className="hover:text-bone transition-colors">{t('contact')}</a>
        </div>

        <div className="text-xs text-text-muted/60">
          © {new Date().getFullYear()} TuneTactics. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
