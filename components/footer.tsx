"use client"

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import Link from 'next/link';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();

  return (
    <footer className="px-6 py-12 sm:py-16 sm:px-8 lg:px-12 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-10 sm:mb-12">
          <div>
            <h3 className="font-medium mb-4 text-sm uppercase tracking-wider text-gray-400">
              {t('services')}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  {t('mvpDevelopment')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  {t('saasTitle')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  {t('aiIntegration')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  {t('architecture')}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4 text-sm uppercase tracking-wider text-gray-400">
              {t('company')}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  {t('about')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  {t('portfolio')}
                </a>
              </li>
              <li>
                <Link href={`/${locale}/blog`} className="text-gray-300 hover:text-white transition-colors">
                  {t('blog')}
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  {t('contact')}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4 text-sm uppercase tracking-wider text-gray-400">
              {t('connect')}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Email
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-medium mb-4 text-sm uppercase tracking-wider text-gray-400">
              {t('newsletter')}
            </h3>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              {t('newsletterDescription')}
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder={t('emailPlaceholder')}
                className="flex-grow px-4 py-2.5 rounded-lg bg-gray-900 text-white text-sm placeholder-gray-500 border border-gray-800 focus:border-gray-600 focus:ring-1 focus:ring-gray-600 outline-none transition-colors"
              />
              <button className="px-4 py-2.5 bg-white text-gray-950 text-sm font-medium rounded-lg hover:bg-gray-100 transition-colors">
                →
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>{t('copyright')}</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <Link href={`/${locale}/privacy-policy`} className="hover:text-white transition-colors">
              {t('privacy')}
            </Link>
            <Link href={`/${locale}/terms-of-use`} className="hover:text-white transition-colors">
              {t('terms')}
            </Link>
            <Link href={`/${locale}/accessibility`} className="hover:text-white transition-colors">
              {locale === 'he' ? 'נגישות' : 'Accessibility'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
