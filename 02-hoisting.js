
// hoisting
// var nameOfDog;
// console.log(nameOfDog);
// var nameOfDog = 'Bobby';
// console.log(nameOfDog);

myFunction();

function myFunction() {
    console.log(`My dog's name is ${nameOfDog}`);
}

var nameOfDog = 'Bobby';


// the function is hoisted to the top of the file

// var nameOfDog;
// function myFunction() {
//     console.log(`My dog's name is ${nameOfDog}`);
// }
// myFunction(); // My dog's name is undefined
// var nameOfDog = 'Bobby';