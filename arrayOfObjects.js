
class Car
{
    constructor(model,release,color)
    {
        this.color = color;
        this.model = model;
        this.release = release;
    }

    drive()
    {
        console.log(`you are driving ${this.model}`);
    }
}


let car1 = new Car("suziki", 2027, "yellow")
let car2 = new Car("honda", 2827, "violet")
let car3 = new Car("lambo", 1560, "red")
let car4 = new Car("ferrai", 1960, "black")

let cars = [car1,car2,car3,car4];

console.log(cars[0])
console.log(cars[1])
console.log(cars[2])

console.log(cars[0].color)
console.log(cars[1].model)
console.log(cars[2].release)

car2.drive();
cars[2].drive();


display = (the_cars)=> console.log(the_cars);
cars.forEach(display)

startRace(cars);
function startRace(race_cars)
{
    for(let rcar of race_cars)
    {
        rcar.drive();
    }
}
