import Link from "next/link";
import { cases, type Locale } from "../lib/data";
import { Comparison } from "./comparison";

const copy = {
  en: {
    label: "A closer look",
    title: "Illustrative examples",
    intro: "Explore three visual demonstrations. Drag each divider to compare the two images, or focus the slider and use the arrow keys.",
    disclaimer: "AI-generated demonstration — not a patient result.",
    disclosure: "These fictional examples were created with AI to demonstrate the comparison feature. They are not Dr. Ahmed Babateen’s work, clinical records, or evidence of a treatment outcome.",
    detail: "View this example",
    back: "Back to all examples",
    about: "About this illustration",
    note: "The images show an imagined change in appearance. They do not recommend a treatment, represent what any individual needs, or promise a result. An assessment and a conversation with a qualified dentist are needed to understand suitable options.",
    consistency: "Each pair uses separate before and after files with a matched viewpoint. The labels describe the illustrative states only.",
    contact: "Discuss your questions with Ahmed",
    missing: "Example unavailable",
  },
  ar: {
    label: "نظرة أقرب",
    title: "أمثلة توضيحية",
    intro: "استكشف ثلاثة أمثلة بصرية. اسحب الفاصل لمقارنة الصورتين، أو حدّد شريط المقارنة واستخدم مفاتيح الأسهم.",
    disclaimer: "مثال مولّد بالذكاء الاصطناعي — ليس نتيجة لمريض.",
    disclosure: "أُنشئت هذه الأمثلة الخيالية بالذكاء الاصطناعي لعرض طريقة المقارنة. وهي ليست من أعمال د. أحمد بابطين، ولا سجلات سريرية، ولا دليلًا على نتائج علاجية.",
    detail: "استعرض هذا المثال",
    back: "العودة إلى جميع الأمثلة",
    about: "عن هذا المثال",
    note: "تعرض الصور تغييرًا متخيّلًا في المظهر. وهي لا توصي بعلاج، ولا تحدّد ما يحتاجه أي شخص، ولا تعد بنتيجة. يتطلّب فهم الخيارات المناسبة تقييمًا ومناقشة مع طبيب أسنان مؤهّل.",
    consistency: "يستخدم كل مثال ملفين منفصلين للصورة قبل التغيير وبعده، من زاوية متطابقة. وتشير التسميات إلى حالتين توضيحيتين فقط.",
    contact: "ناقش أسئلتك مع أحمد",
    missing: "المثال غير متاح",
  },
};

function base(locale: Locale) {
  return locale === "en" ? "/en" : "";
}

