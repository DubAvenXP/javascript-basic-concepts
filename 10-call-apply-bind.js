// This methods are part of the function prototype 

const person = {
    name: "Juan",
}

// this using call 
function sayHello() {
    console.log(`Hello, my name is ${this.name}`);
}


// sayHello.call(person);


function walk(destination, time) {
    console.log(`${this.name} is walking to ${destination} in ${time}`);
}

// using call with arguments
// walk.call(person, "Madrid", "1 hour");

// using apply
walk.apply(person, ["Madrid", "1 hour"]);

// using bind
// bind returns a new function with the context of the object
const newHello = sayHello.bind(person);
newHello();

// bind with arguments
const newWalk = walk.bind(person);
newWalk("Barcelona", "21 hours");

// this technique is called currying and is used to create new functions with a specific context
const newWalk2 = walk.bind(person, "Sevilla");
newWalk("21 hours");


const $buttons = document.querySelectorAll("button");

Array.prototype.forEach.call($buttons, ($button) => {
    console.log($button);
});

Array.from($buttons).forEach( $button  => {
    console.log($button);
})
