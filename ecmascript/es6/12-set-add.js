const array = [1, 1, 2, 2, 3, 4, 4, 5]

const sinRepetidos = [ ... new Set(array)]
console.log(sinRepetidos)

// Cómo quitar los elementos repetidos en una sola línea
// 👨‍💻 Para crear un array sin elementos repetidos, podemos utilizar Set y el operador de propagación de la siguiente manera:
// https://javascript.plainenglish.io/understanding-the-set-object-in-javascript-381aa5f5c43a


// The set object in JavaScript is an ES6 feature that 
// lets you store unique values, primitives, or object references. 
// The Set objects are collections of values. 
// You can iterate through the elements of a set in insertion order. 
// A value in the Set may only occur once.

// const array = [1, 1, 2, 2, 3, 4, 4, 5]
// // 1. Convertir de Array a Set
// const set = newSet(array) // Set(5) {1, 2, 3, 4, 5}
// // 2. Convertir de Set a Array
// const arraySinRep = Array.from(set) // [1, 2, 3, 4, 5]
// // 3. Propagar los elementos del Array dentro de otro Array
// const sinRepetidos = [ ...arraySinRep] // [1, 2, 3, 4, 5]