import assert from 'node:assert/strict';
import { positionFromKey, positionFromPointer } from '../lib/comparison-control.ts';
// Pointer behavior is independent of rendering scale: verify the exact mobile and desktop gallery widths.
let assertions=0;
for(const width of [350,342.88]) for(const rtl of [false,true]) {
 for(const [fraction,expected] of [[0,0],[.25,25],[.5,50],[.75,75],[1,100]] as const) {
  assert.equal(positionFromPointer(20+width*fraction,20,width,rtl),rtl?100-expected:expected);assertions++;
 }
 assert.equal(positionFromPointer(-100,20,width,rtl),rtl?100:0);assertions++;
 assert.equal(positionFromPointer(2000,20,width,rtl),rtl?0:100);assertions++;
 assert.equal(positionFromKey(50,'ArrowRight',rtl),rtl?49:51);assertions++;
 assert.equal(positionFromKey(50,'ArrowLeft',rtl,true),rtl?60:40);assertions++;
 for(const value of [0,50,100]) {
  assert.equal(positionFromKey(value,'Home',rtl),0);assertions++;
  assert.equal(positionFromKey(value,'End',rtl),100);assertions++;
 }
 assert.equal(positionFromKey(100,'ArrowUp',rtl),100);assertions++;
 assert.equal(positionFromKey(0,'ArrowDown',rtl),0);assertions++;
 assert.equal(positionFromKey(50,'Tab',rtl),null);assertions++;
}
console.log(`${assertions} comparison control assertions passed for RTL/LTR at mobile and desktop gallery widths.`);
