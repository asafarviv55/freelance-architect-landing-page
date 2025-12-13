"use client"

import { useLocale } from 'next-intl';

export default function TermsOfUse() {
  const locale = useLocale();
  const isHebrew = locale === 'he';

  const content = {
    en: {
      title: "Terms of Use",
      lastUpdated: "Last updated: December 2025",
      section1Title: "1. Acceptance of Terms",
      section1Text: "By accessing www.coresyslab.com (\"the Website\"), you agree to these Terms of Use. If you do not agree, please discontinue using the Website.",
      section2Title: "2. Purpose of the Website",
      section2Text: "This Website provides information about software development, system architecture, MVP development, and related consulting services.",
      section3Title: "3. No Guarantees",
      section3Text: "The content on this Website is provided for general informational purposes only. Nothing on this site constitutes a guarantee of project results, timelines, pricing, or performance.",
      section4Title: "4. Limitation of Liability",
      section4Text: "We are not responsible for any damages, losses, or interruptions resulting from use of the Website, third-party tools, or communication platforms such as WhatsApp.",
      section5Title: "5. External Links",
      section5Text: "The Website may include links to third-party platforms (e.g., WhatsApp, Google Analytics, Vercel). We are not responsible for their content or policies.",
      section6Title: "6. Changes to Terms",
      section6Text: "We may update these Terms of Use at any time. Continued use of the Website indicates acceptance of any changes."
    },
    he: {
      title: "תנאי שימוש",
      lastUpdated: "עדכון אחרון: דצמבר 2025",
      section1Title: "1. קבלת התנאים",
      section1Text: "בעת גישה לאתר www.coresyslab.com (\"האתר\"), אתם מסכימים לתנאי שימוש אלה. אם אינכם מסכימים, אנא הפסיקו להשתמש באתר.",
      section2Title: "2. מטרת האתר",
      section2Text: "אתר זה מספק מידע על פיתוח תוכנה, ארכיטקטורת מערכות, פיתוח MVP ושירותי ייעוץ קשורים.",
      section3Title: "3. אין התחייבויות",
      section3Text: "התוכן באתר זה מסופק למטרות מידע כלליות בלבד. שום דבר באתר זה אינו מהווה התחייבות לתוצאות פרויקט, לוחות זמנים, תמחור או ביצועים.",
      section4Title: "4. הגבלת אחריות",
      section4Text: "איננו אחראים לכל נזק, הפסד או הפרעות הנובעים משימוש באתר, בכלים של צד שלישי או בפלטפורמות תקשורת כגון WhatsApp.",
      section5Title: "5. קישורים חיצוניים",
      section5Text: "האתר עשוי לכלול קישורים לפלטפורמות צד שלישי (לדוגמה, WhatsApp, Google Analytics, Vercel). איננו אחראים לתוכן או למדיניות שלהם.",
      section6Title: "6. שינויים בתנאים",
      section6Text: "אנו עשויים לעדכן תנאי שימוש אלה בכל עת. המשך השימוש באתר מעיד על הסכמה לכל שינוי."
    }
  };

  const t = isHebrew ? content.he : content.en;

  return (
    <div className={`min-h-screen bg-white py-16 px-6 sm:px-8 lg:px-12 ${isHebrew ? 'rtl' : 'ltr'}`} dir={isHebrew ? 'rtl' : 'ltr'}>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-light tracking-tight text-gray-950 mb-8">
          {t.title}
        </h1>
        <p className="text-sm text-gray-500 mb-8">{t.lastUpdated}</p>

        <div className="prose prose-gray max-w-none space-y-6 text-gray-700 leading-relaxed">
          <h2 className="text-xl font-medium text-gray-950 mt-8 mb-4">{t.section1Title}</h2>
          <p>{t.section1Text}</p>

          <h2 className="text-xl font-medium text-gray-950 mt-8 mb-4">{t.section2Title}</h2>
          <p>{t.section2Text}</p>

          <h2 className="text-xl font-medium text-gray-950 mt-8 mb-4">{t.section3Title}</h2>
          <p>{t.section3Text}</p>

          <h2 className="text-xl font-medium text-gray-950 mt-8 mb-4">{t.section4Title}</h2>
          <p>{t.section4Text}</p>

          <h2 className="text-xl font-medium text-gray-950 mt-8 mb-4">{t.section5Title}</h2>
          <p>{t.section5Text}</p>

          <h2 className="text-xl font-medium text-gray-950 mt-8 mb-4">{t.section6Title}</h2>
          <p>{t.section6Text}</p>
        </div>
      </div>
    </div>
  )
}
