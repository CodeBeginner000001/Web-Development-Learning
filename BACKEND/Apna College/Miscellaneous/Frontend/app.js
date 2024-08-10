let arr = [1,2,3]
arr.sayHello =()=>{
    console.log("Hello,I am ...")
}

// function personMaker(name,age){
//     const person={
//         name:name,
//         age:age,
//         talk(){
//             console.log(`My name is ${this.name}`);
//         }
//     }
//     return person;
// }
// //drawback hai factory function ki talk ka function ki copy create ho rahi dono ka liye separtely.
// // using this we have reduced the number of code lines and complexity but memory is still being used as per the number of times it
// // is called.
// let p1 = personMaker("Sneha",20) // talk copy
// let p2 = personMaker("Anchal",20) //talk copy

// constructor - doesn't return anything and starts with captial letter
function personMaker(name,age){
    this.name = name;
    this.age = age;
    console.log(this);
}
personMaker.prototype.talk = function(){
    console.log(`Hi, My name is ${this.name}`);
}
let p1 = new personMaker("Sneha",20)    
let p2 = new personMaker("Anchal",20)
p1.talk() //Hi, My name is Sneha
p2.talk() //Hi, My name is Anchal
p1.talk===p2.talk
// console.log(p1.talk===p2.talk) //true

/* A better way of performing the same operations as mention above i.e., Constructor section
we can use class for daily use bases.
*/

class Person{
    constructor(name,age){
        console.log("Parent constructor");
        this.name  =name;
        this.age = age;
    }
    talk(){
        console.log(`Hi,I am ${this.name}`);
    }
}

let p3 = new Person("Sneha",24);  
let p4 = new Person("Anchal",20);
p3.talk() //Hi,I am Sneha
p4.talk() //Hi,I am Anchal
p3.talk===p4.talk
// console.log(p3.talk===p4.talk) //true


// USing inheritance
class Student extends Person{
    constructor(name,age,marks){
        console.log("student constructor");
        super(name,age); //Parent constructor being called
        this.marks = marks;
    }
}
class Teacher extends Person{
    constructor(name,age,subject){
        console.log("Teacher constructor")
        super(name,age);  // parent constructor being called
        this.subject = subject;
    }
}

class Mammal { //base class //parent class
    constructor(name){
        this.name = name;
        this.type = "Warm-Blooded"
    }
    eat(){
        console.log("I am eating.....")
    }
}
class Dog extends Mammal{  // child class
    constructor(name){
        super(name);
    }
    bark(){
        console.log("Woof woof....");
    }  
    eat()
    {
        console.log("Dog is Eating...")
    }
}

class Cat extends Mammal{ // child class
    constructor(name){
        super(name);
    }
    meow(){
        console.log("Meow meow.....");
    }
}