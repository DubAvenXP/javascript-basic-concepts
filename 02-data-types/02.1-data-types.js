// Primitive

// Important: primitives are data that is not an object and has no methods

// Primitives have no methods but still behave as if they do. 
// When properties are accessed on primitives, JavaScript auto-boxes 
// the value into a wrapper object and accesses the property 
// on that object instead.

// String
const firstName = 'John Doe';
console.log(typeof firstName);

// Number
const age = 45;
const myBudget = 45.5;
console.log(typeof myBudget);
console.log(typeof age);

// Boolean
const hasKids = true;
console.log(typeof hasKids);

// Null
// Null is an assignment value. It can be assigned to a variable as a representation of no value.
const car = null;
console.log(typeof car);

// Undefined
// Undefined is a variable that has not been assigned a value.
let test;
console.log(typeof test);

// BigInt
const bigInt = 1234567890123456789012345678901234567890n;
console.log(typeof bigInt);

// Symbol
const sym = Symbol();
console.log(typeof sym);


// Objects

// An object is a collection of properties, and a property 
// is an association between a name (or key) and a value. 
// A property's value can be a function, in which case the 
// property is known as a method.

// Object literal
const address = {
    city: 'Miami',
    state: 'FL',
    my_undefined: undefined,
    my_null: null,
    my_function: function() {},
    my_array: [1, 2, 3],
}
console.log(typeof address);

//Arrays
const hobbies = ['movies', 'music'];
console.log(typeof hobbies);

// Date
const today = new Date();
console.log(today);
console.log(typeof today);

// Function
function add(a, b) {
    return a + b;
}
console.log(typeof add);

