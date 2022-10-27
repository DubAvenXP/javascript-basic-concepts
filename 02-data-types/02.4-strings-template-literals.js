
// Template literals are enclosed by backticks (`) instead of quotes (' or ").

const firstName = 'John';
const lastName = 'Doe';

// Concatenation
const fullName = `${firstName} ${lastName}`;


const myHtml = `
    <ul>
        <li>Name: ${firstName}</li>
        <li>Last Name: ${lastName}</li>
    </ul>
`;

const getRandNum = () => {
    return Math.floor(Math.random() * 10) + 1;
}

const randNumber = `my random number is ${getRandNum()}`;