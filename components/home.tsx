'use client';
import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { cases, pathFor, profile, qualifications, slides, type Locale } from '../lib/data';
import { Comparison } from './comparison';
import { Icon } from './chrome';

function Hero({locale}:{locale:Locale}) {
 const ar=locale==='ar'; const [active,setActive]=useState(0),[paused,setPaused]=useState(false),[held,setHeld]=useState(false),[reduced,setReduced]=useState(false);
 useEffect(()=>{const m=window.matchMedia('(prefers-reduced-motion: reduce)'); const sync=()=>setReduced(m.matches);sync();m.addEventListener('change',sync);return()=>m.removeEventListener('change',sync);},[]);
 useEffect(()=>{if(paused||held||reduced)return; const id=window.setInterval(()=>setActive(v=>(v+1)%slides.length),6000);return()=>window.clearInterval(id);},[paused,held,reduced,active]);
 const change=(delta:number)=>setActive(v=>(v+delta+slides.length)%slides.length);
 return <section className="hero" aria-roledescription={ar?'عرض شرائح':'carousel'} aria-label={ar?'نهج العناية':'Approach to care'} onMouseEnter={()=>setHeld(true)} onMouseLeave={()=>setHeld(false)} onFocusCapture={()=>setHeld(true)} onBlurCapture={e=>{if(!e.currentTarget.contains(e.relatedTarget))setHeld(false);}}>
  <div className="hero-media">{slides.map((s,i)=><img key={s.image} src={s.image} alt={s.alt[locale]} aria-hidden={i!==active} width="1672" height="941" fetchPriority={i===0?'high':'auto'} loading={i===0?'eager':'lazy'} className={i===active?'active':''} style={{'--hero-position-desktop':s.desktopPosition,'--hero-position-mobile':s.mobilePosition} as CSSProperties}/>)}</div>
  <div className="hero-scrim"/>
  <div className="hero-copy" aria-live={paused||reduced?'polite':'off'}>
   <p className="hero-kicker">{ar?'العناية من منظور آخر':'A considered approach'}</p>
   <div key={`${locale}-${active}`} className="hero-slide-copy"><h1>{slides[active][locale].heading}</h1><p>{slides[active][locale].statement}</p></div>
   <a className="text-link hero-link" href="#contact">{ar?'لنبدأ بحوار':'Let’s start a conversation'}<Icon name="arrow"/></a>
  </div>
  <p className="hero-caption">{slides[active][locale].caption}</p>
  <div className="hero-controls" dir="ltr">
   <button onClick={()=>change(-1)} className="slide-arrow" aria-label={ar?'الشريحة السابقة':'Previous slide'}>‹</button>
   {slides.map((s,i)=><button key={s.image} className={`slide-dot ${active===i?'active':''}`} aria-label={ar?`الشريحة ${i+1}`:`Slide ${i+1}`} aria-current={active===i?'true':undefined} onClick={()=>setActive(i)}><span/></button>)}
   <button onClick={()=>change(1)} className="slide-arrow" aria-label={ar?'الشريحة التالية':'Next slide'}>›</button>
   <button className="slide-pause" onClick={()=>setPaused(!paused)} disabled={reduced} aria-pressed={paused||reduced} aria-label={reduced?(ar?'الحركة متوقفة حسب تفضيلاتك':'Animation paused by your motion preference'):paused?(ar?'تشغيل العرض التلقائي':'Play slideshow'):(ar?'إيقاف العرض التلقائي':'Pause slideshow')}>{paused||reduced?'▷':'Ⅱ'}</button>
  </div>
 </section>;
}

