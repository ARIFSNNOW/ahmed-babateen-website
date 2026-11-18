import { ExamplePage } from '../../../../components/content-pages';
import { cases } from '../../../../lib/data';
import { metadataFor } from '../../../../lib/metadata';
export function generateStaticParams(){return cases.map(item=>({slug:item.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;return metadataFor('ar',`examples/${slug}`,cases.find(c=>c.slug===slug)?.title['ar'])}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;return <ExamplePage locale="ar" slug={slug}/>}
