//terinary operator = shortcut for if/else statement
/*
     takes 3 operands
   1. a condition with ?
   2. expression if true
   3. expression if false

   condition? expriftrue: expriffalse

*/   

let adult = checkAge(14);
console.log(adult);

function checkAge(age)
{
    /*
    if(age>=18)
    return true;
    else
    return false;
    */

    return age>=18? true: false
}

checkWinner(false);

function checkWinner (win)
{
   win ? console.log("you won"): console.log("you lose");
}