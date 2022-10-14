// Promises are used to handle asynchronous code

const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve("True");
        } else {
            const error = new Error("Error");
            reject(error);
        }
    });
};

anotherFunction()
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Finally");
    });
