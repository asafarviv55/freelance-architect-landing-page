"use client"

import { useLocale } from 'next-intl';
import Link from 'next/link';
import Header from '@/components/Header';

export default function ChoosingTechStackForStartup() {
  const locale = useLocale();
  const isHebrew = locale === 'he';

  const content = {
    en: {
      backToList: "← Back to Blog",
      date: "December 15, 2025",
      readTime: "6 min read",
      title: "Choosing the Right Tech Stack for Your Startup",
      sections: {
        intro: {
          title: "Why Your Tech Stack Decision Matters",
          content: "Your tech stack is the foundation of your product. Choose wrong, and you'll face costly rewrites, hiring challenges, and scaling nightmares. Choose right, and you'll move fast, hire easily, and scale smoothly. Here's how to make that choice wisely."
        },
        factors: {
          title: "Key Factors to Consider",
          items: [
            {
              title: "Team Expertise",
              content: "The best tech stack is the one your team knows well. A familiar stack means faster development, fewer bugs, and easier debugging. Don't chase trends—leverage existing skills."
            },
            {
              title: "Time to Market",
              content: "Startups live or die by speed. Choose technologies with mature ecosystems, good documentation, and abundant libraries. Rails, Django, Next.js—these let you ship fast."
            },
            {
              title: "Hiring Pool",
              content: "Exotic tech choices make hiring harder. JavaScript, Python, and Go have massive talent pools. Elixir and Rust are powerful but have smaller communities."
            },
            {
              title: "Scalability Needs",
              content: "Most startups fail before hitting scale problems. Don't over-engineer for millions of users when you have hundreds. Start simple, refactor when needed."
            }
          ]
        },
        recommendations: {
          title: "Recommended Stacks by Use Case",
          stacks: [
            {
              title: "Web Applications (B2B SaaS)",
              tech: "Next.js + TypeScript + PostgreSQL + Vercel",
              why: "Type safety, great DX, easy deployment, excellent for SEO and marketing sites with app functionality."
            },
            {
              title: "Mobile-First Products",
              tech: "React Native + Node.js + MongoDB",
              why: "Single codebase for iOS and Android, JavaScript throughout, flexible data models for rapid iteration."
            },
            {
              title: "Data-Heavy Applications",
              tech: "Python (FastAPI) + PostgreSQL + Redis",
              why: "Python's data science ecosystem, SQL for complex queries, Redis for caching and real-time features."
            },
            {
              title: "Real-Time Applications",
              tech: "Node.js + Socket.io + PostgreSQL + Redis",
              why: "Event-driven architecture, WebSocket support out of the box, pub/sub for scaling."
            }
          ]
        },
        mistakes: {
          title: "Common Tech Stack Mistakes",
          items: [
            { bold: "Microservices from day one", text: "Start with a monolith. It's faster to build, easier to debug, and simpler to deploy. Split when you have clear boundaries and team scale." },
            { bold: "Chasing the newest framework", text: "New frameworks lack documentation, have breaking changes, and small communities. Use boring technology that works." },
            { bold: "Optimizing for scale you don't have", text: "Premature optimization is the root of all evil. Your SQLite database might handle more than you think." },
            { bold: "Ignoring operational complexity", text: "Kubernetes is powerful but complex. Managed services and simple deployments save countless engineering hours." }
          ]
        },
        decision: {
          title: "Making Your Decision",
          steps: [
            {
              title: "1. List your constraints",
              content: "Team skills, budget, timeline, compliance requirements. These narrow your options quickly."
            },
            {
              title: "2. Prototype in two stacks",
              content: "Build a small feature in your top two choices. Real experience beats theoretical analysis."
            },
            {
              title: "3. Talk to similar companies",
              content: "What worked for companies at your stage, in your domain? Learn from their mistakes."
            },
            {
              title: "4. Plan for change",
              content: "No stack is forever. Use clean architecture patterns that make future migrations easier."
            }
          ]
        },
        cta: {
          title: "Need Help Choosing Your Stack?",
          content: "I've helped startups across fintech, healthcare, and e-commerce choose technology stacks that accelerated their growth. Whether you're starting fresh or considering a migration, I can help you evaluate options and make the right choice for your specific situation.",
          button: "Discuss your tech stack"
        }
      }
    },
    he: {
      backToList: "→ חזרה לבלוג",
      date: "15 בדצמבר 2025",
      readTime: "6 דקות קריאה",
      title: "איך לבחור את הטכנולוגיה הנכונה לסטארטאפ שלך",
      sections: {
        intro: {
          title: "למה בחירת הטכנולוגיה חשובה",
          content: "הטכנולוגיה שלך היא הבסיס של המוצר. בחירה שגויה תוביל לשכתובים יקרים, קשיי גיוס, וסיוטי סקייל. בחירה נכונה תאפשר לך לנוע מהר, לגייס בקלות, ולצמוח בצורה חלקה. הנה איך לעשות את הבחירה הזו בחוכמה."
        },
        factors: {
          title: "גורמים מפתח לשקול",
          items: [
            {
              title: "מומחיות הצוות",
              content: "הטכנולוגיה הטובה ביותר היא זו שהצוות שלך מכיר היטב. טכנולוגיה מוכרת משמעותה פיתוח מהיר יותר, פחות באגים, ודיבוג קל יותר. אל תרדפו אחרי טרנדים—נצלו מיומנויות קיימות."
            },
            {
              title: "זמן להגעה לשוק",
              content: "סטארטאפים חיים או מתים לפי מהירות. בחרו טכנולוגיות עם אקוסיסטם בשל, תיעוד טוב, וספריות רבות. Rails, Django, Next.js—אלה מאפשרים לשלוח מהר."
            },
            {
              title: "מאגר כישרונות",
              content: "בחירות טכנולוגיות אקזוטיות מקשות על הגיוס. ל-JavaScript, Python ו-Go יש מאגרי כישרונות ענקיים. Elixir ו-Rust חזקים אבל עם קהילות קטנות יותר."
            },
            {
              title: "צרכי סקיילביליות",
              content: "רוב הסטארטאפים נכשלים לפני שמגיעים לבעיות סקייל. אל תתכננו יתר על המידה למיליוני משתמשים כשיש לכם מאות. התחילו פשוט, שפרו כשצריך."
            }
          ]
        },
        recommendations: {
          title: "טכנולוגיות מומלצות לפי מקרה שימוש",
          stacks: [
            {
              title: "אפליקציות ווב (B2B SaaS)",
              tech: "Next.js + TypeScript + PostgreSQL + Vercel",
              why: "בטיחות טיפוסים, חוויית מפתח מעולה, פריסה קלה, מצוין ל-SEO ואתרי שיווק עם פונקציונליות אפליקטיבית."
            },
            {
              title: "מוצרים מובייל-פירסט",
              tech: "React Native + Node.js + MongoDB",
              why: "קוד בסיס אחד ל-iOS ואנדרואיד, JavaScript לאורך כל הדרך, מודלי נתונים גמישים לאיטרציה מהירה."
            },
            {
              title: "אפליקציות עתירות נתונים",
              tech: "Python (FastAPI) + PostgreSQL + Redis",
              why: "האקוסיסטם של Python לדאטה סיינס, SQL לשאילתות מורכבות, Redis לקאשינג ופיצ'רים בזמן אמת."
            },
            {
              title: "אפליקציות בזמן אמת",
              tech: "Node.js + Socket.io + PostgreSQL + Redis",
              why: "ארכיטקטורה מונעת אירועים, תמיכת WebSocket מובנית, pub/sub לסקיילינג."
            }
          ]
        },
        mistakes: {
          title: "טעויות נפוצות בבחירת טכנולוגיה",
          items: [
            { bold: "מיקרוסרביסים מיום ראשון", text: "התחילו עם מונוליט. זה מהיר יותר לבנייה, קל יותר לדיבוג, ופשוט יותר לפריסה. פצלו כשיש לכם גבולות ברורים וסקייל צוות." },
            { bold: "רדיפה אחרי הפריימוורק הכי חדש", text: "לפריימוורקים חדשים אין תיעוד, יש שינויים שוברים, וקהילות קטנות. השתמשו בטכנולוגיה משעממת שעובדת." },
            { bold: "אופטימיזציה לסקייל שאין לכם", text: "אופטימיזציה מוקדמת היא שורש כל רע. מסד נתוני SQLite שלכם עשוי להתמודד עם יותר ממה שאתם חושבים." },
            { bold: "התעלמות ממורכבות תפעולית", text: "Kubernetes חזק אבל מורכב. שירותים מנוהלים ופריסות פשוטות חוסכים אינספור שעות הנדסה." }
          ]
        },
        decision: {
          title: "קבלת ההחלטה",
          steps: [
            {
              title: "1. רשמו את האילוצים שלכם",
              content: "מיומנויות צוות, תקציב, לוח זמנים, דרישות רגולציה. אלה מצמצמים את האפשרויות מהר."
            },
            {
              title: "2. בנו פרוטוטייפ בשתי טכנולוגיות",
              content: "בנו פיצ'ר קטן בשתי הבחירות המובילות שלכם. ניסיון אמיתי מנצח ניתוח תיאורטי."
            },
            {
              title: "3. דברו עם חברות דומות",
              content: "מה עבד לחברות בשלב שלכם, בתחום שלכם? למדו מהטעויות שלהם."
            },
            {
              title: "4. תכננו לשינוי",
              content: "אף טכנולוגיה לא לנצח. השתמשו בדפוסי ארכיטקטורה נקיים שמקלים על מיגרציות עתידיות."
            }
          ]
        },
        cta: {
          title: "צריכים עזרה בבחירת הטכנולוגיה?",
          content: "עזרתי לסטארטאפים בפינטק, בריאות ואיקומרס לבחור טכנולוגיות שהאיצו את הצמיחה שלהם. בין אם אתם מתחילים מאפס או שוקלים מיגרציה, אני יכול לעזור לכם להעריך אפשרויות ולעשות את הבחירה הנכונה למצב הספציפי שלכם.",
          button: "לדון בטכנולוגיה שלכם"
        }
      }
    }
  };

  const t = isHebrew ? content.he : content.en;

  return (
    <>
      <Header />
      <div className={`min-h-screen bg-white pt-24 pb-16 px-6 sm:px-8 lg:px-12 ${isHebrew ? 'rtl' : 'ltr'}`} dir={isHebrew ? 'rtl' : 'ltr'}>
        <div className="max-w-3xl mx-auto">
          <Link
            href={`/${locale}/blog`}
            className="inline-block text-gray-500 hover:text-gray-700 transition-colors mb-8"
          >
            {t.backToList}
          </Link>

        <article>
          <header className="mb-10">
            <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
              <time>{t.date}</time>
              <span>•</span>
              <span>{t.readTime}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-gray-950 leading-tight">
              {t.title}
            </h1>
          </header>

          <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">
            {/* Intro */}
            <section>
              <h2 className="text-xl font-medium text-gray-950 mb-4">{t.sections.intro.title}</h2>
              <p>{t.sections.intro.content}</p>
            </section>

            {/* Key Factors */}
            <section>
              <h2 className="text-xl font-medium text-gray-950 mb-6">{t.sections.factors.title}</h2>
              <div className="space-y-5">
                {t.sections.factors.items.map((item, i) => (
                  <div key={i}>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">{item.title}</h3>
                    <p>{item.content}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Recommended Stacks */}
            <section>
              <h2 className="text-xl font-medium text-gray-950 mb-6">{t.sections.recommendations.title}</h2>
              <div className="space-y-6">
                {t.sections.recommendations.stacks.map((stack, i) => (
                  <div key={i} className="border-l-2 border-gray-200 pl-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-1">{stack.title}</h3>
                    <p className="text-sm text-gray-600 font-mono mb-2">{stack.tech}</p>
                    <p>{stack.why}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Common Mistakes */}
            <section>
              <h2 className="text-xl font-medium text-gray-950 mb-4">{t.sections.mistakes.title}</h2>
              <div className="space-y-3">
                {t.sections.mistakes.items.map((item, i) => (
                  <p key={i}>
                    <strong>{item.bold}:</strong> {item.text}
                  </p>
                ))}
              </div>
            </section>

            {/* Decision Process */}
            <section>
              <h2 className="text-xl font-medium text-gray-950 mb-6">{t.sections.decision.title}</h2>
              <div className="space-y-4">
                {t.sections.decision.steps.map((step, i) => (
                  <div key={i}>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">{step.title}</h3>
                    <p>{step.content}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="border-t border-gray-200 pt-8 mt-10">
              <h2 className="text-xl font-medium text-gray-950 mb-4">{t.sections.cta.title}</h2>
              <p className="mb-6">{t.sections.cta.content}</p>
              <a
                href="https://wa.me/972546522485?text=Hi%20Asaf,%20I'd%20like%20to%20discuss%20tech%20stack%20choices%20for%20my%20startup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white text-sm font-medium rounded-full hover:bg-green-600 hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {t.sections.cta.button}
              </a>
            </section>
          </div>
        </article>
        </div>
      </div>
    </>
  )
}
