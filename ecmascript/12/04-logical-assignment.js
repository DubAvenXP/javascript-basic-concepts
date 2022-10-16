// Logical assignment operators

const myFunc = (myObj) => {
    // myObj.a = myObj.a || 1;
    myObj.a ||= 1;

    // myObj.b = myObj.b && 2;
    myObj.b &&= 2;

    // myObj.c = myObj.c ?? 3;
    myObj.c ??= 3;
    return myObj;
};

// const obj = myFunc({a: 0, b: 0, c: 0});
const obj = myFunc({ a: false, b: 8, c: false });

console.log(obj);


function example(opts) {
    // Ok, but could trigger setter.
    // opts.foo = opts.foo ?? "bar";
    opts.foo ??= "bar";

    // No setter, but 'feels wrong' to write.
    opts.baz ??= "qux";
    return opts;
}

const ex = example({ foo: "foo" });
console.log(ex);


// && operator returns the first falsy value or the last value if all are truthy
console.log("hola" && "mundo");
console.log(false && "mundo");

