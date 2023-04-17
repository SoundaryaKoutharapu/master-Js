const button = document.getElementById("btn");
const myDiv= document.getElementById("myDiv");

// simple slide animation
button.addEventListener("click", begin);

function begin()
{
   let timerid =  null;
    let x = 0;
    let y = 0;

   timerid =  setInterval(frame, 5);

   function frame()
   {
    if(x>=400 && y>=200)
    {
        clearInterval(timerid);
    }
    else
    {
        x+=1;
        myDiv.style.left = x + "px";
        myDiv.style.backgroundColor = "yellow";

        y+=1;
        myDiv.style.top = x + "px";
        myDiv.style.backgroundColor = "pink";
    }

   }
}

// Rotate animation
button.addEventListener("click", start);

function start()
{
   let timerid =  null;
    let degrees = 0;

   timerid =  setInterval(rotate, 5);

   function rotate()
   {
    if(degrees>=360)
    {
        clearInterval(timerid);
    }
    else
    {
        degrees+=2;
        
        // x-axis
        myDiv.style.transform = "rotateX("+degrees+"deg)";
        myDiv.style.backgroundColor = "pink";

        // y-axis
        myDiv.style.transform = "rotateY("+degrees+"deg)";
        myDiv.style.backgroundColor = "black";

        //z-axis
        myDiv.style.transform = "rotateZ("+degrees+"deg)";
        myDiv.style.backgroundColor = "orange";

    }

   }
}


// Scale animation
button.addEventListener("click", commence);

function commence()
{
    let timerid =  null;
    let scaleX = 1;
    let scaleY = 1;

   timerid =  setInterval(scale, 5);

   function scale()
   {
    //if(scaleX >=2 || scaleY>=2)
    if(scaleX <=0.2 || scaleY<=0.2)
    {
        clearInterval(timerid);
    }
    else
    {
        //scaleX+=0.03;  
        //scaleY+=0.03; 
        scaleX-=0.02;  
        scaleY-=0.02;  
        myDiv.style.backgroundColor = "magenta";
        myDiv.style.transform = "scale("+scaleX+", "+scaleY+")";
    }

   }
}


