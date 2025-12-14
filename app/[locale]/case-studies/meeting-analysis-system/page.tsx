"use client"

import { useLocale } from 'next-intl';
import Link from 'next/link';
import Header from '@/components/Header';
import Image from 'next/image';

export default function MeetingAnalysisCaseStudyPage() {
  const locale = useLocale();
  const isHebrew = locale === 'he';

  const content = {
    en: {
      backToHome: "← Back to Portfolio",
      badge: "AI Automation",
      title: "Meeting Analysis System",
      subtitle: "Upload business meeting recordings and automatically extract requirements, action items, and key decisions using AI. Turn conversations into structured documentation.",
      result: "90% time saved on documentation",

      overview: {
        title: "Project Overview",
        client: "Business Process Automation",
        timeline: "6 weeks",
        role: "Full-Stack Developer & AI Integration",
        description: "Business meetings generate valuable information—requirements, decisions, action items—but this knowledge often gets lost or requires hours to document manually. I built a system that automatically transcribes, analyzes, and structures meeting content."
      },

      challenge: {
        title: "The Challenge",
        points: [
          "Process audio/video files of varying formats and quality",
          "Accurately transcribe conversations with multiple speakers",
          "Identify and extract specific business artifacts (requirements, actions, decisions)",
          "Handle long meetings without losing context or exceeding AI token limits",
          "Produce output in structured, usable formats (not just raw transcripts)"
        ]
      },

      solution: {
        title: "The Solution",
        description: "An end-to-end pipeline that handles everything from file upload to structured output, using multiple AI models for different tasks.",
        features: [
          { title: "Multi-Format Processing", description: "FFmpeg-based pipeline handles MP3, MP4, WAV, and video files. Automatic audio extraction and optimization for transcription." },
          { title: "Speaker Diarization", description: "Identifies different speakers in the recording, attributing statements and action items to specific participants." },
          { title: "AI Transcription", description: "Google's Gemini AI for accurate transcription with support for multiple languages and technical terminology." },
          { title: "Smart Extraction", description: "Separate AI passes to identify requirements, decisions, action items, and follow-ups with confidence scoring." },
          { title: "Structured Output", description: "Clean, formatted documentation ready for project management tools, wikis, or direct stakeholder distribution." }
        ]
      },

      techStack: {
        title: "Technology Stack",
        categories: [
          { name: "AI", items: ["Gemini AI", "Whisper"] },
          { name: "Backend", items: ["Node.js", "TypeScript"] },
          { name: "Processing", items: ["FFmpeg", "Bull Queue"] },
          { name: "Frontend", items: ["Next.js", "React"] },
          { name: "Infrastructure", items: ["AWS S3", "Docker"] }
        ]
      },

      results: {
        title: "Results",
        metrics: [
          { value: "90%", label: "Time saved vs manual" },
          { value: "<5min", label: "Processing for 1hr meeting" },
          { value: "95%+", label: "Transcription accuracy" },
          { value: "100%", label: "Action items captured" }
        ],
        description: "The system transforms how teams handle meeting documentation. What used to take hours of manual note-taking and follow-up now happens automatically. Teams get structured, actionable output within minutes of the meeting ending."
      },

      cta: {
        title: "Need Similar AI Automation?",
        description: "If you're looking to automate document processing, content extraction, or similar workflows, let's discuss your use case.",
        button: "Discuss Your Project"
      }
    },
    he: {
      backToHome: "→ חזרה לפורטפוליו",
      badge: "אוטומציית AI",
      title: "מערכת ניתוח פגישות",
      subtitle: "העלה הקלטות פגישות עסקיות וחלץ אוטומטית דרישות, פריטי פעולה והחלטות מפתח באמצעות AI. הפוך שיחות לתיעוד מובנה.",
      result: "90% חיסכון בזמן על תיעוד",

      overview: {
        title: "סקירת הפרויקט",
        client: "אוטומציית תהליכים עסקיים",
        timeline: "6 שבועות",
        role: "מפתח Full-Stack ואינטגרציית AI",
        description: "פגישות עסקיות מייצרות מידע יקר ערך—דרישות, החלטות, פריטי פעולה—אבל הידע הזה לעתים קרובות הולך לאיבוד או דורש שעות לתעד ידנית. בניתי מערכת שמתמללת, מנתחת ומבנה תוכן פגישות אוטומטית."
      },

      challenge: {
        title: "האתגר",
        points: [
          "עיבוד קבצי אודיו/וידאו בפורמטים ואיכויות משתנים",
          "תמלול מדויק של שיחות עם מספר דוברים",
          "זיהוי וחילוץ artifacts עסקיים ספציפיים (דרישות, פעולות, החלטות)",
          "טיפול בפגישות ארוכות בלי לאבד הקשר או לחרוג ממגבלות טוקנים של AI",
          "ייצור פלט בפורמטים מובנים ושמישים (לא רק תמלילים גולמיים)"
        ]
      },

      solution: {
        title: "הפתרון",
        description: "צינור מקצה לקצה שמטפל בהכל מהעלאת קובץ ועד פלט מובנה, באמצעות מודלי AI מרובים למשימות שונות.",
        features: [
          { title: "עיבוד מרובה פורמטים", description: "צינור מבוסס FFmpeg מטפל ב-MP3, MP4, WAV וקבצי וידאו. חילוץ ואופטימיזציה אוטומטית של אודיו לתמלול." },
          { title: "זיהוי דוברים", description: "מזהה דוברים שונים בהקלטה, מייחס הצהרות ופריטי פעולה למשתתפים ספציפיים." },
          { title: "תמלול AI", description: "Gemini AI של גוגל לתמלול מדויק עם תמיכה במספר שפות וטרמינולוגיה טכנית." },
          { title: "חילוץ חכם", description: "מעברי AI נפרדים לזיהוי דרישות, החלטות, פריטי פעולה והמשכים עם ציון ביטחון." },
          { title: "פלט מובנה", description: "תיעוד נקי ומעוצב מוכן לכלי ניהול פרויקטים, ויקיים או הפצה ישירה לבעלי עניין." }
        ]
      },

      techStack: {
        title: "סטאק טכנולוגי",
        categories: [
          { name: "AI", items: ["Gemini AI", "Whisper"] },
          { name: "Backend", items: ["Node.js", "TypeScript"] },
          { name: "עיבוד", items: ["FFmpeg", "Bull Queue"] },
          { name: "Frontend", items: ["Next.js", "React"] },
          { name: "תשתית", items: ["AWS S3", "Docker"] }
        ]
      },

      results: {
        title: "תוצאות",
        metrics: [
          { value: "90%", label: "חיסכון זמן לעומת ידני" },
          { value: "<5 דק'", label: "עיבוד לפגישה של שעה" },
          { value: "95%+", label: "דיוק תמלול" },
          { value: "100%", label: "פריטי פעולה נתפסו" }
        ],
        description: "המערכת משנה איך צוותים מטפלים בתיעוד פגישות. מה שהיה לוקח שעות של רישום הערות ידני ומעקב קורה עכשיו אוטומטית. צוותים מקבלים פלט מובנה וניתן לפעולה תוך דקות מסיום הפגישה."
      },

      cta: {
        title: "צריך אוטומציית AI דומה?",
        description: "אם אתה מחפש לאוטמט עיבוד מסמכים, חילוץ תוכן או תהליכי עבודה דומים, בוא נדון בתרחיש השימוש שלך.",
        button: "דון בפרויקט שלך"
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
            <Link href={`/${locale}#portfolio`} className="inline-block text-gray-500 hover:text-gray-700 transition-colors mb-8">{t.backToHome}</Link>
            <span className="inline-block px-4 py-1.5 text-sm font-medium bg-purple-100 text-purple-700 rounded-full mb-6">{t.badge}</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-gray-950 mb-4">{t.title}</h1>
            <p className="text-lg text-gray-600 mb-4">{t.subtitle}</p>
            <span className="inline-block text-purple-600 font-medium">{t.result}</span>
          </div>
        </section>

        <section className="px-6 sm:px-8 lg:px-12 pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden relative">
              <Image src="/portfolio/meeting-analysis.png" alt={t.title} fill className="object-cover" />
            </div>
          </div>
        </section>

        <section className="py-16 px-6 sm:px-8 lg:px-12 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-light text-gray-950 mb-6">{t.overview.title}</h2>
            <div className="grid grid-cols-3 gap-6 mb-6">
              <div><p className="text-xs text-gray-400 uppercase mb-1">Client</p><p className="text-gray-950">{t.overview.client}</p></div>
              <div><p className="text-xs text-gray-400 uppercase mb-1">Timeline</p><p className="text-gray-950">{t.overview.timeline}</p></div>
              <div><p className="text-xs text-gray-400 uppercase mb-1">Role</p><p className="text-gray-950">{t.overview.role}</p></div>
            </div>
            <p className="text-gray-600">{t.overview.description}</p>
          </div>
        </section>

        <section className="py-16 px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-light text-gray-950 mb-6">{t.challenge.title}</h2>
            <ul className="space-y-3">
              {t.challenge.points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span className="text-gray-600">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-16 px-6 sm:px-8 lg:px-12 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-light text-gray-950 mb-4">{t.solution.title}</h2>
            <p className="text-gray-600 mb-8">{t.solution.description}</p>
            <div className="space-y-4">
              {t.solution.features.map((f, i) => (
                <div key={i} className="p-6 bg-white rounded-xl border border-gray-200">
                  <h3 className="text-lg font-medium text-gray-950 mb-2">{f.title}</h3>
                  <p className="text-gray-600 text-sm">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-light text-gray-950 mb-6">{t.techStack.title}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-6">
              {t.techStack.categories.map((c, i) => (
                <div key={i}>
                  <p className="text-xs text-gray-400 uppercase mb-2">{c.name}</p>
                  <div className="flex flex-wrap gap-2">
                    {c.items.map((item, j) => (
                      <span key={j} className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6 sm:px-8 lg:px-12 bg-gray-950 text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-light mb-8">{t.results.title}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
              {t.results.metrics.map((m, i) => (
                <div key={i} className="text-center">
                  <p className="text-3xl font-light text-purple-400 mb-1">{m.value}</p>
                  <p className="text-sm text-gray-400">{m.label}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-300">{t.results.description}</p>
          </div>
        </section>

        <section className="py-20 px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-light text-gray-950 mb-4">{t.cta.title}</h2>
            <p className="text-gray-600 mb-8">{t.cta.description}</p>
            <a href="https://wa.me/972546522485?text=Hi%20Asaf,%20I%20saw%20your%20Meeting%20Analysis%20case%20study" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 text-white font-medium rounded-full hover:bg-green-600 transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              {t.cta.button}
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
