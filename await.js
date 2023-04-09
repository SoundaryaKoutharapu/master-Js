/*
   await  = it makes an async function wait for a promise
*/

async function functionLoaded()
{
    let fileLoad = false;
    if(fileLoad)
    {
        return "File has Loaded";
    }
    else
    {
       throw "File has not loaded";
    }
}

async function startProcess()
{
    
    try {
        let message = await functionLoaded();   // await should be placed in aysnc function 
        console.log(message);
    } 
    catch (error) {
        console.log(error);
    }
}

startProcess();
/* functionLoaded().then((value) => console.log(value))  // instead of using this we can use await keyword - no need to use async with then and catch
                .catch((e) => console.log(e)); */ 