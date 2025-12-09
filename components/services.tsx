"use client"

import { useTranslations } from 'next-intl';

const serviceKeys = ['mvp', 'saas', 'ai', 'backend', 'cloud', 'architecture'] as const;
const icons = ['⚡', '🚀', '🤖', '⚙️', '☁️', '🏛️'];

export default function Services() {
  const t = useTranslations('services');

  return (
    <section className="px-6 py-24 sm:px-8 sm:py-32 lg:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-gray-950 mb-4">{t('title')}</h2>
          <p className="text-lg text-gray-600 font-light">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceKeys.map((key, idx) => (
            <div
              key={key}
              className="p-8 bg-white rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl mb-4">{icons[idx]}</div>
              <h3 className="text-xl font-medium text-gray-950 mb-3">{t(`items.${key}.title`)}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{t(`items.${key}.description`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
