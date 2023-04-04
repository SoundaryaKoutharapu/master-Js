// Map = object that holds key-value pairs of any data type

const store = new Map([

    ["milk",30],
    ["bread",40],
    ["tea powder",60],
    ["garlic", 30],
    ["water", 5]

]);

// get method
let shoppingCart = 0;
shoppingCart += store.get("milk");
console.log(shoppingCart);

// set method
store.set("cups",40);

// has method
console.log(store.has("garlic"));

//size method
console.log(store.size);

// delete method
console.log(store.delete("water"));

store.forEach((y,x)=>console.log(`${x}, $${y}`));




