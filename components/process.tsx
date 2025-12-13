"use client"

import { useTranslations } from 'next-intl';

const stepKeys = ['discovery', 'design', 'development', 'testing', 'launch'] as const;

export default function Process() {
  const t = useTranslations('process');

  return (
    <section id="process" className="scroll-mt-20 px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-gray-950 mb-3 sm:mb-4">
            {t('title')}
          </h2>
          <p className="text-base sm:text-lg text-gray-500 font-light">
            {t('subtitle')}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {stepKeys.map((key, idx) => (
            <div
              key={key}
              className={`flex gap-4 sm:gap-6 ${idx !== stepKeys.length - 1 ? 'pb-8 sm:pb-10' : ''}`}
            >
              {/* Number and line */}
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-950 text-white text-sm sm:text-base font-medium">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                {idx !== stepKeys.length - 1 && (
                  <div className="w-px h-full bg-gray-200 mt-3" />
                )}
              </div>

              {/* Content */}
              <div className="flex-grow pb-2">
                <h3 className="text-lg sm:text-xl font-medium text-gray-950 mb-2">
                  {t(`steps.${key}.title`)}
                </h3>
                <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                  {t(`steps.${key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
