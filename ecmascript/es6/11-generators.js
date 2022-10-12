// Generators are functions that can be paused and resumed

// Si algun otro como yo, llegó a esta clase sin saber que es un generdor, aquí les dejaré dos enlaces que les podrán ayudar a comprender qué son, para qué se usan, y como usarlos.

// Explicación detallada de qué son, cómo se usan, para qué se usan: https://www.digitalocean.com/community/tutorials/understanding-generators-in-javascript-es

// Explicación de la implementación de los generadores: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator

// Bueno, yo lo veo así, los generators son un tipo de función nivel super saiyayin 2 que puede arrojar los valores de retorno según se le pida, decidí pasar otro array como parametro y no pensé que también me tomaría los valores de rotorno hechos en otro for


// La palabra clave **yield **detiene la ejecución de la función generadora y el valor de la expresión que sigue a la palabra clave yield se devuelve

// yield <expression>
// Si expression se omite, devuelve undefined en su lugar.

function* iterate(array)  {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(["Oscar", "Alexa", "David", "Gerlis"]);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value); 