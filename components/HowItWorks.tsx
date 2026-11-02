import React from 'react';
import { useTranslations } from 'next-intl';

export function HowItWorks() {
  const t = useTranslations('how');
  const steps: string[] = t.raw('steps');

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-bone tracking-tight">
            {t('heading')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-surface border border-border rounded-2xl p-8 relative flex flex-col justify-between hover:border-signal-lime/40 transition-colors group"
            >
              <div>
                {/* Number badge */}
                <div className="w-10 h-10 rounded-xl bg-signal-lime/10 border border-signal-lime/30 text-signal-lime font-display font-bold text-base flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  0{index + 1}
                </div>
                <p className="text-bone text-base leading-relaxed">
                  {step}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
