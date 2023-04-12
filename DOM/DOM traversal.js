/*
DOM TRAVERSAL = body -> parent
                |
               <ul>   
 previous       <li>Tomatoes</li>
 sibling        <li>Carrots</li>
                <li>Cabbage</li>   
               </ul>

children                              siblings 
                            
             <ul>   
                <li>Tomatoes</li>
  next          <li>Carrots</li>
  sibling       <li>Cabbage</li>
             </ul>
*/

// First Element Child
let element = document.body;
let child  = element.firstElementChild;
child.style.background = "Yellow";


// Next Element
let atom = document.querySelector("#fruits");
let sibling = atom.nextElementSibling;
sibling.style.color = "Pink";


// Previous Element
let a = document.querySelector("#fruits");
let prevsib = a.previousElementSibling;
prevsib.style.background = "lightGreen";


// Parent Element
let b = document.querySelector("#fruits");
let parent = b.parentElement;
parent.style.background = "Grey";


// first element in unorder list
let c = document.querySelector("#fruits");
let child_li = c.firstElementChild;
child_li.style.background = "Yellow";


// using children[] in unorder list
let d = document.querySelector("#fruits");
let child_li2 = d.children[2];
child_li2.style.background = "Orange";


// Array.from(.children)
let e = document.querySelector("#fruits");
let children = Array.from(e.children);
children.forEach(child_all => child_all.style.background = "Orange"); 

   



