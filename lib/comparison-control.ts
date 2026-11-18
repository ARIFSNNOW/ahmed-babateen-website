export function positionFromPointer(clientX:number,left:number,width:number,rtl:boolean) {
 const physical=Math.max(0,Math.min(100,(clientX-left)/width*100));
 return Math.round(rtl?100-physical:physical);
}
export function positionFromKey(value:number,key:string,rtl:boolean,shift=false):number|null {
 const step=shift?10:1;
 const delta:Record<string,number>={ArrowRight:rtl?-step:step,ArrowLeft:rtl?step:-step,ArrowUp:step,ArrowDown:-step};
 if(key==='Home')return 0;
 if(key==='End')return 100;
 if(!(key in delta))return null;
 return Math.max(0,Math.min(100,value+delta[key]));
}
