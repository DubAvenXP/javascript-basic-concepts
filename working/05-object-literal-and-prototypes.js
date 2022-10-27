const natalia = {
    name: 'Natalia',
    age: 25,
    cursosAprobados: [
        'HTML',
        'CSS',
        'JS',
    ],
    aprobarCurso(curso) {
        this.cursosAprobados.push(curso);
    }
}

// Hacer que Natalia apruebe otro curso
natalia.aprobarCurso('NodeJS');

//Prototipos
function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    // this.aprobarCurso = function (curso) {
    //     this.cursosAprobados.push(curso);
    // }
}

Student.prototype.aprobarCurso = function (curso) {
    this.cursosAprobados.push(curso);
}

const juanita = new Student('Juanita', 25, ['HTML', 'CSS']);


// Prototipos con la sintaxis de clases
class Student2 {
    constructor({name, age, cursosAprobados = []}) {
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }

    aprobarCurso(curso) {
        this.cursosAprobados.push(curso);
    }
}

const data = {
    name: 'Maria',
    age: 25,
    cursosAprobados: ['HTML', 'CSS']
}

const maria = new Student2(data);
maria.aprobarCurso('JS');