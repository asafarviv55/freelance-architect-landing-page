"use client"

import { useLocale } from 'next-intl';
import Link from 'next/link';
import Header from '@/components/Header';
import Image from 'next/image';

export default function DatabaseInsightsCaseStudyPage() {
  const locale = useLocale();
  const isHebrew = locale === 'he';

  const content = {
    en: {
      backToHome: "← Back to Portfolio",
      badge: "AI Data Platform",
      title: "Database Insights AI",
      subtitle: "Upload any database and get instant AI-powered insights. Ask questions in natural language and receive visualizations, trends, and actionable recommendations.",
      result: "Hours of analysis in seconds",

      overview: {
        title: "Project Overview",
        client: "Internal Product / SaaS Platform",
        timeline: "8 weeks",
        role: "Full-Stack Developer & AI Integration",
        description: "Data analysis is time-consuming and requires specialized skills. I built a platform that lets anyone—regardless of technical background—upload a database and immediately start asking questions in plain English, getting AI-generated insights and visualizations."
      },

      challenge: {
        title: "The Challenge",
        points: [
          "Handle arbitrary database schemas without manual configuration",
          "Generate accurate, contextual insights from complex relational data",
          "Create visualizations automatically based on the data and questions",
          "Make AI responses reliable and grounded in actual data (avoid hallucinations)",
          "Scale to handle large datasets without excessive API costs"
        ]
      },

      solution: {
        title: "The Solution",
        description: "A combination of intelligent schema analysis, RAG (Retrieval-Augmented Generation), and smart caching to deliver fast, accurate, and cost-effective AI analysis.",
        features: [
          { title: "Schema Auto-Discovery", description: "Automatically analyzes uploaded databases to understand table relationships, data types, and semantic meaning of columns." },
          { title: "Natural Language Queries", description: "Users ask questions like 'What were our top products last quarter?' and get SQL-backed answers, not hallucinated guesses." },
          { title: "Smart Visualization", description: "AI determines the best chart type for each answer and generates interactive visualizations automatically." },
          { title: "RAG Architecture", description: "Retrieval-Augmented Generation ensures AI responses are grounded in actual data, with citations and confidence scores." },
          { title: "Cost Optimization", description: "Intelligent query caching and schema summarization to minimize API calls while maintaining response quality." }
        ]
      },

      techStack: {
        title: "Technology Stack",
        categories: [
          { name: "AI/ML", items: ["OpenAI GPT-4", "LangChain", "Embeddings"] },
          { name: "Backend", items: ["Python", "FastAPI"] },
          { name: "Database", items: ["PostgreSQL", "pgvector"] },
          { name: "Frontend", items: ["React", "Recharts", "Tailwind"] },
          { name: "Infrastructure", items: ["AWS", "Docker"] }
        ]
      },

      results: {
        title: "Results",
        metrics: [
          { value: "95%", label: "Query accuracy" },
          { value: "<3s", label: "Average response time" },
          { value: "10x", label: "Faster than manual analysis" },
          { value: "60%", label: "Cost reduction vs naive approach" }
        ],
        description: "The platform dramatically reduces the time from data to insights. Business users who previously waited days for analyst reports can now self-serve, asking follow-up questions in real-time and exploring data independently."
      },

      cta: {
        title: "Need AI-Powered Analytics?",
        description: "If you're looking to add AI capabilities to your data products, let's discuss how to make it work for your use case.",
        button: "Discuss Your Project"
      }
    },
    he: {
      backToHome: "→ חזרה לפורטפוליו",
      badge: "פלטפורמת נתוני AI",
      title: "Database Insights AI",
      subtitle: "העלה כל מסד נתונים וקבל תובנות מונעות AI מיידיות. שאל שאלות בשפה טבעית וקבל ויזואליזציות, מגמות והמלצות לפעולה.",
      result: "שעות של ניתוח בשניות",

      overview: {
        title: "סקירת הפרויקט",
        client: "מוצר פנימי / פלטפורמת SaaS",
        timeline: "8 שבועות",
        role: "מפתח Full-Stack ואינטגרציית AI",
        description: "ניתוח נתונים גוזל זמן ודורש מיומנויות מיוחדות. בניתי פלטפורמה שמאפשרת לכל אחד—ללא קשר לרקע טכני—להעלות מסד נתונים ומיד להתחיל לשאול שאלות באנגלית פשוטה, ולקבל תובנות וויזואליזציות שנוצרו על ידי AI."
      },

      challenge: {
        title: "האתגר",
        points: [
          "טיפול בסכמות מסד נתונים שרירותיות בלי הגדרה ידנית",
          "יצירת תובנות מדויקות וקונטקסטואליות מנתונים רלציוניים מורכבים",
          "יצירת ויזואליזציות אוטומטית בהתבסס על הנתונים והשאלות",
          "הפיכת תגובות AI לאמינות ומבוססות על נתונים אמיתיים (הימנעות מהזיות)",
          "סקייל לטיפול במערכי נתונים גדולים בלי עלויות API מוגזמות"
        ]
      },

      solution: {
        title: "הפתרון",
        description: "שילוב של ניתוח סכמה חכם, RAG (Retrieval-Augmented Generation) ו-caching חכם לספק ניתוח AI מהיר, מדויק וחסכוני.",
        features: [
          { title: "גילוי סכמה אוטומטי", description: "מנתח אוטומטית מסדי נתונים שהועלו כדי להבין קשרי טבלאות, סוגי נתונים ומשמעות סמנטית של עמודות." },
          { title: "שאילתות בשפה טבעית", description: "משתמשים שואלים שאלות כמו 'מה היו המוצרים המובילים שלנו ברבעון האחרון?' ומקבלים תשובות מגובות SQL, לא ניחושים מומצאים." },
          { title: "ויזואליזציה חכמה", description: "AI קובע את סוג הגרף הטוב ביותר לכל תשובה ויוצר ויזואליזציות אינטראקטיביות אוטומטית." },
          { title: "ארכיטקטורת RAG", description: "Retrieval-Augmented Generation מבטיח שתגובות AI מבוססות על נתונים אמיתיים, עם ציטוטים וציוני ביטחון." },
          { title: "אופטימיזציית עלויות", description: "caching שאילתות חכם וסיכום סכמה למזער קריאות API תוך שמירה על איכות התגובה." }
        ]
      },

      techStack: {
        title: "סטאק טכנולוגי",
        categories: [
          { name: "AI/ML", items: ["OpenAI GPT-4", "LangChain", "Embeddings"] },
          { name: "Backend", items: ["Python", "FastAPI"] },
          { name: "מסד נתונים", items: ["PostgreSQL", "pgvector"] },
          { name: "Frontend", items: ["React", "Recharts", "Tailwind"] },
          { name: "תשתית", items: ["AWS", "Docker"] }
        ]
      },

      results: {
        title: "תוצאות",
        metrics: [
          { value: "95%", label: "דיוק שאילתות" },
          { value: "<3s", label: "זמן תגובה ממוצע" },
          { value: "10x", label: "מהיר יותר מניתוח ידני" },
          { value: "60%", label: "הפחתת עלויות לעומת גישה נאיבית" }
        ],
        description: "הפלטפורמה מפחיתה דרמטית את הזמן מנתונים לתובנות. משתמשים עסקיים שבעבר חיכו ימים לדוחות אנליסטים יכולים עכשיו לשרת את עצמם, לשאול שאלות המשך בזמן אמת ולחקור נתונים באופן עצמאי."
      },

      cta: {
        title: "צריך אנליטיקס מונע AI?",
        description: "אם אתה מחפש להוסיף יכולות AI למוצרי הנתונים שלך, בוא נדון איך לעשות את זה לעבוד עבור תרחיש השימוש שלך.",
        button: "דון בפרויקט שלך"
      }
    }
  };

  const t = isHebrew ? content.he : content.en;

  return (
    <>
      <Header />
      <div className={`min-h-screen bg-white ${isHebrew ? 'rtl' : 'ltr'}`} dir={isHebrew ? 'rtl' : 'ltr'}>
        <section className="pt-24 pb-16 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-4xl mx-auto">
            <Link href={`/${locale}#portfolio`} className="inline-block text-gray-500 hover:text-gray-700 transition-colors mb-8">{t.backToHome}</Link>
            <span className="inline-block px-4 py-1.5 text-sm font-medium bg-blue-100 text-blue-700 rounded-full mb-6">{t.badge}</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-gray-950 mb-4">{t.title}</h1>
            <p className="text-lg text-gray-600 mb-4">{t.subtitle}</p>
            <span className="inline-block text-blue-600 font-medium">{t.result}</span>
          </div>
        </section>

        <section className="px-6 sm:px-8 lg:px-12 pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden relative">
              <Image src="/portfolio/data-insights.png" alt={t.title} fill className="object-cover" />
            </div>
          </div>
        </section>

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

        <section className="py-16 px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-light text-gray-950 mb-6">{t.challenge.title}</h2>
            <ul className="space-y-3">
              {t.challenge.points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span className="text-gray-600">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

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

        <section className="py-16 px-6 sm:px-8 lg:px-12 bg-gray-950 text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-light mb-8">{t.results.title}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
              {t.results.metrics.map((m, i) => (
                <div key={i} className="text-center">
                  <p className="text-3xl font-light text-blue-400 mb-1">{m.value}</p>
                  <p className="text-sm text-gray-400">{m.label}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-300">{t.results.description}</p>
          </div>
        </section>

        <section className="py-20 px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-light text-gray-950 mb-4">{t.cta.title}</h2>
            <p className="text-gray-600 mb-8">{t.cta.description}</p>
            <a href="https://wa.me/972546522485?text=Hi%20Asaf,%20I%20saw%20your%20Database%20Insights%20AI%20case%20study" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 text-white font-medium rounded-full hover:bg-green-600 transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              {t.cta.button}
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
