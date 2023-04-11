// Get element by Name
let element =  document.getElementById("myTitle");
element.style.background =  "Seagreen";


let items = document.getElementsByName("items");
console.log(items);
console.log(items[1]);

items.forEach( (item) => {
    if(item.checked)
    {
        console.log(item.id);
    }
})


// Get element by Tag Name
let vegetables  = document.getElementsByTagName("li");
console.log(vegetables[0]);

vegetables[1].style.color = "Red";
vegetables[0].style.background = "lightgreen"


// Get element by Class Name
let desserts1 = document.getElementsByClassName("dessert");
console.log(desserts1[0]);
desserts1[1].style.background = "Red"
desserts1[0].style.background = "Green"



// Query Selector - can access an element by using either id name, class name, attribute, tag name
let element = document.querySelector("#myTitle");    // Name
element.style.background = "Yellow";

let element_1 = document.querySelector(".dessert");    // class name
element_1.style.background = "Pink";

let element_2 = document.querySelector("[for]");     // attribute
element_2.style.background = "Red";

let element_3 = document.querySelector("li");        //  Tag Name
element_3.style.background = "Red";



// Query selector ALL
let elements = document.querySelectorAll(".dessert");   // class 
elements.forEach( (element) => 
{
element.style.background = "Red"
})

let elements_1 = document.querySelectorAll("li");     // tag
elements_1.forEach( (element) => 
{
element.style.background = "Red"
})

let elements_2 = document.querySelectorAll("[for]");     // Name
elements_2.forEach( (element) => 
{
elements.style.background = "Red"
})

