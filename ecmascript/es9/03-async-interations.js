async function* gen() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(1);
    yield await Promise.resolve(1);
}

// Instance of AsyncGenerator
const genObject = gen();
genObject.next().then( value => console.log(value));
genObject.next().then( value => console.log(value));
genObject.next().then( value => console.log(value));
console.log("Hello!");

// Async function with "for await"
async function arrayOfNames(array) {
    for await (let value of array) {
        console.log(value);
    }
}

const names = arrayOfNames(["Alexa", "Oscar", "David"]);
console.log("After");