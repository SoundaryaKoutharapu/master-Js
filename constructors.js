/*
   constructor = a special method of a class
   accepts arguments and assigns properties
*/

class Student
{
    constructor(name,age,cgpa)
    {
        this.name = name;
        this.age = age;
        this.cgpa = cgpa;
    }

    study()
    {
        console.log(`${this.name} is studying`);
    }
}

const student_1 = new Student("Hima",22,8.12);
const student_2 = new Student("soundarya",20,8.8);

console.log(student_1);
console.log(student_1.name);
console.log(student_1.age);
console.log(student_1.cgpa);
student_1.study();


console.log(student_2);
console.log(student_2.name);
console.log(student_2.age);
console.log(student_2.cgpa);
student_2.study();