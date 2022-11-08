// A JavaScript function is a block of code designed to perform a particular task.

// A JavaScript function is executed when "something" invokes it (calls it).





// Note 1: Variables can save any type of data like 
// strings, numbers, arrays, objects, functions, etc.

// Note 2: Hoisting is applied to declarative functions only

// Note 3: Declarative functions can be called before they are declared

// Note 4: Expressive functions can not be called before they are declared


// ==== Functions ====


// Declarative function
function doSomething() {
    console.log("do something");
}


// Expressive function (anonymous function)
const doSomething2 = function() {
    console.log("do something2");
}


// Arrow function
const doSomething3 = () => {
    console.log("do something3");
}


// Arrow functions
const multiplyWith2 = (number) => {
    return number * 2;
}

// Arrow function with implicit return
const multiplyWith3 = (number) => number * 3;


// Arrow functions with one parameter
const multiplyWith4 = number => number * 4;


// Arrow function that returns an object
const multiplyWith5 = number => ({ result: number * 5 });

