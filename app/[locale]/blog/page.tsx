"use client"

import { useLocale } from 'next-intl';
import Link from 'next/link';

const blogPosts = [
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
    <div className={`min-h-screen bg-white py-16 px-6 sm:px-8 lg:px-12 ${isHebrew ? 'rtl' : 'ltr'}`} dir={isHebrew ? 'rtl' : 'ltr'}>
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
  )
}
