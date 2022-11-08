// Coercion is the way we can change a type of value to another, there are two types of coercion:

// Implicit coercion is when the language helps us to change the type of value.

// Explicit coercion is when we force to change the type of value.

// Implicit coercion

const a = 4 + "7";
console.log(a);

const b = 4 * "7";
console.log(b);

const c = 2 + true;
console.log(c);

const d = 2 * false;
console.log(d);

const e = 2 - "1";
console.log(e);




// const a = 4 + "7"; // 47 // + is used to concatenate strings
// const b = 4 * "7"; // 28 // * is used to multiply numbers
// const c = 2 + true; // 3 // true is converted to 1
// const d = 2 * false; // 0 // false is converted to 0
// const e = 2 - "1"; // 1 // - is used to subtract numbers*


// Explicit coercion
const f = Number("20"); // 20
const g = String(20); // "20"
const h = Boolean(20); // true
const i = Boolean(0); // false
const j = Boolean("Hello"); // true
const k = Boolean(""); // false
const l = 50 + ""; // "50"
const m = Number("fdsa") // NaN