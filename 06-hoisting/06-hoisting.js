// JavaScript Hoisting refers to the process whereby the 
// interpreter appears to move the declaration of functions, 
// variables or classes to the top of their scope, prior to execution of the code.



// Being able to use a variable's value in its scope before the line it is declared. ("Value hoisting")

// Being able to reference a variable in its scope before the line it is declared, without 
// throwing a ReferenceError, but the value is always undefined. ("Declaration hoisting")

// The declaration of the variable causes behavior changes in its scope before the line 
// in which it is declared.











// hoisting
// var nameOfDog;
// console.log(nameOfDog);
// nameOfDog = 'Bobby';
// console.log(nameOfDog);

// move to the bottom
myFunction();
console.log(nameOfDog);

// hoisted
function myFunction() {
    console.log(`My dog's name is ${nameOfDog}`);
}

// hoisted
var nameOfDog = 'Bobby';


// the function is hoisted to the top of the file

// var nameOfDog;
// function myFunction() {
//     console.log(`My dog's name is ${nameOfDog}`);
// }
// myFunction(); // My dog's name is undefined
// var nameOfDog = 'Bobby';