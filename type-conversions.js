
// Type conversions = change the datatype of a value to another (strign, numbers, booleans)

/* 

let candles  = window.prompt("how many candles you have.?");
console.log(candles);

*/

/*  
// to know datatype using typeOf

console.log(typeof candles);

candles = Number(candles);
console.log(typeof candles);
candles+=2;

console.log("you have", candles ,"candles")

*/

let x;
let y;
let z;
let v;

x = Number("3.14");
y = String(45678);
z = Boolean("hi");
v = Number("pizza"); // if you want to convert a non number into number type it will produce NAN

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
console.log(v,typeof v);