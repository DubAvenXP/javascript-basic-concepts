class Comment {
    constructor({ content, studentName, studentRole = "Estudiante" }) {
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0;
    }
    publish() {
        console.log(this.studentName + " (" + this.studentRole + ")");
        console.log(this.likes + " likes");
        console.log(this.content);
    }
}

function videoPlay(id) {
    const urlSecreta = "https://www.youtube.com/embed/" + id + "?autoplay=1";
    console.log('reproduciendo video ' + urlSecreta);
}

function videoStop(id) {
    const urlSecreta = "https://www.youtube.com/embed/" + id + "?autoplay=1";
    console.log('deteniendo video ' + urlSecreta);
}

export class PlatziClass {
    constructor({ name, videoID }) {
        this.name = name;
        this.videoID = videoID;
    }

    play() {
        videoPlay(this.videoID);
    }
    stop() {
        videoStop(this.videoID);
    }

}

class Course {
    constructor({ name, classes = [], isFree = false, lang = "spanish" }) {
        this._name = name;
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        value === '' ?
            console.log('El nombre del curso no puede estar vacío') :
            this._name = value;
    }
}

const basicProgramming = new Course({ name: 'BASIC PROGRAMMING' });
const html = new Course({ name: 'HTML' });
const css = new Course({ name: 'CSS' });
const js = new Course({ name: 'JS' });
const python = new Course({ name: 'PYTHON' });
const r = new Course({ name: 'R' });
const sql = new Course({ name: 'SQL' });
const cSharp = new Course({ name: 'C#' });
const unity = new Course({ name: 'UNITY', lang: 'english' });
const unrealEngine = new Course({ name: 'UNREAL ENGINE' });


class LearningPath {
    constructor({ name, description, courses = [] }) {
        this.name = name;
        this.description = description;
        this.courses = courses;
    }
}

const WebDevelopmentSchool = new LearningPath({
    name: 'Escuela de desarrollo Web',
    description: 'Cursos de Desarrollo Web',
    courses: [
        basicProgramming,
        html,
        css,
        js,
    ]
});

const DataScienceSchool = new LearningPath({
    name: 'Escuela de Data Science',
    description: 'Cursos de Data Science',
    courses: [
        basicProgramming,
        python,
        r,
        sql,
    ]
});

const VideogamesSchool = new LearningPath({
    name: 'Escuela de Videojuegos',
    description: 'Cursos de Videojuegos',
    courses: [
        basicProgramming,
        cSharp,
        unity,
        unrealEngine,
    ]
});

class Student {
    constructor({
        name,
        email,
        usename,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }) {
        this.name = name;
        this.email = email;
        this.usename = usename;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }

    publishComment(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
        });
        comment.publish();
    }
}

class FreeStudent extends Student {
    constructor(props) {
        super(props);
    }
    approvedCourse(newCourse) {
        if (newCourse.isFree) {
            this.approvedCourses.push(newCourse);
        } else {
            console.log('El curso no es gratis');
        }
    }
}
class BasicStudent extends Student {
    constructor(props) {
        super(props);
    }
    approvedCourse(newCourse) {
        if (newCourse.lang !== 'english') {
            this.approvedCourses.push(newCourse);
        } else {
            console.log('No puedes tomar cursos en ingles');
        }
    }
}
class ExpertStudent extends Student {
    constructor(props) {
        super(props);
    }
    approvedCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }
}
class TeacherStudent extends Student {
    constructor(props) {
        super(props);
    }
    approvedCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }
    publishComment(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRole: 'teacher',
        });
        comment.publish();
    }
}


const juan = new ExpertStudent({
    name: 'Juan',
    email: 'juan@email.com',
    usename: 'juanito',
    twitter: 'juanito_dev',
    instagram: 'juanito_dev',
    learningPaths: [WebDevelopmentSchool, DataScienceSchool],
});

const miguel = new BasicStudent({
    name: 'Miguel',
    email: 'miguel@email.com',
    usename: 'miguelito',
    twitter: 'miguelito_dev',
    instagram: 'miguelito_dev',
    learningPaths: [WebDevelopmentSchool],
});

const pedro = new FreeStudent({
    name: 'Pedro',
    email: 'pedro@email.com',
    usename: 'pedrito',
    twitter: 'pedrito_dev',
    instagram: 'pedrito_dev',
    learningPaths: [WebDevelopmentSchool, DataScienceSchool],
});

const freddy = new TeacherStudent({
    name: 'Freddy',
    email: 'freddy@email.com',
    usename: 'freddyito',
    twitter: 'freddyito_dev',
    instagram: 'freddyito_dev',
    learningPaths: [WebDevelopmentSchool, DataScienceSchool],
})

freddy.publishComment('Hola, estoy aprendiendo React');
pedro.publishComment('Hola, estoy aprendiendo React');