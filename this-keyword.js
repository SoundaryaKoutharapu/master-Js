/*
  this = reference to a particular object
  the object depends on the immediate context
  refers the objects we are currently working with 
  //current instance
*/

// object 1
const car1 = 
{
   model: "suziki",
   color: "green",
   release_date: 2023,
   cost: "$90,00,000",

   drive: ()=> console.log(`you are driving ${this.model}`),

   brake: ()=> console.log(`you are using brakes of color ${this.color}`)
}

car1.brake();
car1.drive();
console.log(car1.model);   //this not working here
console.log(car1.color);
console.log(car1.release_date);



// object 2
const car2 = 
{
   model: "Honda",
   color: "Red",
   release_date: 2024,
   cost: "$60,00,000",

   drive: ()=> console.log(`you are driving ${this.model}`),
  // drive: ()=> console.log(`you are driving ${car2.model}`),  can also access like this
   brake: ()=> console.log(`you are using brakes of color ${this.color}`)
}

car2.brake();
car2.drive();
console.log(car2.model); //this not working here
console.log(car2.color);
console.log(car2.release_date);

// if we want to use 'this' outside of object, it refers to window propeties

this.name =" Mywindow";
console.log(this.name)