export function ExamplesPage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <main id="main" className="editorial-page examples-page">
      <div className="wrap">
        <header className="page-intro">
          <p className="section-label">{t.label}</p>
          <h1>{t.title}</h1>
          <p className="narrow">{t.intro}</p>
          <p className="disclaimer">{t.disclaimer}</p>
          <p className="narrow">{t.disclosure}</p>
        </header>
        <div className="example-list">
          {cases.map((item) => (
            <article className="example-card" key={item.slug}>
              <Comparison item={item} locale={locale} />
              <h2>
                <Link href={`${base(locale)}/examples/${item.slug}`}>
                  {item.title[locale]}
                </Link>
              </h2>
              <p>{item.description[locale]}</p>
              <Link className="text-link" href={`${base(locale)}/examples/${item.slug}`}>
                {t.detail} <span aria-hidden="true">{locale === "ar" ? "←" : "→"}</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

export function ExamplePage({ locale, slug }: { locale: Locale; slug: string }) {
  const t = copy[locale];
  const item = cases.find((entry) => entry.slug === slug);
  if (!item) {
    return (
      <main id="main" className="editorial-page">
        <div className="wrap narrow">
          <h1>{t.missing}</h1>
          <Link className="back-link" href={`${base(locale)}/examples`}>{t.back}</Link>
        </div>
      </main>
    );
  }
  return (
    <main id="main" className="editorial-page example-detail">
      <div className="wrap">
        <Link className="back-link" href={`${base(locale)}/examples`}>
          <span aria-hidden="true">{locale === "ar" ? "→" : "←"}</span> {t.back}
        </Link>
        <header className="page-intro">
          <p className="section-label">{t.title}</p>
          <h1>{item.title[locale]}</h1>
          <p className="narrow">{item.description[locale]}</p>
          <p className="disclaimer">{t.disclaimer}</p>
        </header>
        <Comparison item={item} locale={locale} />
        <div className="narrow example-explanation">
          <h2>{t.about}</h2>
          <p>{t.disclosure}</p>
          <p>{t.consistency}</p>
          <p>{t.note}</p>
          <Link className="text-link" href={`${base(locale)}/#contact`}>{t.contact}</Link>
        </div>
      </div>
    </main>
  );
}

const privacy = {
  en: {
    label: "Your information",
    title: "Privacy",
    intro: "This website introduces Dr. Ahmed Babateen and provides direct ways to contact him. You can browse without creating an account or submitting a form.",
    sections: [
      ["Contacting Ahmed", "Call and email buttons open your chosen phone or email app. This website does not collect or deliver an enquiry form. If you send an email or make a call, your message and contact details are handled through the email or telephone services you choose and those used by the recipient. Share only what is needed for your general enquiry; please do not send medical records or patient photographs through this website."],
      ["Language preference", "The site stores your Arabic or English language preference in your browser’s local storage. This preference stays on your device and is used to remember your choice on a later visit. You can remove it by clearing this site’s browser data."],
      ["Cookies and analytics", "This implementation does not use advertising cookies, visitor analytics, or embedded social-media feeds. Fonts and website images are served as website assets. The hosting provider may process technical information such as IP addresses, request times, and error logs to deliver and protect the website."],
      ["External links", "Instagram and LinkedIn links open those services in a new tab. Their own privacy policies and account settings apply when you visit them. Your use of a phone or email application is also governed by that service’s policies."],
      ["Illustrative images", "The hero slideshow uses AI-generated illustrative scenes and a portrait variation; these do not document actual patient visits. The About Ahmed section uses an AI-generated portrait selected and supplied by the site owner. The comparison examples show fictional subjects generated with AI and are not actual patient results or clinical records belonging to Dr. Ahmed Babateen."],
      ["Questions and requests", "For questions about this website or information you have sent directly to Ahmed, use the email address below. Include enough detail to explain your request, without adding sensitive medical information."],
    ],
    updated: "Last updated: 17 November 2026",
    home: "Return to the website",
  },
  ar: {
    label: "معلوماتك",
    title: "الخصوصية",
    intro: "يعرّف هذا الموقع بد. أحمد بابطين ويوفّر وسائل للتواصل المباشر معه. يمكنك تصفّحه دون إنشاء حساب أو تعبئة نموذج.",
    sections: [
      ["التواصل مع أحمد", "تفتح أزرار الاتصال والبريد الإلكتروني التطبيق الذي تختاره على جهازك. لا يجمع هذا الموقع استفسارات عبر نموذج ولا يرسلها. إذا أرسلت بريدًا أو أجريت اتصالًا، تُعالَج رسالتك وبيانات التواصل عبر خدمات البريد أو الهاتف التي تختارها وتلك التي يستخدمها المستلِم. شارك فقط ما يلزم لاستفسارك العام، ويُرجى عدم إرسال سجلات طبية أو صور مرضى عبر هذا الموقع."],
      ["تفضيل اللغة", "يحفظ الموقع اختيارك للعربية أو الإنجليزية في التخزين المحلي للمتصفّح. يبقى هذا التفضيل على جهازك ويُستخدم لتذكّر اختيارك في الزيارة التالية. يمكنك حذفه بمسح بيانات هذا الموقع من المتصفّح."],
      ["ملفات الارتباط والتحليلات", "لا يستخدم هذا الإصدار ملفات ارتباط إعلانية أو تحليلات للزوّار أو محتوى اجتماعيًا مضمّنًا. تُقدَّم الخطوط والصور كملفات تابعة للموقع. وقد يعالج مزوّد الاستضافة معلومات تقنية مثل عناوين الإنترنت وأوقات الطلبات وسجلات الأخطاء لتشغيل الموقع وحمايته."],
      ["الروابط الخارجية", "تفتح روابط إنستغرام ولينكدإن هاتين الخدمتين في علامة تبويب جديدة. تسري سياسات الخصوصية وإعدادات الحساب الخاصة بهما عند زيارتهما. ويخضع استخدام تطبيق الهاتف أو البريد أيضًا لسياسات الخدمة المعنيّة."],
      ["الصور التوضيحية", "يستخدم عرض الصور الرئيسي مشاهد توضيحية وتعديلًا للصورة الشخصية مولّدة بالذكاء الاصطناعي، ولا توثّق زيارات فعلية لمرضى. أما قسم «عن أحمد» فيستخدم صورة شخصية مولّدة بالذكاء الاصطناعي اختارها صاحب الموقع وقدّمها. وتعرض أمثلة المقارنة أشخاصًا خياليين مولّدين بالذكاء الاصطناعي، وليست نتائج مرضى حقيقيين أو سجلات سريرية تخصّ د. أحمد بابطين."],
      ["الأسئلة والطلبات", "للاستفسار عن هذا الموقع أو عن معلومات أرسلتها مباشرة إلى أحمد، استخدم البريد الإلكتروني أدناه. أضف التفاصيل اللازمة لفهم طلبك دون إرفاق معلومات طبية حساسة."],
    ],
    updated: "آخر تحديث: ١٧ نوفمبر ٢٠٢٦",
    home: "العودة إلى الموقع",
  },
};

export function PrivacyPage({ locale }: { locale: Locale }) {
  const t = privacy[locale];
  return (
    <main id="main" className="editorial-page privacy-page">
      <div className="wrap narrow">
        <header className="page-intro">
          <p className="section-label">{t.label}</p>
          <h1>{t.title}</h1>
          <p>{t.intro}</p>
        </header>
        {t.sections.map(([heading, text]) => (
          <section key={heading}>
            <h2>{heading}</h2>
            <p>{text}</p>
          </section>
        ))}
        <p><a className="text-link" href="mailto:Babateen.dent@gmail.com"><bdi dir="ltr">Babateen.dent@gmail.com</bdi></a></p>
        <p className="section-label">{t.updated}</p>
        <Link className="back-link" href={`${base(locale)}/`}>{t.home}</Link>
      </div>
    </main>
  );
}
