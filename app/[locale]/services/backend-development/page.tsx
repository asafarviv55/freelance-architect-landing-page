"use client"

import { useLocale } from 'next-intl';
import Link from 'next/link';
import Header from '@/components/Header';

export default function BackendDevelopmentPage() {
  const locale = useLocale();
  const isHebrew = locale === 'he';

  const content = {
    en: {
      backToHome: "← Back to Home",
      badge: "Backend Development",
      title: "Backend Development & API Services",
      subtitle: "High-performance APIs, robust databases, and scalable microservices. The invisible infrastructure that makes your product work reliably under pressure.",

      problemSection: {
        title: "Backend Problems Are Expensive",
        intro: "Backend issues don't just cause downtime—they slow down your entire product velocity. You might be dealing with:",
        problems: [
          {
            title: "Performance bottlenecks",
            description: "Slow APIs, database queries that timeout, systems that struggle under load. Users notice, and they leave."
          },
          {
            title: "Scaling challenges",
            description: "What worked for 100 users breaks at 10,000. Re-architecting under pressure is costly and risky."
          },
          {
            title: "Integration complexity",
            description: "Third-party APIs, legacy systems, multiple databases—connecting everything reliably is harder than it looks."
          },
          {
            title: "Security vulnerabilities",
            description: "One breach can destroy years of trust. Security needs to be built in, not bolted on."
          }
        ]
      },

      solutionSection: {
        title: "What I Build",
        intro: "I develop backend systems designed for reliability, performance, and maintainability—infrastructure your team can build on confidently.",
        deliverables: [
          {
            title: "REST & GraphQL APIs",
            description: "Clean, documented, versioned APIs with proper authentication, rate limiting, and error handling."
          },
          {
            title: "Database Architecture",
            description: "Schema design, query optimization, indexing strategies. PostgreSQL, MongoDB, Redis—the right tool for each job."
          },
          {
            title: "Microservices",
            description: "When monoliths become painful, I design service boundaries that make sense and migration paths that don't break production."
          },
          {
            title: "Third-Party Integrations",
            description: "Payment processors, auth providers, external APIs—integrated reliably with proper error handling and fallbacks."
          }
        ]
      },

      capabilitiesSection: {
        title: "Backend Capabilities",
        items: [
          "RESTful API design and implementation",
          "GraphQL schema design and resolvers",
          "Database modeling and optimization",
          "Authentication & authorization systems",
          "Real-time features (WebSockets, SSE)",
          "Background job processing",
          "Caching strategies (Redis, CDN)",
          "API versioning and deprecation",
          "Logging, monitoring, and alerting",
          "Load testing and performance tuning"
        ]
      },

      techSection: {
        title: "Technology Stack",
        intro: "I choose backend technologies based on your specific requirements and team capabilities:",
        categories: [
          {
            name: "Languages",
            technologies: ["Node.js", "Python", "TypeScript", "Go"]
          },
          {
            name: "Databases",
            technologies: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"]
          },
          {
            name: "Frameworks",
            technologies: ["Express", "NestJS", "FastAPI", "Django"]
          },
          {
            name: "Tools",
            technologies: ["Docker", "Kubernetes", "RabbitMQ", "Kafka"]
          }
        ]
      },

      caseStudySection: {
        title: "Recent Backend: FinTech Payment Platform",
        description: "Built the complete backend for a payment processing platform—secure transaction handling, real-time reporting, Stripe integration, and a clean API for the frontend team.",
        result: "Launched in 6 weeks",
        technologies: ["Node.js", "PostgreSQL", "Stripe", "Redis"],
        link: "View Case Study →"
      },

      faqSection: {
        title: "Frequently Asked Questions",
        questions: [
          {
            question: "Can you work with our existing backend?",
            answer: "Absolutely. I often join projects to add features, fix performance issues, or help teams refactor problematic code. I'll review what you have and give honest feedback on what needs attention."
          },
          {
            question: "How do you ensure API security?",
            answer: "Security is built into every layer: authentication (JWT, OAuth), authorization (RBAC), input validation, rate limiting, SQL injection prevention, and HTTPS everywhere. I follow OWASP guidelines and can help with security audits."
          },
          {
            question: "What's your approach to database design?",
            answer: "I start with understanding your data access patterns, then design schemas that optimize for your actual queries. Proper indexing, normalization where it helps, denormalization where performance requires it."
          },
          {
            question: "How do you handle API documentation?",
            answer: "APIs are documented with OpenAPI/Swagger specifications, including examples and error codes. Good documentation means your frontend team can work independently and onboarding new developers is faster."
          },
          {
            question: "Can you help us migrate from a monolith to microservices?",
            answer: "Yes, but I'll be honest about whether you actually need microservices. Sometimes a well-structured monolith is the right answer. If microservices make sense, I help identify service boundaries and plan incremental migration."
          },
          {
            question: "What about testing?",
            answer: "I write unit tests, integration tests, and API tests. Test coverage depends on project requirements, but critical paths are always covered. I can also help establish testing practices for your team."
          }
        ]
      },

      ctaSection: {
        title: "Need Backend Expertise?",
        description: "Whether you're building from scratch, fixing performance issues, or scaling existing systems—let's discuss what you need.",
        button: "Let's Talk on WhatsApp",
        altButton: "Or send me an email"
      }
    },
    he: {
      backToHome: "→ חזרה לדף הבית",
      badge: "פיתוח Backend",
      title: "שירותי פיתוח Backend ו-API",
      subtitle: "APIs בביצועים גבוהים, מסדי נתונים חזקים ומיקרו-סרביסים סקיילביליים. התשתית הבלתי נראית שגורמת למוצר שלך לעבוד בצורה אמינה תחת לחץ.",

      problemSection: {
        title: "בעיות Backend יקרות",
        intro: "בעיות backend לא רק גורמות לזמני השבתה—הן מאטות את כל קצב המוצר שלך. ייתכן שאתה מתמודד עם:",
        problems: [
          {
            title: "צווארי בקבוק בביצועים",
            description: "APIs איטיים, שאילתות מסד נתונים שעושות timeout, מערכות שנאבקות תחת עומס. משתמשים שמים לב, והם עוזבים."
          },
          {
            title: "אתגרי סקיילינג",
            description: "מה שעבד ל-100 משתמשים נשבר ב-10,000. ארכיטקטורה מחדש תחת לחץ יקרה ומסוכנת."
          },
          {
            title: "מורכבות אינטגרציה",
            description: "APIs של צד שלישי, מערכות legacy, מסדי נתונים מרובים—לחבר הכל בצורה אמינה קשה יותר ממה שזה נראה."
          },
          {
            title: "פגיעויות אבטחה",
            description: "פריצה אחת יכולה להרוס שנים של אמון. אבטחה צריכה להיבנות, לא להיתפר."
          }
        ]
      },

      solutionSection: {
        title: "מה אני בונה",
        intro: "אני מפתח מערכות backend שתוכננו לאמינות, ביצועים ותחזוקתיות—תשתית שהצוות שלך יכול לבנות עליה בביטחון.",
        deliverables: [
          {
            title: "APIs של REST & GraphQL",
            description: "APIs נקיים, מתועדים, עם גרסאות עם אימות נכון, הגבלת קצב וטיפול בשגיאות."
          },
          {
            title: "ארכיטקטורת מסד נתונים",
            description: "עיצוב סכמה, אופטימיזציית שאילתות, אסטרטגיות אינדוקס. PostgreSQL, MongoDB, Redis—הכלי הנכון לכל משימה."
          },
          {
            title: "מיקרו-סרביסים",
            description: "כשמונוליתים הופכים לכואבים, אני מעצב גבולות שירות שהגיוניים ומסלולי מיגרציה שלא שוברים פרודקשן."
          },
          {
            title: "אינטגרציות צד שלישי",
            description: "מעבדי תשלומים, ספקי אימות, APIs חיצוניים—משולבים בצורה אמינה עם טיפול בשגיאות ו-fallbacks נכונים."
          }
        ]
      },

      capabilitiesSection: {
        title: "יכולות Backend",
        items: [
          "עיצוב ויישום API ב-REST",
          "עיצוב סכמת GraphQL ו-resolvers",
          "מודלים ואופטימיזציה של מסד נתונים",
          "מערכות אימות והרשאות",
          "פיצ'רים בזמן אמת (WebSockets, SSE)",
          "עיבוד משימות רקע",
          "אסטרטגיות caching (Redis, CDN)",
          "ניהול גרסאות API והשבתה",
          "לוגים, ניטור והתראות",
          "בדיקות עומס וכיוון ביצועים"
        ]
      },

      techSection: {
        title: "סטאק טכנולוגי",
        intro: "אני בוחר טכנולוגיות backend בהתבסס על הדרישות הספציפיות שלך ויכולות הצוות:",
        categories: [
          {
            name: "שפות",
            technologies: ["Node.js", "Python", "TypeScript", "Go"]
          },
          {
            name: "מסדי נתונים",
            technologies: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"]
          },
          {
            name: "פריימוורקים",
            technologies: ["Express", "NestJS", "FastAPI", "Django"]
          },
          {
            name: "כלים",
            technologies: ["Docker", "Kubernetes", "RabbitMQ", "Kafka"]
          }
        ]
      },

      caseStudySection: {
        title: "Backend אחרון: פלטפורמת תשלומים פינטק",
        description: "בניתי את ה-backend המלא לפלטפורמת עיבוד תשלומים—טיפול בעסקאות מאובטח, דיווח בזמן אמת, אינטגרציה עם Stripe ו-API נקי לצוות ה-frontend.",
        result: "הושק ב-6 שבועות",
        technologies: ["Node.js", "PostgreSQL", "Stripe", "Redis"],
        link: "צפה בקייס סטאדי →"
      },

      faqSection: {
        title: "שאלות נפוצות",
        questions: [
          {
            question: "אתה יכול לעבוד עם ה-backend הקיים שלנו?",
            answer: "בהחלט. אני מצטרף לעתים קרובות לפרויקטים כדי להוסיף פיצ'רים, לתקן בעיות ביצועים או לעזור לצוותים לעשות refactor לקוד בעייתי. אני אסקור את מה שיש לך ואתן משוב כנה על מה שדורש תשומת לב."
          },
          {
            question: "איך אתה מבטיח אבטחת API?",
            answer: "אבטחה מובנית בכל שכבה: אימות (JWT, OAuth), הרשאות (RBAC), אימות קלט, הגבלת קצב, מניעת SQL injection ו-HTTPS בכל מקום. אני עוקב אחרי הנחיות OWASP ויכול לעזור עם ביקורות אבטחה."
          },
          {
            question: "מה הגישה שלך לעיצוב מסד נתונים?",
            answer: "אני מתחיל עם הבנת דפוסי הגישה לנתונים שלך, ואז מעצב סכמות שממטבות לשאילתות האמיתיות שלך. אינדוקס נכון, נורמליזציה היכן שזה עוזר, דה-נורמליזציה היכן שביצועים דורשים."
          },
          {
            question: "איך אתה מטפל בתיעוד API?",
            answer: "APIs מתועדים עם מפרטי OpenAPI/Swagger, כולל דוגמאות וקודי שגיאה. תיעוד טוב אומר שצוות ה-frontend שלך יכול לעבוד באופן עצמאי וקליטת מפתחים חדשים מהירה יותר."
          },
          {
            question: "אתה יכול לעזור לנו לעבור ממונוליט למיקרו-סרביסים?",
            answer: "כן, אבל אני אהיה כנה לגבי האם אתה באמת צריך מיקרו-סרביסים. לפעמים מונוליט מובנה היטב הוא התשובה הנכונה. אם מיקרו-סרביסים הגיוניים, אני עוזר לזהות גבולות שירות ולתכנן מיגרציה הדרגתית."
          },
          {
            question: "מה עם בדיקות?",
            answer: "אני כותב unit tests, integration tests ו-API tests. כיסוי בדיקות תלוי בדרישות הפרויקט, אבל נתיבים קריטיים תמיד מכוסים. אני יכול גם לעזור להקים פרקטיקות בדיקה לצוות שלך."
          }
        ]
      },

      ctaSection: {
        title: "צריך מומחיות Backend?",
        description: "בין אם אתה בונה מאפס, מתקן בעיות ביצועים או מרחיב מערכות קיימות—בוא נדון במה שאתה צריך.",
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

            <span className="inline-block px-4 py-1.5 text-sm font-medium bg-orange-100 text-orange-700 rounded-full mb-6">
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

        {/* Capabilities Section */}
        <section className="py-16 px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-light text-gray-950 mb-8">
              {t.capabilitiesSection.title}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.capabilitiesSection.items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-100">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 text-sm">{item}</span>
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
              <span className="inline-block px-3 py-1 text-xs font-medium bg-orange-500/20 text-orange-400 rounded-full mb-4">
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
                <span className="text-orange-400 font-medium">{t.caseStudySection.result}</span>
                <Link
                  href={`/${locale}/case-studies/fintech-payment-platform`}
                  className="text-white hover:text-orange-400 transition-colors text-sm"
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
                href="https://wa.me/972546522485?text=Hi%20Asaf,%20I'm%20interested%20in%20backend%20development%20services"
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
                href={`mailto:asaf.arviv@gmail.com?subject=Backend Development Inquiry`}
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
