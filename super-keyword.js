/*
    super = refers to the parent class when inheritance is used
    commonly used to invoke constructor of a parent class
*/

class Animal
{
    constructor(name,age)
    {
        this.name = name;
        this.age = age;
    }
}

class Rabbit extends Animal
{
    constructor(name,age,runSpeed)
    {
        super(name,age);
        this.runSpeed = runSpeed;
    }
}

class Sparrow extends Animal
{
    constructor(name,age,flySpeed)
    {
        super(name,age);
        this.flySpeed = flySpeed;
    }
}

class Fish extends Animal
{
    constructor(name,age,swimSpeed)
    {
        super(name,age);
        this.swimSpeed = swimSpeed;
    }
}

const rabbit = new Rabbit("harry", 2, 50);
console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);

const fish = new Fish("carl", 1, 20);
console.log(fish.name);
console.log(fish.age);
console.log(fish.swimSpeed);

const spr = new Sparrow("rony", 4, 70);
console.log(spr.name);
console.log(spr.age);
console.log(spr.flySpeed);
