/*
    The date object is used to work with dates & times
*/

 let date = new Date();
//console.log(date);
//date = date.toLocaleString();

/*
// passing arguments to the date constructor

let date = new Date(0);   // 0 is the reference pointer
let date = new Date(1000000000000);
let date = new Date(2024, 7, 10, 5, 30, 30 ,9);
let date = new Date("August 10, 1999 05:30:50");

let year = date.getFullYear();
let dayOfMonth = date.getDate();
let dayOfWeek = date.getDay();
let month = date.getMonth();
let hrs = date.getHours();
let min = date.getMinutes();
let millisec = date.getMilliseconds();
*/

/*

   //set date/time

date.setFullYear(2025);
date.setMonth(7);
date.setDate(10);
date.setHours(5);
date.setMinutes(45);
date.setMilliseconds(66);

*/

function formatDate(date)
{
    let year = date.getFullYear();
    let month = date.getMonth();
    let dayOfWeek = date.getDay();
    let dayOfMonth = date.getDate();

    return `${dayOfMonth}/ ${year}/${month}`;
}


 function formatTime (date) 
 {
    let hrs = date.getHours();
    let min = date.getMinutes();
    let millisec = date.getMilliseconds();
    let am_pm = hrs>=12? "PM" : "AM";

    //hrs = (hrs%12) || 12;
    return `${hrs}: ${min}: ${millisec} ${am_pm}`;
 }



document.getElementById("myLabel").innerHTML = formatTime(date);
//document.getElementById("myLabel").innerHTML = dayOfMonth;
//document.getElementById("myLabel").innerHTML = year;
//document.getElementById("myLabel").innerHTML = dayOfWeek;
//document.getElementById("myLabel").innerHTML = month;
//document.getElementById("myLabel").innerHTML = hrs;
//document.getElementById("myLabel").innerHTML = min;
//document.getElementById("myLabel").innerHTML = millisec;






