'use client';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { pathFor, profile, type Locale } from '../lib/data';

export function Icon({name}:{name:'phone'|'email'|'instagram'|'linkedin'|'arrow'}) {
 const paths = {phone:<path d="M6.6 3H3.8a1 1 0 0 0-1 1.1c.9 9.7 6.4 15.2 16.1 16.1a1 1 0 0 0 1.1-1v-2.8l-4.2-1.8-1.7 2a15.5 15.5 0 0 1-7.8-7.8l2-1.7L6.6 3Z"/>,email:<><rect x="3" y="5" width="18" height="14" rx="1"/><path d="m3 6 9 7 9-7"/></>,instagram:<><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/></>,linkedin:<><rect x="3" y="3" width="18" height="18" rx="1"/><path d="M7.5 10v7M7.5 7v.1M11 17v-7m0 3a3 3 0 0 1 6 0v4"/></>,arrow:<path d="M4 12h15m-6-6 6 6-6 6"/>};
 return <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}
export function Header({locale}:{locale:Locale}) {
 const ar=locale==='ar'; const pathname=usePathname();
 const [open,setOpen]=useState(false), [scrolled,setScrolled]=useState(false);
 const toggle=useRef<HTMLButtonElement>(null), header=useRef<HTMLElement>(null);
 const base=pathFor(locale); const stripped=pathname.replace(/^\/en(?=\/|$)/,'');
 const languagePath=ar ? `/en${pathname==='/'?'/':pathname}` : (stripped||'/');
 useEffect(()=>{
  const onScroll=()=>setScrolled(window.scrollY>20); onScroll(); window.addEventListener('scroll',onScroll,{passive:true});
  return()=>window.removeEventListener('scroll',onScroll);
 },[]);
 useEffect(()=>{
  if(!open)return;
  const key=(e:globalThis.KeyboardEvent)=>{
   if(e.key==='Escape'){setOpen(false);toggle.current?.focus();}
   if(e.key==='Tab'){
    const nodes=Array.from(header.current?.querySelectorAll<HTMLElement>('a,button')||[]).filter(n=>n.offsetParent!==null);
    if(e.shiftKey&&document.activeElement===nodes[0]){e.preventDefault();nodes.at(-1)?.focus();}
    else if(!e.shiftKey&&document.activeElement===nodes.at(-1)){e.preventDefault();nodes[0]?.focus();}
   }
  }; document.addEventListener('keydown',key); return()=>document.removeEventListener('keydown',key);
 },[open]);
 const nav=[{id:'approach',text:ar?'نهج العناية':'Our approach'},{id:'about',text:ar?'عن د. أحمد':'About Ahmed'},{id:'cases',text:ar?'أمثلة توضيحية':'Illustrative examples'},{id:'contact',text:ar?'لنتواصل':'Contact'}];
 return <><a className="skip-link" href="#main">{ar?'تخطَّ إلى المحتوى':'Skip to content'}</a>
 <header ref={header} className={`site-header ${scrolled?'scrolled':''} ${open?'menu-open':''}`}>
  <div className="header-inner">
   <a href={base} className="brand" aria-label={`${profile.name[locale]} — ${profile.title[locale]}`}>
    <span className="brand-names" dir="ltr"><span className="brand-en" lang="en">Dr. Ahmed Babateen<span className="name-suffix">, DDS</span></span><span className="brand-ar" lang="ar" dir="rtl">د. أحمد بابطين</span></span>
    <span className="brand-subtitle">{profile.title[locale]}</span>
   </a>
   <div className="header-tools">
    <a className="language-toggle" href={languagePath} lang={ar?'en':'ar'} onClick={()=>localStorage.setItem('ahmed-language',ar?'en':'ar')} aria-label={ar?'Switch to English':'التبديل إلى العربية'}>{ar?'EN':'عربي'}</a>
    <a className="icon-link desktop-tool" href={profile.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Icon name="instagram"/></a>
    <a className="icon-link desktop-tool" href={profile.phoneHref} aria-label={ar?'اتصل بأحمد':'Call Ahmed'}><Icon name="phone"/></a>
   </div>
   <button ref={toggle} className="menu-toggle" aria-expanded={open} aria-controls="main-navigation" aria-label={open?(ar?'إغلاق القائمة':'Close menu'):(ar?'فتح القائمة':'Open menu')} onClick={()=>setOpen(!open)}><span/><span/></button>
   <nav id="main-navigation" className="main-navigation" aria-label={ar?'التنقل الرئيسي':'Main navigation'}>
    {nav.map(n=><a key={n.id} href={`${base}#${n.id}`} onClick={()=>setOpen(false)}>{n.text}</a>)}
    <a href={`${base}#contact`} className="consultation-button" onClick={()=>setOpen(false)}>{ar?'طلب استشارة':'Request a consultation'}</a>
    <div className="mobile-socials"><a href={profile.emailHref}><Icon name="email"/>{ar?'البريد الإلكتروني':'Email'}</a><a href={profile.phoneHref}><Icon name="phone"/>{ar?'اتصال':'Call'}</a></div>
   </nav>
  </div>
 </header></>;
}
export function Footer({locale}:{locale:Locale}) {
 const ar=locale==='ar';
 return <footer className="site-footer"><div className="wrap footer-grid">
  <div><a href={pathFor(locale)} className={`footer-name ${ar?'arabic-name':''}`}>{profile.name[locale]}</a><p className="footer-title">{profile.title[locale]}</p><p className="footer-bio">{ar?'لأن الخطوة الأولى للعناية بأسنانك، هي أن تجد مساحة لأسئلتك.':'Good dental care begins with space for your questions.'}</p></div>
  <div className="footer-contacts"><a href={profile.emailHref} dir="ltr">{profile.email}</a><a href={profile.phoneHref} dir="ltr">{profile.phone}</a><div className="footer-socials"><a href={profile.instagram} target="_blank" rel="noopener noreferrer"><Icon name="instagram"/><span dir="ltr">@a.babateen</span></a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Icon name="linkedin"/>LinkedIn</a></div></div>
 </div><div className="wrap footer-bottom"><span>© 2026 · {profile.name[locale]}</span><a href={pathFor(locale,'privacy')}>{ar?'سياسة الخصوصية':'Privacy policy'}</a></div></footer>;
}
export function Preference({locale}:{locale:Locale}) {
 useEffect(()=>{
  if(locale==='ar'&&localStorage.getItem('ahmed-language')==='en') {
   const p=window.location.pathname;
   window.location.replace(`/en${p}${window.location.search}${window.location.hash}`);
  }
 },[locale]);
 return null;
}
