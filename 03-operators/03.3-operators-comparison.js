// Comparison operators

// Equal
// Returns true if the operands are equal.	

console.log(1 == 1); // true
console.log(1 == "1"); // true
console.log(null == undefined); // true
console.log(1 == true); // true
console.log(0 == false); // true
console.log(0 == ""); // true
console.log(0 == "0"); // true

// Not equal
// Returns true if the operands are not equal.

console.log(1 != 1); // false
console.log(1 != "1"); // false
console.log(null != undefined); // false

// Strict equal
// Returns true if the operands are equal and of the same type.

const x = 1;
const y = "1";

console.log(x == y); // false
console.log(x == true); // false
console.log(x == {}); // false
console.log(x == []); // false
console.log(x == null); // false
console.log(x == undefined); // false


// Strict not equal
// Returns true if the operands are of the same type but not equal, or are of different type.

const a = 1;
const b = "1";

console.log(x!= y); // true
console.log(x!= true); // true
console.log(x!= {}); // true
console.log(x!= []); // true


// Greater than
// Returns true if the left operand is greater than the right operand.

console.log(1 > 1); // false
console.log(1 > "1"); // false
console.log("2" > 1); // true
console.log(null > undefined); // false
console.log(1 > true); // false

// greater than or equal
// Returns true if the left operand is greater than or equal to the right operand.

console.log(1 >= 1); // true
console.log(1 >= "1"); // true
console.log("2" >= 1); // true

// Less than
// Returns true if the left operand is less than the right operand.

console.log(1 < 1); // false
console.log(1 < "1"); // false
console.log("2" < 1); // false
console.log(0 < 1); // false


// Less than or equal
// Returns true if the left operand is less than or equal to the right operand.

console.log(1 <= 1); // true
console.log(1 <= "1"); // true
console.log("2" <= 1); // false
console.log(0 <= 1); // true
