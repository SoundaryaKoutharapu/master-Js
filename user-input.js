// how to take input from user


/*  directly taking input from user using window prompt

let username = window.prompt("what's your name.?");
console.log(username)

*/


// using html elements
let username;
document.getElementById("myButton").onclick = function()
{
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("action").innerHTML=username;
}

