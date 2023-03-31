/* spread operator = allows an iterable such as any array/string to be expanded
                     in places where zero or more arguments are expected
                     (unpacks the element) 
*/


/*
let arr = [12,34,78,90,15,90]
console.log(...arr);

let max = Math.max(...arr)
console.log(max)
*/

let class1 = ["ram", "krishna", "shiv", "narasimha", "varaha"]
let class2 = ["sita", "radha","parvathi","sridevi","lakshmi"]

//console.log(...class1)
//console.log(class2)

class1.push(...class2)
console.log(...class1)
