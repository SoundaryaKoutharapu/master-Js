/*
    nested functions = function inside another function
    outer functions have access to inner functions
    inner functions are hidden from outside the outer function
    used in closures
*/


// In this when login is called displayName and displaymsgs are displayed
// and also without calling login we can have access to displayName and displayMsgs functions


/* 
  let userName = "Hima";
  let msgs =  "6";

login();
displayName(userName);
displayMsgs(msgs);

function login()
{
  displayName(userName);
  displayMsgs(msgs);
}

function displayName(userName)
{
    console.log(`Hi!, welcome back ${userName}`);
}

function displayMsgs(msgs)
{
    console.log(`you have received ${msgs} new messages`)
}
*/


// But in this, we need to call login to access displayName and displayMsgs, we can't directly call them
// it adds data security

let userName = "Hima";
let msgs =  "6";

function login()
{
    displayName(userName);
    displayMsgs(msgs);
    function displayName(userName)
    {
    console.log(`Hi!, welcome back ${userName}`);
    }

    function displayMsgs(msgs)
    {
    console.log(`you have received ${msgs} new messages`)
    }
}

login();