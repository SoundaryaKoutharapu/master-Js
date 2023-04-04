/*
    object = A group of properties and methods
    properties = what an object has
    mehtods = what an object can do
    use (.) to access properties/methods
*/

const car = 
{
   model: "suziki",
   color: "green",
   release_date: 2023,
   cost: "$90,00,000",

   drive: ()=> console.log(`you are driving ${car.model}`),

   brake: ()=> console.log(`you are using brakes of color ${car.color}`)
}

car.brake();
car.drive();
console.log(car.model);
console.log(car.color);
console.log(car.release_date);

