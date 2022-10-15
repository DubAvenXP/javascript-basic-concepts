try {
    hello();
} catch (error) {
    console.log(error);
}

try {
    otherFn();
} catch {
    console.log("error 2");
} finally {
    console.log("finally");
}

const hello = "hello";
console.log({hello});

