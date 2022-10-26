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



var lastName = "David"; // Declare and assign variables
lastName = "Perez"; // Reassign variables
console.log(lastName);


let fruit = "Apple"; // Declare and assign variables
fruit = "Orange"; // Reassign variables
console.log(fruit);

const animal = "Dog"; // Declare and assign variables
animal = "Cat"; // Reassign variables
console.log(animal);


const fruits = () => {
    // let and const are block scoped
    if (true) {
        var fruit1 = "Apple"; // function scope
        let fruit2 = "Orange"; // block scope
        const fruit3 = "Banana"; // block scope
    }

    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();