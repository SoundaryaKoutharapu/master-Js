/*
To detect keypresses we can use window
*/


window.addEventListener("keydown", (event) => console.log(event.key));


const element = document.getElementById("myDiv");
window.addEventListener("keydown", move);
let x = 0;
let y = 0;

function move(event)
{
   if(event.key == "s")
   {
    element.style.backgroundColor = "Blue";
   }

   if(event.key == "h")
   {
    element.style.height = "200px";
   }

   switch(event.key)
   {
    case "ArrowDown": 
    y+=5;
    myDiv.style.top = y +"px";
    break;

    case "ArrowUp": 
    y-=5;
    myDiv.style.top = y +"px";
    break;

    case "ArrowLeft": 
    x-=5;
    myDiv.style.left = x +"px";
    break;

    case "ArrowRight": 
    x+=5;
    myDiv.style.left = x +"px";
    break;

    default:
        break;
   }
}