"use client"

import { useState, useMemo, useEffect } from 'react';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import Header from '@/components/Header';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const POSTS_PER_PAGE = 6;

type BlogPost = {
  slug: string;
  date: string;
  readTime: { en: string; he: string };
  title: { en: string; he: string };
  excerpt: { en: string; he: string };
  tags: { en: string[]; he: string[] };
  featured?: boolean;
};

const blogPosts: BlogPost[] = [
  {
    slug: "rag-for-startups-guide",
    date: "2025-12-17",
    readTime: { en: "8 min read", he: "8 דקות קריאה" },
    title: {
      en: "RAG for Startups: Building AI That Actually Knows Your Business",
      he: "RAG לסטארטאפים: בניית AI שבאמת מכיר את העסק שלכם"
    },
    excerpt: {
      en: "Learn how Retrieval Augmented Generation grounds AI responses in your actual business data — reducing hallucinations, enabling citations, and keeping your data private.",
      he: "למדו איך Retrieval Augmented Generation מעגן תשובות AI בנתונים העסקיים האמיתיים שלכם — מפחית הזיות, מאפשר ציטוטים ושומר על פרטיות הנתונים."
    },
    tags: { en: ["AI", "RAG", "Startups"], he: ["AI", "RAG", "סטארטאפים"] },
    featured: true
  },
  {
    slug: "ai-agents-for-startups",
    date: "2025-12-16",
    readTime: { en: "7 min read", he: "7 דקות קריאה" },
    title: {
      en: "AI Agents for Startups: When and How to Use Autonomous AI Systems",
      he: "סוכני AI לסטארטאפים: מתי ואיך להשתמש במערכות AI אוטונומיות"
    },
    excerpt: {
      en: "AI agents are the hottest topic in tech. Learn what they are, practical use cases for startups, popular frameworks, and how to implement them effectively.",
      he: "סוכני AI הם הנושא הלוהט ביותר בטכנולוגיה. למדו מה הם, מקרי שימוש מעשיים לסטארטאפים, פריימוורקים פופולריים ואיך ליישם אותם בצורה אפקטיבית."
    },
    tags: { en: ["AI", "Agents", "Startups"], he: ["AI", "סוכנים", "סטארטאפים"] }
  },
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
    },
    tags: { en: ["Tech Stack", "Startups", "Architecture"], he: ["טכנולוגיה", "סטארטאפים", "ארכיטקטורה"] }
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
    },
    tags: { en: ["AI", "MCP", "Integration"], he: ["AI", "MCP", "אינטגרציה"] }
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
    },
    tags: { en: ["AI", "Automation", "Business"], he: ["AI", "אוטומציה", "עסקים"] }
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
    },
    tags: { en: ["Architecture", "SaaS", "Planning"], he: ["ארכיטקטורה", "SaaS", "תכנון"] }
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
    },
    tags: { en: ["MVP", "Startups", "Product"], he: ["MVP", "סטארטאפים", "מוצר"] }
  }
];

