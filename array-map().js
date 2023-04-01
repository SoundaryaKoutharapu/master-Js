/*
    array.map() = executes a provided callback function
    once for each array element and creates a new array
*/

let numbers = [1,2,3,4,5];
let map = numbers.map(square);
let cube = numbers.map(cubes);
map.forEach(print);
cube.forEach(print);

function square(num)
{
   return Math.pow(num,2);
}

function print(ele)
{
    console.log(ele);
}

function cubes(num)
{
   return Math.pow(num,3);
}