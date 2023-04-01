/* 
   array.filter() = creates a new array with all elements that pass the test
   provided by a function
*/

let ages = [12,45,67,23,17,15]

let adult = ages.filter(adults);
let kid = ages.filter(kids);

adult.forEach(print);
kid.forEach(print);

function adults(input)
{
    return input>=18;
}

function kids(input)
{
    return input<=18;
}

function print(output)
{
    console.log(output);
}