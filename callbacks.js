/* 
    callback = a function passed an argument to another function
*/

/*
  ensures that a function is not going to run before a task is completed
  helps us develop asynchronous code
  (when one function has to wait for another function)
  that helps us to avoid errors and potential problems
  ex: wait for a file to load
*/ 


sum(2,3, display, displayDOM);

function sum(a,b, myFun,myFun2)
{
    let result = a+b;
    myFun(result);
    myFun2(result);

}
// display function
function display(output)
{
    console.log(output);
}
// displayDOM function
function displayDOM(output)
{
   document.getElementById("myLabel").innerHTML = output;
}





/*
let amount = sum(23,78,89);
display(amount);
displayDOM(amount);

// sum function
function sum(a,b,c)
{
   let total = a+b+c
    return total
}

// display function
function display(output)
{
    console.log(output);
}

//display Dom
function displayDOM(output)
{
   document.getElementById("myLabel").innerHTML = output;
}
*/
