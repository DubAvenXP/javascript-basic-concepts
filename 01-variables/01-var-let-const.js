// Var vs Let vs Const

//                   var         let        const
// Stored in 
// global scope?     Yes         No         No
//
// function scope?   Yes         Yes        Yes
//
// block scope?      No          Yes        Yes
//
// reassignable?     Yes         Yes        No
//
// redeclarable?     Yes         No         No
//
// hoisted?          Yes         No         No

// Const doesn't have setters, so it can't be reassigned
// Const variables are more efficient than let variables
// and more lightweight than var and let variables

var lastName = "Perez";
console.log(lastName);

firstName = "John";


let fruit = "Apple";
console.log(fruit);


const animal = "Dog"; 
console.log(animal);


if (true) {
    var lastName = "Garcia";
    console.log(lastName);
    let fruit = "Banana";
    console.log(fruit);
}

var firstName;

console.log(fruit);
console.log(lastName);
console.log(firstName);

console.log(phone)

var phone;







// console.log(x);                // undefined (note: not ReferenceError)
// console.log('still going...'); // still going...
// var x = 1;
// console.log(x);                // 1
// console.log('still going...'); // still going...