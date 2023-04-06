/* 
    get = binds an object property to function 
    when that property is accessed
    it increases data security
    // property name and getter name cannot be same


    // set = binds an object property to a function
             when the property is assigned  a value   
*/

class Car
{
    constructor(speed)
    {
        this._speed = speed;   //property name precede with (_) underscore for naming convention, it represents protected property 
        this._gas = 45;
    }

    get speed()
    {
        return `${this._speed}km`;   // this protected property is read only , do not have direct access
    }

    get gas()
    {
        return `${this._gas}L (${this._gas/50 *100}%)`;
    }

    set gas(value)
    {

        if(value>100)
        {
         this._gas = value;
        }
         else if(value<0)
         {
            this._gas = 0;
         }
    }
}



const car = new Car(600);
// car._speed = 10010011;   but can access like this therotically, but dev know it is protected so don't mess with it up
// car.speed = 10010011;   doesn't display any change, can't changable property

car.gas = 747;
car.gas = -575;


console.log(car.speed);
console.log(car.gas);



