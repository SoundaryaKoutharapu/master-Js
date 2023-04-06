
class Car
{
    constructor(model,release,color)
    {
        this.color = color;
        this.model = model;
        this.release = release;
    }
}

let car1 = new Car("suziki", 2027, "yellow")
let car2 = new Car("honda", 2827, "violet")
let car3 = new Car("lambo", 1560, "red")


changeColor(car1, "blue")
display(car3);

    function display (car)
    {
    console.log(car.model);
    console.log(car.release);
    console.log(car.color);
    }

    function changeColor(car, color)
    {
        car.color = color;
    }

