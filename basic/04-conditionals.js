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

// Short way to write if/else statements
if (firstName === "David") console.log("Hello David");
else console.log("Hello Stranger");



// Ternary Operator
const age = 18;
const canDrink = age >= 21 ? "You can drink" : "You cannot drink";
console.log(canDrink);

// Switch Statements

const day = "Monday";

switch (day) {
    case "Monday":
        console.log("Today is Monday");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    case "Wednesday":
        console.log("Today is Wednesday");
        break;
    case "Thursday":
        console.log("Today is Thursday");
        break;
    case "Friday":
        console.log("Today is Friday");
        break;
    case "Saturday":
        console.log("Today is Saturday");
        break;
    case "Sunday":
        console.log("Today is Sunday");
        break;
    default:
        console.log("Not a day");
}


// We can declare variables with coditional statements

const dog = "Scooby" || "Shaggy";
console.log(dog);

const cat = "" || "Garfield";
console.log(cat);

const bird = "Tweety" && "Sylvester"; // Only returns the last value
console.log(bird);
const bird2 = false && "Sylvester"; // Only returns the last value
console.log(bird2);


// Example with objects

const env = {
    NODE_ENV:  "development",
    PORT: 5050,
    DB_URL: "mongodb://localhost:27017",
    DB_NAME: "jdoe",
    DB_USER: "john",

}

const credentials = {
    NODE_ENV: env.NODE_ENV || "development",
    PORT: env.PORT || 3000,
    DB_URL: env.DB_URL || "mongodb://localhost:27017",
    DB_NAME: env.DB_NAME || "mydb",
    DB_USER: env.DB_USER || "admin",
}
