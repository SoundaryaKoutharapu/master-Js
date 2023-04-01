/*
    array.reduce() = reduces an array to a single value
    sum up all the values of an array
*/

let prices = [56,78,12,90,34,789,1];
let total = prices.reduce(checkOut);
console.log(total);


function checkOut(total,element)
{
    return total+element;
}
