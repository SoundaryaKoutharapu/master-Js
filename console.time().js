/*
    console.time() = starts a timer you can use to track 
                     how long an operation takes 
                     give each timer a unique name   
*/


// start
console.time("response time");

window.prompt("enter your name");
//setTimeout(()=>console.log("hello"), 3000);

// end
console.timeEnd("response time");