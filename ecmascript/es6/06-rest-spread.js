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

const genre = "Male";

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
        },
    },
};

// Rest operator in functions
const printInfo = (firstName, lastName, ...restOfInfo) => {
    console.log(restOfInfo);
};

printInfo("Erick", "Wendel", 27, "GT", false);

// Copy a simple object with spread operator
const copiedPerson = { ...person };
console.log(copiedPerson);

// create a new object with spread operator
const data = {
    ...person,
    genre,
}

// copy an array
const copyOfFruits = [...fruits];
console.log(copyOfFruits);

// Spread operator
const batmanAbilities = ["money", "intelligence", "fighting skills"];
const supermanAbilities = ["super strength", "flight", "x-ray vision"];

const abilities = [...batmanAbilities, ...supermanAbilities];
console.log(abilities);

const myAbilities = [...batmanAbilities, "super speed"];
console.log(myAbilities);

// ❌ Bad
// function hola (first, ...rest, last) {}
// SyntaxError: Rest element must be last element.
