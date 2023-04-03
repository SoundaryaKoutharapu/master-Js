/*
arrow function = compact alternative to a traditional function
uses the symbol =>
*/

/*
const greeting = function()
{
    console.log("Hello!");
}
*/


/*

// arrow function - curly braces needed when there are more than 1 statement

// no arguments - paranthesis needed
const greeting = () => console.log("Hello!");
greeting();


//  one arguments - paranthesis not needed
const greet = (username) => console.log(`${username}`);
greet("Hello! Hima")


//  two or more arguments - paranthesis needed
const greeted = (username, wish) => console.log(`${username}, ${wish}`);
greeted("Hello! Hima Soundarya", "how r u")

*/

/*
const percent = (x,y) =>
{ 
return (x/y)*100;
}

console.log(`${percent(45,50)}`)
*/

/*
let grades = [100,45,23,89,76,98]

grades.sort(arrange);
grades.forEach(print);

function arrange(x,y)
{
    return x-y;
}

function print(output)
{
    console.log(output);
}
*/

let grades = [100,45,23,89,76,98]

grades.sort((x,y) => y-x )

grades.forEach((output)=> console.log(output));

// arguments on one side - some code to perform on other side
