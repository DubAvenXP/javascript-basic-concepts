try {
    hello();
} catch (error) {
    console.log(error);
}

try {
    otherFn();
} catch {
    // optional catch binding
    console.log("error 2");
} finally {
    console.log("finally");
}

const hello = "hello";
console.log({hello});

