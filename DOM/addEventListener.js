/*
.addEventListener (event, function, useCapture)
You can add many event handlers to one element
Even the same event that invokes different functions
if two elements are taking same space and listenting to same element, you could specify which one is preferenced by using useCapture = true/false
*/


const innerDiv  = document.getElementById("innerDiv");
innerDiv.addEventListener("mouseover", changeToRed, true);
innerDiv.addEventListener("mouseout", changeToPink);

function changeToRed()
{
  //alert(`you are on ${this.id}`);
  this.style.backgroundColor = "Red";
}

function changeToPink()
{
this.style.backgroundColor = "Pink";
}


const outerDiv = document.getElementById("outerDiv");
outerDiv.addEventListener("mouseover", changeToRed);
outerDiv.addEventListener("mouseout", changeToPink);