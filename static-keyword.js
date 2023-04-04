/* 
        static  = belongs to class, not the objects
        a member - property/methods belongs to class
        properties: useful for caches, fixed-configuration
        methods: useful for utility functions
*/

class Car 
{
   static cars = 0;  // no object has ownership on this variable, share only one copy
    constructor(model)
    {
        this.model = model;
        Car.cars+=1;
    }

    static startRace()  // if we don't use staic, then any obj can access this method
    {
        console.log("3..2...1..Go!");
    }
}

const models_0  = new Car("BMW");
const models_1  = new Car("Honda");
const models_2  = new Car("Ferrai");
const models_3  = new Car("volksvogen");
const models_4  = new Car("Tesla");


 // console.log(models_1.cars)  - shows o/p = 1
// because each car object has it's own cars variable

console.log(Car.cars);

Car.startRace();
