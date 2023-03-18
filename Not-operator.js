// NOT - used to reverse a condition boolean value

let temp = window.prompt("say the temperature")
let sunny = false;
let rainy = false;

if(temp>40 && !(sunny))
{
    console.log("It's hot outside");
}
else if(temp<10 && !(rainy))
{
    console.log("It's cold outside");
}
else
   console.log("it's lukewarm ")