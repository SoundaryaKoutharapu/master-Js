// array = think of it as a variable that can store multiple values

// declare & define
let fruits = ["apple", "banana", "mango","grapes"];
console.log(fruits)


// add element to last
fruits.push("lemon");
console.log(fruits);

// add element to first
fruits.unshift("coconunt");
console.log(fruits);


// remove element from last
fruits.pop();
console.log(fruits);

// remove element from first
fruits.shift()
console.log(fruits);

// length finding
len = fruits.length
console.log(len);

// to find index of element
index = fruits.indexOf("mango");
console.log(index);