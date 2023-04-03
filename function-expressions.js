/* 
   function expressions = function without a name (anonymous function) avoid polluting the global scope 
   with write it, then forget it
*/   

/*
let greeting = function()
{
    console.log("Hello!")
}
greeting();
*/

/*
let count =0;
function increase()
{
    count+=1;
    document.getElementById("myLabel").innerHTML = count;
}

function decrease()
{
    count-=1;
    document.getElementById("decrease").innerHTML = count;
}
*/


// no need to give unique function names

let count =0;
document.getElementById("increase").onclick = function()
{
    count+=1;
    document.getElementById("increase").innerHTML = count;
}

document.getElementById("decrease").onclick = function()
{
    count-=1;
    document.getElementById("decrease").innerHTML = count;
}

