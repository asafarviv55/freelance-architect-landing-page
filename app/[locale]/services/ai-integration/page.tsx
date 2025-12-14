"use client"

import { useLocale } from 'next-intl';
import Link from 'next/link';
import Header from '@/components/Header';

export default function AIIntegrationPage() {
  const locale = useLocale();
  const isHebrew = locale === 'he';

  const content = {
    en: {
      backToHome: "← Back to Home",
      badge: "AI Integration",
      title: "AI Integration & Automation Services",
      subtitle: "Integrate AI capabilities into your existing systems—from GPT-powered features to custom automation workflows that transform how your business operates.",

      problemSection: {
        title: "AI Is Powerful but Hard to Implement Well",
        intro: "Most businesses know AI can help them. Few know how to implement it effectively. You're facing real challenges:",
        problems: [
          {
            title: "Where to even start",
            description: "There are hundreds of AI tools and APIs. Choosing the right one for your use case requires deep technical knowledge."
          },
          {
            title: "Integration complexity",
            description: "Connecting AI to your existing systems—databases, workflows, user interfaces—is harder than vendors make it seem."
          },
          {
            title: "Cost management",
            description: "AI APIs can get expensive fast. Without proper architecture, costs spiral out of control."
          },
          {
            title: "Reliability concerns",
            description: "AI outputs can be inconsistent. Building systems that handle edge cases gracefully requires experience."
          }
        ]
      },

      solutionSection: {
        title: "What I Deliver",
        intro: "I help businesses integrate AI in ways that are practical, cost-effective, and actually solve real problems—not just chase hype.",
        deliverables: [
          {
            title: "GPT & LLM Integration",
            description: "OpenAI, Anthropic, or open-source models integrated into your products—with proper prompt engineering and output handling."
          },
          {
            title: "Intelligent Automation",
            description: "Workflows that combine AI with business logic: document processing, data extraction, content generation, decision support."
          },
          {
            title: "Custom AI Features",
            description: "AI-powered search, recommendations, summarization, or analysis built directly into your existing applications."
          },
          {
            title: "RAG & Knowledge Systems",
            description: "AI that knows your business: retrieval-augmented generation over your documents, databases, and internal knowledge."
          }
        ]
      },

      useCasesSection: {
        title: "Common Use Cases",
        cases: [
          {
            title: "Document Processing",
            description: "Extract data from invoices, contracts, reports. Turn unstructured documents into structured data automatically."
          },
          {
            title: "Customer Support",
            description: "AI-powered chatbots and support tools that actually understand context and provide useful answers."
          },
          {
            title: "Content Generation",
            description: "Automated report writing, email drafting, product descriptions—with human review workflows built in."
          },
          {
            title: "Data Analysis",
            description: "Natural language queries over your data. Ask questions in plain English, get insights without SQL."
          },
          {
            title: "Internal Tools",
            description: "AI assistants for your team: meeting summaries, knowledge base search, task automation."
          },
          {
            title: "Product Features",
            description: "AI capabilities embedded in your product: smart search, recommendations, personalization."
          }
        ]
      },

      techSection: {
        title: "Technology Stack",
        intro: "I work with the leading AI platforms and integrate them with your existing systems:",
        categories: [
          {
            name: "AI Models",
            technologies: ["OpenAI GPT-4", "Claude", "Gemini", "LLaMA", "Whisper"]
          },
          {
            name: "Vector DBs",
            technologies: ["Pinecone", "Weaviate", "pgvector", "ChromaDB"]
          },
          {
            name: "Frameworks",
            technologies: ["LangChain", "LlamaIndex", "Semantic Kernel"]
          },
          {
            name: "Backend",
            technologies: ["Python", "Node.js", "FastAPI", "REST/GraphQL"]
          }
        ]
      },

      caseStudySection: {
        title: "Recent AI Project: Meeting Analysis System",
        description: "Built a system that processes business meeting recordings, extracts requirements, action items, and key decisions using AI. Turns hours of meetings into structured documentation.",
        result: "90% time saved on documentation",
        technologies: ["Node.js", "Gemini AI", "Next.js", "FFmpeg"],
        link: "View Case Study →"
      },

      faqSection: {
        title: "Frequently Asked Questions",
        questions: [
          {
            question: "Which AI model should I use?",
            answer: "It depends on your use case, budget, and requirements. GPT-4 is versatile but expensive. Claude is great for longer documents. Open-source models can reduce costs for simpler tasks. I'll recommend the right fit after understanding your needs."
          },
          {
            question: "How much do AI integrations cost?",
            answer: "Integration projects typically range from $10,000 to $50,000 depending on complexity. Ongoing API costs vary widely—I design systems to minimize these while maximizing value."
          },
          {
            question: "Can AI work with my existing data?",
            answer: "Yes. I build RAG (Retrieval-Augmented Generation) systems that let AI access and reason over your documents, databases, and internal knowledge bases while keeping data secure."
          },
          {
            question: "How do you handle AI hallucinations and errors?",
            answer: "Through careful prompt engineering, output validation, confidence scoring, and human-in-the-loop workflows where needed. AI is powerful but needs guardrails—I build those in from the start."
          },
          {
            question: "Is my data secure with AI integrations?",
            answer: "Data security is a first-class concern. I can work with enterprise AI APIs that don't train on your data, implement on-premise solutions, or use privacy-preserving architectures depending on your requirements."
          },
          {
            question: "Can you improve an existing AI integration?",
            answer: "Absolutely. I often help companies optimize existing AI implementations—reducing costs, improving accuracy, or adding new capabilities to what's already built."
          }
        ]
      },

      ctaSection: {
        title: "Ready to Add AI to Your Business?",
        description: "Let's discuss what AI can actually do for your specific situation. I'll give you an honest assessment—including when AI isn't the right solution.",
        button: "Let's Talk on WhatsApp",
        altButton: "Or send me an email"
      }
    },
    he: {
      backToHome: "→ חזרה לדף הבית",
      badge: "אינטגרציית AI",
      title: "שירותי אינטגרציה ואוטומציה של AI",
      subtitle: "שלב יכולות AI במערכות הקיימות שלך—מפיצ'רים מונעי GPT ועד תהליכי אוטומציה מותאמים שמשנים את אופן פעולת העסק שלך.",

      problemSection: {
        title: "AI חזק אבל קשה ליישום נכון",
        intro: "רוב העסקים יודעים ש-AI יכול לעזור להם. מעטים יודעים איך ליישם אותו ביעילות. אתה מתמודד עם אתגרים אמיתיים:",
        problems: [
          {
            title: "מאיפה בכלל להתחיל",
            description: "יש מאות כלי AI ו-APIs. לבחור את הנכון לתרחיש השימוש שלך דורש ידע טכני עמוק."
          },
          {
            title: "מורכבות אינטגרציה",
            description: "לחבר AI למערכות הקיימות שלך—מסדי נתונים, תהליכי עבודה, ממשקי משתמש—קשה יותר ממה שספקים מציגים."
          },
          {
            title: "ניהול עלויות",
            description: "APIs של AI יכולים להתייקר מהר. בלי ארכיטקטורה נכונה, העלויות יוצאות משליטה."
          },
          {
            title: "חששות אמינות",
            description: "פלטי AI יכולים להיות לא עקביים. בניית מערכות שמטפלות במקרי קצה בצורה חלקה דורשת ניסיון."
          }
        ]
      },

      solutionSection: {
        title: "מה אני מספק",
        intro: "אני עוזר לעסקים לשלב AI בדרכים פרקטיות, חסכוניות ושבאמת פותרות בעיות אמיתיות—לא רק רודפים אחרי ההייפ.",
        deliverables: [
          {
            title: "אינטגרציית GPT & LLM",
            description: "OpenAI, Anthropic או מודלים בקוד פתוח משולבים במוצרים שלך—עם הנדסת פרומפטים וטיפול בפלט נכונים."
          },
          {
            title: "אוטומציה חכמה",
            description: "תהליכי עבודה שמשלבים AI עם לוגיקה עסקית: עיבוד מסמכים, חילוץ נתונים, יצירת תוכן, תמיכה בקבלת החלטות."
          },
          {
            title: "פיצ'רי AI מותאמים",
            description: "חיפוש, המלצות, סיכום או ניתוח מונעי AI שמובנים ישירות באפליקציות הקיימות שלך."
          },
          {
            title: "מערכות RAG וידע",
            description: "AI שמכיר את העסק שלך: retrieval-augmented generation על המסמכים, מסדי הנתונים ובסיסי הידע הפנימיים שלך."
          }
        ]
      },

      useCasesSection: {
        title: "תרחישי שימוש נפוצים",
        cases: [
          {
            title: "עיבוד מסמכים",
            description: "חלץ נתונים מחשבוניות, חוזים, דוחות. הפוך מסמכים לא מובנים לנתונים מובנים אוטומטית."
          },
          {
            title: "תמיכת לקוחות",
            description: "צ'אטבוטים וכלי תמיכה מונעי AI שבאמת מבינים הקשר ומספקים תשובות שימושיות."
          },
          {
            title: "יצירת תוכן",
            description: "כתיבת דוחות אוטומטית, טיוטות מיילים, תיאורי מוצרים—עם תהליכי סקירה אנושית מובנים."
          },
          {
            title: "ניתוח נתונים",
            description: "שאילתות בשפה טבעית על הנתונים שלך. שאל שאלות באנגלית פשוטה, קבל תובנות בלי SQL."
          },
          {
            title: "כלים פנימיים",
            description: "עוזרי AI לצוות שלך: סיכומי פגישות, חיפוש בסיס ידע, אוטומציית משימות."
          },
          {
            title: "פיצ'רי מוצר",
            description: "יכולות AI מוטמעות במוצר שלך: חיפוש חכם, המלצות, התאמה אישית."
          }
        ]
      },

      techSection: {
        title: "סטאק טכנולוגי",
        intro: "אני עובד עם פלטפורמות ה-AI המובילות ומשלב אותן עם המערכות הקיימות שלך:",
        categories: [
          {
            name: "מודלי AI",
            technologies: ["OpenAI GPT-4", "Claude", "Gemini", "LLaMA", "Whisper"]
          },
          {
            name: "Vector DBs",
            technologies: ["Pinecone", "Weaviate", "pgvector", "ChromaDB"]
          },
          {
            name: "פריימוורקים",
            technologies: ["LangChain", "LlamaIndex", "Semantic Kernel"]
          },
          {
            name: "Backend",
            technologies: ["Python", "Node.js", "FastAPI", "REST/GraphQL"]
          }
        ]
      },

      caseStudySection: {
        title: "פרויקט AI אחרון: מערכת ניתוח פגישות",
        description: "בניתי מערכת שמעבדת הקלטות פגישות עסקיות, מחלצת דרישות, פריטי פעולה והחלטות מפתח באמצעות AI. הופכת שעות של פגישות לתיעוד מובנה.",
        result: "90% חיסכון בזמן על תיעוד",
        technologies: ["Node.js", "Gemini AI", "Next.js", "FFmpeg"],
        link: "צפה בקייס סטאדי →"
      },

      faqSection: {
        title: "שאלות נפוצות",
        questions: [
          {
            question: "באיזה מודל AI כדאי להשתמש?",
            answer: "זה תלוי בתרחיש השימוש, התקציב והדרישות שלך. GPT-4 מגוון אבל יקר. Claude מצוין למסמכים ארוכים. מודלים בקוד פתוח יכולים להפחית עלויות למשימות פשוטות יותר. אני אמליץ על ההתאמה הנכונה אחרי הבנת הצרכים שלך."
          },
          {
            question: "כמה עולות אינטגרציות AI?",
            answer: "פרויקטי אינטגרציה נעים בדרך כלל בין $10,000 ל-$50,000 בהתאם למורכבות. עלויות API שוטפות משתנות מאוד—אני מעצב מערכות שממזערות אותן תוך מקסום ערך."
          },
          {
            question: "האם AI יכול לעבוד עם הנתונים הקיימים שלי?",
            answer: "כן. אני בונה מערכות RAG (Retrieval-Augmented Generation) שמאפשרות ל-AI לגשת ולנתח את המסמכים, מסדי הנתונים ובסיסי הידע הפנימיים שלך תוך שמירה על אבטחת הנתונים."
          },
          {
            question: "איך אתה מטפל בהזיות ושגיאות של AI?",
            answer: "דרך הנדסת פרומפטים זהירה, אימות פלט, ציון ביטחון ותהליכי human-in-the-loop במקומות שצריך. AI חזק אבל צריך מעקות—אני בונה אותם מההתחלה."
          },
          {
            question: "האם הנתונים שלי מאובטחים עם אינטגרציות AI?",
            answer: "אבטחת נתונים היא דאגה ראשונה במעלה. אני יכול לעבוד עם APIs של AI ארגוניים שלא מתאמנים על הנתונים שלך, ליישם פתרונות on-premise או להשתמש בארכיטקטורות ששומרות על פרטיות בהתאם לדרישות שלך."
          },
          {
            question: "אתה יכול לשפר אינטגרציית AI קיימת?",
            answer: "בהחלט. אני עוזר לעתים קרובות לחברות לייעל יישומי AI קיימים—להפחית עלויות, לשפר דיוק או להוסיף יכולות חדשות למה שכבר בנוי."
          }
        ]
      },

      ctaSection: {
        title: "מוכן להוסיף AI לעסק שלך?",
        description: "בוא נדון במה ש-AI באמת יכול לעשות עבור המצב הספציפי שלך. אתן לך הערכה כנה—כולל מתי AI הוא לא הפתרון הנכון.",
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

            <span className="inline-block px-4 py-1.5 text-sm font-medium bg-purple-100 text-purple-700 rounded-full mb-6">
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

        {/* Use Cases Section */}
        <section className="py-16 px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-light text-gray-950 mb-8">
              {t.useCasesSection.title}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.useCasesSection.cases.map((useCase, idx) => (
                <div key={idx} className="p-6 bg-white rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-lg font-medium text-gray-950 mb-2">{useCase.title}</h3>
                  <p className="text-gray-600 text-sm">{useCase.description}</p>
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
              <span className="inline-block px-3 py-1 text-xs font-medium bg-purple-500/20 text-purple-400 rounded-full mb-4">
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
                <span className="text-purple-400 font-medium">{t.caseStudySection.result}</span>
                <Link
                  href={`/${locale}/case-studies/meeting-analysis-system`}
                  className="text-white hover:text-purple-400 transition-colors text-sm"
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
                href="https://wa.me/972546522485?text=Hi%20Asaf,%20I'm%20interested%20in%20AI%20integration%20services"
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
                href={`mailto:asaf.arviv@gmail.com?subject=AI Integration Inquiry`}
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
