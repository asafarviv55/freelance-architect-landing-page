"use client"

import { useState, useEffect, useTransition } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

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
    { href: `/${locale}#experience`, label: t('experience') },
    { href: `/${locale}/faq`, label: 'FAQ', isLink: true },
    { href: `/${locale}/blog`, label: t('blog'), isLink: true },
    { href: `/${locale}#contact`, label: t('contact') },
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
      dir="ltr"
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
            className="hover:opacity-80 transition-opacity"
          >
            <Image
              src="/logo.png"
              alt="CoreSysLab"
              width={180}
              height={45}
              className="h-72 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between flex-1 ml-8">
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
              className="px-4 lg:px-5 py-2 bg-green-500 text-white text-sm font-medium rounded-full hover:bg-green-600 transition-colors inline-flex items-center gap-1.5"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
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
