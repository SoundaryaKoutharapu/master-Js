/*
       add or change HTML element
       2 ways to add text 
          .innerHTML  (Vulnerable to XSS attacks)
          .textContent (more Secure) 
*/

const nameTag =  document.createElement("h4");
nameTag.innerHTML = " Hello ";
document.body.append(nameTag);


// Adding element to unorder list
const myList = document.querySelector("#fruits");
list = document.createElement("li");
list.textContent = "Sapota";
myList.append(list);

//to append as a first element
myList.prepend(list);    

// to add in a particular position
myList.insertBefore(list, myList.getElementsByTagName("li")[1]);

