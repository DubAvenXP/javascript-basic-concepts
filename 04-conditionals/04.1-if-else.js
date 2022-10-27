// Truthy and Falsy Values
// Falsy Values: false, 0, "", null, undefined, NaN
// Truthy Values: Anything that is not Falsy

// const myBoolean = true;
// const myNumber = 0;
const firstName = "David";
const myBoolean = Boolean(0);

console.log(myBoolean);

// Basic If/Else Statements
if (myBoolean) {
    console.log("This is true");
} else {
    console.log("This is false");
}


// Else If Statements
if (firstName === "David") {

    console.log("Hello David");

} else if (firstName === "John") {
    
    console.log("Hello John");

} else {
    
    console.log("Hello Stranger");
    
}

