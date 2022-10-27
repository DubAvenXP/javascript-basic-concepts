// Array is a special type of object
// that can store multiple values in a single variable


// Exists static and dynamic arrays 

// Static arrays are fixed size arrays. this makes them faster
// because they don't need to check if the array is full and 
// reserve more space for new elements

// Dynamic arrays are arrays that can grow and shrink in size
// JavaScript arrays are dynamic arrays by default
// In other languages, you have to assign a size to the array to 
// tell the compiler how much memory to allocate for the array


// Important: arrays reserve the double of slots than the number of elements
// This is done to improve performance when adding new elements to the array

// If we exceed the reserved slots, the array will be copied to a new array
// with double the size of the original array and the original array will be
// garbage collected

// For example, if we have an array with 10 elements, the array will reserve
// 20 slots. If we add a new element, the array will be copied to a new array
// with 40 slots and the original array will be garbage collected


// Ways to create an array

// 1. Using the Array constructor
const array1 = new Array(1, 2, 3, 4, 5);
console.log(array1);

// 2. Using the array literal
const array2 = [1, 2, 3, 4, 5];
console.log(array2);

// 3. Using the Array.of method
const array3 = Array.of(1, 2, 3, 4, 5);
console.log(array3);

// 4. Using the Array.from method
const array4 = Array.from(array3);
console.log(array4);

// 5. Using the Array.from method with a map function
const array5 = Array.from(array3, x => x * 2);
console.log(array5);
