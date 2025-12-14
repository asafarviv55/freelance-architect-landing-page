"use client"

import { useLocale } from 'next-intl';
import Link from 'next/link';
import Header from '@/components/Header';
import Image from 'next/image';

export default function FintechCaseStudyPage() {
  const locale = useLocale();
  const isHebrew = locale === 'he';

  const content = {
    en: {
      backToHome: "← Back to Portfolio",
      badge: "MVP Development",
      title: "FinTech Payment Platform",
      subtitle: "Built a complete payment processing MVP for a startup, enabling secure transactions and real-time reporting from day one.",
      result: "Launched in 6 weeks",

      overview: {
        title: "Project Overview",
        client: "Early-stage FinTech Startup",
        timeline: "6 weeks",
        role: "Sole Developer & Architect",
        description: "A funded startup needed to launch a payment processing platform quickly to start validating their business model with real customers. They had a tight runway and needed to move fast without compromising on security or scalability."
      },

      challenge: {
        title: "The Challenge",
        points: [
          "Launch a fully functional payment platform in under 2 months",
          "Handle sensitive financial data with bank-grade security",
          "Build for scale from day one—rewriting later wasn't an option",
          "Integrate with Stripe for payment processing and compliance",
          "Provide real-time transaction reporting for both merchants and admins"
        ]
      },

      solution: {
        title: "The Solution",
        description: "I designed and built a complete payment processing system with a focus on security, reliability, and speed to market.",
        features: [
          { title: "Secure Payment Flow", description: "PCI-compliant payment processing using Stripe, with tokenization to ensure sensitive card data never touches our servers." },
          { title: "Real-Time Dashboard", description: "Live transaction monitoring, revenue analytics, and reporting for merchants to track their business performance." },
          { title: "Multi-Merchant Support", description: "Architecture supporting multiple merchants with isolated data, individual configurations, and separate reporting." },
          { title: "Webhook Processing", description: "Reliable event handling for payment confirmations, refunds, disputes, and subscription lifecycle events." },
          { title: "Admin Tools", description: "Internal dashboard for customer support, transaction investigation, and platform analytics." }
        ]
      },

      techStack: {
        title: "Technology Stack",
        categories: [
          { name: "Backend", items: ["Node.js", "Express", "TypeScript"] },
          { name: "Database", items: ["PostgreSQL", "Redis"] },
          { name: "Payments", items: ["Stripe API", "Webhooks"] },
          { name: "Frontend", items: ["React", "Tailwind CSS"] },
          { name: "Infrastructure", items: ["AWS", "Docker", "GitHub Actions"] }
        ]
      },

      results: {
        title: "Results",
        metrics: [
          { value: "6 weeks", label: "From kickoff to launch" },
          { value: "0", label: "Security incidents" },
          { value: "99.9%", label: "Uptime since launch" },
          { value: "$2M+", label: "Processed in first quarter" }
        ],
        description: "The platform launched on schedule and has been processing payments reliably ever since. The startup was able to start validating their business model with real customers and real transactions, leading to their next funding round."
      },

      testimonial: {
        quote: "Asaf delivered exactly what we needed—a production-ready payment platform in record time. The code quality was excellent, and we've been able to build on his foundation as we've grown.",
        author: "Founder & CEO"
      },

      cta: {
        title: "Need a Similar Solution?",
        description: "If you're building a fintech product or need payment processing integrated into your platform, let's talk.",
        button: "Discuss Your Project"
      }
    },
    he: {
      backToHome: "→ חזרה לפורטפוליו",
      badge: "פיתוח MVP",
      title: "פלטפורמת תשלומים פינטק",
      subtitle: "בניתי MVP מלא לעיבוד תשלומים לסטארטאפ, שמאפשר עסקאות מאובטחות ודיווח בזמן אמת מיום ראשון.",
      result: "הושק ב-6 שבועות",

      overview: {
        title: "סקירת הפרויקט",
        client: "סטארטאפ פינטק בשלב מוקדם",
        timeline: "6 שבועות",
        role: "מפתח וארכיטקט יחיד",
        description: "סטארטאפ ממומן היה צריך להשיק פלטפורמת עיבוד תשלומים במהירות כדי להתחיל לאמת את המודל העסקי עם לקוחות אמיתיים. היה להם runway צפוף והם היו צריכים לנוע מהר בלי להתפשר על אבטחה או סקיילביליות."
      },

      challenge: {
        title: "האתגר",
        points: [
          "השקת פלטפורמת תשלומים פונקציונלית מלאה בפחות מחודשיים",
          "טיפול בנתונים פיננסיים רגישים עם אבטחה ברמת בנק",
          "בנייה לסקייל מיום ראשון—שכתוב מאוחר יותר לא היה אופציה",
          "אינטגרציה עם Stripe לעיבוד תשלומים ותאימות",
          "דיווח עסקאות בזמן אמת גם לסוחרים וגם למנהלים"
        ]
      },

      solution: {
        title: "הפתרון",
        description: "עיצבתי ובניתי מערכת עיבוד תשלומים מלאה עם פוקוס על אבטחה, אמינות ומהירות הגעה לשוק.",
        features: [
          { title: "זרימת תשלום מאובטחת", description: "עיבוד תשלומים תואם PCI באמצעות Stripe, עם tokenization כדי להבטיח שנתוני כרטיס רגישים לעולם לא נוגעים בשרתים שלנו." },
          { title: "דשבורד בזמן אמת", description: "ניטור עסקאות חי, אנליטיקס הכנסות ודיווח לסוחרים לעקוב אחר ביצועי העסק." },
          { title: "תמיכה במרובה סוחרים", description: "ארכיטקטורה התומכת במספר סוחרים עם נתונים מבודדים, תצורות אישיות ודיווח נפרד." },
          { title: "עיבוד Webhooks", description: "טיפול אמין באירועים לאישורי תשלום, החזרים, מחלוקות ואירועי מחזור חיי מנויים." },
          { title: "כלי אדמין", description: "דשבורד פנימי לתמיכת לקוחות, חקירת עסקאות ואנליטיקס פלטפורמה." }
        ]
      },

      techStack: {
        title: "סטאק טכנולוגי",
        categories: [
          { name: "Backend", items: ["Node.js", "Express", "TypeScript"] },
          { name: "מסד נתונים", items: ["PostgreSQL", "Redis"] },
          { name: "תשלומים", items: ["Stripe API", "Webhooks"] },
          { name: "Frontend", items: ["React", "Tailwind CSS"] },
          { name: "תשתית", items: ["AWS", "Docker", "GitHub Actions"] }
        ]
      },

      results: {
        title: "תוצאות",
        metrics: [
          { value: "6 שבועות", label: "מהתחלה להשקה" },
          { value: "0", label: "תקריות אבטחה" },
          { value: "99.9%", label: "זמינות מאז ההשקה" },
          { value: "$2M+", label: "עובד ברבעון הראשון" }
        ],
        description: "הפלטפורמה הושקה בזמן ומעבדת תשלומים בצורה אמינה מאז. הסטארטאפ הצליח להתחיל לאמת את המודל העסקי עם לקוחות ועסקאות אמיתיים, מה שהוביל לסבב הגיוס הבא."
      },

      testimonial: {
        quote: "אסף סיפק בדיוק מה שהיינו צריכים—פלטפורמת תשלומים מוכנה לפרודקשן בזמן שיא. איכות הקוד הייתה מצוינת, והצלחנו לבנות על היסודות שלו תוך כדי צמיחה.",
        author: "מייסד ומנכ\"ל"
      },

      cta: {
        title: "צריך פתרון דומה?",
        description: "אם אתה בונה מוצר פינטק או צריך לשלב עיבוד תשלומים בפלטפורמה שלך, בוא נדבר.",
        button: "דון בפרויקט שלך"
      }
    }
  };

  const t = isHebrew ? content.he : content.en;

  return (
    <>
      <Header />
      <div className={`min-h-screen bg-white ${isHebrew ? 'rtl' : 'ltr'}`} dir={isHebrew ? 'rtl' : 'ltr'}>
        {/* Hero */}
        <section className="pt-24 pb-16 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-4xl mx-auto">
            <Link href={`/${locale}#portfolio`} className="inline-block text-gray-500 hover:text-gray-700 transition-colors mb-8">{t.backToHome}</Link>
            <span className="inline-block px-4 py-1.5 text-sm font-medium bg-green-100 text-green-700 rounded-full mb-6">{t.badge}</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-gray-950 mb-4">{t.title}</h1>
            <p className="text-lg text-gray-600 mb-4">{t.subtitle}</p>
            <span className="inline-block text-green-600 font-medium">{t.result}</span>
          </div>
        </section>

        {/* Project Image */}
        <section className="px-6 sm:px-8 lg:px-12 pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden relative">
              <Image src="/portfolio/fintech-platform.png" alt={t.title} fill className="object-cover" />
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 px-6 sm:px-8 lg:px-12 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-light text-gray-950 mb-6">{t.overview.title}</h2>
            <div className="grid grid-cols-3 gap-6 mb-6">
              <div><p className="text-xs text-gray-400 uppercase mb-1">Client</p><p className="text-gray-950">{t.overview.client}</p></div>
              <div><p className="text-xs text-gray-400 uppercase mb-1">Timeline</p><p className="text-gray-950">{t.overview.timeline}</p></div>
              <div><p className="text-xs text-gray-400 uppercase mb-1">Role</p><p className="text-gray-950">{t.overview.role}</p></div>
            </div>
            <p className="text-gray-600">{t.overview.description}</p>
          </div>
        </section>

        {/* Challenge */}
        <section className="py-16 px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-light text-gray-950 mb-6">{t.challenge.title}</h2>
            <ul className="space-y-3">
              {t.challenge.points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">•</span>
                  <span className="text-gray-600">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Solution */}
        <section className="py-16 px-6 sm:px-8 lg:px-12 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-light text-gray-950 mb-4">{t.solution.title}</h2>
            <p className="text-gray-600 mb-8">{t.solution.description}</p>
            <div className="space-y-4">
              {t.solution.features.map((f, i) => (
                <div key={i} className="p-6 bg-white rounded-xl border border-gray-200">
                  <h3 className="text-lg font-medium text-gray-950 mb-2">{f.title}</h3>
                  <p className="text-gray-600 text-sm">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-16 px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-light text-gray-950 mb-6">{t.techStack.title}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-6">
              {t.techStack.categories.map((c, i) => (
                <div key={i}>
                  <p className="text-xs text-gray-400 uppercase mb-2">{c.name}</p>
                  <div className="flex flex-wrap gap-2">
                    {c.items.map((item, j) => (
                      <span key={j} className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-16 px-6 sm:px-8 lg:px-12 bg-gray-950 text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-light mb-8">{t.results.title}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
              {t.results.metrics.map((m, i) => (
                <div key={i} className="text-center">
                  <p className="text-3xl font-light text-green-400 mb-1">{m.value}</p>
                  <p className="text-sm text-gray-400">{m.label}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-300">{t.results.description}</p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-light text-gray-950 mb-4">{t.cta.title}</h2>
            <p className="text-gray-600 mb-8">{t.cta.description}</p>
            <a href="https://wa.me/972546522485?text=Hi%20Asaf,%20I%20saw%20your%20FinTech%20case%20study" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 text-white font-medium rounded-full hover:bg-green-600 transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              {t.cta.button}
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
