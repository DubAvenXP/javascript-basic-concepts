// https://sciter.com/anatomy-of-object-class-relationship-in-javascript/
// https://www.youtube.com/watch?v=R1LmvJ1_4QM&t=140s
// https://www.youtube.com/watch?v=byirHCoSPFY
// https://www.youtube.com/watch?v=bS71_W_BDFE&t=780s

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getInfo() {
        console.log(`My name is ${this.name}. I'm ${this.age} years old`);
    }
}

class Student extends Person {
    constructor(name, age, semester) {
        super(name, age);
        this.semester = semester;
    }

    getInfoStudent() {
        super.getInfo();
        console.log(`I'm in the ${this.semester} semester`);
    }

    /**
     * @param {String} semester
     */
    set semester(semester) {
        this.semester = semester;
    }

    get semester() {
        return this.semester;
    }
}

const person = new Person("Jesus", 27);
const student1 = new Student("Zajith", 27, 6);



student1.getInfoStudent();


person.getInfoStudent();
