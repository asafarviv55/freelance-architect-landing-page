"use client"

import { useTranslations } from 'next-intl';
import Image from 'next/image';

const projectKeys = ['project1', 'project2', 'project3'] as const;

const projectImages: Record<string, string> = {
  project1: '/portfolio/fintech-platform.png',
  project2: '/portfolio/data-insights.png',
  project3: '/portfolio/meeting-analysis.png',
};

export default function Portfolio() {
  const t = useTranslations('portfolio');

  return (
    <section id="portfolio" className="px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-gray-950 mb-3 sm:mb-4">
            {t('title')}
          </h2>
          <p className="text-base sm:text-lg text-gray-500 font-light max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {projectKeys.map((key) => (
            <div
              key={key}
              className="group bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-xl hover:shadow-gray-100/50 transition-all duration-300"
            >
              <div className="aspect-video bg-gray-200 relative overflow-hidden">
                <Image
                  src={projectImages[key]}
                  alt={t(`items.${key}.title`)}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 text-xs font-medium bg-gray-200 text-gray-700 rounded-full">
                    {t(`items.${key}.category`)}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-medium text-gray-950 mb-2 sm:mb-3 group-hover:text-gray-700 transition-colors">
                  {t(`items.${key}.title`)}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {t(`items.${key}.description`)}
                </p>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">
                    {t('techStack')}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {(t.raw(`items.${key}.technologies`) as string[]).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs bg-white text-gray-600 rounded border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-4 text-sm">
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">
                        {t('resultLabel')}
                      </p>
                      <p className="text-gray-950 font-medium">
                        {t(`items.${key}.result`)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
