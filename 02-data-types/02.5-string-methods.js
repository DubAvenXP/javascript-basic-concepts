
// String methods

const myFirstString = "Hello, World!";

// charAt gets the character at a specific index
console.log(myFirstString.charAt(0));

// indexOf returns the index of the first occurrence of the specified value.
console.log(myFirstString.indexOf('o'));

// lastIndexOf returns the last occurrence of the specified value
console.log(myFirstString.lastIndexOf('o'));

// slice can be used to extract a part of a string
console.log(myFirstString.slice(0, 5));

// substring returns a substring from start to end, excluding end. 
console.log(myFirstString.substring(0, 5));

// split can be used to split a string into an array of substrings
console.log(myFirstString.split(' '));

// replace substring with another substring
console.log(myFirstString.replace('Hello', 'Hi'));

// includes verifies if a string contains a substring
console.log(myFirstString.includes('Hello'));

// startsWith verifies if the string starts with the given string
console.log(myFirstString.startsWith('Hello'));

// endsWith verifies if the string ends with the given string
console.log(myFirstString.endsWith('Hello'));

// match is used to search a string for a match against any regular expression.
console.log(myFirstString.match(/Hello/g));

// repeat method can be used to repeat a string a specified number of times.
console.log(myFirstString.repeat(3));

// trim removes whitespace from the beginning and end of a string
console.log(myFirstString.trim());

// trimStart removes whitespace from the beginning of a string
console.log("     myFirstString".trimStart());

// trimEnd removes trailing whitespace from the end of a string.
console.log("myFirstString       ".trimEnd());

// padStart can be used to add text to the beginning of a string
console.log('ja'.padStart(20, 'ja'));

// padEnd can be used to add text to the end of a string
console.log(myFirstString.padEnd(15, 'ja'));

