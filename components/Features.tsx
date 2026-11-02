import React from 'react';
import { useTranslations } from 'next-intl';
import { ProfileCard } from './mockups/ProfileCard';
import { FilterPanel } from './mockups/FilterPanel';
import { ReelsFeed } from './mockups/ReelsFeed';
import { MessageThread } from './mockups/MessageThread';

export function Features() {
  const t = useTranslations('features');

  const featureList = [
    {
      key: 'profiles',
      mockup: <ProfileCard />,
      badge: 'Portfolio'
    },
    {
      key: 'discovery',
      mockup: <FilterPanel />,
      badge: 'Discovery'
    },
    {
      key: 'reels',
      mockup: <ReelsFeed />,
      badge: 'Reels'
    },
    {
      key: 'connect',
      mockup: <MessageThread />,
      badge: 'Messaging'
    }
  ];

  return (
    <section className="py-24 bg-surface/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {featureList.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={item.key}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                isEven ? '' : 'lg:grid-flow-dense'
              }`}
            >
              {/* Text side */}
              <div className={`lg:col-span-6 space-y-4 ${isEven ? 'lg:col-start-1' : 'lg:col-start-7'}`}>
                <div className="inline-block px-3 py-1 rounded-full bg-surface border border-border text-xs font-medium text-signal-lime">
                  {item.badge}
                </div>
                <h3 className="text-3xl sm:text-4xl font-display font-bold text-bone">
                  {t(`${item.key}.title`)}
                </h3>
                <p className="text-text-muted text-base sm:text-lg leading-relaxed">
                  {t(`${item.key}.body`)}
                </p>
              </div>

              {/* Mockup side */}
              <div className={`lg:col-span-6 flex justify-center ${isEven ? 'lg:col-start-7' : 'lg:col-start-1'}`}>
                {item.mockup}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
