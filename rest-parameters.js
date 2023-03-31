/* 
    Rest parameters = represents an indifinite no. of parameters 
                      (packs arguments into an array)   
*/

let a = 2;
let b = 4;
let c = 6;
let d = 8;
let e = 10;
let f = 0;

console.log(sum(a,b,c,d,e,f));

/*
function sum1(a,b)
{
    return a+b;
}

function sum2(a,b,c)
{
    return a+b+c;
}

function sum3(a,b,c,d)
{
    return a+b+c+d;
}
*/

function sum(...numbers)    // rest parameters take indefinite no of parameters
{                           
   let sum =0;
   for(num of numbers)
   {
      sum+=num;
   }
   return sum;
}


function sum(x,y, ...numbers)    //  except x,y remaining sum will be displayed
{                                // incase of taking parameters like x,y then rest parameters placed at end               
   let sum =0;
   for(num of numbers)
   {
      sum+=num;
   }
   return sum;
}