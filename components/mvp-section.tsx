"use client"

import { useTranslations } from 'next-intl';

const mvpKeys = ['buildFirst', 'fastDelivery', 'scalable'] as const;
const icons = ['🎯', '📈', '🔧'];

export default function MVPSection() {
  const t = useTranslations('mvpSection');

  return (
    <section className="px-6 py-24 sm:px-8 sm:py-32 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-gray-950 mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 font-light">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mvpKeys.map((key, idx) => (
            <div key={key} className="text-center space-y-4">
              <div className="text-5xl flex justify-center">{icons[idx]}</div>
              <h3 className="text-lg font-medium text-gray-950">{t(`items.${key}.title`)}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{t(`items.${key}.description`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
