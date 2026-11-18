'use client';
import { useRef, useState, type PointerEvent, type KeyboardEvent } from 'react';
import type { Case, Locale } from '../lib/data';
import { positionFromPointer, positionFromKey } from '../lib/comparison-control';

export function Comparison({ item, locale }: { item: Case; locale: Locale }) {
 const [value, setValue] = useState(50);
 const dragging = useRef(false);
 const rtl = locale === 'ar';
 const update = (event: PointerEvent<HTMLDivElement>) => {
   const box = event.currentTarget.getBoundingClientRect();
   setValue(positionFromPointer(event.clientX,box.left,box.width,rtl));
 };
 const keyboard = (event: KeyboardEvent<HTMLDivElement>) => {
   const next=positionFromKey(value,event.key,rtl,event.shiftKey);
   if(next===null)return;
   event.preventDefault(); setValue(next);
 };
 const before = rtl ? 'قبل' : 'Before', after = rtl ? 'بعد' : 'After';
 return <div className="comparison" role="slider" tabIndex={0} aria-label={`${item.title[locale]} — ${rtl ? 'مقارنة قبل وبعد' : 'before and after comparison'}`} aria-valuemin={0} aria-valuemax={100} aria-valuenow={value} aria-valuetext={`${value}% ${after}`} aria-orientation="horizontal" onKeyDown={keyboard}
   onPointerDown={event => { if(event.button !== 0) return; dragging.current = true; event.currentTarget.setPointerCapture(event.pointerId); update(event); }}
   onPointerMove={event => { if (dragging.current) update(event); }}
   onPointerUp={event => { dragging.current = false; if(event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId); }}
   onPointerCancel={() => { dragging.current = false; }}>
   <img src={item.beforeImage} width="1808" height="870" loading="lazy" draggable={false} alt={`${item.title[locale]} — ${before} — ${rtl ? 'صورة مولّدة بالذكاء الاصطناعي' : 'AI-generated'}`} />
   <img className="after-image" style={{clipPath:rtl ? `inset(0 0 0 ${100-value}%)` : `inset(0 ${100-value}% 0 0)`}} src={item.afterImage} width="1808" height="870" loading="lazy" draggable={false} alt={`${item.title[locale]} — ${after} — ${rtl ? 'صورة مولّدة بالذكاء الاصطناعي' : 'AI-generated'}`} />
   <span className="compare-label label-before" style={{opacity:value===100?0:1}}>{before}</span>
   <span className="compare-label label-after" style={{opacity:value===0?0:1}}>{after}</span>
   <span className="compare-divider" style={{insetInlineStart:`${value}%`}}><span className="compare-handle" aria-hidden="true"><i>‹</i><i>›</i></span></span>
 </div>;
}
