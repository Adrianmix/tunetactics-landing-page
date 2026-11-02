import React from 'react';
import { useTranslations } from 'next-intl';

export function Problem() {
  const t = useTranslations('problem');

  return (
    <section className="py-20 border-y border-border bg-surface/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-bone tracking-tight leading-tight">
          {t('heading')}
        </h2>
        <p className="text-lg sm:text-xl text-text-muted leading-relaxed font-normal">
          {t('body')}
        </p>
      </div>
    </section>
  );
}
