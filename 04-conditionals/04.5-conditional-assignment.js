
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
