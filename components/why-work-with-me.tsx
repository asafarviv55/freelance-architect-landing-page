"use client"

import { useTranslations } from 'next-intl';

export default function WhyWorkWithMe() {
  const t = useTranslations('whyWorkWithMe');
  const reasons = t.raw('reasons') as string[];

  return (
    <section className="px-6 py-24 sm:px-8 sm:py-32 lg:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-gray-950 mb-4">{t('title')}</h2>
          <p className="text-lg text-gray-600 font-light">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {reasons.map((reason, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-6 w-6 rounded-full bg-gray-950 text-white text-sm font-medium">
                  ✓
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
