"use client"

import { useTranslations } from 'next-intl';

const mvpKeys = ['buildFirst', 'fastDelivery', 'scalable'] as const;
const icons = ['🎯', '📈', '🔧'];

export default function MVPSection() {
  const t = useTranslations('mvpSection');

  return (
    <section className="px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-gray-950 mb-3 sm:mb-4">
            {t('title')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-500 font-light">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {mvpKeys.map((key, idx) => (
            <div key={key} className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gray-50 text-4xl sm:text-5xl">
                {icons[idx]}
              </div>
              <h3 className="text-lg sm:text-xl font-medium text-gray-950">
                {t(`items.${key}.title`)}
              </h3>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-xs mx-auto">
                {t(`items.${key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
