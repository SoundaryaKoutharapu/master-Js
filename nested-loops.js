// nested loops = loop inside a loop
/*
let i, j;

for(i = 1; i<=4; i+=1)
{
   for(j = 1; j<=i; j++)
   {
    console.log("you can do it");
   }
}
*/

let symbol = window.prompt("enter a symbol");
let rows = window.prompt("enter row value");
let column = window.prompt("enter col value");

for(let i =1; i<=rows;i++)
{
   for(let j = 1; j<=column; j++)
   {
     document.getElementById("myRectangle").innerHTML +=symbol;
   }
     document.getElementById("myRectangle").innerHTML += "<br>";
}
