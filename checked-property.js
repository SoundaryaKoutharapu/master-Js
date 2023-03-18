
/* 
document.getElementById("myButton").onclick = function()
{
    const myCheckBox = document.getElementById("myCheck")
      if(myCheckBox.checked)
      {
        console.log("you are subscribed")
      }
      else
      {
        console.log("you are NOT subscribed")
      }
}
*/

const visa = document.getElementById("visa");
const master = document.getElementById("masterCard");
const paypal = document.getElementById("paypal");

document.getElementById("myButton").onclick = function()
{
if(visa.checked)
{
  console.log("visa is checked");
}
else if(master.checked)
{
   console.log("mastercard is chaecked");
}
else if(paypal.checked)
{
console.log("paypal is checked");
}
else
console.log("you must select something");
}