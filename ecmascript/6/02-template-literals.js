// Template literals are enclosed by the back-tick (` `)

// without this feature, we would have to use the + operator
// and escape characters to create multi-line strings

// Note: without this feature, we won't have jsx support

const hello = "Hello";
const world = "World";
const epicPhrase = hello + " " + world;
console.log(epicPhrase);

// Template literals (backticks)
const epicPhrase2 = `${hello} ${world}`;

// Multiline strings

// Conventional multiline string
const lorem = "I'am a multiline string \n" + "I'm a multiline string";

const loremIpsum = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
    veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim 
    ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
    consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
`;
