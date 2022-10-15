// El método Promise.allSettled() devuelve una promesa
// que se cumple después de que todas las promesas dadas
// se hayan cumplido o rechazado, con una matriz de objetos
// que describen el resultado de cada promesa.

// Por lo general, se usa cuando tiene varias tareas asincrónicas
// que no dependen unas de otras para completarse correctamente,
// o si siempre desea saber el resultado de cada promesa.

// En comparación, la Promesa devuelta por Promise.all()
// puede ser más apropiada si las tareas dependen unas
// de otras/si desea rechazar inmediatamente cualquiera de ellas

const promise1 = new Promise((resolve, reject) => {
    resolve("Success");
});

const promise2 = new Promise((resolve, reject) => {
    reject("Error");
});

const promise3 = new Promise((resolve, reject) => {
    resolve("Success");
});


// El método Promise.all(iterable) devuelve una promesa 
// que termina correctamente cuando todas las promesas 
// en el argumento iterable han sido concluídas con éxito, 
// o bien rechaza la petición con el motivo pasado por la 
// primera promesa que es rechazada.
Promise.all([promise1, promise2, promise3])
    .then((values) => {
        console.log(values);
    })
    .catch((error) => {
        console.log(error);
    });

// Ejecuta todas las promesas sin importar si son rechazadas o no.
Promise.allSettled([promise1, promise2, promise3]).then((results) => {
    console.log(results);
});
