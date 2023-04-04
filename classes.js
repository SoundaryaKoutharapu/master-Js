/*
  class = a blueprint for creating objects
          define what properties and methods they have
          use a constructor for unique properties  
*/

let count = 0;
class Work
{
    
    lightOn()
    { 
        console.log("switch on") 
        count+=1;
        console.log(count) 
    }   

    lightOff()
    {
        console.log("switch off") 
        count-=1
        console.log(count) 

    }

}

const task = new Work();
const task1 = new Work();

task.lightOn();
task1.lightOff();
