/*  
   Synchronous code  =  In an ordered sequence.
                        step-by-step linear instructions
                        (start now. finish now)


    Asynchronous code = Out of sequence
                        Ex. Access a database
                        fectch a file
                        tasks that take time
                        (start now, finish sometime later)                    
*/

// sysnchronous
console.log("start");
console.log("This is synchronous");
console.log("end");

// asynchronous
console.log("start");
setInterval(()=> console.log("this is asynchronous"), 6000);
console.log("end");




