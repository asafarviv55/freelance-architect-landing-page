"use client"

import { useTranslations } from 'next-intl';

const serviceKeys = ['mvp', 'saas', 'ai', 'backend', 'cloud', 'architecture'] as const;
const icons = ['⚡', '🚀', '🤖', '⚙️', '☁️', '🏛️'];

export default function Services() {
  const t = useTranslations('services');

  return (
    <section id="services" className="scroll-mt-20 px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-gray-950 mb-3 sm:mb-4">
            {t('title')}
          </h2>
          <p className="text-base sm:text-lg text-gray-500 font-light max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {serviceKeys.map((key, idx) => (
            <div
              key={key}
              className="group p-6 sm:p-8 bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-xl hover:shadow-gray-100/50 transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {icons[idx]}
              </div>
              <h3 className="text-lg sm:text-xl font-medium text-gray-950 mb-2 sm:mb-3">
                {t(`items.${key}.title`)}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {t(`items.${key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
