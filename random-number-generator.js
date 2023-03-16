// to generate a random number use math.random
// math.floor(math.random)*num, here num = end 
// random num generated below that number.
// like if it is 6, then random number genarates between 0 to 5



document.getElementById("roll").onclick = function()
{
    var p = Math.floor(Math.random()*10);
    var q = Math.floor(Math.random()*10);
    var r = Math.floor(Math.random()*10);

    document.getElementById("plabel").innerHTML = p;
    document.getElementById("qlabel").innerHTML = q;
    document.getElementById("rlabel").innerHTML = r;

}


   