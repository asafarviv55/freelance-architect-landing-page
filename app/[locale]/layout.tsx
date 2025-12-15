import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import WhatsAppButton from "@/components/WhatsAppButton"
import GoogleAnalytics from "@/components/GoogleAnalytics"
import "../globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.coresyslab.com'),
  title: "Asaf Arviv | Senior Software Architect & MVP Development",
  description:
    "SaaS development, system architecture, backend engineering, AI automation and MVP building for startups and businesses. Expert in cloud infrastructure and scaling solutions.",
  keywords: ["software architect", "MVP development", "SaaS", "backend engineering", "AI automation", "system design", "startup development"],
  authors: [{ name: "Asaf Arviv" }],
  creator: "Asaf Arviv",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "he_IL",
    title: "Asaf Arviv | Senior Software Architect & MVP Development",
    description: "SaaS development, system architecture, backend engineering, AI automation and MVP building for startups and businesses.",
    siteName: "Asaf Arviv - Software Architect",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asaf Arviv | Senior Software Architect & MVP Development",
    description: "SaaS development, system architecture, backend engineering, AI automation and MVP building for startups and businesses.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "0p8MjpdSrP6Fd8zlv0RZRqyha5XjlKdLe4r2D39KxJQ",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;

  // Validate locale
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();
  const isRTL = locale === 'he';

  return (
    <html lang={locale} dir={isRTL ? 'rtl' : 'ltr'}>
      <head>
        <GoogleAnalytics />
      </head>
      <body className={`font-sans antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
          <WhatsAppButton />
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  )
}
