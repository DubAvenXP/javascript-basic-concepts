// For in

const products = [
    { name: "cucumber", type: "vegetable" },
    { name: "banana", type: "fruit" },
    { name: "celery", type: "vegetable" },
    { name: "orange", type: "fruit" },
    { name: "apple", type: "fruit" },
];

const person = {
    name: "John",
    age: 30,
}

// For in

// for in loop is used to iterate over objects
// for (variable in object) {
//     statement
// }

for (const key in person) {
    console.log(key);
    console.log(person[key]);
}

// Example 2
// forIn loop is used to iterate over arrays
for (const index in products) {
    console.log(products[index]);
}
