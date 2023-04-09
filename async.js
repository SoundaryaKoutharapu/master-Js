// async  = makes a function return a promise



async function functionLoaded()
{
    let fileLoad = true;
    if(fileLoad)
    {
        return "File has Loaded";
    }
    else
    {
       throw "File has not loaded";
    }
}

functionLoaded().then((value) => console.log(value))
                .catch((e) => console.log(e));