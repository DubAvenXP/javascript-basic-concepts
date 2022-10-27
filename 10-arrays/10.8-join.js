const elements = [ 'Fire', 'Water', 'Earth', 'Air' ];

let rtaFinal = ''
const separator = ','

for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    if (i === elements.length - 1) {
        rtaFinal += element;
    } else {
        rtaFinal = rtaFinal + element + separator;
    }
}


const joined = elements.join('_');

console.log(rtaFinal);
console.log(joined);


const title = 'Curso de manipulacion de arrays';
const url = title.split(' ').join('-').toLowerCase();
console.log(url);
