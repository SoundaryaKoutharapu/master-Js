// variable scope = where a variable is accessable

// let = variable are limites to blcok scope{}
// var = variables are limited to function(){}


/*let example

for(let i =0;i<=3; i++)
{
    console.log(i);
}

console.log(i);   ---gives error--- outside of block
*/


/* var example

function doSomething()
{
    for(var i =6; i<9; i++)
    {
        console.log(i);
    }
   
}
console.log(i);  --- gives error --- outside of function

*/

/* 

global variables  -- declared outside of function 
if GV is declared with var, var will change browser's window properties

let name = " hima"

var name = "hima"

that's why we prefer let over var

*/

