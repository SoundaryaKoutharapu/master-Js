// switch = statement that examines a value for a match against many cases
// more efficient than if-else statements.

let grade = window.prompt("enter your grade");

switch(grade)
{
    case "A":
        console.log("first class");
        break;
    case "B":
        console.log("second class");
        break;
    case "C":
        console.log("third class");
        break;
        default:
        console.log("not the prefer context");
        break;
    case "D":
        console.log("failed");   
        break;  
    
}