// 🔗 En objetos también existen formas para saber si existe una propiedad. Estos son:

// La palabra reservada in
// El método de objetos hasOwnProperty
// El método Object.hasOwn, que recibe el objeto y la propiedad a evaluar.

const words = { a: 1, b: 2, c: 3 }
const numbers = [1, 2, 3, 4, 5]


console.log(numbers.includes(3))

// forms to verify if the property exists in the object
"a" in words // true
words.hasOwnProperty("a") // true
Object.hasOwn(words, "a") // true