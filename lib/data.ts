export type Locale = 'ar' | 'en';
// Set this at build time when deploying to Vercel, Cloudflare Pages, or a custom domain.
export const origin = new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://ahmed-babateen-dentist.burlysunflower.chatgpt.site').origin;
export const profile = {
  name: { ar: 'د. أحمد بابطين، DDS', en: 'Dr. Ahmed Babateen, DDS' },
  title: { ar: 'طبيب أسنان', en: 'Dentist' },
  portrait: {
    src: '/images/ahmed-about-selected.png', width: 1295, height: 1214,
    alt: { ar: 'الصورة الشخصية المختارة لد. أحمد بابطين، مولّدة بالذكاء الاصطناعي', en: 'Selected AI-generated portrait of Dr. Ahmed Babateen, DDS' },
  },
  email: 'Babateen.dent@gmail.com', phone: '+1 416 677 0070',
  phoneHref: 'tel:+14166770070', emailHref: 'mailto:Babateen.dent@gmail.com',
  instagram: 'https://www.instagram.com/a.babateen/',
  linkedin: 'https://www.linkedin.com/in/ahmed-babateen-6474b3450?utm_source=share_via&utm_content=profile&utm_medium=member_android',
};
export const pathFor = (locale: Locale, path = '') => `${locale === 'en' ? '/en' : ''}/${path ? `${path}/` : ''}`;
export const cases = [
  { slug: 'veneers', title: { ar: 'تصوّر لعدسات أمامية', en: 'Anterior veneers illustration' }, description: { ar: 'مثال توضيحي لتغيّر بسيط في لون وشكل الأسنان الأمامية.', en: 'An illustrative change to the shade and shape of the front teeth.' }, beforeImage: '/images/cases/veneers-before.webp', afterImage: '/images/cases/veneers-after-bright-v2.webp', isIllustrative: true },
  { slug: 'restoration', title: { ar: 'تصوّر لترميم سن أمامي', en: 'Anterior restoration illustration' }, description: { ar: 'محاكاة توضيحية لتعويض فراغ سن أمامي.', en: 'An illustrative simulation of restoring a front-tooth space.' }, beforeImage: '/images/cases/restoration-before.webp', afterImage: '/images/cases/restoration-after-bright-v2.webp', isIllustrative: true },
  { slug: 'crowns', title: { ar: 'تصوّر لترميم الأسنان', en: 'Crown restoration illustration' }, description: { ar: 'مثال توضيحي لترميم أسنان متآكلة ومتغيّرة اللون.', en: 'An illustrative simulation of restoring worn and discolored teeth.' }, beforeImage: '/images/cases/crowns-before.webp', afterImage: '/images/cases/crowns-after-bright-v2.webp', isIllustrative: true },
];
export type Case = typeof cases[number];
export const qualifications = [
 {year:'2023', title:{ar:'الدبلوم المتقدم في صحة الأسنان',en:'Dental Hygiene Advanced Diploma'}, institution:{ar:'كلية أكسفورد للفنون والأعمال والتكنولوجيا — تورونتو، كندا',en:'Oxford College of Arts, Business, and Technology — Toronto, Canada'}},
 {year:'2018', title:{ar:'ماجستير في تقويم الأسنان',en:'Master in Orthodontics'}, institution:{ar:'جامعة بارما — بارما، إيطاليا',en:'University of Parma — Parma, Italy'}},
 {year:'2016', title:{ar:'الدبلوم العالي المتقدم في تجميل الأسنان',en:'High Advanced Diploma in Aesthetic Dentistry'}, institution:{ar:'جامعة جنوة — جنوة، إيطاليا',en:'University of Genova — Genova, Italy'}},
 {year:'2015', title:{ar:'بكالوريوس جراحة الأسنان (B.D.S.)',en:'Bachelor of Dental Surgery (B.D.S.)'}, institution:{ar:'كلية الفارابي — المملكة العربية السعودية',en:'Alfarabi College — Saudi Arabia'}},
];
export const slides = [
 {image:'/images/hero-treatment.png', desktopPosition:'65% 0%', mobilePosition:'75% 0%', isIllustrative:true, alt:{ar:'مشهد توضيحي مولّد بالذكاء الاصطناعي لأحمد أثناء فحص الأسنان، وليس زيارة حقيقية لمريض',en:'AI-generated illustrative scene of Ahmed examining teeth, not an actual patient visit'}, ar:{heading:'عناية تبدأ بفهمك.', statement:'كل ابتسامة لها حكايتها. والبداية هي أن نفهم ما يهمّك، وما تحتاجه أسنانك.',caption:'مساحة للتواصل، ووقت لفهم الخيارات.'}, en:{heading:'Care built around you.',statement:'Every smile has its own story. A good place to start is understanding what matters to you.',caption:'Space to talk. Time to understand.'}},
 {image:'/images/hero-consultation-masked.png', desktopPosition:'65% 0%', mobilePosition:'65% 0%', isIllustrative:true, alt:{ar:'مشهد استشارة توضيحي مولّد بالذكاء الاصطناعي لأحمد مرتديًا كمامة جراحية، وليس زيارة حقيقية لمريض',en:'AI-generated illustrative scene of Ahmed wearing a surgical mask during consultation, not an actual patient visit'}, ar:{heading:'خيارات واضحة. قرار مطمئن.',statement:'فهم خياراتك خطوة أساسية. لنتحدث عن أسئلتك، وما يمكن أن يناسب احتياجاتك.',caption:'التفاصيل الصغيرة تصنع فرقًا في الفهم.'}, en:{heading:'Understand your options.',statement:'Clarity comes first. Let’s talk through your questions and the options that may suit your needs.',caption:'Thoughtful conversations. Clear next steps.'}},
 {image:'/images/hero-portrait-masked.png', desktopPosition:'65% 0%', mobilePosition:'75% 0%', isIllustrative:true, alt:{ar:'صورة شخصية توضيحية لأحمد مرتديًا كمامة جراحية بخلفية مولّدة بالذكاء الاصطناعي',en:'Illustrative portrait of Ahmed wearing a surgical mask in an AI-generated setting'}, ar:{heading:'الثقة تبدأ بحوار.',statement:'ليس عليك أن تعرف كل الإجابات. ابدأ بسؤال، وخذ الوقت الذي تحتاجه لفهم الخطوة التالية.',caption:'خطوة مدروسة، تبدأ بسؤال.'}, en:{heading:'Confidence starts with a conversation.',statement:'You don’t need to have every answer. Start with a question, and take time to understand your next step.',caption:'A considered next step starts with a question.'}},
];
