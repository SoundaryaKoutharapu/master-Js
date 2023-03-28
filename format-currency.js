/* 
     tolocaleString() = returns a string with a language sensitive representation of this number
     
     number.toLocaleString(locale, {options});

     // locale = specify that language (undefined = default)
     // options = object with formatting options

*/

let number = 23490890.900;

/* 
number = number.toLocaleString("en-US");
number = number.toLocaleString("en-UK");  // english
number = number.toLocaleString("hi-IN"); // hindi
number = number.toLocaleString("de-DE"); // german
*/

/*
number = number.toLocaleString("hi-IN",{style:"currency", currency: "INR"});
number = number.toLocaleString("en-US",{style:"currency", currency: "USD"});
number = number.toLocaleString("de-DE",{style:"currency", currency: "EUR"});
*/
console.log(number);


// percentages
var num = 8;
num = num.toLocaleString(undefined, {style:"percent"});
console.log(num);


// UNITS
let units = 100;
units = units.toLocaleString(undefined, {style:"unit", unit:"celsius"});
console.log(units);