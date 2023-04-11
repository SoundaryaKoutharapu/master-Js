/*
   The idea behind a module is that it's a file of reusable code
   We can import sections of pre-written code to use whenever
   Great for any general utility values an dfunctions
   Helps to make your code more reusable and maintainble
   THink of modules as seperate chapters of a book
*/

import { PI, getCircumference, getArea } from "./math_util.js";

// import * as MathUtil from "./math_util";

console.log(PI);

let Circumference = getCircumference(5);
console.log(Circumference);

let area = getArea(7);
console.log(area);

