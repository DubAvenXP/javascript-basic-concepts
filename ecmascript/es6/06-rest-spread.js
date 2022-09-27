// ========= Destructuring ========= 

// Arrays destructuring
let fruits = ["apple", "banana", "orange", "strawberry", "kiwi", "mango"];

const person = {
    firstName: "Erick",
    lastName: "Wendel",
    age: 27,
    country: "GT",
    isStudent: false,
};

const product = {
    name: "TV",
    price: 1000,
    brand: "Sony",
    color: "Black",
    location: {
        country: "GT",
        city: "Guatemala City",
        building: {
            name: "Building 1",
            floor: 3,
        }
    },
    
}


// Rest operator in functions
const printInfo = (firstName, lastName, ...restOfInfo) => {
    console.log(restOfInfo);
};


// Copy a simple object with spread operator
const copiedPerson = { ...person };
console.log(copiedPerson);


// copy an array
let copyOfFruits = [...fruits];
console.log(copyOfFruits);


// Spread operator
const batmanAbilities = ["money", "intelligence", "fighting skills"];
const supermanAbilities = ["super strength", "flight", "x-ray vision"];


const abilities = [ ...batmanAbilities, ...supermanAbilities ];
console.log(abilities);


const myAbilities = [ ...batmanAbilities, "super speed" ];
console.log(myAbilities);



// ❌ Mal
// function hola (primero, ...rest, ultimo) {}
// SyntaxError: Rest element must be last element. 