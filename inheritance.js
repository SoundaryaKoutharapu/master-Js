/* inheritance =  a child class can inherit all the properties and methods from another class */


class Animal
{
    alive = true;

    sleep = ()=> console.log(`${this.name} is sleeping`);

    eat = ()=> console.log(`${this.name} is eating`);
}



class Rabbit extends Animal
{
   
    name = "rabbit";

    jump = ()=> console.log(`${this.name} is jumping`);

}

class Sparrow extends Animal
{
    alive =  false;
    name = "sparrow";

    fly = ()=> console.log(`${this.name} is flying`);

}

class Fish extends Animal
{
   
    name = "fish";

   swim = ()=> console.log(`${this.name} is swimming`);

}


const rabbit = new Rabbit();
rabbit.jump();
rabbit.eat();
rabbit.sleep();

const fish = new Fish();
fish.swim();
fish.eat();
fish.sleep();

const spr = new Sparrow();
spr.fly();
spr.eat();
spr.sleep();

const animal = new Animal();

console.log(animal.alive);
console.log(spr.alive);


