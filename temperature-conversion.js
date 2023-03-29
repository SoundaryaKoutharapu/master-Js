
function toCelsius(temp)
{
    return (temp-32)*(5/9);
}

function toFahrenheit(temp)
{
    return(temp*5/9)+32;
}


document.getElementById("sub").onclick = function()
{
    let temp;

    if(document.getElementById("c").checked)
    {
        temp = document.getElementById("textBox").value
        temp = Number(temp)
        temp = toCelsius(temp)
        document.getElementById("else").innerHTML = Math.floor(temp) + "C"
        //console.log(Math.floor(temp));
    }

  else if(document.getElementById("f").checked)
  {
    temp = document.getElementById("textBox").value
    temp = Number(temp)
    temp = toFahrenheit(temp)
    document.getElementById("else").innerHTML = Math.floor(temp) + "f"
  }

  else
  {
     document.getElementById("else").innerHTML = "select one"
  }

}