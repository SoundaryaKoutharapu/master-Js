/*
1.onclick	        The user clicks on an element
2.onload            when browser loads it does something
3.onchange          when change occur, this message appear
4.onmousedown	    A mouse button is pressed over an element
5.onmouseout	    The mouse pointer moves out of an element
6.onmouseover	    The mouse pointer is moved over an element
7.onmouseup	    The mouse button is released over an element

8.oncontextmenu	    The user right-clicks on an element
9.ondblclick	    The user double-clicks on an element
10.onmouseenter	    The pointer is moved onto an element
11.onmouseleave	    The pointer is moved out of an element
12.onmousemove 	    The pointer is moving over an element
*/

function message()
{
window.prompt("enter name");
} 

function color()
{
  element.style.backgroundColor = "yellow";
} 

function color1()
{
  element1.style.backgroundColor = "red";
} 

 //  --- ONCLICK ---
 document.getElementById("button").onclick = function()
{
    alert("you are caught");
} 

const element = document.getElementById("button");
element.onclick = message;


//   --- Onload ---

const element = document.body;
element.onload = message;


//   --- OnChange ---

const element = document.getElementById("text");
element.onchange = message;


//   --- OnMouseOver---

const element = document.getElementById("myDiv");
element.onmouseover = color;


//   --- OnMouseOut---

const element1 = document.getElementById("myDiv");
element1.onmouseout= color1;


//   --- OnMouseup---

const element1 = document.getElementById("myDiv");
element1.onmouseup= color1;


//   --- OnMousedown---

const element = document.getElementById("myDiv");
element1.onmousedown= color;
