"use client"

import { useLocale } from 'next-intl';

export default function Accessibility() {
  const locale = useLocale();
  const isHebrew = locale === 'he';

  const content = {
    en: {
      title: "Accessibility Statement",
      lastUpdated: "Last updated: December 2025",
      intro: "We are committed to making our website accessible to as many users as possible. While our site is simple and primarily informational, we aim to follow basic accessibility guidelines.",
      section1Title: "1. Accessibility Features",
      section1List: [
        "Clear heading structure for easy navigation",
        "Readable text with sufficient contrast",
        "Responsive design that works on all devices",
        "Keyboard-navigable interface",
        "Alt text on images where applicable"
      ],
      section2Title: "2. Ongoing Improvements",
      section2Text: "We continuously work to improve the accessibility of our website. If you encounter any barriers or have suggestions, please let us know.",
      section3Title: "3. Contact",
      section3Text: "If you experience any difficulty accessing our content, please contact us via WhatsApp: +972-546522485."
    },
    he: {
      title: "הצהרת נגישות",
      lastUpdated: "עדכון אחרון: דצמבר 2025",
      intro: "אנו מחויבים להנגיש את האתר שלנו לכמה שיותר משתמשים. למרות שהאתר שלנו פשוט ומכיל בעיקר מידע, אנו שואפים לעמוד בהנחיות נגישות בסיסיות.",
      section1Title: "1. תכונות נגישות",
      section1List: [
        "מבנה כותרות ברור לניווט קל",
        "טקסט קריא עם ניגודיות מספקת",
        "עיצוב רספונסיבי שעובד בכל המכשירים",
        "ממשק הניתן לניווט באמצעות מקלדת",
        "טקסט חלופי לתמונות במקומות הרלוונטיים"
      ],
      section2Title: "2. שיפורים מתמשכים",
      section2Text: "אנו עובדים באופן מתמיד לשיפור הנגישות של האתר שלנו. אם נתקלתם בבעיות או יש לכם הצעות, אנא ספרו לנו.",
      section3Title: "3. יצירת קשר",
      section3Text: "אם אתם חווים קושי בגישה לתוכן שלנו, אנא צרו איתנו קשר דרך WhatsApp: +972-546522485."
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
          <p>{t.intro}</p>

          <h2 className="text-xl font-medium text-gray-950 mt-8 mb-4">{t.section1Title}</h2>
          <ul className={`list-disc space-y-2 ${isHebrew ? 'pr-6' : 'pl-6'}`}>
            {t.section1List.map((item, i) => <li key={i}>{item}</li>)}
          </ul>

          <h2 className="text-xl font-medium text-gray-950 mt-8 mb-4">{t.section2Title}</h2>
          <p>{t.section2Text}</p>

          <h2 className="text-xl font-medium text-gray-950 mt-8 mb-4">{t.section3Title}</h2>
          <p>{t.section3Text}</p>
        </div>
      </div>
    </div>
  )
}
