"use client"

import { useTranslations } from 'next-intl';

const stepKeys = ['discovery', 'design', 'development', 'testing', 'launch'] as const;
const stepNumbers = ['01', '02', '03', '04', '05'];

export default function Process() {
  const t = useTranslations('process');

  return (
    <section className="px-6 py-24 sm:px-8 sm:py-32 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-gray-950 mb-4">{t('title')}</h2>
          <p className="text-lg text-gray-600 font-light">{t('subtitle')}</p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {stepKeys.map((key, idx) => (
            <div key={key} className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="text-3xl font-light text-gray-300">{stepNumbers[idx]}</div>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-medium text-gray-950 mb-3">{t(`steps.${key}.title`)}</h3>
                <p className="text-gray-600 leading-relaxed">{t(`steps.${key}.description`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
