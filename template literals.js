/* template literals  =  delimited with backtics (')
                        instead of double or single quotes
                        allows embedded variables and expression
*/

let name = "Hima";
let amount = 1223;
let change = 77;

/*
console.log("Hi", name);
console.log("your total bill is", amount);
console.log("take over the change",change);
*/

/*  using back-ticks

console.log(`Hi, ${name}`);
console.log(`your total bill is ,${amount}`);
console.log(`take over the change, ${change}`);

*/

let text = `Hello, ${name} <br>
          your total bill is, ${amount} <br>
          take over the change, ${change}`; 

         // console.log(text);

 document.getElementById("literals").innerHTML = text;