// return = returns a value back to the place where a function is invoked

let area 
let width = window.prompt("enter width") ;
let height = window.prompt("enter height")  ;

area = getArea(width,height)
console.log(area);

function getArea(width,height)
{
    //let result = width*height
     return width*height
}