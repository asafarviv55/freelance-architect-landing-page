"use client"

import { useLocale } from 'next-intl';
import Link from 'next/link';
import Header from '@/components/Header';

export default function RAGForStartupsGuide() {
  const locale = useLocale();
  const isHebrew = locale === 'he';

  const content = {
    en: {
      backToList: "← Back to Blog",
      date: "December 17, 2025",
      readTime: "8 min read",
      title: "RAG for Startups: Building AI That Actually Knows Your Business",
      sections: {
        intro: {
          title: "Why RAG Matters for Startups",
          content: "Large Language Models are powerful, but they have a critical limitation: they only know what they were trained on. Ask ChatGPT about your company's pricing, internal processes, or customer data, and you'll get confident-sounding nonsense. Retrieval Augmented Generation (RAG) solves this by grounding AI responses in your actual business data. For startups building AI-powered products, RAG is often the difference between a demo that impresses investors and a product that actually works."
        },
        whatIs: {
          title: "What Is RAG?",
          content: "RAG combines two steps: retrieval (finding relevant information from your knowledge base) and generation (using an LLM to synthesize that information into a response). Instead of relying solely on the model's training data, RAG fetches real documents, database entries, or API responses and includes them in the prompt.",
          flow: {
            title: "The RAG Pipeline",
            steps: [
              { step: "1. Query", description: "User asks a question or makes a request" },
              { step: "2. Retrieve", description: "System searches your knowledge base for relevant documents" },
              { step: "3. Augment", description: "Retrieved content is added to the LLM prompt as context" },
              { step: "4. Generate", description: "LLM produces a grounded response using the provided context" }
            ]
          }
        },
        benefits: {
          title: "Why Startups Should Care",
          items: [
            {
              title: "Reduce Hallucinations",
              content: "By grounding responses in actual documents, RAG dramatically reduces made-up answers. Users get accurate information backed by real sources."
            },
            {
              title: "No Model Retraining Required",
              content: "Updating your AI's knowledge is as simple as updating your document store. Add a new product? Update pricing? The AI knows immediately—no expensive fine-tuning needed."
            },
            {
              title: "Provide Citations",
              content: "RAG can show users exactly where information came from. This transparency builds trust and lets users verify critical information."
            },
            {
              title: "Keep Data Private",
              content: "Your proprietary data stays in your infrastructure. The LLM only sees relevant snippets at query time, not your entire knowledge base."
            }
          ]
        },
        comparison: {
          title: "RAG Approaches Compared",
          headers: ["Approach", "Best For", "Complexity", "Accuracy"],
          rows: [
            {
              approach: "Basic RAG",
              bestFor: "Simple Q&A, documentation search",
              complexity: "Low",
              accuracy: "Good"
            },
            {
              approach: "Hybrid Search",
              bestFor: "Production systems, mixed query types",
              complexity: "Medium",
              accuracy: "Better"
            },
            {
              approach: "Agentic RAG",
              bestFor: "Complex queries requiring multiple steps",
              complexity: "High",
              accuracy: "Best"
            },
            {
              approach: "GraphRAG",
              bestFor: "Connected data, relationship-heavy domains",
              complexity: "High",
              accuracy: "Best for relationships"
            }
          ]
        },
        when: {
          title: "When to Use RAG",
          rightTime: {
            title: "Good Fit",
            items: [
              "Customer support bots that need product knowledge",
              "Internal tools querying company documentation",
              "AI assistants for domain-specific applications (legal, medical, finance)",
              "Search experiences that need natural language answers",
              "Any application where accuracy matters more than creativity"
            ]
          },
          wrongTime: {
            title: "Not the Right Tool",
            items: [
              "Creative writing or brainstorming (RAG constrains outputs)",
              "General conversation where grounding isn't needed",
              "Real-time data that changes every second (use APIs instead)",
              "Tasks where the LLM's training data is sufficient",
              "Simple classification or sentiment analysis"
            ]
          }
        },
        architecture: {
          title: "Building Your RAG System",
          components: [
            {
              title: "Vector Database",
              content: "Stores embeddings of your documents for semantic search. Popular options: Pinecone (managed), Weaviate (open-source), pgvector (PostgreSQL extension). For startups, pgvector is often the pragmatic choice—one less service to manage."
            },
            {
              title: "Embedding Model",
              content: "Converts text into numerical vectors. OpenAI's text-embedding-3-small offers good quality at low cost. For sensitive data, consider open-source models like BGE or E5 that run locally."
            },
            {
              title: "Chunking Strategy",
              content: "How you split documents matters enormously. Too small and you lose context; too large and you waste tokens. Start with 500-1000 tokens per chunk with 100-token overlap. Adjust based on your content type."
            },
            {
              title: "Retrieval Logic",
              content: "Hybrid search (combining semantic and keyword search) outperforms either alone in most cases. Retrieve 5-10 chunks, then optionally rerank with a cross-encoder for better precision."
            }
          ]
        },
        checklist: {
          title: "RAG Implementation Checklist",
          items: [
            { text: "Define your knowledge sources (docs, databases, APIs)", checked: false },
            { text: "Choose chunking strategy based on content type", checked: false },
            { text: "Select embedding model (cost vs. privacy tradeoffs)", checked: false },
            { text: "Set up vector database with appropriate indexing", checked: false },
            { text: "Implement hybrid search (semantic + keyword)", checked: false },
            { text: "Add metadata filtering for scoped queries", checked: false },
            { text: "Build evaluation framework (retrieval accuracy, response quality)", checked: false },
            { text: "Set up monitoring for latency, costs, and failures", checked: false },
            { text: "Plan document update pipeline (keep knowledge fresh)", checked: false },
            { text: "Implement fallback for when retrieval fails", checked: false }
          ]
        },
        example: {
          title: "Example: Customer Support RAG",
          scenario: "A SaaS startup wants to build an AI support agent that can answer questions about their product, billing, and troubleshooting.",
          architecture: {
            title: "Architecture",
            items: [
              "Knowledge base: Help docs, release notes, billing FAQs, troubleshooting guides",
              "Vector DB: pgvector (they already use PostgreSQL)",
              "Embedding: OpenAI text-embedding-3-small",
              "LLM: GPT-4o-mini for speed, GPT-4o for complex escalations",
              "Retrieval: Hybrid search with metadata filters (category, product version)"
            ]
          },
          flow: {
            title: "Query Flow",
            content: "User asks 'How do I upgrade my plan?' → System retrieves billing docs + pricing page + upgrade guide → LLM synthesizes: 'To upgrade, go to Settings > Billing > Change Plan. Your current plan is [from user context]. Upgrading to Pro gives you [from pricing doc]...'"
          },
          results: {
            title: "Results",
            content: "70% of tickets resolved without human intervention. Average response time dropped from 4 hours to 30 seconds. Support team focuses on complex issues instead of repetitive questions."
          }
        },
        costs: {
          title: "Cost Considerations",
          content: "RAG costs scale with usage. Here's what to budget for:",
          items: [
            { bold: "Embedding costs", text: "$0.02 per 1M tokens for OpenAI. Initial indexing is a one-time cost; ongoing costs come from new content and query embeddings." },
            { bold: "Vector database", text: "pgvector is free (uses existing Postgres). Managed services like Pinecone start at $70/month for production workloads." },
            { bold: "LLM inference", text: "The biggest ongoing cost. GPT-4o-mini at $0.15/1M input tokens is often sufficient. Use GPT-4o ($2.50/1M) only when needed." },
            { bold: "Storage", text: "Vectors are small (~6KB per chunk). 100K documents ≈ 600MB. Storage is rarely the bottleneck." }
          ]
        },
        mistakes: {
          title: "Common RAG Mistakes",
          items: [
            { bold: "Chunking without thought", text: "Default settings rarely work. Test different chunk sizes with your actual queries. What works for legal docs fails for code." },
            { bold: "Ignoring metadata", text: "Filtering by date, category, or user permissions dramatically improves relevance. Don't rely on semantic search alone." },
            { bold: "Skipping evaluation", text: "You can't improve what you don't measure. Build a test set of queries and expected answers before optimizing." },
            { bold: "Stuffing too much context", text: "More retrieved chunks isn't always better. It increases costs and can confuse the LLM. Quality over quantity." }
          ]
        },
        cta: {
          title: "Ready to Build RAG into Your Product?",
          content: "RAG is becoming table stakes for AI-powered products. I help startups design and implement RAG systems that actually work—from architecture decisions to production deployment. Whether you're adding AI to an existing product or building something new, let's discuss how RAG can give your startup a competitive edge.",
          button: "Discuss RAG implementation"
        }
      }
    },
    he: {
      backToList: "→ חזרה לבלוג",
      date: "17 בדצמבר 2025",
      readTime: "8 דקות קריאה",
      title: "RAG לסטארטאפים: בניית AI שבאמת מכיר את העסק שלכם",
      sections: {
        intro: {
          title: "למה RAG חשוב לסטארטאפים",
          content: "מודלי שפה גדולים הם חזקים, אבל יש להם מגבלה קריטית: הם יודעים רק מה שאומנו עליו. שאלו את ChatGPT על המחירים של החברה שלכם, תהליכים פנימיים או נתוני לקוחות, ותקבלו שטויות שנשמעות בטוחות. Retrieval Augmented Generation (RAG) פותר את זה על ידי עיגון תשובות AI בנתונים העסקיים האמיתיים שלכם. עבור סטארטאפים שבונים מוצרים מונעי AI, RAG הוא לעתים קרובות ההבדל בין דמו שמרשים משקיעים למוצר שבאמת עובד."
        },
        whatIs: {
          title: "מה זה RAG?",
          content: "RAG משלב שני שלבים: אחזור (מציאת מידע רלוונטי מבסיס הידע שלכם) ויצירה (שימוש ב-LLM לסנתז את המידע לתשובה). במקום להסתמך רק על נתוני האימון של המודל, RAG מביא מסמכים אמיתיים, רשומות מסד נתונים או תגובות API וכולל אותם בפרומפט.",
          flow: {
            title: "צינור ה-RAG",
            steps: [
              { step: "1. שאילתה", description: "המשתמש שואל שאלה או מגיש בקשה" },
              { step: "2. אחזור", description: "המערכת מחפשת בבסיס הידע מסמכים רלוונטיים" },
              { step: "3. הרחבה", description: "התוכן שאוחזר מתווסף לפרומפט ה-LLM כהקשר" },
              { step: "4. יצירה", description: "ה-LLM מייצר תשובה מעוגנת באמצעות ההקשר שסופק" }
            ]
          }
        },
        benefits: {
          title: "למה סטארטאפים צריכים להתעניין",
          items: [
            {
              title: "הפחתת הזיות",
              content: "על ידי עיגון תשובות במסמכים אמיתיים, RAG מפחית דרמטית תשובות בדויות. משתמשים מקבלים מידע מדויק מגובה במקורות אמיתיים."
            },
            {
              title: "אין צורך באימון מחדש",
              content: "עדכון הידע של ה-AI שלכם פשוט כמו עדכון מאגר המסמכים. הוספתם מוצר חדש? עדכנתם מחירים? ה-AI יודע מיד—ללא כוונון עדין יקר."
            },
            {
              title: "מתן ציטוטים",
              content: "RAG יכול להראות למשתמשים בדיוק מאיפה הגיע המידע. שקיפות זו בונה אמון ומאפשרת למשתמשים לאמת מידע קריטי."
            },
            {
              title: "שמירה על פרטיות הנתונים",
              content: "הנתונים הקנייניים שלכם נשארים בתשתית שלכם. ה-LLM רואה רק קטעים רלוונטיים בזמן השאילתה, לא את כל בסיס הידע."
            }
          ]
        },
        comparison: {
          title: "השוואת גישות RAG",
          headers: ["גישה", "מתאים ל", "מורכבות", "דיוק"],
          rows: [
            {
              approach: "RAG בסיסי",
              bestFor: "שאלות ותשובות פשוטות, חיפוש תיעוד",
              complexity: "נמוכה",
              accuracy: "טוב"
            },
            {
              approach: "חיפוש היברידי",
              bestFor: "מערכות פרודקשן, סוגי שאילתות מעורבים",
              complexity: "בינונית",
              accuracy: "טוב יותר"
            },
            {
              approach: "RAG אגנטי",
              bestFor: "שאילתות מורכבות הדורשות מספר שלבים",
              complexity: "גבוהה",
              accuracy: "הטוב ביותר"
            },
            {
              approach: "GraphRAG",
              bestFor: "נתונים מחוברים, תחומים עתירי קשרים",
              complexity: "גבוהה",
              accuracy: "הטוב ביותר לקשרים"
            }
          ]
        },
        when: {
          title: "מתי להשתמש ב-RAG",
          rightTime: {
            title: "התאמה טובה",
            items: [
              "בוטים לתמיכת לקוחות שצריכים ידע מוצר",
              "כלים פנימיים ששואלים תיעוד חברה",
              "עוזרי AI לאפליקציות ספציפיות לתחום (משפטי, רפואי, פיננסי)",
              "חוויות חיפוש שצריכות תשובות בשפה טבעית",
              "כל אפליקציה שבה דיוק חשוב יותר מיצירתיות"
            ]
          },
          wrongTime: {
            title: "לא הכלי הנכון",
            items: [
              "כתיבה יצירתית או סיעור מוחות (RAG מגביל פלטים)",
              "שיחה כללית שבה עיגון לא נדרש",
              "נתונים בזמן אמת שמשתנים כל שנייה (השתמשו ב-APIs במקום)",
              "משימות שבהן נתוני האימון של ה-LLM מספיקים",
              "סיווג פשוט או ניתוח סנטימנט"
            ]
          }
        },
        architecture: {
          title: "בניית מערכת ה-RAG שלכם",
          components: [
            {
              title: "מסד נתונים וקטורי",
              content: "מאחסן embeddings של המסמכים שלכם לחיפוש סמנטי. אפשרויות פופולריות: Pinecone (מנוהל), Weaviate (קוד פתוח), pgvector (הרחבה ל-PostgreSQL). לסטארטאפים, pgvector הוא לעתים קרובות הבחירה הפרגמטית—שירות אחד פחות לנהל."
            },
            {
              title: "מודל Embedding",
              content: "ממיר טקסט לוקטורים מספריים. text-embedding-3-small של OpenAI מציע איכות טובה בעלות נמוכה. לנתונים רגישים, שקלו מודלים בקוד פתוח כמו BGE או E5 שרצים מקומית."
            },
            {
              title: "אסטרטגיית חלוקה",
              content: "איך שאתם מחלקים מסמכים משנה מאוד. קטן מדי ומאבדים הקשר; גדול מדי ומבזבזים טוקנים. התחילו עם 500-1000 טוקנים לקטע עם חפיפה של 100 טוקנים. התאימו בהתאם לסוג התוכן."
            },
            {
              title: "לוגיקת אחזור",
              content: "חיפוש היברידי (שילוב סמנטי ומילות מפתח) עולה על כל אחד מהם לבד ברוב המקרים. אחזרו 5-10 קטעים, ואז אופציונלית דרגו מחדש עם cross-encoder לדיוק טוב יותר."
            }
          ]
        },
        checklist: {
          title: "רשימת בדיקה ליישום RAG",
          items: [
            { text: "הגדירו את מקורות הידע (מסמכים, מסדי נתונים, APIs)", checked: false },
            { text: "בחרו אסטרטגיית חלוקה בהתאם לסוג התוכן", checked: false },
            { text: "בחרו מודל embedding (עלות מול פרטיות)", checked: false },
            { text: "הקימו מסד נתונים וקטורי עם אינדוקס מתאים", checked: false },
            { text: "יישמו חיפוש היברידי (סמנטי + מילות מפתח)", checked: false },
            { text: "הוסיפו סינון מטא-דאטה לשאילתות ממוקדות", checked: false },
            { text: "בנו מסגרת הערכה (דיוק אחזור, איכות תשובה)", checked: false },
            { text: "הקימו ניטור לזמן תגובה, עלויות וכשלונות", checked: false },
            { text: "תכננו צינור עדכון מסמכים (שמירה על ידע עדכני)", checked: false },
            { text: "יישמו fallback למקרה שהאחזור נכשל", checked: false }
          ]
        },
        example: {
          title: "דוגמה: RAG לתמיכת לקוחות",
          scenario: "סטארטאפ SaaS רוצה לבנות סוכן תמיכה AI שיכול לענות על שאלות לגבי המוצר, חיוב ופתרון בעיות.",
          architecture: {
            title: "ארכיטקטורה",
            items: [
              "בסיס ידע: מסמכי עזרה, הערות גרסה, שאלות נפוצות חיוב, מדריכי פתרון בעיות",
              "מסד נתונים וקטורי: pgvector (כבר משתמשים ב-PostgreSQL)",
              "Embedding: OpenAI text-embedding-3-small",
              "LLM: GPT-4o-mini למהירות, GPT-4o להסלמות מורכבות",
              "אחזור: חיפוש היברידי עם סינון מטא-דאטה (קטגוריה, גרסת מוצר)"
            ]
          },
          flow: {
            title: "זרימת שאילתה",
            content: "משתמש שואל 'איך משדרגים תוכנית?' ← המערכת מאחזרת מסמכי חיוב + דף מחירים + מדריך שדרוג ← LLM מסנתז: 'לשדרוג, לכו להגדרות > חיוב > שנה תוכנית. התוכנית הנוכחית שלכם היא [מהקשר משתמש]. שדרוג ל-Pro נותן לכם [ממסמך מחירים]...'"
          },
          results: {
            title: "תוצאות",
            content: "70% מהפניות נפתרו ללא התערבות אנושית. זמן תגובה ממוצע ירד מ-4 שעות ל-30 שניות. צוות התמיכה מתמקד בבעיות מורכבות במקום שאלות חוזרות."
          }
        },
        costs: {
          title: "שיקולי עלות",
          content: "עלויות RAG גדלות עם השימוש. הנה מה לתקצב:",
          items: [
            { bold: "עלויות Embedding", text: "$0.02 לכל 1M טוקנים ב-OpenAI. אינדוקס ראשוני הוא עלות חד-פעמית; עלויות שוטפות מגיעות מתוכן חדש ו-embeddings של שאילתות." },
            { bold: "מסד נתונים וקטורי", text: "pgvector חינמי (משתמש ב-Postgres קיים). שירותים מנוהלים כמו Pinecone מתחילים ב-$70/חודש לעומסי עבודה בפרודקשן." },
            { bold: "הסקת LLM", text: "העלות השוטפת הגדולה ביותר. GPT-4o-mini ב-$0.15/1M טוקני קלט מספיק לרוב. השתמשו ב-GPT-4o ($2.50/1M) רק כשצריך." },
            { bold: "אחסון", text: "וקטורים קטנים (~6KB לקטע). 100K מסמכים ≈ 600MB. אחסון הוא לעתים רחוקות צוואר הבקבוק." }
          ]
        },
        mistakes: {
          title: "טעויות RAG נפוצות",
          items: [
            { bold: "חלוקה ללא מחשבה", text: "הגדרות ברירת מחדל לעתים רחוקות עובדות. בדקו גדלי קטעים שונים עם השאילתות האמיתיות שלכם. מה שעובד למסמכים משפטיים נכשל לקוד." },
            { bold: "התעלמות ממטא-דאטה", text: "סינון לפי תאריך, קטגוריה או הרשאות משתמש משפר דרמטית את הרלוונטיות. אל תסתמכו על חיפוש סמנטי בלבד." },
            { bold: "דילוג על הערכה", text: "אי אפשר לשפר מה שלא מודדים. בנו סט בדיקה של שאילתות ותשובות צפויות לפני אופטימיזציה." },
            { bold: "דחיסת יותר מדי הקשר", text: "יותר קטעים שאוחזרו זה לא תמיד טוב יותר. זה מגדיל עלויות ויכול לבלבל את ה-LLM. איכות על כמות." }
          ]
        },
        cta: {
          title: "מוכנים לבנות RAG במוצר שלכם?",
          content: "RAG הופך לסטנדרט במוצרים מונעי AI. אני עוזר לסטארטאפים לתכנן וליישם מערכות RAG שבאמת עובדות—מהחלטות ארכיטקטורה ועד פריסה בפרודקשן. בין אם אתם מוסיפים AI למוצר קיים או בונים משהו חדש, בואו נדון איך RAG יכול לתת לסטארטאפ שלכם יתרון תחרותי.",
          button: "לדון ביישום RAG"
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

            {/* What Is RAG */}
            <section>
              <h2 className="text-xl font-medium text-gray-950 mb-4">{t.sections.whatIs.title}</h2>
              <p className="mb-6">{t.sections.whatIs.content}</p>
              <h3 className="text-lg font-medium text-gray-900 mb-4">{t.sections.whatIs.flow.title}</h3>
              <div className="space-y-3">
                {t.sections.whatIs.flow.steps.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">{item.step}</span>
                    <span>{item.description}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits */}
            <section>
              <h2 className="text-xl font-medium text-gray-950 mb-6">{t.sections.benefits.title}</h2>
              <div className="space-y-5">
                {t.sections.benefits.items.map((item, i) => (
                  <div key={i}>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">{item.title}</h3>
                    <p>{item.content}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Comparison Table */}
            <section>
              <h2 className="text-xl font-medium text-gray-950 mb-6">{t.sections.comparison.title}</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      {t.sections.comparison.headers.map((header, i) => (
                        <th key={i} className="text-left py-3 px-2 font-medium text-gray-900">{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {t.sections.comparison.rows.map((row, i) => (
                      <tr key={i} className="border-b border-gray-100">
                        <td className="py-3 px-2 font-medium">{row.approach}</td>
                        <td className="py-3 px-2">{row.bestFor}</td>
                        <td className="py-3 px-2">{row.complexity}</td>
                        <td className="py-3 px-2">{row.accuracy}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* When to Use */}
            <section>
              <h2 className="text-xl font-medium text-gray-950 mb-6">{t.sections.when.title}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium text-green-700 mb-3">{t.sections.when.rightTime.title}</h3>
                  <ul className="space-y-2">
                    {t.sections.when.rightTime.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-red-700 mb-3">{t.sections.when.wrongTime.title}</h3>
                  <ul className="space-y-2">
                    {t.sections.when.wrongTime.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">✗</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Architecture */}
            <section>
              <h2 className="text-xl font-medium text-gray-950 mb-6">{t.sections.architecture.title}</h2>
              <div className="space-y-5">
                {t.sections.architecture.components.map((item, i) => (
                  <div key={i} className="border-l-2 border-gray-200 pl-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-1">{item.title}</h3>
                    <p>{item.content}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Checklist */}
            <section>
              <h2 className="text-xl font-medium text-gray-950 mb-6">{t.sections.checklist.title}</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <ul className="space-y-3">
                  {t.sections.checklist.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-5 h-5 border-2 border-gray-300 rounded flex-shrink-0 mt-0.5"></span>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Example */}
            <section>
              <h2 className="text-xl font-medium text-gray-950 mb-4">{t.sections.example.title}</h2>
              <p className="mb-6 italic text-gray-600">{t.sections.example.scenario}</p>

              <h3 className="text-lg font-medium text-gray-900 mb-3">{t.sections.example.architecture.title}</h3>
              <ul className="list-disc list-inside space-y-1 mb-6">
                {t.sections.example.architecture.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <h3 className="text-lg font-medium text-gray-900 mb-3">{t.sections.example.flow.title}</h3>
              <p className="mb-6 bg-gray-50 p-4 rounded-lg text-sm">{t.sections.example.flow.content}</p>

              <h3 className="text-lg font-medium text-gray-900 mb-3">{t.sections.example.results.title}</h3>
              <p className="text-green-700 font-medium">{t.sections.example.results.content}</p>
            </section>

            {/* Costs */}
            <section>
              <h2 className="text-xl font-medium text-gray-950 mb-4">{t.sections.costs.title}</h2>
              <p className="mb-4">{t.sections.costs.content}</p>
              <div className="space-y-3">
                {t.sections.costs.items.map((item, i) => (
                  <p key={i}>
                    <strong>{item.bold}:</strong> {item.text}
                  </p>
                ))}
              </div>
            </section>

            {/* Mistakes */}
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
                href="https://wa.me/972546522485?text=Hi%20Asaf,%20I'd%20like%20to%20discuss%20RAG%20implementation%20for%20my%20startup"
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
