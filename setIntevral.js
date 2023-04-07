/*
    setInterval = invokes a function repeatedly after a number of milliseconds
    asynchronous function (doesn't pause execution)
*/

let count = 0;
let max = window.prompt("enter a number")
max = Number(max);
//console.log(`${y}`);

const timer = setInterval(first, 1000)


function first()
{
    count+=1;
    console.log(count);
    if((count>=max))
    {
        clearInterval(timer);
    }
}
