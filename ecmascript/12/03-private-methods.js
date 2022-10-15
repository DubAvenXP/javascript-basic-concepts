class Person {
    #dni = 12345678;
    
    #getDni() {
        return this.#dni;
    }

    public(valor) {
        console.log(valor);
    }
}

const alex = new Person();
alex.public("Hola"); // 'Hola'
// console.log(alex.#getDni());  
// alex.getDni();
