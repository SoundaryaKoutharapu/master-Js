/*
    a small text file stored on your computer used to remember the information about user
    saved in name-value pairs.
*/

//inorder to check whether cookies enabled or not
console.log(navigator.cookieEnabled);


// To add a cookie
document.cookie = "firstName = Hima; expires = mon 10 Aug 2030 UTC; path=/";
document.cookie = "lastName = K; expires = mon 10 Aug 2000 GMT; path=/";
console.log(document.cookie);


setCookie("number", "1008", 230);
console.log(getCookie("number"));


//function to create a cookie
function setCookie(name, value, daystoLive)
{
    const date = new Date();
    date.setTime(date.getTime() + (daystoLive * 24 * 60 * 60 *1000));
    date.toUTCString();
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`; 
    console.log(document.cookie);
}


// Delete a Cookie
deleteCookie("number");
deleteCookie("hima");

function deleteCookie(name)
{
    setCookie(name, null,null);
}


// get cookie
function getCookie(name)
{
    const cDecoded = decodeURIComponent(document.cookie);
    console.log(cDecoded);
     const cArray =  cDecoded.split("; ")
     console.log(cArray);
     let result = null;

     cArray.forEach(element => {
        if(element.indexOf(name) == 0)
        {
            return element.substring(name.length+1);
        }
     })
     return result;
}


// using Dom
const first = document.getElementById("first");
const last = document.getElementById("last");
const submit = document.getElementById("submit");
const getCookies = document.getElementById("getCookies");

submit.addEventListener("click", ()=> 
{
    setCookie("firstName", first.value, 365);
    setCookie("lastName", last.value, 365);
})

getCookies.addEventListener("click", ()=> 
{
   
    first.value = getCookie("firstName");
    last.value = getCookie("lastName");
})