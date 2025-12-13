"use client"

import { useState, useEffect, useTransition } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Header() {
  const t = useTranslations('header');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const isHebrew = locale === 'he';
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const switchLocale = () => {
    const newLocale = locale === 'en' ? 'he' : 'en';
    const pathWithoutLocale = pathname.replace(/^\/(en|he)/, '') || '/';
    startTransition(() => {
      router.push(`/${newLocale}${pathWithoutLocale}`);
    });
  };

  const navItems = [
    { href: `/${locale}#services`, label: t('services') },
    { href: `/${locale}#portfolio`, label: t('portfolio') },
    { href: `/${locale}#about`, label: t('about') },
    { href: `/${locale}#process`, label: t('process') },
    { href: `/${locale}/blog`, label: t('blog'), isLink: true },
  ];

  const isHomePage = pathname === `/${locale}` || pathname === `/${locale}/`;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const hashIndex = href.indexOf('#');
    if (hashIndex !== -1 && isHomePage) {
      e.preventDefault();
      const hash = href.substring(hashIndex);
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMobileMenuOpen(false);
    } else {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="text-lg sm:text-xl font-medium text-gray-950 hover:text-gray-700 transition-colors"
          >
            CoreSysLab
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => (
              item.isLink ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 lg:px-4 py-2 text-sm text-gray-600 hover:text-gray-950 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="px-3 lg:px-4 py-2 text-sm text-gray-600 hover:text-gray-950 transition-colors"
                >
                  {item.label}
                </a>
              )
            ))}
            {/* Language Toggle */}
            <button
              onClick={switchLocale}
              disabled={isPending}
              className={`px-3 py-2 text-sm text-gray-600 hover:text-gray-950 transition-colors ${isPending ? 'opacity-50' : ''}`}
              aria-label="Switch language"
            >
              {locale === 'en' ? 'עב' : 'EN'}
            </button>
            <a
              href="https://wa.me/972546522485?text=Hi%20Asaf,%20I'm%20interested%20in%20your%20development%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 lg:px-5 py-2 bg-green-500 text-white text-sm font-medium rounded-full hover:bg-green-600 transition-colors"
            >
              {t('contact')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-950 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                item.isLink ? (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-4 py-3 text-gray-600 hover:text-gray-950 hover:bg-gray-50 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="px-4 py-3 text-gray-600 hover:text-gray-950 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    {item.label}
                  </a>
                )
              ))}
              {/* Language Toggle Mobile */}
              <button
                onClick={() => {
                  switchLocale();
                  setIsMobileMenuOpen(false);
                }}
                disabled={isPending}
                className={`px-4 py-3 text-gray-600 hover:text-gray-950 hover:bg-gray-50 rounded-lg transition-colors flex items-center gap-2 ${isPending ? 'opacity-50' : ''}`}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9.25" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M12 2.75C9.5 2.75 7.5 6.75 7.5 12C7.5 17.25 9.5 21.25 12 21.25C14.5 21.25 16.5 17.25 16.5 12C16.5 6.75 14.5 2.75 12 2.75Z" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                {locale === 'en' ? 'עברית' : 'English'}
              </button>
              <a
                href="https://wa.me/972546522485?text=Hi%20Asaf,%20I'm%20interested%20in%20your%20development%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-4 mt-2 px-4 py-3 bg-green-500 text-white text-sm font-medium rounded-full hover:bg-green-600 transition-colors text-center"
              >
                {t('contact')}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
