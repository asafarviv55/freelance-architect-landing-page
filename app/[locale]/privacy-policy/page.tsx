"use client"

import { useLocale } from 'next-intl';

export default function PrivacyPolicy() {
  const locale = useLocale();
  const isHebrew = locale === 'he';

  const content = {
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last updated: December 2025",
      intro: "This Privacy Policy explains how information is collected, used, and protected when you visit architectflow.vercel.app or interact with our services.",
      section1Title: "1. Information We Collect",
      section1Text: "We do not collect personal information directly through forms. However, we may collect limited technical data through:",
      section1List: [
        "Google Analytics (anonymous usage statistics)",
        "Google Search Console (search performance data)",
        "Vercel Analytics (visitor insights)",
        "WhatsApp links (if you choose to message us)"
      ],
      section1Extra: "If you choose to contact us via WhatsApp, you may voluntarily provide information such as your name, phone number, or project details. This information remains within WhatsApp and is not stored on our website.",
      section2Title: "2. How We Use Information",
      section2Text: "Analytics data is used to:",
      section2List: [
        "Improve website performance",
        "Understand website traffic and visitor behavior",
        "Optimize our content and services"
      ],
      section2Extra: "Information shared voluntarily through WhatsApp is used solely to communicate with you about your inquiry or project.",
      section3Title: "3. Cookies and Tracking",
      section3Text: "We use Google Analytics and Vercel Analytics, which may set cookies or use similar tracking technologies. These tools collect anonymous, aggregated data only. We do NOT use advertising cookies or sell personal information.",
      section4Title: "4. Third-Party Services",
      section4Text: "Our website may connect to:",
      section4List: [
        "Google Analytics",
        "Vercel (hosting provider)",
        "WhatsApp"
      ],
      section4Extra: "These third-party platforms have their own privacy policies and may process data according to their terms.",
      section5Title: "5. Data Protection",
      section5Text: "We do not store personal data on this website. Any information shared via WhatsApp is handled securely within that platform.",
      section6Title: "6. Your Rights",
      section6Text: "You may request:",
      section6List: [
        "Information about the data we receive via your WhatsApp messages",
        "Deletion of communication history upon request"
      ],
      section7Title: "7. Contact",
      section7Text: "For any privacy-related questions, contact us via WhatsApp: +972-546522485."
    },
    he: {
      title: "מדיניות פרטיות",
      lastUpdated: "עדכון אחרון: דצמבר 2025",
      intro: "מדיניות פרטיות זו מסבירה כיצד מידע נאסף, משמש ומוגן כאשר אתם מבקרים באתר architectflow.vercel.app או מתקשרים עם השירותים שלנו.",
      section1Title: "1. מידע שאנו אוספים",
      section1Text: "איננו אוספים מידע אישי ישירות דרך טפסים. עם זאת, אנו עשויים לאסוף מידע טכני מוגבל באמצעות:",
      section1List: [
        "Google Analytics (סטטיסטיקות שימוש אנונימיות)",
        "Google Search Console (נתוני ביצועי חיפוש)",
        "Vercel Analytics (תובנות מבקרים)",
        "קישורי WhatsApp (אם תבחרו לשלוח לנו הודעה)"
      ],
      section1Extra: "אם תבחרו ליצור איתנו קשר דרך WhatsApp, תוכלו לספק מרצונכם מידע כגון שמכם, מספר הטלפון שלכם או פרטי הפרויקט. מידע זה נשאר בתוך WhatsApp ואינו מאוחסן באתר שלנו.",
      section2Title: "2. כיצד אנו משתמשים במידע",
      section2Text: "נתוני אנליטיקס משמשים ל:",
      section2List: [
        "שיפור ביצועי האתר",
        "הבנת תעבורת האתר והתנהגות המבקרים",
        "אופטימיזציה של התוכן והשירותים שלנו"
      ],
      section2Extra: "מידע שמשותף מרצון דרך WhatsApp משמש אך ורק לתקשורת איתכם בנוגע לפנייתכם או לפרויקט שלכם.",
      section3Title: "3. עוגיות ומעקב",
      section3Text: "אנו משתמשים ב-Google Analytics ו-Vercel Analytics, אשר עשויים להגדיר עוגיות או להשתמש בטכנולוגיות מעקב דומות. כלים אלה אוספים נתונים אנונימיים ומצטברים בלבד. איננו משתמשים בעוגיות פרסום ואיננו מוכרים מידע אישי.",
      section4Title: "4. שירותי צד שלישי",
      section4Text: "האתר שלנו עשוי להתחבר ל:",
      section4List: [
        "Google Analytics",
        "Vercel (ספק אירוח)",
        "WhatsApp"
      ],
      section4Extra: "לפלטפורמות צד שלישי אלה יש מדיניות פרטיות משלהן והן עשויות לעבד נתונים בהתאם לתנאיהן.",
      section5Title: "5. הגנה על מידע",
      section5Text: "איננו מאחסנים מידע אישי באתר זה. כל מידע שמשותף דרך WhatsApp מטופל באופן מאובטח בתוך אותה פלטפורמה.",
      section6Title: "6. הזכויות שלכם",
      section6Text: "תוכלו לבקש:",
      section6List: [
        "מידע על הנתונים שאנו מקבלים דרך הודעות ה-WhatsApp שלכם",
        "מחיקת היסטוריית התקשורת לפי בקשה"
      ],
      section7Title: "7. יצירת קשר",
      section7Text: "לכל שאלה הקשורה לפרטיות, צרו איתנו קשר דרך WhatsApp: +972-546522485."
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
          <p>{t.section1Text}</p>
          <ul className={`list-disc space-y-2 ${isHebrew ? 'pr-6' : 'pl-6'}`}>
            {t.section1List.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
          <p>{t.section1Extra}</p>

          <h2 className="text-xl font-medium text-gray-950 mt-8 mb-4">{t.section2Title}</h2>
          <p>{t.section2Text}</p>
          <ul className={`list-disc space-y-2 ${isHebrew ? 'pr-6' : 'pl-6'}`}>
            {t.section2List.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
          <p>{t.section2Extra}</p>

          <h2 className="text-xl font-medium text-gray-950 mt-8 mb-4">{t.section3Title}</h2>
          <p>{t.section3Text}</p>

          <h2 className="text-xl font-medium text-gray-950 mt-8 mb-4">{t.section4Title}</h2>
          <p>{t.section4Text}</p>
          <ul className={`list-disc space-y-2 ${isHebrew ? 'pr-6' : 'pl-6'}`}>
            {t.section4List.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
          <p>{t.section4Extra}</p>

          <h2 className="text-xl font-medium text-gray-950 mt-8 mb-4">{t.section5Title}</h2>
          <p>{t.section5Text}</p>

          <h2 className="text-xl font-medium text-gray-950 mt-8 mb-4">{t.section6Title}</h2>
          <p>{t.section6Text}</p>
          <ul className={`list-disc space-y-2 ${isHebrew ? 'pr-6' : 'pl-6'}`}>
            {t.section6List.map((item, i) => <li key={i}>{item}</li>)}
          </ul>

          <h2 className="text-xl font-medium text-gray-950 mt-8 mb-4">{t.section7Title}</h2>
          <p>{t.section7Text}</p>
        </div>
      </div>
    </div>
  )
}
