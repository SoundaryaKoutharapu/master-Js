

updateTime();

function updateTime()
{
   let date = new Date();
   document.getElementById("myLabel").innerHTML = formatClock(date);

function formatClock(date)
{
   let h = date.getHours();
   let m = date.getMinutes();
   let s = date.getSeconds(); 
   let amorpm = "AM";

   if(h>12)
   {
     h=h-12;
     amorpm = "PM";

   }

   h = h<10 ? "0" +h: h;
   m = m<10 ? "0" +m: m;
   s = s<10 ? "0" +s: s;


   return `${h}: ${m}: ${s} ${amorpm}`;
}  
   setInterval(updateTime,1000);
}

