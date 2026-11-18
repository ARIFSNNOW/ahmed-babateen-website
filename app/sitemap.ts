import type { MetadataRoute } from 'next';
import { origin, pathFor, cases } from '../lib/data';
export const dynamic = 'force-static';
export default function sitemap():MetadataRoute.Sitemap { return (['ar','en'] as const).flatMap(locale=>['','privacy','examples',...cases.map(c=>`examples/${c.slug}`)].map(path=>({url:`${origin}${pathFor(locale,path)}`,lastModified:'2026-11-17',alternates:{languages:{ar:`${origin}${pathFor('ar',path)}`,en:`${origin}${pathFor('en',path)}`}}}))); }
