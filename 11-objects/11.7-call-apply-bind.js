// This methods are part of the function prototype 

const person = {
    name: "Juan",
}

// ===================== Call =====================

// this using call 
// call do not create a new function, it just execute the function
function sayHello() {
    console.log(`Hello, my name is ${this.name}`);
}


// sayHello.call(person);


function walk(destination, time) {
    console.log(`${this.name} is walking to ${destination} in ${time}`);
}

// using call with arguments
// walk.call(person, "Madrid", "1 hour");


// ===================== Apply =====================

// using apply
// with apply we can pass an array of arguments
walk.apply(person, ["Madrid", "1 hour"]);


// ===================== Bind =====================

// using bind
// bind returns a new function with the context of the object

function sayGoodbye() {
    console.log(`Goodbye, my name is ${this.name}`);
}

function run(destination, time) {
    console.log(`${this.name} is walking to ${destination} in ${time}`);
}

const newHello = sayGoodbye.bind(person);

// bind with arguments
const myRunFunc = run.bind(person);
myRunFunc("Barcelona", "21 hours");

// this technique is called currying and is used to create new functions with a specific context
const myAlternativeRunFunc = run.bind(person, "Sevilla");
myAlternativeRunFunc("21 hours");


console.log("");
console.log("");


// Other example with array prototype

const myArray = {
    phrase: "Hello I'm an array"
}

Array.prototype.printSomenthingNew = function () {
    console.log(this.phrase);
}

Array.prototype.printSomenthingNew.call(myArray);
