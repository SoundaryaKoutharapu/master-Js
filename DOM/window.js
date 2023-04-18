/*
    Window = interface used to talk to the web browser
    the DOM is a property of window
*/

console.dir(window);


console.log(window.innerHeight);
console.log(window.innerWidth);


console.log(window.outerWidth);
console.log(window.outerHeight);


console.log(window.screenX);
console.log(window.screenY);


console.log(window.location.href);
window.location.href = "http://google.com";
console.log(window.location.hostname);
console.log(window.location.pathname);


const button = document.getElementById("btn");
button.addEventListener("click", ()=> window.open("http://google.com"));
button.addEventListener("click", ()=> window.close());
button.addEventListener("click", ()=> window.print());


window.alert("you are in danger");
window.confirm("say yes or no");
let age  = window.prompt();
if(age<18)
{
    window.alert("you must be 18+ to visit this page");
    window.close();
}
