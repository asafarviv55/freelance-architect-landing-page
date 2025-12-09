"use client"

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useState, useTransition, useRef, useEffect } from 'react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const switchLocale = (newLocale: string) => {
    const pathWithoutLocale = pathname.replace(/^\/(en|he)/, '') || '/';
    startTransition(() => {
      router.push(`/${newLocale}${pathWithoutLocale}`);
    });
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="fixed top-4 left-4 z-50" ref={dropdownRef}>
      {/* Globe button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isPending}
        className={`p-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm hover:bg-white hover:shadow-md transition-all ${
          isPending ? 'opacity-50 cursor-wait' : ''
        }`}
        aria-label="Switch language"
        title="Switch language"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9.25" stroke="#374151" strokeWidth="1.5"/>
          <path d="M12 2.75C9.5 2.75 7.5 6.75 7.5 12C7.5 17.25 9.5 21.25 12 21.25C14.5 21.25 16.5 17.25 16.5 12C16.5 6.75 14.5 2.75 12 2.75Z" stroke="#374151" strokeWidth="1.5"/>
          <path d="M3.5 9C3.5 9 6.5 10 12 10C17.5 10 20.5 9 20.5 9" stroke="#374151" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M3.5 15C3.5 15 6.5 14 12 14C17.5 14 20.5 15 20.5 15" stroke="#374151" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute top-12 left-0 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden min-w-[120px]">
          <button
            onClick={() => switchLocale('en')}
            className={`w-full px-3 py-2 text-sm text-left flex items-center gap-2 hover:bg-gray-50 transition-colors ${
              locale === 'en' ? 'bg-gray-50 font-medium' : ''
            }`}
          >
            <svg className="w-5 h-5 rounded-full shadow-sm flex-shrink-0" viewBox="0 0 36 36">
              <rect fill="#00247D" width="36" height="36"/>
              <path fill="#CF1B2B" d="M0 14.7h15.3V0h5.4v14.7H36v6.6H20.7V36h-5.4V21.3H0z"/>
              <path fill="#EEE" d="M0 18L36 0v4.2L6.4 18H0zm0 0L36 36v-4.2L6.4 18H0zm36 0L0 0v4.2L29.6 18H36zm0 0L0 36v-4.2L29.6 18H36z"/>
              <path fill="#CF1B2B" d="M0 0l15.3 13.2V0H0zm36 0L20.7 13.2V0H36zM0 36l15.3-13.2V36H0zm36 0L20.7 22.8V36H36z"/>
            </svg>
            English
            {locale === 'en' && <span className="ml-auto text-gray-400">✓</span>}
          </button>
          <button
            onClick={() => switchLocale('he')}
            className={`w-full px-3 py-2 text-sm text-left flex items-center gap-2 hover:bg-gray-50 transition-colors ${
              locale === 'he' ? 'bg-gray-50 font-medium' : ''
            }`}
          >
            <svg className="w-5 h-5 rounded-full shadow-sm flex-shrink-0" viewBox="0 0 36 36">
              <rect fill="#EEE" width="36" height="36"/>
              <rect fill="#0038B8" y="3" width="36" height="5"/>
              <rect fill="#0038B8" y="28" width="36" height="5"/>
              <path fill="#0038B8" d="M18 8l4.5 7.8H13.5L18 8zm0 16l-4.5-7.8h9L18 24zm-4.5-7.8L18 8l-4.5 7.8h9L18 24l4.5-7.8h-9z" fillRule="evenodd"/>
            </svg>
            עברית
            {locale === 'he' && <span className="ml-auto text-gray-400">✓</span>}
          </button>
        </div>
      )}
    </div>
  );
}
