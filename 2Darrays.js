let fruits = ["apple","mango","banana","guava"]
let vegetables = ["tomato","potato","cabbage","onion"]
let meat = ["fish","chicken","eggs","beaf"]

let list = [fruits,vegetables,meat]

for(let firstList of list )
{
    for(let secList of list)
    {
    console.log(secList)
    }
}

list[0][1] = "oranges";
console.log(list);

list[1][2] = "carrots";
console.log(list);

list[2][3] = "steak"
console.log(list);