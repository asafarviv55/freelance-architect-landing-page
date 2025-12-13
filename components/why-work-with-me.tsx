"use client"

import { useTranslations, useLocale } from 'next-intl';

export default function WhyWorkWithMe() {
  const t = useTranslations('whyWorkWithMe');
  const locale = useLocale();
  const reasons = t.raw('reasons') as string[];

  return (
    <section id="about" className="scroll-mt-20 px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-gray-950 mb-3 sm:mb-4">
            {t('title')}
          </h2>
          <p className="text-xl sm:text-2xl text-gray-700 font-light mb-6">
            {t('subtitle')}
          </p>
          <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto">
            {t('description')}
          </p>
        </div>

        {/* Who Is It For */}
        <div className="mb-12">
          <h3 className="text-xl sm:text-2xl font-medium text-gray-950 text-center mb-6">
            {t('whoIsItFor')}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((reason, idx) => (
              <div
                key={idx}
                className="flex gap-4 p-4 sm:p-5 bg-white rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-950 text-white text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed pt-1">
                  {reason}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-white rounded-2xl p-8 sm:p-10 border border-gray-100">
          <h3 className="text-xl sm:text-2xl font-medium text-gray-950 mb-3">
            {t('cta.title')}
          </h3>
          <p className="text-gray-500 mb-6 max-w-xl mx-auto">
            {t('cta.description')}
          </p>
          <a
            href={`/${locale}#contact`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-950 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
          >
            {t('cta.title')}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
