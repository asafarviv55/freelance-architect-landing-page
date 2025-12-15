"use client"

import { useLocale } from 'next-intl';
import Link from 'next/link';
import Header from '@/components/Header';

const blogPosts = [
  {
    slug: "choosing-tech-stack-for-startup",
    date: "2025-12-15",
    readTime: { en: "6 min read", he: "6 דקות קריאה" },
    title: {
      en: "Choosing the Right Tech Stack for Your Startup",
      he: "איך לבחור את הטכנולוגיה הנכונה לסטארטאפ שלך"
    },
    excerpt: {
      en: "Your tech stack is the foundation of your product. Learn how to evaluate options, avoid common mistakes, and choose technologies that accelerate your growth.",
      he: "הטכנולוגיה שלך היא הבסיס של המוצר. למדו איך להעריך אפשרויות, להימנע מטעויות נפוצות, ולבחור טכנולוגיות שמאיצות את הצמיחה שלכם."
    }
  },
  {
    slug: "mcp-model-context-protocol-guide",
    date: "2025-12-14",
    readTime: { en: "7 min read", he: "7 דקות קריאה" },
    title: {
      en: "MCP: The Protocol That Connects AI to Your Business Systems",
      he: "MCP: הפרוטוקול שמחבר AI למערכות העסקיות שלך"
    },
    excerpt: {
      en: "Learn how Model Context Protocol (MCP) enables AI to securely connect to your databases, APIs, and business applications — turning chatbots into integrated business tools.",
      he: "למדו איך Model Context Protocol (MCP) מאפשר ל-AI להתחבר בצורה מאובטחת למסדי הנתונים, APIs והאפליקציות העסקיות שלכם — והופך צ'אטבוטים לכלים עסקיים משולבים."
    }
  },
  {
    slug: "ai-automation-for-business",
    date: "2025-12-13",
    readTime: { en: "5 min read", he: "5 דקות קריאה" },
    title: {
      en: "How AI Automation Can Transform Your Business Operations",
      he: "איך אוטומציית AI יכולה לשנות את הפעילות העסקית שלך"
    },
    excerpt: {
      en: "Discover how AI automation eliminates repetitive tasks, extracts insights from data, and delivers better customer experiences — with practical implementation strategies.",
      he: "גלו איך אוטומציית AI מבטלת משימות חוזרות, מחלצת תובנות מנתונים, ומספקת חוויות לקוח טובות יותר — עם אסטרטגיות יישום מעשיות."
    }
  },
  {
    slug: "system-architecture-planning-guide",
    date: "2025-12-11",
    readTime: { en: "8 min read", he: "8 דקות קריאה" },
    title: {
      en: "How to Plan System Architecture Before Development",
      he: "איך לתכנן ארכיטקטורת מערכת לפני פיתוח"
    },
    excerpt: {
      en: "A comprehensive guide to planning system architecture — from requirements analysis to scalability planning, with real-world SaaS examples.",
      he: "מדריך מקיף לתכנון ארכיטקטורת מערכת — מניתוח דרישות ועד תכנון סקיילביליות, עם דוגמאות מעולם ה-SaaS."
    }
  },
  {
    slug: "how-to-build-mvp-for-startups",
    date: "2025-12-10",
    readTime: { en: "3 min read", he: "3 דקות קריאה" },
    title: {
      en: "How to Build an MVP for Startups",
      he: "איך לבנות MVP לסטארטאפים"
    },
    excerpt: {
      en: "A practical guide to building your Minimum Viable Product — from defining the core problem to launching and measuring results.",
      he: "מדריך מעשי לבניית המוצר המינימלי שלך — מהגדרת הבעיה המרכזית ועד להשקה ומדידת תוצאות."
    }
  }
];

export default function BlogPage() {
  const locale = useLocale();
  const isHebrew = locale === 'he';

  const content = {
    en: {
      title: "Blog",
      subtitle: "Insights on building products, scaling startups, and software architecture"
    },
    he: {
      title: "בלוג",
      subtitle: "תובנות על בניית מוצרים, צמיחת סטארטאפים וארכיטקטורת תוכנה"
    }
  };

  const t = isHebrew ? content.he : content.en;

  return (
    <>
      <Header />
      <div className={`min-h-screen bg-white pt-24 pb-16 px-6 sm:px-8 lg:px-12 ${isHebrew ? 'rtl' : 'ltr'}`} dir={isHebrew ? 'rtl' : 'ltr'}>
        <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight text-gray-950 mb-4">
            {t.title}
          </h1>
          <p className="text-lg text-gray-500">
            {t.subtitle}
          </p>
        </div>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/${locale}/blog/${post.slug}`}
              className="block group"
            >
              <article className="border border-gray-200 rounded-xl p-6 sm:p-8 hover:border-gray-300 hover:shadow-sm transition-all duration-200">
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                  <time>{post.date}</time>
                  <span>•</span>
                  <span>{isHebrew ? post.readTime.he : post.readTime.en}</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-medium text-gray-950 mb-3 group-hover:text-gray-700 transition-colors">
                  {isHebrew ? post.title.he : post.title.en}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {isHebrew ? post.excerpt.he : post.excerpt.en}
                </p>
              </article>
            </Link>
          ))}
        </div>
        </div>
      </div>
    </>
  )
}
