"use client"

import { useLocale } from 'next-intl';
import Link from 'next/link';
import Header from '@/components/Header';

export default function SystemArchitecturePlanningGuide() {
  const locale = useLocale();
  const isHebrew = locale === 'he';

  const content = {
    en: {
      backToList: "← Back to Blog",
      date: "December 11, 2025",
      readTime: "8 min read",
      title: "How to Plan System Architecture Before Development",
      sections: {
        intro: {
          content: "Every failed software project shares a common thread: they started coding before they understood what they were building. System architecture isn't just diagrams and documentation—it's the foundation that determines whether your product will scale, adapt to change, or collapse under its own weight. Whether you're building a SaaS platform, an AI-powered application, or a cloud-based enterprise system, the decisions you make before writing the first line of code will echo throughout the entire project lifecycle."
        },
        whyMatters: {
          title: "Why Architecture Planning Matters",
          content: "Software development without architecture planning is like constructing a building without blueprints. You might get something standing, but it won't be what you need.",
          benefits: [
            { bold: "Reduced Technical Debt", text: "Proper planning prevents the accumulation of shortcuts and workarounds that slow down future development." },
            { bold: "Scalability by Design", text: "Systems designed with growth in mind can handle increased load without complete rewrites." },
            { bold: "Team Alignment", text: "Clear architecture documents ensure everyone understands how components interact and where responsibilities lie." },
            { bold: "Cost Efficiency", text: "Fixing architectural problems after launch costs 10-100x more than addressing them during planning." },
            { bold: "Faster Development", text: "When the structure is clear, developers spend less time making decisions and more time building features." }
          ]
        },
        phases: {
          title: "The Five Phases of Architecture Planning",
          intro: "Effective system architecture follows a structured approach. Here's the methodology I use with clients building everything from MVPs to enterprise platforms.",
          steps: [
            {
              title: "Phase 1: Requirements Analysis",
              content: "Before drawing a single diagram, you need to understand what the system must accomplish. This goes beyond feature lists—you need to understand the business context.",
              questions: [
                "What problem does this system solve?",
                "Who are the users, and how will they interact with it?",
                "What are the non-functional requirements (performance, security, availability)?",
                "What integrations are required with existing systems?",
                "What are the compliance and regulatory constraints?"
              ],
              tip: "Document assumptions explicitly. What seems obvious today becomes a source of confusion six months later."
            },
            {
              title: "Phase 2: Technology Selection",
              content: "Choosing the right technology stack is about matching tools to requirements, not following trends. For modern web applications, I typically recommend proven combinations.",
              recommendations: [
                { category: "Frontend", tech: "Next.js with TypeScript—offers server-side rendering, excellent SEO capabilities, and a robust developer experience." },
                { category: "Backend", tech: "NestJS for complex APIs—provides structure, dependency injection, and excellent TypeScript support. For simpler needs, Next.js API routes suffice." },
                { category: "Database", tech: "PostgreSQL remains the gold standard for relational data. For document-heavy workloads, consider MongoDB." },
                { category: "Cloud Infrastructure", tech: "AWS or Google Cloud for enterprise needs; Vercel or Railway for faster deployment cycles." },
                { category: "AI Integration", tech: "For Document AI and automation, Google Cloud's Document AI or custom solutions with OpenAI APIs provide flexible options." }
              ],
              warning: "Avoid choosing technologies just because they're popular. Every tool should solve a specific problem you actually have."
            },
            {
              title: "Phase 3: Component Design",
              content: "With requirements clear and technologies selected, it's time to design the system's major components and their interactions.",
              principles: [
                { name: "Separation of Concerns", desc: "Each component should have a single, well-defined responsibility." },
                { name: "Loose Coupling", desc: "Components should communicate through defined interfaces, not internal implementation details." },
                { name: "High Cohesion", desc: "Related functionality should be grouped together." },
                { name: "Fail Gracefully", desc: "Design for failure—every external dependency will eventually fail." }
              ],
              deliverables: "Key deliverables at this phase include component diagrams, API contracts, data flow diagrams, and database schemas."
            },
            {
              title: "Phase 4: Security Architecture",
              content: "Security cannot be an afterthought. For startups handling user data, the consequences of security failures range from reputation damage to legal liability.",
              checklist: [
                "Authentication strategy (JWT, sessions, OAuth)",
                "Authorization model (RBAC, ABAC)",
                "Data encryption (at rest and in transit)",
                "Input validation and sanitization",
                "Rate limiting and DDoS protection",
                "Audit logging and monitoring",
                "Secrets management"
              ],
              note: "For SaaS products, consider multi-tenancy implications from day one. Retrofitting tenant isolation is extremely costly."
            },
            {
              title: "Phase 5: Scalability Planning",
              content: "Your MVP doesn't need to handle millions of users, but your architecture should have a clear path to scale when needed.",
              strategies: [
                { name: "Horizontal Scaling", desc: "Design stateless services that can run multiple instances behind a load balancer." },
                { name: "Database Scaling", desc: "Plan for read replicas, connection pooling, and potential sharding strategies." },
                { name: "Caching Strategy", desc: "Identify cacheable data and choose appropriate caching layers (CDN, Redis, application-level)." },
                { name: "Async Processing", desc: "Move non-critical operations to background queues to improve response times." }
              ],
              tip: "Document scaling triggers: at what metrics (users, requests, data volume) will you need to implement each scaling strategy?"
            }
          ]
        },
        artifacts: {
          title: "Essential Architecture Artifacts",
          intro: "Good architecture planning produces tangible outputs that guide development:",
          items: [
            { name: "Architecture Decision Records (ADRs)", desc: "Document why each significant decision was made, including alternatives considered." },
            { name: "System Context Diagram", desc: "Shows your system's boundaries and external dependencies." },
            { name: "Component Diagram", desc: "Illustrates major components and their relationships." },
            { name: "Deployment Diagram", desc: "Maps components to infrastructure." },
            { name: "API Specifications", desc: "OpenAPI/Swagger documentation for all interfaces." },
            { name: "Data Model", desc: "Entity-relationship diagrams and schema definitions." }
          ],
          advice: "Keep documentation lightweight but sufficient. The goal is clarity, not comprehensiveness."
        },
        mistakes: {
          title: "Common Architecture Mistakes",
          items: [
            { bold: "Premature Optimization", text: "Designing for scale you don't have yet wastes resources. Build for current needs with clear scaling paths." },
            { bold: "Ignoring Operational Concerns", text: "If you can't deploy, monitor, and debug it easily, your architecture has failed." },
            { bold: "Over-Engineering", text: "Microservices for a three-person team is usually a mistake. Start simple, extract services when you have proven need." },
            { bold: "Copying Big Tech", text: "Google's architecture solves Google's problems. Your startup has different constraints." },
            { bold: "Skipping Prototypes", text: "For uncertain technical choices, build a quick proof-of-concept before committing." }
          ]
        },
        realWorld: {
          title: "Real-World Example: SaaS Platform Architecture",
          intro: "Here's how I approached architecture for a recent SaaS project—a B2B platform requiring multi-tenancy, real-time features, and AI-powered document processing.",
          decisions: [
            { area: "Frontend", choice: "Next.js 14 with App Router for SEO-critical marketing pages and fast application performance." },
            { area: "Backend", choice: "NestJS with PostgreSQL, using row-level security for tenant isolation." },
            { area: "Real-time", choice: "Socket.io with Redis adapter for scalable WebSocket connections." },
            { area: "AI Processing", choice: "Google Document AI for structured data extraction, with custom post-processing pipeline." },
            { area: "Infrastructure", choice: "AWS with Terraform for reproducible deployments, starting with a single region." }
          ],
          outcome: "This architecture allowed the team to launch an MVP in 8 weeks while maintaining a clear path to scale as the customer base grows."
        },
        cta: {
          title: "Need Help Planning Your Architecture?",
          content: "Whether you're starting a new project or untangling an existing system, I can help you design architecture that supports your business goals. From quick architecture reviews to full technical leadership, I work with startups and teams who want to build things right the first time.",
          button: "Let's discuss your project"
        }
      }
    },
    he: {
      backToList: "→ חזרה לבלוג",
      date: "11 בדצמבר 2025",
      readTime: "8 דקות קריאה",
      title: "איך לתכנן ארכיטקטורת מערכת לפני פיתוח",
      sections: {
        intro: {
          content: "לכל פרויקט תוכנה כושל יש חוט משותף: הם התחילו לכתוב קוד לפני שהבינו מה הם בונים. ארכיטקטורת מערכת היא לא רק דיאגרמות ותיעוד — זה היסוד שקובע אם המוצר שלך יוכל לצמוח, להסתגל לשינויים, או לקרוס תחת משקלו. בין אם אתה בונה פלטפורמת SaaS, אפליקציה מבוססת AI, או מערכת ארגונית בענן, ההחלטות שתקבל לפני כתיבת שורת הקוד הראשונה יהדהדו לאורך כל מחזור חיי הפרויקט."
        },
        whyMatters: {
          title: "למה תכנון ארכיטקטורה חשוב",
          content: "פיתוח תוכנה ללא תכנון ארכיטקטורה דומה לבניית בניין ללא תוכניות. אולי תקבל משהו שעומד, אבל זה לא יהיה מה שאתה צריך.",
          benefits: [
            { bold: "הפחתת חוב טכני", text: "תכנון נכון מונע הצטברות של קיצורי דרך ועקיפות שמאטים פיתוח עתידי." },
            { bold: "סקיילביליות מתוכננת", text: "מערכות שתוכננו עם צמיחה בראש יכולות להתמודד עם עומס מוגבר ללא שכתוב מלא." },
            { bold: "יישור צוות", text: "מסמכי ארכיטקטורה ברורים מבטיחים שכולם מבינים איך רכיבים מתקשרים והיכן נמצאות האחריויות." },
            { bold: "יעילות עלויות", text: "תיקון בעיות ארכיטקטורה אחרי השקה עולה פי 10-100 יותר מאשר טיפול בהן בזמן התכנון." },
            { bold: "פיתוח מהיר יותר", text: "כשהמבנה ברור, מפתחים מבלים פחות זמן בקבלת החלטות ויותר זמן בבניית פיצ'רים." }
          ]
        },
        phases: {
          title: "חמשת השלבים של תכנון ארכיטקטורה",
          intro: "ארכיטקטורת מערכת אפקטיבית עוקבת אחר גישה מובנית. הנה המתודולוגיה שאני משתמש בה עם לקוחות שבונים הכל מ-MVP ועד פלטפורמות ארגוניות.",
          steps: [
            {
              title: "שלב 1: ניתוח דרישות",
              content: "לפני שמציירים דיאגרמה אחת, צריך להבין מה המערכת צריכה להשיג. זה חורג מעבר לרשימות פיצ'רים — צריך להבין את ההקשר העסקי.",
              questions: [
                "איזו בעיה המערכת הזו פותרת?",
                "מי המשתמשים, ואיך הם יתקשרו איתה?",
                "מהן הדרישות הלא-פונקציונליות (ביצועים, אבטחה, זמינות)?",
                "אילו אינטגרציות נדרשות עם מערכות קיימות?",
                "מהן מגבלות הרגולציה והתאימות?"
              ],
              tip: "תעד הנחות במפורש. מה שנראה מובן מאליו היום הופך למקור בלבול שישה חודשים אחר כך."
            },
            {
              title: "שלב 2: בחירת טכנולוגיות",
              content: "בחירת ה-stack הטכנולוגי הנכון היא עניין של התאמת כלים לדרישות, לא מעקב אחרי טרנדים. לאפליקציות ווב מודרניות, אני בדרך כלל ממליץ על שילובים מוכחים.",
              recommendations: [
                { category: "Frontend", tech: "Next.js עם TypeScript — מציע רינדור בצד השרת, יכולות SEO מעולות, וחוויית מפתח חזקה." },
                { category: "Backend", tech: "NestJS ל-APIs מורכבים — מספק מבנה, dependency injection, ותמיכה מצוינת ב-TypeScript. לצרכים פשוטים יותר, API routes של Next.js מספיקים." },
                { category: "בסיס נתונים", tech: "PostgreSQL נשאר תקן הזהב לנתונים רלציוניים. לעומסי עבודה עתירי מסמכים, שקול MongoDB." },
                { category: "תשתית ענן", tech: "AWS או Google Cloud לצרכים ארגוניים; Vercel או Railway למחזורי פריסה מהירים יותר." },
                { category: "אינטגרציית AI", tech: "ל-Document AI ואוטומציה, Document AI של Google Cloud או פתרונות מותאמים עם OpenAI APIs מספקים אפשרויות גמישות." }
              ],
              warning: "הימנע מבחירת טכנולוגיות רק כי הן פופולריות. כל כלי צריך לפתור בעיה ספציפית שבאמת יש לך."
            },
            {
              title: "שלב 3: עיצוב רכיבים",
              content: "עם דרישות ברורות וטכנולוגיות שנבחרו, הגיע הזמן לעצב את הרכיבים המרכזיים של המערכת ואת האינטראקציות ביניהם.",
              principles: [
                { name: "הפרדת אחריויות", desc: "לכל רכיב צריכה להיות אחריות אחת ומוגדרת היטב." },
                { name: "צימוד רופף", desc: "רכיבים צריכים לתקשר דרך ממשקים מוגדרים, לא פרטי יישום פנימיים." },
                { name: "לכידות גבוהה", desc: "פונקציונליות קשורה צריכה להיות מקובצת יחד." },
                { name: "כשל אלגנטי", desc: "תכנן לכשלים — כל תלות חיצונית תיכשל בסופו של דבר." }
              ],
              deliverables: "תוצרים מרכזיים בשלב זה כוללים דיאגרמות רכיבים, חוזי API, דיאגרמות זרימת נתונים, וסכמות בסיס נתונים."
            },
            {
              title: "שלב 4: ארכיטקטורת אבטחה",
              content: "אבטחה לא יכולה להיות מחשבה שלאחר מעשה. לסטארטאפים שמטפלים בנתוני משתמשים, ההשלכות של כשלי אבטחה נעות בין נזק למוניטין לאחריות משפטית.",
              checklist: [
                "אסטרטגיית אימות (JWT, sessions, OAuth)",
                "מודל הרשאות (RBAC, ABAC)",
                "הצפנת נתונים (במנוחה ובתעבורה)",
                "ולידציה וסניטציה של קלט",
                "הגבלת קצב והגנה מפני DDoS",
                "לוגים ומוניטורינג",
                "ניהול סודות"
              ],
              note: "למוצרי SaaS, שקול השלכות multi-tenancy מהיום הראשון. התקנה מאוחרת של בידוד דיירים יקרה מאוד."
            },
            {
              title: "שלב 5: תכנון סקיילביליות",
              content: "ה-MVP שלך לא צריך להתמודד עם מיליוני משתמשים, אבל הארכיטקטורה שלך צריכה להכיל נתיב ברור לצמיחה כשיידרש.",
              strategies: [
                { name: "סקיילינג אופקי", desc: "תכנן שירותים stateless שיכולים לרוץ במספר instances מאחורי load balancer." },
                { name: "סקיילינג בסיס נתונים", desc: "תכנן read replicas, connection pooling, ואסטרטגיות sharding פוטנציאליות." },
                { name: "אסטרטגיית Caching", desc: "זהה נתונים שניתן לשמור ב-cache ובחר שכבות caching מתאימות (CDN, Redis, ברמת האפליקציה)." },
                { name: "עיבוד אסינכרוני", desc: "העבר פעולות לא קריטיות לתורים ברקע כדי לשפר זמני תגובה." }
              ],
              tip: "תעד טריגרים לסקיילינג: באילו מטריקות (משתמשים, בקשות, נפח נתונים) תצטרך ליישם כל אסטרטגיית סקיילינג?"
            }
          ]
        },
        artifacts: {
          title: "תוצרי ארכיטקטורה חיוניים",
          intro: "תכנון ארכיטקטורה טוב מייצר תוצרים מוחשיים שמנחים את הפיתוח:",
          items: [
            { name: "רשומות החלטות ארכיטקטורה (ADRs)", desc: "תעד למה כל החלטה משמעותית התקבלה, כולל חלופות שנשקלו." },
            { name: "דיאגרמת הקשר מערכת", desc: "מציגה את גבולות המערכת שלך ותלויות חיצוניות." },
            { name: "דיאגרמת רכיבים", desc: "ממחישה רכיבים מרכזיים והקשרים ביניהם." },
            { name: "דיאגרמת פריסה", desc: "ממפה רכיבים לתשתית." },
            { name: "מפרטי API", desc: "תיעוד OpenAPI/Swagger לכל הממשקים." },
            { name: "מודל נתונים", desc: "דיאגרמות entity-relationship והגדרות סכמה." }
          ],
          advice: "שמור על תיעוד קליל אך מספיק. המטרה היא בהירות, לא מקיפות."
        },
        mistakes: {
          title: "טעויות ארכיטקטורה נפוצות",
          items: [
            { bold: "אופטימיזציה מוקדמת מדי", text: "תכנון לסקייל שעדיין אין לך מבזבז משאבים. בנה לצרכים נוכחיים עם נתיבי סקיילינג ברורים." },
            { bold: "התעלמות מדאגות תפעוליות", text: "אם אתה לא יכול לפרוס, לנטר ולדבג את זה בקלות, הארכיטקטורה שלך נכשלה." },
            { bold: "הנדסת-יתר", text: "מיקרו-שירותים לצוות של שלושה אנשים זה בדרך כלל טעות. התחל פשוט, חלץ שירותים כשיש צורך מוכח." },
            { bold: "העתקת Big Tech", text: "הארכיטקטורה של גוגל פותרת את הבעיות של גוגל. לסטארטאפ שלך יש אילוצים שונים." },
            { bold: "דילוג על פרוטוטייפים", text: "לבחירות טכניות לא ודאיות, בנה proof-of-concept מהיר לפני התחייבות." }
          ]
        },
        realWorld: {
          title: "דוגמה מהעולם האמיתי: ארכיטקטורת פלטפורמת SaaS",
          intro: "הנה איך ניגשתי לארכיטקטורה לפרויקט SaaS אחרון — פלטפורמת B2B שדרשה multi-tenancy, פיצ'רים בזמן אמת, ועיבוד מסמכים מבוסס AI.",
          decisions: [
            { area: "Frontend", choice: "Next.js 14 עם App Router לדפי שיווק קריטיים ל-SEO וביצועי אפליקציה מהירים." },
            { area: "Backend", choice: "NestJS עם PostgreSQL, תוך שימוש ב-row-level security לבידוד דיירים." },
            { area: "זמן אמת", choice: "Socket.io עם Redis adapter לחיבורי WebSocket סקיילביליים." },
            { area: "עיבוד AI", choice: "Google Document AI לחילוץ נתונים מובנה, עם pipeline עיבוד מותאם." },
            { area: "תשתית", choice: "AWS עם Terraform לפריסות שניתן לשחזר, מתחילים עם אזור יחיד." }
          ],
          outcome: "ארכיטקטורה זו אפשרה לצוות להשיק MVP ב-8 שבועות תוך שמירה על נתיב ברור לצמיחה ככל שבסיס הלקוחות גדל."
        },
        cta: {
          title: "צריך עזרה בתכנון הארכיטקטורה שלך?",
          content: "בין אם אתה מתחיל פרויקט חדש או מפרק מערכת קיימת, אני יכול לעזור לך לתכנן ארכיטקטורה שתומכת במטרות העסקיות שלך. מסקירות ארכיטקטורה מהירות ועד הובלה טכנית מלאה, אני עובד עם סטארטאפים וצוותים שרוצים לבנות דברים נכון מההתחלה.",
          button: "בואו נדבר על הפרויקט שלך"
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
            {/* Introduction */}
            <section>
              <p className="text-lg">{t.sections.intro.content}</p>
            </section>

            {/* Why Architecture Matters */}
            <section>
              <h2 className="text-xl font-medium text-gray-950 mb-4">{t.sections.whyMatters.title}</h2>
              <p className="mb-4">{t.sections.whyMatters.content}</p>
              <div className="space-y-3">
                {t.sections.whyMatters.benefits.map((benefit, i) => (
                  <p key={i}>
                    <strong>{benefit.bold}:</strong> {benefit.text}
                  </p>
                ))}
              </div>
            </section>

            {/* Five Phases */}
            <section>
              <h2 className="text-xl font-medium text-gray-950 mb-4">{t.sections.phases.title}</h2>
              <p className="mb-6">{t.sections.phases.intro}</p>

              <div className="space-y-8">
                {/* Phase 1 */}
                <div className="border-l-2 border-gray-200 pl-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">{t.sections.phases.steps[0].title}</h3>
                  <p className="mb-4">{t.sections.phases.steps[0].content}</p>
                  <p className="font-medium mb-2">{isHebrew ? 'שאלות מפתח:' : 'Key questions to answer:'}</p>
                  <ul className={`list-disc space-y-1 mb-4 ${isHebrew ? 'pr-6' : 'pl-6'}`}>
                    {t.sections.phases.steps[0].questions.map((q, i) => (
                      <li key={i}>{q}</li>
                    ))}
                  </ul>
                  <p className="text-gray-600 italic">{t.sections.phases.steps[0].tip}</p>
                </div>

                {/* Phase 2 */}
                <div className="border-l-2 border-gray-200 pl-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">{t.sections.phases.steps[1].title}</h3>
                  <p className="mb-4">{t.sections.phases.steps[1].content}</p>
                  <div className="space-y-3 mb-4">
                    {t.sections.phases.steps[1].recommendations.map((rec, i) => (
                      <p key={i}>
                        <strong>{rec.category}:</strong> {rec.tech}
                      </p>
                    ))}
                  </div>
                  <p className="text-amber-700 bg-amber-50 p-3 rounded-lg">{t.sections.phases.steps[1].warning}</p>
                </div>

                {/* Phase 3 */}
                <div className="border-l-2 border-gray-200 pl-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">{t.sections.phases.steps[2].title}</h3>
                  <p className="mb-4">{t.sections.phases.steps[2].content}</p>
                  <p className="font-medium mb-2">{isHebrew ? 'עקרונות מנחים:' : 'Guiding principles:'}</p>
                  <div className="space-y-2 mb-4">
                    {t.sections.phases.steps[2].principles.map((p, i) => (
                      <p key={i}>
                        <strong>{p.name}:</strong> {p.desc}
                      </p>
                    ))}
                  </div>
                  <p className="text-gray-600 italic">{t.sections.phases.steps[2].deliverables}</p>
                </div>

                {/* Phase 4 */}
                <div className="border-l-2 border-gray-200 pl-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">{t.sections.phases.steps[3].title}</h3>
                  <p className="mb-4">{t.sections.phases.steps[3].content}</p>
                  <p className="font-medium mb-2">{isHebrew ? 'רשימת בדיקה לאבטחה:' : 'Security checklist:'}</p>
                  <ul className={`list-disc space-y-1 mb-4 ${isHebrew ? 'pr-6' : 'pl-6'}`}>
                    {t.sections.phases.steps[3].checklist.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <p className="text-blue-700 bg-blue-50 p-3 rounded-lg">{t.sections.phases.steps[3].note}</p>
                </div>

                {/* Phase 5 */}
                <div className="border-l-2 border-gray-200 pl-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">{t.sections.phases.steps[4].title}</h3>
                  <p className="mb-4">{t.sections.phases.steps[4].content}</p>
                  <div className="space-y-2 mb-4">
                    {t.sections.phases.steps[4].strategies.map((s, i) => (
                      <p key={i}>
                        <strong>{s.name}:</strong> {s.desc}
                      </p>
                    ))}
                  </div>
                  <p className="text-gray-600 italic">{t.sections.phases.steps[4].tip}</p>
                </div>
              </div>
            </section>

            {/* Essential Artifacts */}
            <section>
              <h2 className="text-xl font-medium text-gray-950 mb-4">{t.sections.artifacts.title}</h2>
              <p className="mb-4">{t.sections.artifacts.intro}</p>
              <div className="space-y-3 mb-4">
                {t.sections.artifacts.items.map((item, i) => (
                  <p key={i}>
                    <strong>{item.name}:</strong> {item.desc}
                  </p>
                ))}
              </div>
              <p className="text-gray-600 italic">{t.sections.artifacts.advice}</p>
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

            {/* Real World Example */}
            <section className="bg-gray-50 p-6 rounded-xl">
              <h2 className="text-xl font-medium text-gray-950 mb-4">{t.sections.realWorld.title}</h2>
              <p className="mb-4">{t.sections.realWorld.intro}</p>
              <div className="space-y-2 mb-4">
                {t.sections.realWorld.decisions.map((d, i) => (
                  <p key={i}>
                    <strong>{d.area}:</strong> {d.choice}
                  </p>
                ))}
              </div>
              <p className="font-medium text-gray-900">{t.sections.realWorld.outcome}</p>
            </section>

            {/* CTA */}
            <section className="border-t border-gray-200 pt-8 mt-10">
              <h2 className="text-xl font-medium text-gray-950 mb-4">{t.sections.cta.title}</h2>
              <p className="mb-6">{t.sections.cta.content}</p>
              <a
                href="https://wa.me/972546522485?text=Hi%20Asaf,%20I'm%20interested%20in%20architecture%20planning%20services"
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
