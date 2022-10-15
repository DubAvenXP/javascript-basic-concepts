
// Default params 1
function newUser(name, age, country, isStudent) {
    const name = name || 'Erick';
    const age = age || 27;
    const country = country || 'GT';
    const isStudent = isStudent || false;

    console.log(name, age, country, isStudent);
}

newUser();
newUser('Ricardo', 23, 'MX', true);



// Default params 2
function newUser2(name = 'Erick', age = 27, country = 'GT', isStudent = false) {
    console.log(name, age, country, isStudent);
}

newUser2();
newUser2('Rodrigo', 24, 'GT', false);



// TODO: Explain nullish coalescing operator


// Diferencia entre el operador OR y el Nullish coalescing
// 🔨 El operador OR (||) evalúa un valor falsey. 
// Un valor falsy es aquel que es falso en un contexto booleano, 
// estos son: 0, "" (string vacío), false, NaN, undefined o null.
// .
// Puede que recibas una variable con un valor falsy que necesites
//  asignarle a otra variable, que no sea null o undefined. 
//  Si evalúas con el operador OR, este lo cambiará, provocando un resultado erróneo.

const id = 0

const orId = id || "Sin id"
const nullishId = id ?? "Sin id"

console.log( orId ) //  'Sin id'
console.log( nullishId )  // 0