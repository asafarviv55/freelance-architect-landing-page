"use client"

import { useLocale } from 'next-intl';
import Link from 'next/link';

export default function AIAutomationForBusiness() {
  const locale = useLocale();
  const isHebrew = locale === 'he';

  const content = {
    en: {
      backToList: "← Back to Blog",
      date: "December 13, 2025",
      readTime: "5 min read",
      title: "How AI Automation Can Transform Your Business Operations",
      sections: {
        intro: {
          title: "The AI Automation Opportunity",
          content: "AI isn't just for tech giants anymore. Small businesses and startups are now leveraging AI automation to eliminate repetitive tasks, extract insights from data, and deliver better customer experiences—all without hiring massive teams."
        },
        whatIs: {
          title: "What is AI Automation?",
          content: "AI automation combines artificial intelligence with workflow automation to handle tasks that previously required human judgment. Unlike traditional automation (if X, then Y), AI automation can understand context, process natural language, analyze patterns, and make decisions based on unstructured data.",
          examples: [
            "Converting meeting recordings into structured action items",
            "Analyzing customer feedback to identify trends",
            "Generating reports from raw database queries in plain English",
            "Automating document processing and data extraction"
          ]
        },
        useCases: {
          title: "5 High-Impact AI Automation Use Cases",
          cases: [
            {
              title: "1. Document Processing & Data Extraction",
              content: "AI can read invoices, contracts, and forms—extracting key information and populating your systems automatically. What took hours of manual data entry now happens in seconds.",
              impact: "Impact: 80-90% reduction in manual data entry time"
            },
            {
              title: "2. Customer Support Automation",
              content: "AI-powered chatbots and email responders can handle common inquiries, route complex issues to the right team, and provide 24/7 support without burning out your team.",
              impact: "Impact: Handle 60-70% of support volume automatically"
            },
            {
              title: "3. Meeting Intelligence",
              content: "Record your meetings and let AI extract action items, decisions, and follow-ups. No more lost context or forgotten commitments buried in hour-long recordings.",
              impact: "Impact: 90% time saved on meeting documentation"
            },
            {
              title: "4. Data Analysis & Reporting",
              content: "Ask questions about your data in plain English and get instant visualizations and insights. No SQL knowledge required. No waiting for analyst availability.",
              impact: "Impact: Hours of analysis completed in seconds"
            },
            {
              title: "5. Content Generation & Personalization",
              content: "Generate marketing copy, product descriptions, and personalized communications at scale while maintaining your brand voice and quality standards.",
              impact: "Impact: 10x content output with consistent quality"
            }
          ]
        },
        implementation: {
          title: "How to Implement AI Automation Right",
          steps: [
            {
              title: "Start with a specific problem",
              content: "Don't automate everything at once. Pick one painful, repetitive process that consumes significant time. Solve that first."
            },
            {
              title: "Choose the right AI model",
              content: "Different tasks need different AI capabilities. Document processing might need vision models. Customer support needs conversational AI. Data analysis needs models good at reasoning."
            },
            {
              title: "Build feedback loops",
              content: "AI automation improves with feedback. Design your system to capture when the AI gets it wrong, so you can refine and improve accuracy over time."
            },
            {
              title: "Keep humans in the loop",
              content: "For critical decisions, use AI to assist—not replace—human judgment. Let AI handle the 80% of routine cases while humans focus on the complex 20%."
            }
          ]
        },
        mistakes: {
          title: "Common AI Automation Mistakes",
          items: [
            { bold: "Automating broken processes", text: "If your manual process is inefficient, automating it just creates faster inefficiency. Fix the process first." },
            { bold: "Ignoring data quality", text: "AI is only as good as the data it works with. Garbage in, garbage out—at scale." },
            { bold: "Over-promising accuracy", text: "AI isn't 100% accurate. Plan for edge cases and have fallback processes for when it fails." },
            { bold: "Skipping security review", text: "AI systems process sensitive data. Ensure proper data handling, access controls, and compliance from day one." }
          ]
        },
        cta: {
          title: "Ready to Automate with AI?",
          content: "I help businesses identify automation opportunities, design AI-powered workflows, and build production-ready systems that deliver real ROI. Whether you need a meeting intelligence system, data analysis platform, or custom AI integration—let's talk about what's possible.",
          button: "Discuss your automation project"
        }
      }
    },
    he: {
      backToList: "→ חזרה לבלוג",
      date: "13 בדצמבר 2025",
      readTime: "5 דקות קריאה",
      title: "איך אוטומציית AI יכולה לשנות את הפעילות העסקית שלך",
      sections: {
        intro: {
          title: "ההזדמנות של אוטומציית AI",
          content: "AI כבר לא רק לענקיות הטכנולוגיה. עסקים קטנים וסטארטאפים כעת ממנפים אוטומציית AI כדי לבטל משימות חוזרות, לחלץ תובנות מנתונים, ולספק חוויות לקוח טובות יותר—הכל בלי לגייס צוותים ענקיים."
        },
        whatIs: {
          title: "מה זה אוטומציית AI?",
          content: "אוטומציית AI משלבת בינה מלאכותית עם אוטומציית תהליכים כדי לטפל במשימות שבעבר דרשו שיקול דעת אנושי. בניגוד לאוטומציה מסורתית (אם X, אז Y), אוטומציית AI יכולה להבין הקשר, לעבד שפה טבעית, לנתח דפוסים ולקבל החלטות על בסיס נתונים לא מובנים.",
          examples: [
            "המרת הקלטות פגישות לפריטי פעולה מובנים",
            "ניתוח משוב לקוחות לזיהוי מגמות",
            "יצירת דוחות משאילתות מסד נתונים בעברית פשוטה",
            "אוטומציה של עיבוד מסמכים וחילוץ נתונים"
          ]
        },
        useCases: {
          title: "5 מקרי שימוש באוטומציית AI עם השפעה גבוהה",
          cases: [
            {
              title: "1. עיבוד מסמכים וחילוץ נתונים",
              content: "AI יכול לקרוא חשבוניות, חוזים וטפסים—לחלץ מידע מפתח ולאכלס את המערכות שלך אוטומטית. מה שלקח שעות של הזנת נתונים ידנית קורה עכשיו בשניות.",
              impact: "השפעה: הפחתה של 80-90% בזמן הזנת נתונים ידנית"
            },
            {
              title: "2. אוטומציה של תמיכת לקוחות",
              content: "צ'אטבוטים ומשיבי אימייל מונעי AI יכולים לטפל בפניות נפוצות, לנתב בעיות מורכבות לצוות הנכון, ולספק תמיכה 24/7 בלי לשחוק את הצוות שלך.",
              impact: "השפעה: טיפול ב-60-70% מנפח התמיכה אוטומטית"
            },
            {
              title: "3. אינטליגנציית פגישות",
              content: "הקליטו את הפגישות שלכם ותנו ל-AI לחלץ פריטי פעולה, החלטות ומעקבים. אין יותר הקשר אבוד או התחייבויות שנשכחו קבורות בהקלטות של שעה.",
              impact: "השפעה: חיסכון של 90% בזמן על תיעוד פגישות"
            },
            {
              title: "4. ניתוח נתונים ודיווח",
              content: "שאלו שאלות על הנתונים שלכם בעברית פשוטה וקבלו ויזואליזציות ותובנות מיידיות. לא צריך ידע ב-SQL. לא צריך לחכות לזמינות של אנליסט.",
              impact: "השפעה: שעות של ניתוח מושלמות בשניות"
            },
            {
              title: "5. יצירת תוכן והתאמה אישית",
              content: "צרו קופי שיווקי, תיאורי מוצרים ותקשורת מותאמת אישית בקנה מידה תוך שמירה על קול המותג ותקני האיכות שלכם.",
              impact: "השפעה: פי 10 תפוקת תוכן עם איכות עקבית"
            }
          ]
        },
        implementation: {
          title: "איך ליישם אוטומציית AI נכון",
          steps: [
            {
              title: "התחילו עם בעיה ספציפית",
              content: "אל תאטמטו הכל בבת אחת. בחרו תהליך אחד כואב וחוזר שצורך זמן משמעותי. פתרו את זה קודם."
            },
            {
              title: "בחרו את מודל ה-AI הנכון",
              content: "משימות שונות צריכות יכולות AI שונות. עיבוד מסמכים עשוי להצטרך מודלים חזותיים. תמיכת לקוחות צריכה AI שיחתי. ניתוח נתונים צריך מודלים טובים בהיגיון."
            },
            {
              title: "בנו לולאות משוב",
              content: "אוטומציית AI משתפרת עם משוב. תכננו את המערכת שלכם לתפוס מתי ה-AI טועה, כדי שתוכלו לשפר ולהעלות דיוק לאורך זמן."
            },
            {
              title: "שמרו על אנשים בלופ",
              content: "להחלטות קריטיות, השתמשו ב-AI לסייע—לא להחליף—שיקול דעת אנושי. תנו ל-AI לטפל ב-80% מהמקרים הרוטיניים בעוד אנשים מתמקדים ב-20% המורכבים."
            }
          ]
        },
        mistakes: {
          title: "טעויות נפוצות באוטומציית AI",
          items: [
            { bold: "אוטומציה של תהליכים שבורים", text: "אם התהליך הידני שלכם לא יעיל, אוטומציה שלו רק יוצרת חוסר יעילות מהיר יותר. תקנו את התהליך קודם." },
            { bold: "התעלמות מאיכות נתונים", text: "AI טוב רק כמו הנתונים שהוא עובד איתם. זבל נכנס, זבל יוצא—בקנה מידה." },
            { bold: "הבטחת יתר על דיוק", text: "AI לא מדויק ב-100%. תכננו למקרי קצה ויש לכם תהליכי גיבוי למקרה שהוא נכשל." },
            { bold: "דילוג על בדיקת אבטחה", text: "מערכות AI מעבדות נתונים רגישים. הבטיחו טיפול נכון בנתונים, בקרות גישה ותאימות מיום אחד." }
          ]
        },
        cta: {
          title: "מוכנים לאוטומציה עם AI?",
          content: "אני עוזר לעסקים לזהות הזדמנויות אוטומציה, לתכנן תהליכי עבודה מונעי AI, ולבנות מערכות מוכנות לייצור שמספקות ROI אמיתי. בין אם אתם צריכים מערכת אינטליגנציית פגישות, פלטפורמת ניתוח נתונים, או אינטגרציית AI מותאמת—בואו נדבר על מה שאפשרי.",
          button: "לדון בפרויקט האוטומציה שלכם"
        }
      }
    }
  };

  const t = isHebrew ? content.he : content.en;

  return (
    <div className={`min-h-screen bg-white py-16 px-6 sm:px-8 lg:px-12 ${isHebrew ? 'rtl' : 'ltr'}`} dir={isHebrew ? 'rtl' : 'ltr'}>
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

            {/* What is AI Automation */}
            <section>
              <h2 className="text-xl font-medium text-gray-950 mb-4">{t.sections.whatIs.title}</h2>
              <p className="mb-4">{t.sections.whatIs.content}</p>
              <ul className={`list-disc space-y-2 ${isHebrew ? 'pr-6' : 'pl-6'}`}>
                {t.sections.whatIs.examples.map((example, i) => (
                  <li key={i}>{example}</li>
                ))}
              </ul>
            </section>

            {/* Use Cases */}
            <section>
              <h2 className="text-xl font-medium text-gray-950 mb-6">{t.sections.useCases.title}</h2>
              <div className="space-y-6">
                {t.sections.useCases.cases.map((useCase, i) => (
                  <div key={i} className="border-l-2 border-gray-200 pl-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">{useCase.title}</h3>
                    <p className="mb-2">{useCase.content}</p>
                    <p className="text-sm text-gray-600 font-medium">{useCase.impact}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Implementation */}
            <section>
              <h2 className="text-xl font-medium text-gray-950 mb-6">{t.sections.implementation.title}</h2>
              <div className="space-y-4">
                {t.sections.implementation.steps.map((step, i) => (
                  <div key={i}>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">{step.title}</h3>
                    <p>{step.content}</p>
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

            {/* CTA */}
            <section className="border-t border-gray-200 pt-8 mt-10">
              <h2 className="text-xl font-medium text-gray-950 mb-4">{t.sections.cta.title}</h2>
              <p className="mb-6">{t.sections.cta.content}</p>
              <a
                href="https://wa.me/972546522485?text=Hi%20Asaf,%20I'm%20interested%20in%20AI%20automation%20for%20my%20business"
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
  )
}
