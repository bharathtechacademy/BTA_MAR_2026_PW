//Importing duplicate functions and data 
import { add, sub, pi } from '../modules/1_named_exports.ts';
import {pi as PI,add as sum ,sub as subs} from './2_export_all.ts';

console.log(add(10, 5));
console.log(sub(10, 5));
console.log(pi);

console.log(PI);
console.log(sum(10, 5));
console.log(subs(10, 5));