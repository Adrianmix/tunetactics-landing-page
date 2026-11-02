'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { ArrowRight, Sparkles } from 'lucide-react';

export function FinalCTA() {
  const t = useTranslations('cta_final');

  const scrollToWaitlist = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const formEl = document.getElementById('waitlist-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-surface/50 border-t border-border">
      <div className="absolute inset-0 bg-gradient-to-tr from-signal-lime/5 via-transparent to-electric-violet/5 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-border text-xs text-signal-lime font-medium">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Founding Member Access</span>
        </div>

        <h2 className="text-4xl sm:text-6xl font-display font-bold text-bone tracking-tight">
          {t('heading')}
        </h2>

        <p className="text-lg sm:text-xl text-text-muted max-w-xl mx-auto">
          {t('subheading')}
        </p>

        <div>
          <a
            href="#waitlist-form"
            onClick={scrollToWaitlist}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-signal-lime text-background font-display font-bold text-sm hover:opacity-95 transition-all shadow-2xl hover:scale-105"
          >
            <span>{t('button')}</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </a>
        </div>
      </div>
    </section>
  );
}
