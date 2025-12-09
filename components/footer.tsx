"use client"

import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="px-6 py-16 sm:px-8 lg:px-12 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-medium mb-4">{t('services')}</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t('mvpDevelopment')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t('saasTitle')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t('aiIntegration')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t('architecture')}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">{t('company')}</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t('about')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t('portfolio')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t('blog')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t('contact')}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">{t('connect')}</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Email
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">{t('newsletter')}</h3>
            <p className="text-sm text-gray-400 mb-4">{t('newsletterDescription')}</p>
            <input
              type="email"
              placeholder={t('emailPlaceholder')}
              className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white text-sm placeholder-gray-500 border border-gray-800 focus:border-gray-700 outline-none"
            />
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>{t('copyright')}</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              {t('privacy')}
            </a>
            <a href="#" className="hover:text-white transition-colors">
              {t('terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