export function Home({locale}:{locale:Locale}) {
 const ar=locale==='ar'; const page=useRef<HTMLDivElement>(null);
 useEffect(()=>{const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){entry.target.classList.add('revealed');observer.unobserve(entry.target);}}},{threshold:0.06});page.current?.querySelectorAll('[data-reveal]').forEach(el=>observer.observe(el));return()=>observer.disconnect();},[]);
 return <div ref={page}>
 <Hero locale={locale}/>
 <section className="approach-summary" id="approach" aria-labelledby="approach-title"><div className="summary-inner" data-reveal>
  <ol className="principles">{(ar?['تواصل واضح','تخطيط مدروس','عناية تناسبك']:['Clear communication','Thoughtful planning','Individual care']).map((p,i)=><li key={p}><span className="principle-number">0{i+1}</span>{p}</li>)}</ol>
  <div><p className="section-label">{ar?'والبداية؟':'Where it begins'}</p><h2 id="approach-title">{ar?<>نفهم ما يهمّك.<br/>ونفكّر في الخطوة التالية معًا.</>:<>Understand what matters.<br/>Consider the next step, together.</>}</h2></div>
 </div></section>
 <section id="about" className="about-section" aria-labelledby="about-title"><div className="about-grid wrap">
  <figure className="about-figure" data-reveal><figcaption className="section-label">{ar?'تعرّف على د. أحمد':'Meet Dr. Ahmed'}</figcaption><div className="about-image"><img src={profile.portrait.src} width={profile.portrait.width} height={profile.portrait.height} alt={profile.portrait.alt[locale]} style={{'--portrait-aspect':`${profile.portrait.width}/${profile.portrait.height}`} as CSSProperties} loading="lazy"/></div><p className="figure-note">{profile.name[locale]} · {profile.title[locale]}</p></figure>
  <div className="about-copy" data-reveal><p className="section-label">{ar?'عن الطبيب':'About the dentist'}</p><h2 id="about-title">{profile.name[locale]}</h2><p className="professional-title">{profile.title[locale]}</p>
   <p className="editorial-lead">{ar?'مساحة لأسئلتك، ووضوح في كل خطوة.':'Space for your questions. Clarity at every step.'}</p>
   <p>{ar?'التفكير في العناية بأسنانك يبدأ بأسئلة بسيطة: ما الذي يهمّك؟ ما الذي تريد فهمه؟ وما الخيارات التي يمكن مناقشتها؟':'Thinking about your dental care can begin with simple questions: what matters to you, what would you like to understand, and which options could you discuss?'}</p>
   <p>{ar?'د. أحمد بابطين طبيب أسنان، حاصل على بكالوريوس جراحة الأسنان من كلية الفارابي وماجستير في تقويم الأسنان من جامعة بارما في إيطاليا. تشمل خبرته طب الأسنان في السعودية وصحة الأسنان والعناية باللثة في كندا.':'Dr. Ahmed Babateen is a dentist with a Bachelor of Dental Surgery from Alfarabi College and a Master in Orthodontics from the University of Parma, Italy. His experience includes dentistry in Saudi Arabia and dental hygiene and periodontal care in Canada.'}</p>
   <div className="about-note"><span className="small-rule"/><p>{ar?'كل شخص مختلف. والتوصية المناسبة تبدأ بتقييم فردي.':'Every person is different. Appropriate recommendations begin with an individual assessment.'}</p></div>
   <div className="qualifications"><h3>{ar?'المؤهلات':'Education & credentials'}</h3>{qualifications.map(q=><div key={q.year} className="qualification-row"><span className="qualification-year">{q.year}</span><div><h4>{q.title[locale]}</h4><p>{q.institution[locale]}</p></div></div>)}<p className="registration-note">{ar?'وفقًا للسيرة الذاتية: ترخيص طبيب أسنان من الهيئة السعودية للتخصصات الصحية، وعضوية مسجّلة لدى كلية أخصائيي صحة الأسنان في أونتاريو (CDHO).':'As listed in his resume: dentist licensure with the Saudi Commission for Health Specialties and registered membership with the College of Dental Hygienists of Ontario (CDHO).'}</p></div>
   <a className="text-link" href="#contact">{ar?'تواصل مع د. أحمد':'Contact Dr. Ahmed'}<Icon name="arrow"/></a>
  </div>
 </div></section>
 <section className="gallery-section" id="cases" aria-labelledby="gallery-title"><div className="gallery-wrap">
  <div className="gallery-heading" data-reveal><h2 id="gallery-title">{ar?'أمثلة توضيحية':'Illustrative examples'}</h2><p>{ar?'اسحب الصورة لاستكشاف قبل وبعد.':'Drag the image to explore before and after.'}</p></div>
  <div className="case-grid">{cases.map(item=><figure key={item.slug} className="case-item" data-reveal><Comparison item={item} locale={locale}/><figcaption><a href={pathFor(locale,`examples/${item.slug}`)}>{item.title[locale]}</a><span className="case-disclosure">{ar?'مولّد بالذكاء الاصطناعي — ليس نتيجة لمريض.':'AI-generated demonstration — not a patient result.'}</span></figcaption></figure>)}</div>
  <div className="catalogue-invite" data-reveal><div><h3>{ar?'استكشف الأمثلة':'Explore the examples'}</h3><p>{ar?'تصوّرات مختلفة، للتوضيح فقط.':'Different possibilities, for illustration only.'}</p></div><a className="text-link" href={pathFor(locale,'examples')}>{ar?'شاهد جميع الأمثلة':'View all examples'}<Icon name="arrow"/></a></div>
 </div></section>
 <section className="contact-section" id="contact" aria-labelledby="contact-title"><div className="contact-wrap">
  <div className="contact-intro" data-reveal><p className="section-label">{ar?'لنبدأ بخطوة بسيطة':'A simple first step'}</p><h2 id="contact-title">{ar?'نبدأ بالاستشارة.':'Let’s start with a conversation.'}</h2><p>{ar?'شارك ما يشغلك، واسأل عمّا تريد فهمه. التواصل هو البداية لمناقشة الخطوة التالية.':'Share what’s on your mind and ask what you’d like to understand. Get in touch to discuss your next step.'}</p></div>
  <ol className="contact-steps" data-reveal>{(ar?[['نتواصل','أرسل استفسارك العام بالبريد أو اتصل مباشرة.'],['نتناقش','تحدث عن احتياجاتك وأسئلتك وما تتوقعه من العناية.'],['نحدّد الخطوة التالية','ناقش مع الطبيب ما يلزم لفهم حالتك وخياراتك.']]:[['Get in touch','Email your general enquiry or call directly.'],['Talk it through','Discuss your needs, questions, and expectations.'],['Consider the next step','Ask what is needed to understand your individual options.']]).map(([title,description],i)=><li key={title}><span className="step-number">0{i+1}</span><h3>{title}</h3><p>{description}</p></li>)}</ol>
  <div className="contact-actions" data-reveal><a className="dark-button" href={profile.emailHref}><Icon name="email"/>{ar?'راسل د. أحمد':'Email Dr. Ahmed'}</a><a className="outline-button" href={profile.phoneHref}><Icon name="phone"/>{ar?'اتصل مباشرة':'Call directly'}</a><p>{ar?'طلب الاستشارة لا يُعدّ موعدًا مؤكدًا.':'An enquiry is a consultation request, not a confirmed appointment.'}</p></div>
  <div className="contact-details" data-reveal><a href={profile.emailHref} dir="ltr">{profile.email}</a><a href={profile.phoneHref} dir="ltr">{profile.phone}</a><a href={profile.instagram} target="_blank" rel="noopener noreferrer"><Icon name="instagram"/><span dir="ltr">@a.babateen</span></a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Icon name="linkedin"/>LinkedIn</a></div>
 </div></section>
 </div>;
}
