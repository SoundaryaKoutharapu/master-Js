// AND - both condition must be true

// OR - either condition can be true

let temperature = window.prompt("enter temperature:");
let sunny = window.prompt("how much sunny");

if(temperature>0 && temperature <10 && sunny<20)
{
    console.log("it's so cool");
}
else if(temperature>10 || temperature <0 || sunny >50)
{
    console.log("can't stay");
} 
else
   console.log("weather is undefined");