// by using visibility, place should be reserved here

const button  = document.querySelector("#btn");
const image = document.querySelector("#img");

button.addEventListener("click", ()=> 
{
    if(image.style.visibility == "hidden")
    {
        image.style.visibility = "visible";
    }
    else
    {
        image.style.visibility ="hidden";
    }
})



