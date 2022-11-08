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





var lastName = "Doe";
// lastName = "Smith";


// console.log(lastName);


// dont do this
// firstName = "John";


let fruit = "Apple";
// fruit = "Orange";


// we can't reassign a const variable
const animal = "Dog"; 

// if (true) {
//     var lastName = "Garcia";
//     console.log(lastName);

//     let fruit = "Banana";
//     console.log(fruit);
// }

// var firstName;


// console.log(lastName);
// console.log(phone)

// var phone;
