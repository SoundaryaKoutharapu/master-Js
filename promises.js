/*
   promise = object that encapsulates the result of an asynchronous operation
              let asynchronous methods return values like synchronous methods
              "I promise to return something in future"  

              the STATE is 'pending' then: 'fulfilled' or 'rejected'
              the RESULT is what can be returned
              2 parts producing & consuming
*/

/*
let fileLoaded = false;

// producing part
const promise = new Promise((resolve, reject) => 
{
    if(fileLoaded)
    {
        resolve("file loaded");
    }
    else
    {
        reject("file not loaded");
    }
});

console.time("loading time");
console.timeEnd("loading time");


// consuming part
promise.then((value) => console.log(value))
       .catch((e) => console.log(e));

*/


const promise = time => new Promise((resolve) => 
{
    setTimeout( resolve,time);
})


promise(10000).then( () => console.log("thanks for waiting..."));

