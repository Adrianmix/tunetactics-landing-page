'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { ProfileCard } from './mockups/ProfileCard';

export function Hero() {
  const t = useTranslations('hero');

  const scrollToWaitlist = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const formEl = document.getElementById('waitlist-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-16 pb-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric-violet/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Hero text */}
          <div className="lg:col-span-7 text-start space-y-6">
            {/* Tag pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-border text-xs text-signal-lime font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t('trust')}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight text-bone leading-[1.1]">
              {t('headline')}
            </h1>

            <p className="text-lg sm:text-xl text-text-muted max-w-2xl font-normal leading-relaxed">
              {t('subheadline')}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <a
                href="#waitlist-form"
                onClick={scrollToWaitlist}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-signal-lime text-background font-display font-bold text-sm hover:opacity-95 transition-all shadow-xl hover:scale-[1.02]"
              >
                <span>{t('cta')}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </a>

              <div className="flex items-center gap-2 text-xs text-text-muted px-2">
                <ShieldCheck className="w-4 h-4 text-ice-mint" />
                <span>No spam. Zero platform fees for early members.</span>
              </div>
            </div>
          </div>

          {/* Hero mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <ProfileCard />
          </div>

        </div>
      </div>
    </section>
  );
}
