// El método at() recibe un valor numérico entero y 
// devuelve el elemento en esa posición, permitiendo 
// valores positivos y negativos. Los valores negativos 
// contarán desde el último elemento del array.

const array = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];

console.log(array[array.length - 1]);
console.log(array.at(-1));
console.log(array.at(0));