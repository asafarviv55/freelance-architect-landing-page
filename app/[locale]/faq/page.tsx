"use client"

import { useLocale } from 'next-intl';
import Link from 'next/link';
import Header from '@/components/Header';

export default function FAQPage() {
  const locale = useLocale();
  const isHebrew = locale === 'he';

  const content = {
    en: {
      backToHome: "← Back to Home",
      title: "Frequently Asked Questions",
      subtitle: "Common questions about working together, pricing, process, and technical approach.",

      categories: [
        {
          name: "Working Together",
          questions: [
            {
              question: "How do engagements typically work?",
              answer: "Most projects start with a discovery call to understand your needs. From there, I provide a proposal with scope, timeline, and fixed pricing. For ongoing work, I offer retainer arrangements with guaranteed availability."
            },
            {
              question: "Do you work with non-technical founders?",
              answer: "Absolutely. Most of my clients are non-technical founders. I translate business requirements into technical decisions and keep you informed without overwhelming you with jargon."
            },
            {
              question: "Can you work with my existing technical team?",
              answer: "Yes. I often work alongside in-house developers or other contractors. I can lead the architecture or contribute as a senior developer—whatever configuration makes sense."
            },
            {
              question: "What's your availability?",
              answer: "I typically take on 2-3 active projects at a time to ensure quality focus. For new projects, lead time is usually 1-2 weeks. Retainer clients get priority scheduling."
            },
            {
              question: "Where are you located?",
              answer: "I'm based in Jerusalem, Israel (GMT+2/+3). I work with clients globally and am flexible with meeting times across time zones."
            }
          ]
        },
        {
          name: "Pricing & Investment",
          questions: [
            {
              question: "How do you price projects?",
              answer: "Every project is different, so I provide custom quotes based on scope and complexity. After our discovery session, you'll receive a detailed proposal with fixed pricing—no surprises."
            },
            {
              question: "Do you offer fixed-price or hourly?",
              answer: "I prefer fixed-price for defined projects—it aligns incentives and gives you cost certainty. For ongoing work or advisory roles, retainer arrangements work better."
            },
            {
              question: "Do you offer retainer arrangements?",
              answer: "Yes. Advisory retainers start at 4-8 hours/month for strategic guidance. Active engagement retainers of 2-3 days/week are available for hands-on technical leadership."
            },
            {
              question: "What are your payment terms?",
              answer: "Typically 30-50% upfront, with milestones tied to deliverables. For retainers, payment is monthly in advance. I accept wire transfer and major payment methods."
            }
          ]
        },
        {
          name: "Technical Approach",
          questions: [
            {
              question: "What technologies do you work with?",
              answer: "Primarily Node.js, Python, React/Next.js, PostgreSQL, and major cloud platforms (AWS, GCP, Vercel). I choose technologies based on your specific needs, not personal preference."
            },
            {
              question: "Will the code scale?",
              answer: "Yes. I architect for growth from day one. I've seen too many startups hit traction and immediately face a rewrite—I design to avoid that scenario."
            },
            {
              question: "How do you handle security?",
              answer: "Security is built into every layer: authentication, authorization, input validation, encryption, and secure infrastructure. I follow OWASP guidelines and can help with compliance requirements."
            },
            {
              question: "What about testing and documentation?",
              answer: "I write unit tests, integration tests, and API tests for critical paths. Documentation includes API specs, architecture decisions, and handoff guides for your team."
            },
            {
              question: "Can you work with existing codebases?",
              answer: "Absolutely. I often join projects to add features, fix performance issues, or help teams refactor. I'll review what you have and give honest feedback on what needs attention."
            }
          ]
        },
        {
          name: "AI Integration",
          questions: [
            {
              question: "Which AI model should I use?",
              answer: "It depends on your use case, budget, and requirements. GPT-4 is versatile but expensive. Claude is great for longer documents. Open-source models can reduce costs for simpler tasks. I'll recommend the right fit."
            },
            {
              question: "How do you handle AI hallucinations?",
              answer: "Through careful prompt engineering, output validation, confidence scoring, and human-in-the-loop workflows where needed. AI is powerful but needs guardrails—I build those in from the start."
            },
            {
              question: "Is my data secure with AI integrations?",
              answer: "Data security is a first-class concern. I can work with enterprise AI APIs that don't train on your data, implement on-premise solutions, or use privacy-preserving architectures."
            }
          ]
        },
        {
          name: "After Launch",
          questions: [
            {
              question: "What happens after the project launches?",
              answer: "You own everything—code, infrastructure, documentation. I can continue with ongoing development, help you hire your first engineer, or hand off completely. Your choice."
            },
            {
              question: "Do you provide ongoing maintenance?",
              answer: "Yes, through retainer arrangements. This includes monitoring, updates, optimization, and priority support for issues. Or I can hand off with documentation and training."
            },
            {
              question: "Can you help us hire engineers?",
              answer: "Yes. I can help define roles, create job descriptions, evaluate candidates, and onboard new team members. Part of my job is often helping clients build their own technical capability."
            }
          ]
        }
      ],

      cta: {
        title: "Have a Different Question?",
        description: "I'm happy to discuss your specific situation. No commitment required—just an honest conversation about what you need.",
        button: "Let's Talk on WhatsApp",
        altButton: "Or send me an email"
      }
    },
    he: {
      backToHome: "→ חזרה לדף הבית",
      title: "שאלות נפוצות",
      subtitle: "שאלות נפוצות על עבודה משותפת, תמחור, תהליך וגישה טכנית.",

      categories: [
        {
          name: "עבודה משותפת",
          questions: [
            {
              question: "איך התקשרויות בדרך כלל עובדות?",
              answer: "רוב הפרויקטים מתחילים בשיחת גילוי להבנת הצרכים שלך. משם, אני מספק הצעה עם היקף, לוח זמנים ותמחור קבוע. לעבודה שוטפת, אני מציע הסדרי ריטיינר עם זמינות מובטחת."
            },
            {
              question: "אתה עובד עם מייסדים לא-טכניים?",
              answer: "בהחלט. רוב הלקוחות שלי הם מייסדים לא-טכניים. אני מתרגם דרישות עסקיות להחלטות טכניות ומעדכן אותך בלי להציף בז'רגון."
            },
            {
              question: "אתה יכול לעבוד עם הצוות הטכני הקיים שלי?",
              answer: "כן. אני עובד לעתים קרובות לצד מפתחים פנימיים או קבלנים אחרים. אני יכול להוביל את הארכיטקטורה או לתרום כמפתח בכיר—כל קונפיגורציה שהגיונית."
            },
            {
              question: "מה הזמינות שלך?",
              answer: "אני בדרך כלל לוקח 2-3 פרויקטים פעילים בו-זמנית כדי להבטיח פוקוס איכותי. לפרויקטים חדשים, זמן ההמתנה הוא בדרך כלל 1-2 שבועות. לקוחות ריטיינר מקבלים עדיפות בתזמון."
            },
            {
              question: "איפה אתה ממוקם?",
              answer: "אני מבוסס בירושלים, ישראל (GMT+2/+3). אני עובד עם לקוחות גלובלית וגמיש עם זמני פגישות באזורי זמן שונים."
            }
          ]
        },
        {
          name: "תמחור והשקעה",
          questions: [
            {
              question: "איך אתה מתמחר פרויקטים?",
              answer: "כל פרויקט שונה, אז אני מספק הצעות מחיר מותאמות אישית בהתבסס על היקף ומורכבות. אחרי שיחת הגילוי, תקבל הצעה מפורטת עם תמחור קבוע—בלי הפתעות."
            },
            {
              question: "אתה מציע מחיר קבוע או לפי שעה?",
              answer: "אני מעדיף מחיר קבוע לפרויקטים מוגדרים—זה מיישר תמריצים ונותן לך ודאות עלות. לעבודה שוטפת או תפקידים ייעוציים, הסדרי ריטיינר עובדים טוב יותר."
            },
            {
              question: "אתה מציע הסדרי ריטיינר?",
              answer: "כן. ריטיינרים ייעוציים מתחילים ב-4-8 שעות/חודש להכוונה אסטרטגית. ריטיינרים של מעורבות פעילה של 2-3 ימים/שבוע זמינים להנהגה טכנית hands-on."
            },
            {
              question: "מה תנאי התשלום?",
              answer: "בדרך כלל 30-50% מראש, עם אבני דרך צמודות לתוצרים. לריטיינרים, התשלום חודשי מראש. אני מקבל העברה בנקאית ואמצעי תשלום עיקריים."
            }
          ]
        },
        {
          name: "גישה טכנית",
          questions: [
            {
              question: "עם אילו טכנולוגיות אתה עובד?",
              answer: "בעיקר Node.js, Python, React/Next.js, PostgreSQL ופלטפורמות ענן מרכזיות (AWS, GCP, Vercel). אני בוחר טכנולוגיות בהתבסס על הצרכים הספציפיים שלך, לא העדפה אישית."
            },
            {
              question: "האם הקוד יתרחב?",
              answer: "כן. אני מעצב ארכיטקטורה לצמיחה מיום ראשון. ראיתי יותר מדי סטארטאפים שמגיעים לטרקשן ומיד מתמודדים עם שכתוב—אני מעצב כדי להימנע מהתרחיש הזה."
            },
            {
              question: "איך אתה מטפל באבטחה?",
              answer: "אבטחה מובנית בכל שכבה: אימות, הרשאות, אימות קלט, הצפנה ותשתית מאובטחת. אני עוקב אחרי הנחיות OWASP ויכול לעזור עם דרישות תאימות."
            },
            {
              question: "מה לגבי בדיקות ותיעוד?",
              answer: "אני כותב unit tests, integration tests ו-API tests לנתיבים קריטיים. התיעוד כולל מפרטי API, החלטות ארכיטקטוניות ומדריכי העברה לצוות שלך."
            },
            {
              question: "אתה יכול לעבוד עם קוד קיים?",
              answer: "בהחלט. אני מצטרף לעתים קרובות לפרויקטים כדי להוסיף פיצ'רים, לתקן בעיות ביצועים או לעזור לצוותים לעשות refactor. אני אסקור את מה שיש לך ואתן משוב כנה."
            }
          ]
        },
        {
          name: "אינטגרציית AI",
          questions: [
            {
              question: "באיזה מודל AI כדאי להשתמש?",
              answer: "זה תלוי בתרחיש השימוש, התקציב והדרישות שלך. GPT-4 מגוון אבל יקר. Claude מצוין למסמכים ארוכים. מודלים בקוד פתוח יכולים להפחית עלויות למשימות פשוטות. אני אמליץ על ההתאמה הנכונה."
            },
            {
              question: "איך אתה מטפל בהזיות של AI?",
              answer: "דרך הנדסת פרומפטים זהירה, אימות פלט, ציון ביטחון ותהליכי human-in-the-loop במקומות שצריך. AI חזק אבל צריך מעקות—אני בונה אותם מההתחלה."
            },
            {
              question: "האם הנתונים שלי מאובטחים עם אינטגרציות AI?",
              answer: "אבטחת נתונים היא דאגה ראשונה במעלה. אני יכול לעבוד עם APIs של AI ארגוניים שלא מתאמנים על הנתונים שלך, ליישם פתרונות on-premise או להשתמש בארכיטקטורות ששומרות על פרטיות."
            }
          ]
        },
        {
          name: "אחרי השקה",
          questions: [
            {
              question: "מה קורה אחרי שהפרויקט מושק?",
              answer: "אתה הבעלים של הכל—קוד, תשתית, תיעוד. אני יכול להמשיך עם פיתוח שוטף, לעזור לך לגייס את המהנדס הראשון שלך, או להעביר לחלוטין. הבחירה שלך."
            },
            {
              question: "אתה מספק תחזוקה שוטפת?",
              answer: "כן, דרך הסדרי ריטיינר. זה כולל ניטור, עדכונים, אופטימיזציה ותמיכה בעדיפות לבעיות. או שאני יכול להעביר עם תיעוד והדרכה."
            },
            {
              question: "אתה יכול לעזור לנו לגייס מהנדסים?",
              answer: "כן. אני יכול לעזור להגדיר תפקידים, ליצור תיאורי משרה, להעריך מועמדים ולקלוט חברי צוות חדשים. חלק מהעבודה שלי הוא לעתים לעזור ללקוחות לבנות יכולת טכנית משלהם."
            }
          ]
        }
      ],

      cta: {
        title: "יש שאלה אחרת?",
        description: "אני שמח לדון במצב הספציפי שלך. בלי התחייבות—רק שיחה כנה על מה שאתה צריך.",
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
        {/* Hero */}
        <section className="pt-24 pb-16 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-4xl mx-auto">
            <Link href={`/${locale}`} className="inline-block text-gray-500 hover:text-gray-700 transition-colors mb-8">
              {t.backToHome}
            </Link>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-gray-950 mb-4">
              {t.title}
            </h1>
            <p className="text-lg text-gray-600">
              {t.subtitle}
            </p>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-16 px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto space-y-12">
            {t.categories.map((category, catIdx) => (
              <div key={catIdx}>
                <h2 className="text-xl font-medium text-gray-950 mb-6 pb-2 border-b border-gray-200">
                  {category.name}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((faq, idx) => (
                    <details key={idx} className="group p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors">
                      <summary className="flex items-center justify-between cursor-pointer list-none">
                        <h3 className="text-base font-medium text-gray-950 pr-4">{faq.question}</h3>
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
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 sm:px-8 lg:px-12 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-light text-gray-950 mb-4">
              {t.cta.title}
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              {t.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/972546522485?text=Hi%20Asaf,%20I%20have%20a%20question"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white font-medium rounded-full hover:bg-green-600 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {t.cta.button}
              </a>
              <a
                href="mailto:asaf.arviv@gmail.com?subject=Question"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-950 font-medium rounded-full border border-gray-200 hover:bg-gray-50 transition-all duration-300"
              >
                {t.cta.altButton}
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