function formatDate(dateString: string, isHebrew: boolean): string {
  const date = new Date(dateString);
  if (isHebrew) {
    return date.toLocaleDateString('he-IL', { year: 'numeric', month: 'long', day: 'numeric' });
  }
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  isHebrew
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  isHebrew: boolean;
}) {
  if (totalPages <= 1) return null;

  const pages: (number | 'ellipsis')[] = [];

  // Always show first page
  pages.push(1);

  // Add ellipsis or pages
  if (currentPage > 3) {
    pages.push('ellipsis');
  }

  // Add pages around current
  for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
    if (!pages.includes(i)) {
      pages.push(i);
    }
  }

  // Add ellipsis before last if needed
  if (currentPage < totalPages - 2) {
    pages.push('ellipsis');
  }

  // Always show last page if more than 1 page
  if (totalPages > 1 && !pages.includes(totalPages)) {
    pages.push(totalPages);
  }

  const buttonClass = (isActive: boolean, isDisabled: boolean) => `
    inline-flex items-center justify-center min-w-[40px] h-10 px-3 text-sm font-medium rounded-lg
    transition-all duration-150
    focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2
    ${isDisabled
      ? 'text-gray-300 cursor-not-allowed'
      : isActive
        ? 'bg-gray-900 text-white'
        : 'text-gray-700 hover:bg-gray-100'
    }
  `;

  return (
    <nav
      className="flex items-center justify-center gap-1 mt-12"
      aria-label={isHebrew ? 'ניווט עמודים' : 'Pagination'}
    >
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={buttonClass(false, currentPage === 1)}
        aria-label={isHebrew ? 'עמוד קודם' : 'Previous page'}
      >
        <svg
          className={`w-4 h-4 ${isHebrew ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <span className="hidden sm:inline ml-1">{isHebrew ? 'הקודם' : 'Previous'}</span>
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-1">
        {pages.map((page, index) => (
          page === 'ellipsis' ? (
            <span key={`ellipsis-${index}`} className="px-2 text-gray-400" aria-hidden="true">
              ...
            </span>
          ) : (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={buttonClass(currentPage === page, false)}
              aria-label={isHebrew ? `עמוד ${page}` : `Page ${page}`}
              aria-current={currentPage === page ? 'page' : undefined}
            >
              {page}
            </button>
          )
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={buttonClass(false, currentPage === totalPages)}
        aria-label={isHebrew ? 'עמוד הבא' : 'Next page'}
      >
        <span className="hidden sm:inline mr-1">{isHebrew ? 'הבא' : 'Next'}</span>
        <svg
          className={`w-4 h-4 ${isHebrew ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </nav>
  );
}

function PostCard({
  post,
  locale,
  isHebrew,
  isFeatured = false
}: {
  post: BlogPost;
  locale: string;
  isHebrew: boolean;
  isFeatured?: boolean;
}) {
  const title = isHebrew ? post.title.he : post.title.en;
  const excerpt = isHebrew ? post.excerpt.he : post.excerpt.en;
  const readTime = isHebrew ? post.readTime.he : post.readTime.en;
  const tags = isHebrew ? post.tags.he : post.tags.en;

  return (
    <Link
      href={`/${locale}/blog/${post.slug}`}
      className="block group focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 rounded-xl"
      aria-label={`${isHebrew ? 'קרא מאמר:' : 'Read article:'} ${title}`}
    >
      <article
        className={`
          h-full border border-gray-200 rounded-xl p-6
          hover:border-gray-300 hover:shadow-md
          transition-all duration-200
          flex flex-col
          ${isFeatured ? 'bg-gradient-to-br from-gray-50 to-white' : 'bg-white'}
        `}
      >
        {isFeatured && (
          <div className="mb-3">
            <Badge variant="default" className="bg-gray-900 text-white text-xs">
              {isHebrew ? 'מאמר מומלץ' : 'Featured'}
            </Badge>
          </div>
        )}

        <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-3">
          <time dateTime={post.date}>{formatDate(post.date, isHebrew)}</time>
          <span aria-hidden="true">•</span>
          <span>{readTime}</span>
        </div>

        <h2 className={`
          font-medium text-gray-950 mb-3
          group-hover:text-gray-700 transition-colors
          ${isFeatured ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'}
        `}>
          {title}
        </h2>

        <p className={`text-gray-600 leading-relaxed mb-4 flex-grow ${isFeatured ? '' : 'line-clamp-3'}`}>
          {excerpt}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-xs bg-gray-100 text-gray-700 hover:bg-gray-200"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </article>
    </Link>
  );
}

export default function BlogPage() {
  const locale = useLocale();
  const isHebrew = locale === 'he';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
  const [currentPage, setCurrentPage] = useState(1);

  const content = {
    en: {
      title: "Blog",
      subtitle: "Insights on building products, scaling startups, and software architecture",
      searchPlaceholder: "Search articles...",
      allTags: "All Topics",
      sortNewest: "Newest First",
      sortOldest: "Oldest First",
      noResults: "No articles found matching your criteria.",
      clearFilters: "Clear filters",
      articlesCount: (count: number) => `${count} article${count !== 1 ? 's' : ''}`,
      pageInfo: (current: number, total: number) => `Page ${current} of ${total}`,
    },
    he: {
      title: "בלוג",
      subtitle: "תובנות על בניית מוצרים, צמיחת סטארטאפים וארכיטקטורת תוכנה",
      searchPlaceholder: "חיפוש מאמרים...",
      allTags: "כל הנושאים",
      sortNewest: "החדשים ראשונים",
      sortOldest: "הישנים ראשונים",
      noResults: "לא נמצאו מאמרים התואמים לחיפוש.",
      clearFilters: "נקה סינון",
      articlesCount: (count: number) => `${count} מאמר${count !== 1 ? 'ים' : ''}`,
      pageInfo: (current: number, total: number) => `עמוד ${current} מתוך ${total}`,
    }
  };

  const t = isHebrew ? content.he : content.en;

  // Extract all unique tags
  const allTags = useMemo(() => {
    const tagsSet = new Set<string>();
    blogPosts.forEach(post => {
      const tags = isHebrew ? post.tags.he : post.tags.en;
      tags.forEach(tag => tagsSet.add(tag));
    });
    return Array.from(tagsSet).sort();
  }, [isHebrew]);

  // Filter and sort posts
  const filteredPosts = useMemo(() => {
    let filtered = [...blogPosts];

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(post => {
        const title = (isHebrew ? post.title.he : post.title.en).toLowerCase();
        const excerpt = (isHebrew ? post.excerpt.he : post.excerpt.en).toLowerCase();
        const tags = (isHebrew ? post.tags.he : post.tags.en).map(t => t.toLowerCase());
        return title.includes(query) || excerpt.includes(query) || tags.some(t => t.includes(query));
      });
    }

    // Tag filter
    if (selectedTag !== 'all') {
      filtered = filtered.filter(post => {
        const tags = isHebrew ? post.tags.he : post.tags.en;
        return tags.includes(selectedTag);
      });
    }

    // Sort
    filtered.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });

    return filtered;
  }, [searchQuery, selectedTag, sortOrder, isHebrew]);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedTag, sortOrder]);

  // Get featured post (only when no filters applied and on first page)
  const featuredPost = useMemo(() => {
    if (searchQuery || selectedTag !== 'all' || currentPage !== 1) return null;
    return blogPosts.find(post => post.featured) || blogPosts[0];
  }, [searchQuery, selectedTag, currentPage]);

  // Posts to paginate (exclude featured when showing it)
  const postsForPagination = useMemo(() => {
    if (!featuredPost) return filteredPosts;
    return filteredPosts.filter(post => post.slug !== featuredPost.slug);
  }, [filteredPosts, featuredPost]);

  // Pagination calculations
  const totalPages = Math.ceil(postsForPagination.length / POSTS_PER_PAGE);
  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    return postsForPagination.slice(startIndex, startIndex + POSTS_PER_PAGE);
  }, [postsForPagination, currentPage]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedTag('all');
    setSortOrder('newest');
    setCurrentPage(1);
  };

  const hasActiveFilters = searchQuery || selectedTag !== 'all';

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of posts section
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Header />
      <div
        className={`min-h-screen bg-white pt-24 pb-16 px-6 sm:px-8 lg:px-12 ${isHebrew ? 'rtl' : 'ltr'}`}
        dir={isHebrew ? 'rtl' : 'ltr'}
      >
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <header className="mb-10">
            <h1 className="text-4xl sm:text-5xl font-light tracking-tight text-gray-950 mb-4">
              {t.title}
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl">
              {t.subtitle}
            </p>
          </header>

          {/* Filters Section */}
          <div className="mb-8 space-y-4">
            {/* Search and Sort Row */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-grow max-w-md">
                <label htmlFor="search-posts" className="sr-only">
                  {t.searchPlaceholder}
                </label>
                <svg
                  className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 ${isHebrew ? 'right-3' : 'left-3'}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <Input
                  id="search-posts"
                  type="search"
                  placeholder={t.searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`${isHebrew ? 'pr-10 pl-3' : 'pl-10 pr-3'} h-10`}
                  aria-label={t.searchPlaceholder}
                />
              </div>

              <Select value={sortOrder} onValueChange={(value: 'newest' | 'oldest') => setSortOrder(value)}>
                <SelectTrigger
                  className="w-full sm:w-44 h-10"
                  aria-label={isHebrew ? 'סדר מיון' : 'Sort order'}
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">{t.sortNewest}</SelectItem>
                  <SelectItem value="oldest">{t.sortOldest}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Tag Chips */}
            <div className="flex flex-wrap gap-2" role="group" aria-label={isHebrew ? 'סנן לפי נושא' : 'Filter by topic'}>
              <button
                onClick={() => setSelectedTag('all')}
                className={`
                  px-3 py-1.5 text-sm rounded-full border transition-all duration-150
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2
                  ${selectedTag === 'all'
                    ? 'bg-gray-900 text-white border-gray-900'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400 hover:bg-gray-50'
                  }
                `}
                aria-pressed={selectedTag === 'all'}
              >
                {t.allTags}
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`
                    px-3 py-1.5 text-sm rounded-full border transition-all duration-150
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2
                    ${selectedTag === tag
                      ? 'bg-gray-900 text-white border-gray-900'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400 hover:bg-gray-50'
                    }
                  `}
                  aria-pressed={selectedTag === tag}
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Results count and clear filters */}
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center gap-3">
                <span>{t.articlesCount(filteredPosts.length)}</span>
                {totalPages > 1 && (
                  <>
                    <span aria-hidden="true">•</span>
                    <span>{t.pageInfo(currentPage, totalPages)}</span>
                  </>
                )}
              </div>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-gray-600 hover:text-gray-900 underline underline-offset-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 rounded"
                >
                  {t.clearFilters}
                </button>
              )}
            </div>
          </div>

          {/* Posts Grid */}
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg mb-4">{t.noResults}</p>
              <button
                onClick={clearFilters}
                className="text-gray-700 hover:text-gray-900 underline underline-offset-2 transition-colors"
              >
                {t.clearFilters}
              </button>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Featured Post */}
              {featuredPost && !hasActiveFilters && currentPage === 1 && (
                <section aria-labelledby="featured-heading">
                  <h2 id="featured-heading" className="sr-only">
                    {isHebrew ? 'מאמר מומלץ' : 'Featured Article'}
                  </h2>
                  <PostCard
                    post={featuredPost}
                    locale={locale}
                    isHebrew={isHebrew}
                    isFeatured={true}
                  />
                </section>
              )}

              {/* Regular Posts Grid */}
              <section aria-labelledby="articles-heading">
                <h2 id="articles-heading" className="sr-only">
                  {isHebrew ? 'כל המאמרים' : 'All Articles'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {paginatedPosts.map((post) => (
                    <PostCard
                      key={post.slug}
                      post={post}
                      locale={locale}
                      isHebrew={isHebrew}
                    />
                  ))}
                </div>
              </section>

              {/* Pagination */}
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                isHebrew={isHebrew}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
