"use client"

import { useLocale } from 'next-intl';
import Link from 'next/link';
import Header from '@/components/Header';

export default function MVPDevelopmentPage() {
  const locale = useLocale();
  const isHebrew = locale === 'he';

  const content = {
    en: {
      backToHome: "← Back to Home",
      badge: "MVP Development",
      title: "MVP Development Services for Startups",
      subtitle: "Go from idea to launched product in weeks, not months. I build production-ready MVPs that validate your business hypothesis with real users.",

      problemSection: {
        title: "The Startup Validation Challenge",
        intro: "Most startups fail not because of bad ideas, but because they build too much before validating demand. You're facing real constraints:",
        problems: [
          {
            title: "Limited runway",
            description: "Every month spent building is capital burned. You need to launch fast and start learning."
          },
          {
            title: "Technical uncertainty",
            description: "You're not sure what architecture will scale, or which features actually matter to users."
          },
          {
            title: "Resource constraints",
            description: "Hiring a full engineering team before product-market fit is expensive and risky."
          },
          {
            title: "Speed vs. quality tradeoff",
            description: "You need to move fast, but cutting corners on architecture creates technical debt that slows you down later."
          }
        ]
      },

      solutionSection: {
        title: "What I Deliver",
        intro: "I build MVPs that are genuinely minimal—focused on your core value proposition—while being genuinely viable: production-ready, secure, and architected to scale.",
        deliverables: [
          {
            title: "Production-Ready Code",
            description: "Not a prototype or demo. Real, deployed software that users can interact with from day one."
          },
          {
            title: "Scalable Architecture",
            description: "Built on foundations that grow with you. When you hit traction, you won't need to rewrite everything."
          },
          {
            title: "Core Features Only",
            description: "Ruthless focus on what matters. We identify the 20% of features that deliver 80% of the value."
          },
          {
            title: "Full Ownership",
            description: "You own the code, the infrastructure, and all intellectual property. No lock-in, no dependencies on me."
          }
        ]
      },

      processSection: {
        title: "The MVP Development Process",
        steps: [
          {
            number: "01",
            title: "Discovery & Scoping",
            description: "We define your core value proposition, identify must-have features, and cut everything else. I challenge assumptions and help you find the fastest path to validation.",
            duration: "3-5 days"
          },
          {
            number: "02",
            title: "Architecture Design",
            description: "I design a system that's simple enough to build fast, but structured to evolve. Technology choices optimized for speed now and scalability later.",
            duration: "2-3 days"
          },
          {
            number: "03",
            title: "Rapid Development",
            description: "Focused sprints with regular demos. You see progress weekly and can course-correct before we've gone too far in any direction.",
            duration: "3-6 weeks"
          },
          {
            number: "04",
            title: "Launch & Iterate",
            description: "Deployment to production, monitoring setup, and handoff. I stick around for the first user feedback cycle to help you prioritize what comes next.",
            duration: "3-5 days"
          }
        ]
      },

      techSection: {
        title: "Technology Stack",
        intro: "I choose technologies based on your specific needs, but typically work with:",
        categories: [
          {
            name: "Backend",
            technologies: ["Node.js", "Python", "PostgreSQL", "Redis", "REST APIs", "GraphQL"]
          },
          {
            name: "Frontend",
            technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
          },
          {
            name: "Infrastructure",
            technologies: ["AWS", "Vercel", "Docker", "CI/CD Pipelines"]
          },
          {
            name: "Integrations",
            technologies: ["Stripe", "Auth0", "OpenAI", "SendGrid", "Twilio"]
          }
        ]
      },

      caseStudySection: {
        title: "Recent MVP: FinTech Payment Platform",
        description: "Built a complete payment processing MVP for a startup, enabling secure transactions and real-time reporting from day one.",
        result: "Launched in 6 weeks",
        technologies: ["Node.js", "PostgreSQL", "Stripe", "React"],
        link: "View Case Study →"
      },

      faqSection: {
        title: "Frequently Asked Questions",
        questions: [
          {
            question: "How long does it take to build an MVP?",
            answer: "Most MVPs take 4-8 weeks from kickoff to launch. The exact timeline depends on complexity, but I'm aggressive about cutting scope to hit target dates. Speed matters more than features at this stage."
          },
          {
            question: "What's the typical investment for an MVP?",
            answer: "MVP projects typically range from $15,000 to $40,000 depending on complexity. I provide a fixed quote after our discovery session so you know exactly what you're investing before we start."
          },
          {
            question: "Will the MVP code scale, or will we need to rewrite it?",
            answer: "The code is built to scale. I've seen too many startups hit traction and immediately face a rewrite. I architect for growth from day one—you'll be able to build on this foundation for years."
          },
          {
            question: "Do you work with non-technical founders?",
            answer: "Absolutely. Most of my clients are non-technical founders. I translate business requirements into technical decisions and keep you informed without overwhelming you with jargon."
          },
          {
            question: "What happens after the MVP launches?",
            answer: "You own everything—code, infrastructure, documentation. I can continue with ongoing development, help you hire your first engineer, or hand off completely. Your choice."
          },
          {
            question: "Can you work with my existing technical team?",
            answer: "Yes. I often work alongside in-house developers or other contractors. I can lead the architecture or contribute as a senior developer—whatever configuration makes sense."
          }
        ]
      },

      ctaSection: {
        title: "Ready to Build Your MVP?",
        description: "Let's discuss your idea and figure out the fastest path to a launched product. No commitment, no sales pitch—just an honest conversation about what you need.",
        button: "Let's Talk on WhatsApp",
        altButton: "Or send me an email"
      }
    },
    he: {
      backToHome: "→ חזרה לדף הבית",
      badge: "פיתוח MVP",
      title: "שירותי פיתוח MVP לסטארטאפים",
      subtitle: "מרעיון למוצר מושק בשבועות, לא בחודשים. אני בונה MVPs מוכנים לפרודקשן שמאמתים את ההשערה העסקית שלך עם משתמשים אמיתיים.",

      problemSection: {
        title: "אתגר האימות של סטארטאפים",
        intro: "רוב הסטארטאפים נכשלים לא בגלל רעיונות רעים, אלא כי הם בונים יותר מדי לפני אימות הביקוש. אתה מתמודד עם אילוצים אמיתיים:",
        problems: [
          {
            title: "תקציב מוגבל",
            description: "כל חודש שמושקע בבנייה הוא הון שנשרף. אתה צריך להשיק מהר ולהתחיל ללמוד."
          },
          {
            title: "אי-ודאות טכנית",
            description: "אתה לא בטוח איזו ארכיטקטורה תתרחב, או אילו פיצ'רים באמת חשובים למשתמשים."
          },
          {
            title: "אילוצי משאבים",
            description: "גיוס צוות הנדסה מלא לפני product-market fit הוא יקר ומסוכן."
          },
          {
            title: "פשרה בין מהירות לאיכות",
            description: "אתה צריך לנוע מהר, אבל קיצורי דרך בארכיטקטורה יוצרים חוב טכני שמאט אותך בהמשך."
          }
        ]
      },

      solutionSection: {
        title: "מה אני מספק",
        intro: "אני בונה MVPs שהם באמת מינימליים—ממוקדים בהצעת הערך המרכזית שלך—תוך היותם באמת קיימים: מוכנים לפרודקשן, מאובטחים ומעוצבים להתרחבות.",
        deliverables: [
          {
            title: "קוד מוכן לפרודקשן",
            description: "לא פרוטוטייפ או דמו. תוכנה אמיתית ופרוסה שמשתמשים יכולים להשתמש בה מיום ראשון."
          },
          {
            title: "ארכיטקטורה סקיילבילית",
            description: "בנוי על יסודות שגדלים איתך. כשתגיע לטרקשן, לא תצטרך לשכתב הכל."
          },
          {
            title: "רק פיצ'רים מרכזיים",
            description: "פוקוס חסר רחמים על מה שחשוב. אנחנו מזהים את 20% הפיצ'רים שמספקים 80% מהערך."
          },
          {
            title: "בעלות מלאה",
            description: "אתה הבעלים של הקוד, התשתית וכל הקניין הרוחני. בלי נעילה, בלי תלות בי."
          }
        ]
      },

      processSection: {
        title: "תהליך פיתוח ה-MVP",
        steps: [
          {
            number: "01",
            title: "גילוי והגדרה",
            description: "אנחנו מגדירים את הצעת הערך המרכזית שלך, מזהים פיצ'רים חיוניים וחותכים את כל השאר. אני מאתגר הנחות ועוזר לך למצוא את הדרך המהירה ביותר לאימות.",
            duration: "3-5 ימים"
          },
          {
            number: "02",
            title: "עיצוב ארכיטקטורה",
            description: "אני מעצב מערכת שפשוטה מספיק לבנייה מהירה, אבל מובנית להתפתחות. בחירות טכנולוגיות מותאמות למהירות עכשיו וסקיילביליות אחר כך.",
            duration: "2-3 ימים"
          },
          {
            number: "03",
            title: "פיתוח מהיר",
            description: "ספרינטים ממוקדים עם דמואים קבועים. אתה רואה התקדמות שבועית ויכול לתקן כיוון לפני שהלכנו רחוק מדי.",
            duration: "3-6 שבועות"
          },
          {
            number: "04",
            title: "השקה ואיטרציה",
            description: "פריסה לפרודקשן, הגדרת ניטור והעברה. אני נשאר בסביבה למחזור המשוב הראשון כדי לעזור לך לתעדף מה הלאה.",
            duration: "3-5 ימים"
          }
        ]
      },

      techSection: {
        title: "סטאק טכנולוגי",
        intro: "אני בוחר טכנולוגיות בהתבסס על הצרכים הספציפיים שלך, אבל בדרך כלל עובד עם:",
        categories: [
          {
            name: "Backend",
            technologies: ["Node.js", "Python", "PostgreSQL", "Redis", "REST APIs", "GraphQL"]
          },
          {
            name: "Frontend",
            technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
          },
          {
            name: "תשתית",
            technologies: ["AWS", "Vercel", "Docker", "CI/CD Pipelines"]
          },
          {
            name: "אינטגרציות",
            technologies: ["Stripe", "Auth0", "OpenAI", "SendGrid", "Twilio"]
          }
        ]
      },

      caseStudySection: {
        title: "MVP אחרון: פלטפורמת תשלומים פינטק",
        description: "בניתי MVP מלא לעיבוד תשלומים לסטארטאפ, שמאפשר עסקאות מאובטחות ודיווח בזמן אמת מיום ראשון.",
        result: "הושק ב-6 שבועות",
        technologies: ["Node.js", "PostgreSQL", "Stripe", "React"],
        link: "צפה בקייס סטאדי →"
      },

      faqSection: {
        title: "שאלות נפוצות",
        questions: [
          {
            question: "כמה זמן לוקח לבנות MVP?",
            answer: "רוב ה-MVPs לוקחים 4-8 שבועות מהתחלה להשקה. לוח הזמנים המדויק תלוי במורכבות, אבל אני אגרסיבי בקיצוץ היקף כדי לעמוד בתאריכי יעד. מהירות חשובה יותר מפיצ'רים בשלב הזה."
          },
          {
            question: "מה ההשקעה הטיפוסית ל-MVP?",
            answer: "פרויקטי MVP נעים בדרך כלל בין $15,000 ל-$40,000 בהתאם למורכבות. אני מספק הצעת מחיר קבועה אחרי שיחת הגילוי כדי שתדע בדיוק מה אתה משקיע לפני שמתחילים."
          },
          {
            question: "האם קוד ה-MVP יתרחב, או שנצטרך לשכתב אותו?",
            answer: "הקוד בנוי להתרחבות. ראיתי יותר מדי סטארטאפים שמגיעים לטרקשן ומיד מתמודדים עם שכתוב. אני מעצב ארכיטקטורה לצמיחה מיום ראשון—תוכל לבנות על הבסיס הזה לשנים."
          },
          {
            question: "אתה עובד עם מייסדים לא-טכניים?",
            answer: "בהחלט. רוב הלקוחות שלי הם מייסדים לא-טכניים. אני מתרגם דרישות עסקיות להחלטות טכניות ומעדכן אותך בלי להציף אותך בז'רגון."
          },
          {
            question: "מה קורה אחרי שה-MVP מושק?",
            answer: "אתה הבעלים של הכל—קוד, תשתית, תיעוד. אני יכול להמשיך עם פיתוח מתמשך, לעזור לך לגייס את המהנדס הראשון שלך, או להעביר לחלוטין. הבחירה שלך."
          },
          {
            question: "אתה יכול לעבוד עם הצוות הטכני הקיים שלי?",
            answer: "כן. אני עובד לעתים קרובות לצד מפתחים פנימיים או קבלנים אחרים. אני יכול להוביל את הארכיטקטורה או לתרום כמפתח בכיר—כל קונפיגורציה שהגיונית."
          }
        ]
      },

      ctaSection: {
        title: "מוכן לבנות את ה-MVP שלך?",
        description: "בוא נדון ברעיון שלך ונמצא את הדרך המהירה ביותר למוצר מושק. בלי התחייבות, בלי מכירות—רק שיחה כנה על מה שאתה צריך.",
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

            <span className="inline-block px-4 py-1.5 text-sm font-medium bg-green-100 text-green-700 rounded-full mb-6">
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

        {/* Process Section */}
        <section className="py-16 px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-light text-gray-950 mb-8">
              {t.processSection.title}
            </h2>

            <div className="space-y-6">
              {t.processSection.steps.map((step, idx) => (
                <div key={idx} className="flex gap-6 p-6 bg-white rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gray-950 text-white rounded-full text-sm font-medium">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-medium text-gray-950">{step.title}</h3>
                      <span className="text-sm text-gray-400">{step.duration}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
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
              <span className="inline-block px-3 py-1 text-xs font-medium bg-green-500/20 text-green-400 rounded-full mb-4">
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
                <span className="text-green-400 font-medium">{t.caseStudySection.result}</span>
                <Link
                  href={`/${locale}/case-studies/fintech-payment-platform`}
                  className="text-white hover:text-green-400 transition-colors text-sm"
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
                href="https://wa.me/972546522485?text=Hi%20Asaf,%20I'm%20interested%20in%20MVP%20development%20services"
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
                href={`mailto:asaf.arviv@gmail.com?subject=MVP Development Inquiry`}
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
