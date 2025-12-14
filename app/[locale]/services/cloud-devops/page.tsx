"use client"

import { useLocale } from 'next-intl';
import Link from 'next/link';
import Header from '@/components/Header';

export default function CloudDevOpsPage() {
  const locale = useLocale();
  const isHebrew = locale === 'he';

  const content = {
    en: {
      backToHome: "← Back to Home",
      badge: "Cloud & DevOps",
      title: "Cloud Architecture & DevOps Consulting",
      subtitle: "Infrastructure design, CI/CD pipelines, and deployment automation. Build the foundation that lets your team ship fast and sleep well.",
      problemSection: {
        title: "Infrastructure Can Make or Break You",
        intro: "Poor infrastructure choices compound over time. You might be experiencing:",
        problems: [
          { title: "Deployment anxiety", description: "Deployments are stressful, manual, and sometimes break production. Your team is scared to push on Fridays." },
          { title: "Unclear costs", description: "Cloud bills keep growing but you're not sure what's driving costs or how to optimize." },
          { title: "Scaling uncertainty", description: "You're not sure if your infrastructure can handle 10x growth—or how much it would cost." },
          { title: "Knowledge concentration", description: "One person understands the infrastructure. If they leave, you're in trouble." }
        ]
      },
      solutionSection: {
        title: "What I Deliver",
        intro: "I help teams build infrastructure that's reliable, cost-effective, and maintainable—without overengineering.",
        deliverables: [
          { title: "Cloud Architecture", description: "Right-sized infrastructure on AWS, GCP, or Azure. Optimized for your actual workload." },
          { title: "CI/CD Pipelines", description: "Automated testing and deployment. Push to main, watch it deploy, verify it works." },
          { title: "Infrastructure as Code", description: "Terraform or Pulumi. Version-controlled infrastructure anyone can understand." },
          { title: "Monitoring & Alerting", description: "Know when things break before users do. Meaningful alerts without fatigue." }
        ]
      },
      techSection: {
        title: "Technology Stack",
        intro: "I work with major cloud providers and modern DevOps tooling:",
        categories: [
          { name: "Cloud", technologies: ["AWS", "Google Cloud", "Azure", "Vercel"] },
          { name: "Containers", technologies: ["Docker", "Kubernetes", "ECS"] },
          { name: "IaC", technologies: ["Terraform", "Pulumi", "CloudFormation"] },
          { name: "CI/CD", technologies: ["GitHub Actions", "GitLab CI", "ArgoCD"] }
        ]
      },
      faqSection: {
        title: "Frequently Asked Questions",
        questions: [
          { question: "Which cloud provider should I use?", answer: "It depends on your expertise, needs, and budget. AWS has the widest selection, GCP excels at data/ML, Azure integrates with Microsoft. I'll recommend based on your situation." },
          { question: "Do I need Kubernetes?", answer: "Probably not. Kubernetes is powerful but complex. For most apps, managed container services or VM deployments are more appropriate." },
          { question: "Can you reduce our cloud costs?", answer: "Yes. I typically find 20-40% savings through right-sizing, reserved capacity, and eliminating waste." },
          { question: "What about security?", answer: "Security is built in from the start—network isolation, least-privilege access, encryption, audit logging. I can help with SOC 2, HIPAA, or GDPR." }
        ]
      },
      ctaSection: {
        title: "Need Help with Infrastructure?",
        description: "Whether you're setting up from scratch or optimizing what you have—let's talk.",
        button: "Let's Talk on WhatsApp",
        altButton: "Or send me an email"
      }
    },
    he: {
      backToHome: "→ חזרה לדף הבית",
      badge: "Cloud & DevOps",
      title: "ייעוץ ארכיטקטורת ענן ו-DevOps",
      subtitle: "עיצוב תשתיות, CI/CD pipelines ואוטומציית פריסה. בנה את היסודות שמאפשרים לצוות שלך לשלוח מהר ולישון בשקט.",
      problemSection: {
        title: "תשתית יכולה לעשות או לשבור אותך",
        intro: "בחירות תשתית גרועות מצטברות עם הזמן. ייתכן שאתה חווה:",
        problems: [
          { title: "חרדת פריסה", description: "פריסות מלחיצות, ידניות ולפעמים שוברות פרודקשן. הצוות מפחד לדחוף ביום שישי." },
          { title: "עלויות לא ברורות", description: "חשבונות הענן ממשיכים לגדול אבל אתה לא בטוח מה מניע את העלויות." },
          { title: "אי-ודאות סקיילינג", description: "אתה לא בטוח אם התשתית יכולה להתמודד עם צמיחה פי 10." },
          { title: "ריכוז ידע", description: "אדם אחד מבין את התשתית. אם הוא עוזב, אתה בצרות." }
        ]
      },
      solutionSection: {
        title: "מה אני מספק",
        intro: "אני עוזר לצוותים לבנות תשתית אמינה, חסכונית וניתנת לתחזוקה—בלי להנדס יתר.",
        deliverables: [
          { title: "ארכיטקטורת ענן", description: "תשתית בגודל נכון על AWS, GCP או Azure. ממוטבת לעומס האמיתי שלך." },
          { title: "CI/CD Pipelines", description: "בדיקות ופריסה אוטומטיות. דחוף ל-main, צפה בפריסה, וודא שעובד." },
          { title: "תשתית כקוד", description: "Terraform או Pulumi. תשתית בבקרת גרסאות שכולם יכולים להבין." },
          { title: "ניטור והתראות", description: "דע מתי דברים נשברים לפני המשתמשים. התראות משמעותיות בלי עייפות." }
        ]
      },
      techSection: {
        title: "סטאק טכנולוגי",
        intro: "אני עובד עם ספקי ענן מרכזיים וכלי DevOps מודרניים:",
        categories: [
          { name: "ענן", technologies: ["AWS", "Google Cloud", "Azure", "Vercel"] },
          { name: "קונטיינרים", technologies: ["Docker", "Kubernetes", "ECS"] },
          { name: "IaC", technologies: ["Terraform", "Pulumi", "CloudFormation"] },
          { name: "CI/CD", technologies: ["GitHub Actions", "GitLab CI", "ArgoCD"] }
        ]
      },
      faqSection: {
        title: "שאלות נפוצות",
        questions: [
          { question: "באיזה ספק ענן להשתמש?", answer: "תלוי במומחיות, צרכים ותקציב. AWS - מבחר רחב, GCP - נתונים/ML, Azure - אינטגרציה עם מיקרוסופט. אמליץ לפי המצב שלך." },
          { question: "צריך Kubernetes?", answer: "כנראה שלא. Kubernetes חזק אבל מורכב. לרוב האפליקציות, שירותי קונטיינר מנוהלים מתאימים יותר." },
          { question: "אפשר להפחית עלויות ענן?", answer: "כן. בדרך כלל מוצא 20-40% חיסכון דרך right-sizing, קיבולת שמורה והעלמת בזבוז." },
          { question: "מה עם אבטחה?", answer: "אבטחה מובנית מההתחלה—בידוד רשת, גישה מינימלית, הצפנה. יכול לעזור עם SOC 2, HIPAA, GDPR." }
        ]
      },
      ctaSection: {
        title: "צריך עזרה עם תשתית?",
        description: "בין אם מגדיר מאפס או מייעל קיים—בוא נדבר.",
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
            <span className="inline-block px-4 py-1.5 text-sm font-medium bg-cyan-100 text-cyan-700 rounded-full mb-6">{t.badge}</span>
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
            <h2 className="text-2xl sm:text-3xl font-light text-gray-950 mb-4">{t.techSection.title}</h2>
            <p className="text-gray-600 mb-8">{t.techSection.intro}</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {t.techSection.categories.map((c, i) => (
                <div key={i}>
                  <h3 className="text-sm font-medium text-gray-950 mb-3">{c.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {c.technologies.map((tech, j) => (
                      <span key={j} className="px-3 py-1 text-xs bg-white text-gray-600 rounded-full border border-gray-200">{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6 sm:px-8 lg:px-12 bg-gray-50">
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

        <section className="py-20 px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-light text-gray-950 mb-4">{t.ctaSection.title}</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">{t.ctaSection.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/972546522485?text=Hi%20Asaf,%20I'm%20interested%20in%20Cloud%20and%20DevOps%20services" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white font-medium rounded-full hover:bg-green-600 transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                {t.ctaSection.button}
              </a>
              <a href="mailto:asaf.arviv@gmail.com?subject=Cloud%20DevOps%20Inquiry" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-950 font-medium rounded-full border border-gray-200 hover:bg-gray-50 transition-all duration-300">{t.ctaSection.altButton}</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
