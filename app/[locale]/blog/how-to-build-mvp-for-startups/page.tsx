"use client"

import { useLocale } from 'next-intl';
import Link from 'next/link';
import Header from '@/components/Header';

export default function HowToBuildMVPForStartups() {
  const locale = useLocale();
  const isHebrew = locale === 'he';

  const content = {
    en: {
      backToList: "← Back to Blog",
      date: "December 10, 2025",
      readTime: "3 min read",
      title: "How to Build an MVP for Startups",
      sections: {
        whatIsMvp: {
          title: "What is an MVP?",
          content: "A Minimum Viable Product (MVP) is the simplest version of your product that delivers core value to users. It's not a prototype or a demo—it's a functional product built to test your business hypothesis with real customers."
        },
        whyNeed: {
          title: "Why Startups Need an MVP",
          intro: "Building a full product before validating your idea is the fastest way to burn through capital. An MVP lets you:",
          points: [
            "Validate demand before committing significant resources",
            "Gather real user feedback to guide development",
            "Attract investors with proven traction, not just slides",
            "Reduce time to market and start generating revenue sooner"
          ],
          outro: "The goal isn't perfection. It's learning what works—fast."
        },
        fourSteps: {
          title: "The 4 Steps to Building an MVP",
          steps: [
            {
              title: "1. Define the Core Problem",
              content: "Identify the single most important problem your product solves. Not three problems. Not five features. One core value proposition that makes users care.",
              question: "Ask yourself: If my product could only do one thing, what would it be?"
            },
            {
              title: "2. Identify Must-Have Features",
              content: "List every feature you think you need. Then cut 80% of it. Keep only what's essential to deliver your core value. A good MVP has 3-5 features maximum.",
              question: "Use this filter: Does removing this feature make the product useless? If not, remove it."
            },
            {
              title: "3. Build Fast, Build Lean",
              content: "Choose technologies that accelerate development, not ones that impress engineers. Use existing tools, frameworks, and APIs wherever possible. Every custom solution you build is time you're not spending with customers.",
              question: "Set a hard deadline—typically 4-8 weeks. Constraints force focus."
            },
            {
              title: "4. Launch and Measure",
              content: "Get your MVP in front of real users immediately. Track what matters: user engagement, retention, and conversion. Ignore vanity metrics.",
              question: "The data you collect now determines what you build next."
            }
          ]
        },
        mistakes: {
          title: "Common Mistakes to Avoid",
          items: [
            { bold: "Over-engineering", text: "Your MVP doesn't need to scale to millions of users. It needs to work for your first hundred." },
            { bold: "Feature creep", text: "Every \"quick addition\" delays your launch. Stay disciplined." },
            { bold: "Skipping user research", text: "Building what you assume users want instead of what they actually need wastes everyone's time." },
            { bold: "Perfectionism", text: "A shipped MVP beats a perfect product that never launches. Done is better than perfect." },
            { bold: "Ignoring feedback", text: "If users tell you something isn't working, listen. Your assumptions are probably wrong." }
          ]
        },
        cta: {
          title: "Ready to Build Your MVP?",
          content: "I help startups go from idea to launched product in weeks, not months. Whether you need technical guidance, hands-on development, or a full MVP build, I can help you move fast without cutting corners that matter.",
          button: "Let's talk about your project"
        }
      }
    },
    he: {
      backToList: "→ חזרה לבלוג",
      date: "10 בדצמבר 2025",
      readTime: "3 דקות קריאה",
      title: "איך לבנות MVP לסטארטאפים",
      sections: {
        whatIsMvp: {
          title: "מה זה MVP?",
          content: "מוצר מינימלי בר-קיימא (MVP) הוא הגרסה הפשוטה ביותר של המוצר שלך שמספקת ערך מרכזי למשתמשים. זה לא פרוטוטייפ או דמו — זה מוצר פונקציונלי שנבנה כדי לבדוק את ההשערה העסקית שלך עם לקוחות אמיתיים."
        },
        whyNeed: {
          title: "למה סטארטאפים צריכים MVP",
          intro: "בניית מוצר מלא לפני אימות הרעיון שלך היא הדרך המהירה ביותר לשרוף הון. MVP מאפשר לך:",
          points: [
            "לאמת ביקוש לפני התחייבות למשאבים משמעותיים",
            "לאסוף משוב אמיתי ממשתמשים כדי להנחות את הפיתוח",
            "למשוך משקיעים עם טרקשן מוכח, לא רק שקפים",
            "לקצר זמן להשקה ולהתחיל לייצר הכנסות מוקדם יותר"
          ],
          outro: "המטרה היא לא שלמות. זה ללמוד מה עובד — מהר."
        },
        fourSteps: {
          title: "4 הצעדים לבניית MVP",
          steps: [
            {
              title: "1. הגדר את הבעיה המרכזית",
              content: "זהה את הבעיה החשובה ביותר שהמוצר שלך פותר. לא שלוש בעיות. לא חמש פיצ'רים. הצעת ערך מרכזית אחת שגורמת למשתמשים לאכפת.",
              question: "שאל את עצמך: אם המוצר שלי יכל לעשות רק דבר אחד, מה זה היה?"
            },
            {
              title: "2. זהה פיצ'רים חיוניים",
              content: "רשום כל פיצ'ר שאתה חושב שאתה צריך. ואז חתוך 80% ממנו. שמור רק את מה שחיוני לספק את הערך המרכזי שלך. MVP טוב כולל 3-5 פיצ'רים מקסימום.",
              question: "השתמש במסנן הזה: האם הסרת הפיצ'ר הזה הופכת את המוצר לחסר תועלת? אם לא, הסר אותו."
            },
            {
              title: "3. בנה מהר, בנה רזה",
              content: "בחר טכנולוגיות שמאיצות פיתוח, לא כאלה שמרשימות מהנדסים. השתמש בכלים, פריימוורקים ו-APIs קיימים בכל מקום אפשרי. כל פתרון מותאם אישית שאתה בונה הוא זמן שאתה לא מבלה עם לקוחות.",
              question: "קבע דדליין נוקשה — בדרך כלל 4-8 שבועות. אילוצים מכריחים פוקוס."
            },
            {
              title: "4. השק ומדוד",
              content: "הבא את ה-MVP שלך מול משתמשים אמיתיים מיד. עקוב אחר מה שחשוב: מעורבות משתמשים, שימור והמרה. התעלם ממדדי יהירות.",
              question: "הנתונים שאתה אוסף עכשיו קובעים מה תבנה הבא."
            }
          ]
        },
        mistakes: {
          title: "טעויות נפוצות להימנע מהן",
          items: [
            { bold: "הנדסת-יתר", text: "ה-MVP שלך לא צריך לעמוד במיליוני משתמשים. הוא צריך לעבוד בשביל מאה הראשונים שלך." },
            { bold: "זחילת פיצ'רים", text: "כל \"תוספת מהירה\" מעכבת את ההשקה שלך. הישאר ממושמע." },
            { bold: "דילוג על מחקר משתמשים", text: "בניית מה שאתה מניח שמשתמשים רוצים במקום מה שהם באמת צריכים מבזבזת זמן של כולם." },
            { bold: "פרפקציוניזם", text: "MVP ששוחרר מנצח מוצר מושלם שלעולם לא יושק. גמור עדיף ממושלם." },
            { bold: "התעלמות ממשוב", text: "אם משתמשים אומרים לך שמשהו לא עובד, הקשב. ההנחות שלך כנראה שגויות." }
          ]
        },
        cta: {
          title: "מוכן לבנות את ה-MVP שלך?",
          content: "אני עוזר לסטארטאפים לעבור מרעיון למוצר מושק בשבועות, לא בחודשים. בין אם אתה צריך הכוונה טכנית, פיתוח ידני, או בניית MVP מלאה, אני יכול לעזור לך לנוע מהר בלי לחתוך פינות שחשובות.",
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
            {/* What is an MVP */}
            <section>
              <h2 className="text-xl font-medium text-gray-950 mb-4">{t.sections.whatIsMvp.title}</h2>
              <p>{t.sections.whatIsMvp.content}</p>
            </section>

            {/* Why Startups Need an MVP */}
            <section>
              <h2 className="text-xl font-medium text-gray-950 mb-4">{t.sections.whyNeed.title}</h2>
              <p>{t.sections.whyNeed.intro}</p>
              <ul className={`list-disc space-y-2 my-4 ${isHebrew ? 'pr-6' : 'pl-6'}`}>
                {t.sections.whyNeed.points.map((point, i) => (
                  <li key={i}><strong>{point}</strong></li>
                ))}
              </ul>
              <p>{t.sections.whyNeed.outro}</p>
            </section>

            {/* The 4 Steps */}
            <section>
              <h2 className="text-xl font-medium text-gray-950 mb-6">{t.sections.fourSteps.title}</h2>
              <div className="space-y-6">
                {t.sections.fourSteps.steps.map((step, i) => (
                  <div key={i}>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">{step.title}</h3>
                    <p className="mb-2">{step.content}</p>
                    <p className="text-gray-600 italic">{step.question}</p>
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
                href="https://wa.me/972546522485?text=Hi%20Asaf,%20I'm%20interested%20in%20building%20an%20MVP"
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
