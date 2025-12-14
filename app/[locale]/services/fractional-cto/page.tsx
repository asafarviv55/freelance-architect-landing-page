"use client"

import { useLocale } from 'next-intl';
import Link from 'next/link';
import Header from '@/components/Header';

export default function FractionalCTOPage() {
  const locale = useLocale();
  const isHebrew = locale === 'he';

  const content = {
    en: {
      backToHome: "← Back to Home",
      badge: "Fractional CTO",
      title: "Fractional CTO & Technical Leadership",
      subtitle: "Strategic technical guidance without the full-time commitment. Get CTO-level expertise for architecture decisions, team building, and technology strategy.",
      problemSection: {
        title: "The Technical Leadership Gap",
        intro: "Growing companies often face a critical gap: you need senior technical leadership, but you're not ready for a full-time CTO. You might be struggling with:",
        problems: [
          { title: "Architecture decisions", description: "Major technical choices with long-term consequences, but no one with the experience to make them confidently." },
          { title: "Team scaling", description: "You need to grow your engineering team but don't know how to structure it, hire well, or set up processes." },
          { title: "Technical debt", description: "Development is slowing down. You suspect there are problems, but you're not sure what to fix first." },
          { title: "Investor confidence", description: "VCs and board members want to see technical leadership. You need someone who can speak their language." }
        ]
      },
      solutionSection: {
        title: "What I Provide",
        intro: "I work as your technical partner—available for strategic decisions, architecture reviews, and team guidance without the overhead of a full-time executive.",
        deliverables: [
          { title: "Architecture Strategy", description: "Technical roadmaps, system design decisions, and technology choices aligned with your business goals." },
          { title: "Team Building", description: "Hiring processes, interview frameworks, team structure, engineering culture, and developer experience." },
          { title: "Technical Due Diligence", description: "Code audits, architecture reviews, and honest assessments for investors, acquirers, or your own peace of mind." },
          { title: "Vendor & Build Decisions", description: "Buy vs. build analysis, vendor evaluation, and technology partnerships that make sense for your stage." }
        ]
      },
      whoSection: {
        title: "Who This Is For",
        profiles: [
          { title: "Funded Startups", description: "Series A/B companies that need technical leadership but aren't ready for a full-time CTO commitment." },
          { title: "Non-Technical Founders", description: "You have a great product vision but need a technical partner to translate it into architecture." },
          { title: "Growing Teams", description: "Your engineering team is expanding and you need help with structure, processes, and culture." },
          { title: "Pre-Acquisition", description: "You're preparing for due diligence and need your technical house in order." }
        ]
      },
      engagementSection: {
        title: "Engagement Models",
        models: [
          { title: "Advisory Retainer", hours: "4-8 hours/month", description: "Ongoing strategic guidance, architecture reviews, and availability for critical decisions." },
          { title: "Active Engagement", hours: "2-3 days/week", description: "Hands-on technical leadership: team meetings, code reviews, architecture work, hiring support." },
          { title: "Project-Based", hours: "Defined scope", description: "Specific deliverables: technical audit, architecture design, due diligence preparation." }
        ]
      },
      faqSection: {
        title: "Frequently Asked Questions",
        questions: [
          { question: "How is this different from a consultant?", answer: "Consultants give advice and leave. I stick around to see decisions through, attend team meetings, and take ownership of technical outcomes. I'm accountable, not just advisory." },
          { question: "What's the typical engagement length?", answer: "Most engagements run 6-12 months, though some clients keep me on advisory retainer for years. I'm flexible—scale up during critical periods, scale down when you're stable." },
          { question: "Can you help hire a full-time CTO?", answer: "Yes. Part of my job is often helping you define the CTO role, build the job description, evaluate candidates, and eventually hand off to your permanent hire." },
          { question: "Do you write code?", answer: "When needed. I can do architecture work, critical implementations, and code reviews. But my primary value is strategic—making sure your team is building the right things the right way." },
          { question: "What industries do you work with?", answer: "I've worked across fintech, healthtech, e-commerce, and B2B SaaS. The specific domain matters less than the technical challenges—I learn your business context quickly." }
        ]
      },
      ctaSection: {
        title: "Need Technical Leadership?",
        description: "Let's discuss your situation and see if fractional CTO support makes sense for your stage. No commitment—just an honest conversation.",
        button: "Let's Talk on WhatsApp",
        altButton: "Or send me an email"
      }
    },
    he: {
      backToHome: "→ חזרה לדף הבית",
      badge: "CTO חלקי",
      title: "CTO חלקי והנהגה טכנית",
      subtitle: "הכוונה טכנית אסטרטגית בלי התחייבות למשרה מלאה. קבל מומחיות ברמת CTO להחלטות ארכיטקטורה, בניית צוות ואסטרטגיה טכנולוגית.",
      problemSection: {
        title: "הפער בהנהגה הטכנית",
        intro: "חברות צומחות מתמודדות לעתים קרובות עם פער קריטי: אתה צריך הנהגה טכנית בכירה, אבל לא מוכן ל-CTO במשרה מלאה. אתה עלול להיאבק עם:",
        problems: [
          { title: "החלטות ארכיטקטורה", description: "בחירות טכניות גדולות עם השלכות ארוכות טווח, אבל אין מי שיקבל אותן בביטחון." },
          { title: "הרחבת צוות", description: "אתה צריך להגדיל את צוות ההנדסה אבל לא יודע איך לבנות אותו, לגייס טוב או להקים תהליכים." },
          { title: "חוב טכני", description: "הפיתוח מואט. אתה חושד שיש בעיות, אבל לא בטוח מה לתקן קודם." },
          { title: "ביטחון משקיעים", description: "VCs ודירקטורים רוצים לראות הנהגה טכנית. אתה צריך מישהו שידבר את השפה שלהם." }
        ]
      },
      solutionSection: {
        title: "מה אני מספק",
        intro: "אני עובד כשותף הטכני שלך—זמין להחלטות אסטרטגיות, סקירות ארכיטקטורה והכוונת צוות בלי העלות של מנהל במשרה מלאה.",
        deliverables: [
          { title: "אסטרטגיית ארכיטקטורה", description: "מפות דרכים טכניות, החלטות עיצוב מערכת ובחירות טכנולוגיה מיושרות עם היעדים העסקיים." },
          { title: "בניית צוות", description: "תהליכי גיוס, מסגרות ראיונות, מבנה צוות, תרבות הנדסית וחווית מפתח." },
          { title: "בדיקת נאותות טכנית", description: "ביקורות קוד, סקירות ארכיטקטורה והערכות כנות למשקיעים, רוכשים או לשקט הנפש שלך." },
          { title: "החלטות ספק/בנייה", description: "ניתוח buy vs. build, הערכת ספקים ושותפויות טכנולוגיות שהגיוניות לשלב שלך." }
        ]
      },
      whoSection: {
        title: "למי זה מתאים",
        profiles: [
          { title: "סטארטאפים ממומנים", description: "חברות Series A/B שצריכות הנהגה טכנית אבל לא מוכנות להתחייבות ל-CTO במשרה מלאה." },
          { title: "מייסדים לא-טכניים", description: "יש לך חזון מוצר מצוין אבל צריך שותף טכני שיתרגם אותו לארכיטקטורה." },
          { title: "צוותים צומחים", description: "צוות ההנדסה שלך מתרחב ואתה צריך עזרה עם מבנה, תהליכים ותרבות." },
          { title: "טרום-רכישה", description: "אתה מתכונן לבדיקת נאותות וצריך שהבית הטכני יהיה מסודר." }
        ]
      },
      engagementSection: {
        title: "מודלי התקשרות",
        models: [
          { title: "ריטיינר ייעוץ", hours: "4-8 שעות/חודש", description: "הכוונה אסטרטגית שוטפת, סקירות ארכיטקטורה וזמינות להחלטות קריטיות." },
          { title: "מעורבות פעילה", hours: "2-3 ימים/שבוע", description: "הנהגה טכנית hands-on: פגישות צוות, סקירות קוד, עבודת ארכיטקטורה, תמיכה בגיוס." },
          { title: "מבוסס פרויקט", hours: "היקף מוגדר", description: "תוצרים ספציפיים: ביקורת טכנית, עיצוב ארכיטקטורה, הכנה לבדיקת נאותות." }
        ]
      },
      faqSection: {
        title: "שאלות נפוצות",
        questions: [
          { question: "מה ההבדל מיועץ?", answer: "יועצים נותנים עצות ועוזבים. אני נשאר לראות החלטות עד הסוף, משתתף בפגישות צוות ולוקח אחריות על תוצאות טכניות. אני אחראי, לא רק מייעץ." },
          { question: "מה אורך ההתקשרות הטיפוסי?", answer: "רוב ההתקשרויות נמשכות 6-12 חודשים, אם כי חלק מהלקוחות משאירים אותי על ריטיינר ייעוץ לשנים. אני גמיש—הגדל בתקופות קריטיות, הקטן כשיציב." },
          { question: "אתה יכול לעזור לגייס CTO במשרה מלאה?", answer: "כן. חלק מהעבודה שלי הוא לעתים לעזור להגדיר את תפקיד ה-CTO, לבנות תיאור משרה, להעריך מועמדים ובסופו של דבר להעביר לגיוס הקבוע." },
          { question: "אתה כותב קוד?", answer: "כשצריך. אני יכול לעשות עבודת ארכיטקטורה, יישומים קריטיים וסקירות קוד. אבל הערך העיקרי שלי אסטרטגי—לוודא שהצוות בונה את הדברים הנכונים בדרך הנכונה." },
          { question: "באילו תעשיות אתה עובד?", answer: "עבדתי בפינטק, הלת'טק, e-commerce ו-B2B SaaS. התחום הספציפי פחות חשוב מהאתגרים הטכניים—אני לומד את ההקשר העסקי שלך מהר." }
        ]
      },
      ctaSection: {
        title: "צריך הנהגה טכנית?",
        description: "בוא נדון במצב שלך ונראה אם תמיכת CTO חלקי הגיונית לשלב שלך. בלי התחייבות—רק שיחה כנה.",
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
        <section className="pt-24 pb-16 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-4xl mx-auto">
            <Link href={`/${locale}`} className="inline-block text-gray-500 hover:text-gray-700 transition-colors mb-8">{t.backToHome}</Link>
            <span className="inline-block px-4 py-1.5 text-sm font-medium bg-indigo-100 text-indigo-700 rounded-full mb-6">{t.badge}</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-gray-950 mb-6 leading-tight">{t.title}</h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl">{t.subtitle}</p>
          </div>
        </section>

        <section className="py-16 px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-light text-gray-950 mb-4">{t.problemSection.title}</h2>
            <p className="text-gray-600 mb-8">{t.problemSection.intro}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {t.problemSection.problems.map((p, i) => (
                <div key={i} className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                  <h3 className="text-lg font-medium text-gray-950 mb-2">{p.title}</h3>
                  <p className="text-gray-600 text-sm">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6 sm:px-8 lg:px-12 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-light text-gray-950 mb-4">{t.solutionSection.title}</h2>
            <p className="text-gray-600 mb-8">{t.solutionSection.intro}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {t.solutionSection.deliverables.map((d, i) => (
                <div key={i} className="p-6 bg-white rounded-xl border border-gray-200">
                  <h3 className="text-lg font-medium text-gray-950 mb-2">{d.title}</h3>
                  <p className="text-gray-600 text-sm">{d.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-light text-gray-950 mb-8">{t.whoSection.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {t.whoSection.profiles.map((p, i) => (
                <div key={i} className="p-6 bg-white rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-lg font-medium text-gray-950 mb-2">{p.title}</h3>
                  <p className="text-gray-600 text-sm">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6 sm:px-8 lg:px-12 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-light text-gray-950 mb-8">{t.engagementSection.title}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {t.engagementSection.models.map((m, i) => (
                <div key={i} className="p-6 bg-white rounded-xl border border-gray-200">
                  <h3 className="text-lg font-medium text-gray-950 mb-1">{m.title}</h3>
                  <p className="text-sm text-indigo-600 mb-3">{m.hours}</p>
                  <p className="text-gray-600 text-sm">{m.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-light text-gray-950 mb-8">{t.faqSection.title}</h2>
            <div className="space-y-4">
              {t.faqSection.questions.map((faq, i) => (
                <details key={i} className="group p-6 bg-white rounded-xl border border-gray-200">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <h3 className="text-lg font-medium text-gray-950 pr-4">{faq.question}</h3>
                    <span className="flex-shrink-0 text-gray-400 group-open:rotate-180 transition-transform">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-gray-600 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 sm:px-8 lg:px-12 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-light text-gray-950 mb-4">{t.ctaSection.title}</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">{t.ctaSection.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/972546522485?text=Hi%20Asaf,%20I'm%20interested%20in%20Fractional%20CTO%20services" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white font-medium rounded-full hover:bg-green-600 transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                {t.ctaSection.button}
              </a>
              <a href="mailto:asaf.arviv@gmail.com?subject=Fractional%20CTO%20Inquiry" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-950 font-medium rounded-full border border-gray-200 hover:bg-gray-50 transition-all duration-300">{t.ctaSection.altButton}</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
