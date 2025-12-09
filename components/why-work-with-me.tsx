"use client"

import { useTranslations } from 'next-intl';

export default function WhyWorkWithMe() {
  const t = useTranslations('whyWorkWithMe');
  const reasons = t.raw('reasons') as string[];

  return (
    <section className="px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-gray-950 mb-3 sm:mb-4">
            {t('title')}
          </h2>
          <p className="text-base sm:text-lg text-gray-500 font-light">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="flex gap-4 p-4 sm:p-5 bg-white rounded-xl border border-gray-100"
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-gray-950 text-white text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed pt-0.5">
                {reason}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
