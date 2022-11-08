// Strings

// A string is a sequence of one or more characters 
// that may consist of letters, numbers, or symbols.

// Creating a string

const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;
const string4 = new String("A String object");

// Character access
console.log(string1[0]);
console.log(string1.charAt(0));

// toUpperCase and toLowerCase
console.log(string1.toUpperCase());
console.log(string1.toLowerCase());

// String primitives and String objects

const strPrim = "foo"; // A literal is a string primitive
const strPrim2 = String(1); // Coerced into the string primitive "1"
const strPrim3 = String(true); // Coerced into the string primitive "true"
const strObj = new String(strPrim); // String with new returns a string wrapper object.

console.log(typeof strPrim); // Logs "string"
console.log(typeof strPrim2); // Logs "string"
console.log(typeof strPrim3); // Logs "string"
console.log(typeof strObj); // Logs "object"


