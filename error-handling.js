/*
  error  = object with a description of something went wrong

            can't open a file
            lose connection
            user types incorrect input
            type error
*/

/*
try
{
    console.lag();
}
catch(error)
{
    console.log(error);
}
*/

try 
{
    let x  = window.prompt("enter input")
    x = Number(x);  
    
    if(isNaN(x)) throw "that wasn't a number";
    if(x=="") throw "string is empty";


    console.log(x)
} 

catch (error) 
{
    console.log(error);
}

finally
{
    console.log("always excutes");
}
