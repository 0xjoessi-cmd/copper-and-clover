import {RECIPES} from './recipes.js';
export function createOrders(seed=1){let s=(seed>>>0)||1;const rnd=()=>{s=(1664525*s+1013904223)>>>0;return s/4294967296};return{rnd,next(level){const r=RECIPES[Math.floor(rnd()*Math.min(RECIPES.length,3+level))];return{recipe:r,remaining:r.time+Math.max(0,level-1)*3,id:s}}}}
