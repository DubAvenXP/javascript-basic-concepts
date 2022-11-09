// We can create our own forEach function
// and use it with any array

function myCustomForEach(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}

// We can use the function as a prototype
const myArray = [1, 2, 3, 4, 5];

// const myArray = { 0: 1, 1: 2, 2: 3, 3: 4, 4: 5, length: 5 };

// Here we are adding the function to the prototype of the array
myArray.myCustomForEach = myCustomForEach;

// const myArray = { 0: 1, 1: 2, 2: 3, 3: 4, 4: 5, length: 5, myCustomForEach: myCustomForEach };
myArray.myCustomForEach((item, index, array) => {
    console.log({item, index, array});
});

