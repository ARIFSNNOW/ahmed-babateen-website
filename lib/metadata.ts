import type { Metadata } from 'next';
import { origin, pathFor, profile, type Locale } from './data';
export function metadataFor(locale:Locale, path='', label?:string):Metadata {
 const ar=locale==='ar';const title=label?`${label} | ${profile.name[locale]}`:`${profile.name[locale]} | ${profile.title[locale]}`;
 const description=ar?'تعرّف على د. أحمد بابطين، طبيب أسنان. المؤهلات والخبرة، وأمثلة توضيحية، وطرق التواصل المباشر.':'Meet Dr. Ahmed Babateen, DDS, Dentist. Explore his education and experience, illustrative examples, and direct contact options.';
 return {metadataBase:new URL(origin),title,description,alternates:{canonical:pathFor(locale,path),languages:{ar:pathFor('ar',path),en:pathFor('en',path),'x-default':pathFor('ar',path)}},openGraph:{title,description,type:'website',locale:ar?'ar_AR':'en_US',alternateLocale:ar?'en_US':'ar_AR',url:pathFor(locale,path),images:[{url:profile.portrait.src,width:profile.portrait.width,height:profile.portrait.height,alt:profile.name[locale]}]},twitter:{card:'summary_large_image',title,description},icons:{icon:'/favicon.svg'}};
}
