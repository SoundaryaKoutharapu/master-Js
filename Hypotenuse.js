let a;
let b;
let c;

/*
 a = window.prompt("enter a");
b = window.prompt("enter b");

console.log(a);
console.log(b);

c = Math.sqrt(Math.pow(a,2)+Math.pow(b,2));

console.log(c);
*/

document.getElementById("sub_button").onclick = function()
{
    a = document.getElementById("atext").value;
    a = Number(a);
    console.log(a);

    b = document.getElementById("btext").value;
    b = Number(b);
    console.log(b);

    c = Math.sqrt(Math.pow(a,2)+Math.pow(b,2));

    document.getElementById("clabel").innerHTML = "Side C: "  +  c;
    console.log(c);
}