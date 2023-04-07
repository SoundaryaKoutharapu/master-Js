/*
  SetTimeout() = invokes a function after a number of milliseconds 
                 asynchronous function (doesn't pause excution)   
*/

let item = "cryptocurrency";
let price = '$609';

let timer1 =  setTimeout(first, 2000, item, price);
let timer2 = setTimeout(second, 6000);
let timer3 = setTimeout(third, 10000);



function first(item,price)
{
    alert("you are going to do it");
}

function second()
{
    alert("you may fall or fail");
}

function third()
{
    alert(" But anyway, you gonna do it ");
}

document.getElementById("myButton").onclick = function()
{
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    alert("Yes!");
}