// This in global scope
console.log(this); 
console.log(globalThis); 
console.log(global); 
console.log(window); 

// This in a function
function whatIsThis() {
    return this;
}
console.log(whatIsThis());

// This in strict mode
function whatIsThisStrict() {
    "use strict";
    return this;
}

// console.log(whatIsThisStrict()); // undefined

// this in a context of any object
const person = {
    name: "Juan",
    age: 30,
    sayHello: function () {
        console.log(`Hello, my name is ${this.name}`);
    }
}

person.sayHello();

// this cuando sacamos una función de un objeto
const action = person.sayHello;
// action is not called inside a object context
action(); // Hello, my name is undefined

// this en un prototipo
function Person(name, age) {
    this.name = name;
    this.age = age;

    this.sayHello = function () {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const juan = new Person("Juan", 30);
juan.sayHello(); // Hello, my name is Juan