"use client"

import { useLocale } from 'next-intl';
import Link from 'next/link';
import Header from '@/components/Header';

export default function SaaSDevelopmentPage() {
  const locale = useLocale();
  const isHebrew = locale === 'he';

  const content = {
    en: {
      backToHome: "← Back to Home",
      badge: "SaaS Development",
      title: "Custom SaaS Platform Development",
      subtitle: "End-to-end development of scalable SaaS platforms with multi-tenancy, authentication, billing, and the business logic that makes your product unique.",

      problemSection: {
        title: "Building SaaS Is Complex",
        intro: "SaaS products face unique technical challenges that most developers underestimate. You're dealing with:",
        problems: [
          {
            title: "Multi-tenancy complexity",
            description: "Keeping customer data isolated while sharing infrastructure efficiently requires careful architecture from day one."
          },
          {
            title: "Authentication & authorization",
            description: "User management, team permissions, SSO integrations—security that's both robust and user-friendly is hard to get right."
          },
          {
            title: "Billing & subscription logic",
            description: "Trials, upgrades, downgrades, usage-based pricing, invoicing—the payment layer alone can derail your roadmap."
          },
          {
            title: "Scale uncertainty",
            description: "You need architecture that handles 10 users today and 10,000 tomorrow without rewriting everything."
          }
        ]
      },

      solutionSection: {
        title: "What I Build",
        intro: "I develop SaaS platforms with the foundational infrastructure built in from day one—so you can focus on what makes your product different.",
        deliverables: [
          {
            title: "Multi-Tenant Architecture",
            description: "Data isolation, tenant-specific configurations, and efficient resource sharing. Built for security and scale."
          },
          {
            title: "Authentication System",
            description: "User registration, login, password reset, team invitations, role-based permissions, and optional SSO/OAuth."
          },
          {
            title: "Subscription & Billing",
            description: "Stripe or other payment processor integration with trials, plan management, usage tracking, and invoice generation."
          },
          {
            title: "Admin Dashboard",
            description: "Customer management, analytics, feature flags, and the internal tools your team needs to operate."
          }
        ]
      },

      processSection: {
        title: "SaaS Development Process",
        steps: [
          {
            number: "01",
            title: "Product & Architecture Review",
            description: "Deep dive into your business model, pricing strategy, and growth plans. This shapes every architectural decision that follows.",
            duration: "3-5 days"
          },
          {
            number: "02",
            title: "Core Infrastructure",
            description: "Authentication, multi-tenancy, and billing foundation. These systems touch everything—getting them right first saves months later.",
            duration: "2-3 weeks"
          },
          {
            number: "03",
            title: "Feature Development",
            description: "Building your core product features on top of the solid foundation. Iterative development with regular demos and feedback.",
            duration: "4-8 weeks"
          },
          {
            number: "04",
            title: "Launch Preparation",
            description: "Performance optimization, security audit, monitoring setup, and deployment automation. Ready for real customers.",
            duration: "1-2 weeks"
          }
        ]
      },

      techSection: {
        title: "Technology Stack",
        intro: "Modern, proven technologies chosen for SaaS-specific requirements:",
        categories: [
          {
            name: "Backend",
            technologies: ["Node.js", "Python", "PostgreSQL", "Redis", "GraphQL"]
          },
          {
            name: "Frontend",
            technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
          },
          {
            name: "Auth & Billing",
            technologies: ["Auth0", "Clerk", "Stripe", "Paddle"]
          },
          {
            name: "Infrastructure",
            technologies: ["AWS", "Vercel", "Docker", "Kubernetes"]
          }
        ]
      },

      caseStudySection: {
        title: "Recent SaaS: Database Insights AI",
        description: "Built an AI-powered database analysis platform where users upload databases and get instant insights, trends, and recommendations.",
        result: "Hours of analysis in seconds",
        technologies: ["Python", "OpenAI", "PostgreSQL", "React"],
        link: "View Case Study →"
      },

      faqSection: {
        title: "Frequently Asked Questions",
        questions: [
          {
            question: "How long does it take to build a SaaS platform?",
            answer: "A production-ready SaaS with core features typically takes 3-6 months. The first usable version (beta) can often be ready in 6-10 weeks. Timeline depends heavily on feature complexity."
          },
          {
            question: "What's the investment for SaaS development?",
            answer: "Every SaaS platform is different, so I provide custom quotes based on complexity and scope. After our discovery session, you'll receive a detailed proposal with fixed pricing—no surprises."
          },
          {
            question: "Do you handle the payment/billing integration?",
            answer: "Yes. I integrate with Stripe, Paddle, or your preferred payment processor. This includes subscription management, trial periods, usage-based billing, and webhook handling."
          },
          {
            question: "Can you work with an existing SaaS codebase?",
            answer: "Absolutely. I often join existing projects to add features, fix architectural issues, or help teams scale. I'll review your codebase and provide honest feedback on what needs attention."
          },
          {
            question: "How do you handle data security for multi-tenant apps?",
            answer: "I implement row-level security, encrypted data at rest and in transit, and strict tenant isolation. Architecture is designed to pass SOC 2 requirements if you need compliance later."
          },
          {
            question: "Will I be able to maintain the platform after handoff?",
            answer: "Yes. I write clean, documented code and provide comprehensive handoff documentation. I can also help you hire and onboard your first engineers if needed."
          }
        ]
      },

      ctaSection: {
        title: "Ready to Build Your SaaS?",
        description: "Let's discuss your product vision and figure out the right approach. I'll give you an honest assessment of what it takes to build and launch.",
        button: "Let's Talk on WhatsApp",
        altButton: "Or send me an email"
      }
    },
    he: {
      backToHome: "→ חזרה לדף הבית",
      badge: "פיתוח SaaS",
      title: "פיתוח פלטפורמות SaaS מותאמות אישית",
      subtitle: "פיתוח מקצה לקצה של פלטפורמות SaaS סקיילביליות עם multi-tenancy, אימות, חיוב, והלוגיקה העסקית שהופכת את המוצר שלך לייחודי.",

      problemSection: {
        title: "בניית SaaS מורכבת",
        intro: "מוצרי SaaS מתמודדים עם אתגרים טכניים ייחודיים שרוב המפתחים מזלזלים בהם. אתה מתמודד עם:",
        problems: [
          {
            title: "מורכבות Multi-tenancy",
            description: "שמירה על בידוד נתוני לקוחות תוך שיתוף תשתית יעיל דורשת ארכיטקטורה זהירה מיום ראשון."
          },
          {
            title: "אימות והרשאות",
            description: "ניהול משתמשים, הרשאות צוות, אינטגרציות SSO—אבטחה שהיא גם חזקה וגם ידידותית למשתמש קשה לעשות נכון."
          },
          {
            title: "לוגיקת חיוב ומנויים",
            description: "תקופות ניסיון, שדרוגים, הורדות, תמחור מבוסס שימוש, חשבוניות—שכבת התשלומים לבדה יכולה להפיל את ה-roadmap שלך."
          },
          {
            title: "אי-ודאות סקייל",
            description: "אתה צריך ארכיטקטורה שמטפלת ב-10 משתמשים היום ו-10,000 מחר בלי לשכתב הכל."
          }
        ]
      },

      solutionSection: {
        title: "מה אני בונה",
        intro: "אני מפתח פלטפורמות SaaS עם תשתית יסוד מובנית מיום ראשון—כדי שתוכל להתמקד במה שהופך את המוצר שלך לשונה.",
        deliverables: [
          {
            title: "ארכיטקטורת Multi-Tenant",
            description: "בידוד נתונים, תצורות ספציפיות לדייר, ושיתוף משאבים יעיל. בנוי לאבטחה וסקייל."
          },
          {
            title: "מערכת אימות",
            description: "רישום משתמשים, התחברות, איפוס סיסמה, הזמנות צוות, הרשאות מבוססות תפקיד, ו-SSO/OAuth אופציונלי."
          },
          {
            title: "מנויים וחיוב",
            description: "אינטגרציה עם Stripe או מעבד תשלומים אחר עם ניהול תקופות ניסיון, ניהול תוכניות, מעקב שימוש ויצירת חשבוניות."
          },
          {
            title: "דשבורד אדמין",
            description: "ניהול לקוחות, אנליטיקס, feature flags, והכלים הפנימיים שהצוות שלך צריך להפעיל."
          }
        ]
      },

      processSection: {
        title: "תהליך פיתוח SaaS",
        steps: [
          {
            number: "01",
            title: "סקירת מוצר וארכיטקטורה",
            description: "צלילה עמוקה למודל העסקי שלך, אסטרטגיית התמחור ותוכניות הצמיחה. זה מעצב כל החלטה ארכיטקטונית שתבוא.",
            duration: "3-5 ימים"
          },
          {
            number: "02",
            title: "תשתית ליבה",
            description: "יסודות אימות, multi-tenancy וחיוב. המערכות האלה נוגעות בהכל—לעשות אותן נכון קודם חוסך חודשים אחר כך.",
            duration: "2-3 שבועות"
          },
          {
            number: "03",
            title: "פיתוח פיצ'רים",
            description: "בניית פיצ'רי המוצר המרכזיים שלך על גבי היסודות החזקים. פיתוח איטרטיבי עם דמואים ומשוב קבועים.",
            duration: "4-8 שבועות"
          },
          {
            number: "04",
            title: "הכנה להשקה",
            description: "אופטימיזציית ביצועים, בדיקת אבטחה, הגדרת ניטור ואוטומציית פריסה. מוכן ללקוחות אמיתיים.",
            duration: "1-2 שבועות"
          }
        ]
      },

      techSection: {
        title: "סטאק טכנולוגי",
        intro: "טכנולוגיות מודרניות ומוכחות שנבחרו לדרישות ספציפיות ל-SaaS:",
        categories: [
          {
            name: "Backend",
            technologies: ["Node.js", "Python", "PostgreSQL", "Redis", "GraphQL"]
          },
          {
            name: "Frontend",
            technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
          },
          {
            name: "אימות וחיוב",
            technologies: ["Auth0", "Clerk", "Stripe", "Paddle"]
          },
          {
            name: "תשתית",
            technologies: ["AWS", "Vercel", "Docker", "Kubernetes"]
          }
        ]
      },

      caseStudySection: {
        title: "SaaS אחרון: Database Insights AI",
        description: "בניתי פלטפורמת ניתוח מסדי נתונים מונעת AI שבה משתמשים מעלים מסדי נתונים ומקבלים תובנות, מגמות והמלצות מיידיות.",
        result: "שעות של ניתוח בשניות",
        technologies: ["Python", "OpenAI", "PostgreSQL", "React"],
        link: "צפה בקייס סטאדי →"
      },

      faqSection: {
        title: "שאלות נפוצות",
        questions: [
          {
            question: "כמה זמן לוקח לבנות פלטפורמת SaaS?",
            answer: "SaaS מוכן לפרודקשן עם פיצ'רי ליבה לוקח בדרך כלל 3-6 חודשים. הגרסה הראשונה השמישה (בטא) יכולה להיות מוכנה ב-6-10 שבועות. לוח הזמנים תלוי מאוד במורכבות הפיצ'רים."
          },
          {
            question: "מה ההשקעה לפיתוח SaaS?",
            answer: "כל פלטפורמת SaaS שונה, אז אני מספק הצעות מחיר מותאמות אישית על בסיס המורכבות וההיקף. אחרי שיחת Discovery, תקבל הצעה מפורטת עם תמחור קבוע—בלי הפתעות."
          },
          {
            question: "אתה מטפל באינטגרציית תשלומים/חיוב?",
            answer: "כן. אני מבצע אינטגרציה עם Stripe, Paddle או מעבד התשלומים המועדף עליך. זה כולל ניהול מנויים, תקופות ניסיון, חיוב מבוסס שימוש וטיפול ב-webhooks."
          },
          {
            question: "אתה יכול לעבוד עם קוד SaaS קיים?",
            answer: "בהחלט. אני מצטרף לעתים קרובות לפרויקטים קיימים כדי להוסיף פיצ'רים, לתקן בעיות ארכיטקטוניות או לעזור לצוותים לעשות סקייל. אני אסקור את הקוד שלך ואספק משוב כנה על מה שדורש תשומת לב."
          },
          {
            question: "איך אתה מטפל באבטחת נתונים לאפליקציות multi-tenant?",
            answer: "אני מיישם אבטחה ברמת שורה, נתונים מוצפנים במנוחה ובמעבר, ובידוד דייר קפדני. הארכיטקטורה מעוצבת לעבור דרישות SOC 2 אם תצטרך תאימות מאוחר יותר."
          },
          {
            question: "אוכל לתחזק את הפלטפורמה אחרי ההעברה?",
            answer: "כן. אני כותב קוד נקי ומתועד ומספק תיעוד העברה מקיף. אני יכול גם לעזור לך לגייס ולקלוט את המהנדסים הראשונים שלך אם צריך."
          }
        ]
      },

      ctaSection: {
        title: "מוכן לבנות את ה-SaaS שלך?",
        description: "בוא נדון בחזון המוצר שלך ונמצא את הגישה הנכונה. אתן לך הערכה כנה של מה שנדרש לבנות ולהשיק.",
        button: "בוא נדבר בוואטסאפ",
        altButton: "או שלח לי מייל"
      }
    }
  };

  const t = isHebrew ? content.he : content.en;

  return (
    <>
      <Header />
      <div className={`min-h-screen bg-white ${isHebrew ? 'rtl' : 'ltr'}`} dir={isHebrew ? 'rtl' : 'ltr'}>
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-4xl mx-auto">
            <Link
              href={`/${locale}`}
              className="inline-block text-gray-500 hover:text-gray-700 transition-colors mb-8"
            >
              {t.backToHome}
            </Link>

            <span className="inline-block px-4 py-1.5 text-sm font-medium bg-blue-100 text-blue-700 rounded-full mb-6">
              {t.badge}
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-gray-950 mb-6 leading-tight">
              {t.title}
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl">
              {t.subtitle}
            </p>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-16 px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-light text-gray-950 mb-4">
              {t.problemSection.title}
            </h2>
            <p className="text-gray-600 mb-8">
              {t.problemSection.intro}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {t.problemSection.problems.map((problem, idx) => (
                <div key={idx} className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                  <h3 className="text-lg font-medium text-gray-950 mb-2">{problem.title}</h3>
                  <p className="text-gray-600 text-sm">{problem.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-16 px-6 sm:px-8 lg:px-12 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-light text-gray-950 mb-4">
              {t.solutionSection.title}
            </h2>
            <p className="text-gray-600 mb-8">
              {t.solutionSection.intro}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {t.solutionSection.deliverables.map((item, idx) => (
                <div key={idx} className="p-6 bg-white rounded-xl border border-gray-200">
                  <h3 className="text-lg font-medium text-gray-950 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-light text-gray-950 mb-8">
              {t.processSection.title}
            </h2>

            <div className="space-y-6">
              {t.processSection.steps.map((step, idx) => (
                <div key={idx} className="flex gap-6 p-6 bg-white rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gray-950 text-white rounded-full text-sm font-medium">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-medium text-gray-950">{step.title}</h3>
                      <span className="text-sm text-gray-400">{step.duration}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-16 px-6 sm:px-8 lg:px-12 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-light text-gray-950 mb-4">
              {t.techSection.title}
            </h2>
            <p className="text-gray-600 mb-8">
              {t.techSection.intro}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.techSection.categories.map((category, idx) => (
                <div key={idx}>
                  <h3 className="text-sm font-medium text-gray-950 mb-3">{category.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.technologies.map((tech, techIdx) => (
                      <span key={techIdx} className="px-3 py-1 text-xs bg-white text-gray-600 rounded-full border border-gray-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="py-16 px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl text-white">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-500/20 text-blue-400 rounded-full mb-4">
                {t.badge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-light mb-4">
                {t.caseStudySection.title}
              </h2>
              <p className="text-gray-300 mb-4">
                {t.caseStudySection.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {t.caseStudySection.technologies.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 text-xs bg-white/10 text-gray-300 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-blue-400 font-medium">{t.caseStudySection.result}</span>
                <Link
                  href={`/${locale}/case-studies/database-insights-ai`}
                  className="text-white hover:text-blue-400 transition-colors text-sm"
                >
                  {t.caseStudySection.link}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-6 sm:px-8 lg:px-12 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-light text-gray-950 mb-8">
              {t.faqSection.title}
            </h2>

            <div className="space-y-4">
              {t.faqSection.questions.map((faq, idx) => (
                <details key={idx} className="group p-6 bg-white rounded-xl border border-gray-200">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <h3 className="text-lg font-medium text-gray-950 pr-4">{faq.question}</h3>
                    <span className="flex-shrink-0 text-gray-400 group-open:rotate-180 transition-transform">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-gray-600 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-light text-gray-950 mb-4">
              {t.ctaSection.title}
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              {t.ctaSection.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/972546522485?text=Hi%20Asaf,%20I'm%20interested%20in%20SaaS%20development%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white font-medium rounded-full hover:bg-green-600 hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {t.ctaSection.button}
              </a>
              <a
                href={`mailto:asaf.arviv@gmail.com?subject=SaaS Development Inquiry`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-950 font-medium rounded-full border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-300"
              >
                {t.ctaSection.altButton}
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
