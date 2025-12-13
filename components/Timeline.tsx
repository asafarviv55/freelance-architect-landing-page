"use client"

import { useTranslations } from 'next-intl';

const timelineData = [
  {
    key: 'freelance',
    year: '2018',
    yearEnd: 'Present',
    icon: '🚀',
  },
  {
    key: 'motorola',
    year: '2015',
    yearEnd: '2018',
    icon: '📡',
  },
  {
    key: 'webpals',
    year: '2013',
    yearEnd: '2015',
    icon: '🌐',
  },
  {
    key: 'surecomp',
    year: '2012',
    yearEnd: '2013',
    icon: '💼',
  },
  {
    key: 'bank',
    year: '2009',
    yearEnd: '2012',
    icon: '🏦',
  },
  {
    key: 'education',
    year: '2006',
    yearEnd: '2009',
    icon: '🎓',
  },
  {
    key: 'military',
    year: '2002',
    yearEnd: '2005',
    icon: '✈️',
  },
];

export default function Timeline() {
  const t = useTranslations('timeline');

  return (
    <section id="experience" className="scroll-mt-20 px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-gray-950 mb-3 sm:mb-4">
            {t('title')}
          </h2>
          <p className="text-base sm:text-lg text-gray-500 font-light max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gray-200 sm:-translate-x-px" />

          {timelineData.map((item, idx) => (
            <div
              key={item.key}
              className={`relative flex items-start gap-6 sm:gap-8 mb-8 sm:mb-12 ${
                idx % 2 === 0 ? 'sm:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className={`flex-1 ${idx % 2 === 0 ? 'sm:text-right' : ''} ml-12 sm:ml-0`}>
                <div
                  className={`bg-white p-5 sm:p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300 ${
                    idx % 2 === 0 ? 'sm:mr-8' : 'sm:ml-8'
                  }`}
                >
                  <div className={`flex items-center gap-2 mb-2 ${idx % 2 === 0 ? 'sm:justify-end' : ''}`}>
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-sm font-medium text-gray-400">
                      {item.year} - {item.yearEnd}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-medium text-gray-950 mb-1">
                    {t(`items.${item.key}.role`)}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    {t(`items.${item.key}.company`)}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {t(`items.${item.key}.description`)}
                  </p>
                </div>
              </div>

              {/* Timeline dot */}
              <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 w-8 h-8 rounded-full bg-gray-950 border-4 border-white shadow-md flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden sm:block flex-1" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
