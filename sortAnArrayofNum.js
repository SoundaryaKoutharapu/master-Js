
let grades = [34,78,90,99,100,18];
let asc = grades.sort(ascending);
//let desc = grades.sort(descending);

asc.forEach(print);
//desc.forEach(print);

function ascending(x,y)
{
    return x-y;
} 
/*   
function descending(x,y)
{
    return y-x;
}  
*/
function print(output)
{
    console.log(output);
}