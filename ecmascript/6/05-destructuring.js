// ========= Destructuring ========= 

// Arrays destructuring
let fruits = ["apple", "banana", "orange", "strawberry", "kiwi", "mango"];
let [a, b, c] = fruits;

// Destructuring arrays with rest
let [d, ...e] = fruits;

// Destructuring arrays with indexes
let { 0: fruit1, 2: fruit2, ...restOfFruits } = fruits;
console.log(fruit1, fruit2, restOfFruits);




// Objects destructuring

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

// Destructuring objects
const { firstName, lastName, ...restOfPersonAttrs } = person;

// Destructuring objects with aliases
const { firstName: name, lastName: surname, ...restOfPersonAttrs2 } = person;

// Destructuring objects with nested objects
const { location: { country, city, building: { name: buildingName } } } = product;

