"use client"

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useTransition } from 'react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (newLocale: string) => {
    // Remove current locale from pathname
    const pathWithoutLocale = pathname.replace(/^\/(en|he)/, '') || '/';
    startTransition(() => {
      router.push(`/${newLocale}${pathWithoutLocale}`);
    });
  };

  return (
    <div className="fixed top-5 left-5 z-50 flex gap-2">
      <button
        onClick={() => switchLocale('en')}
        disabled={isPending}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
          locale === 'en'
            ? 'bg-gray-950 text-white'
            : 'bg-white text-gray-700 border border-gray-300 hover:border-gray-400'
        } ${isPending ? 'opacity-50 cursor-wait' : ''}`}
        aria-label="Switch to English"
      >
        <svg className="w-5 h-5 rounded-full overflow-hidden" viewBox="0 0 36 36">
          <rect fill="#00247D" width="36" height="36"/>
          <path fill="#CF1B2B" d="M0 14.7h15.3V0h5.4v14.7H36v6.6H20.7V36h-5.4V21.3H0z"/>
          <path fill="#EEE" d="M0 18L36 0v4.2L6.4 18H0zm0 0L36 36v-4.2L6.4 18H0zm36 0L0 0v4.2L29.6 18H36zm0 0L0 36v-4.2L29.6 18H36z"/>
          <path fill="#CF1B2B" d="M0 0l15.3 13.2V0H0zm36 0L20.7 13.2V0H36zM0 36l15.3-13.2V36H0zm36 0L20.7 22.8V36H36z"/>
        </svg>
        EN
      </button>
      <button
        onClick={() => switchLocale('he')}
        disabled={isPending}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
          locale === 'he'
            ? 'bg-gray-950 text-white'
            : 'bg-white text-gray-700 border border-gray-300 hover:border-gray-400'
        } ${isPending ? 'opacity-50 cursor-wait' : ''}`}
        aria-label="Switch to Hebrew"
      >
        <svg className="w-5 h-5 rounded-full overflow-hidden" viewBox="0 0 36 36">
          <rect fill="#EEE" width="36" height="36"/>
          <rect fill="#0038B8" y="3" width="36" height="5"/>
          <rect fill="#0038B8" y="28" width="36" height="5"/>
          <path fill="#0038B8" d="M18 8l4.5 7.8H13.5L18 8zm0 16l-4.5-7.8h9L18 24zm-4.5-7.8L18 8l-4.5 7.8h9L18 24l4.5-7.8h-9z" fillRule="evenodd"/>
        </svg>
        HE
      </button>
    </div>
  );
}
