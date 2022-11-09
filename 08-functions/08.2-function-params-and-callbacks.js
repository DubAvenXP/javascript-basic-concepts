// Params
function myFunction(a, b) {
    console.log(a + b);
}

// Arguments
// myFunction(1, 2);


// we can receive functions as params

// callback is a function that we pass as a param to another function
// and that function will be executed inside the function that receives the callback

function calculatesAnything(a, b, callback) {
    return callback(a, b);
}


// Callbacks



calculatesAnything(1, 2, (a, b) => a + b)
calculatesAnything(1, 2, (a, b) => a - b)
calculatesAnything(1, 2, (a, b) => a * b)
calculatesAnything(1, 2, (a, b) => a / b)



console.log(  calculatesAnything(1, 2, (a, b) => a + b)  );
console.log(  calculatesAnything(1, 2, (a, b) => a - b)  );
console.log(  calculatesAnything(1, 2, (a, b) => a * b)  );
console.log(  calculatesAnything(1, 2, (a, b) => a / b)  );




//  Other example with callbacks

// We can create our own forEach function
// and use it with any array

function myCustomForEach(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}

// We can use the function as a prototype
const myArray = [1, 2, 3, 4, 5];

// Here we are adding the function to the prototype of the array
myArray.myCustomForEach = myCustomForEach;

myArray.myCustomForEach((item, index, array) => {
    console.log({item, index, array});
});

