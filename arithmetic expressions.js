/* 
   arithmetic operation is a combination of
   operands (values, variables, etc)
   and operaors (+, -, /, %, *)
   that can be evaluated as to a value
   ex. (x = y+5);

*/

// arithmetic operations

let students  = 40;

students = students+5;
students = students*2;
students = students-10;
students = students/20;
let extrastudents = students%3;

console.log(students);


// augumented assignment operator  - used to reassign the variable

let marks = 90;

marks+=8;
marks/=6;
marks-=4;
marks*=2;

console.log(marks);

/*
    operator precedence
    1. paranthesis
    2.exponents
    3.multiplication & division
    4.addition & subtraction
*/

let count = 9 * (4+5) - 8/4;
console.log(count);
