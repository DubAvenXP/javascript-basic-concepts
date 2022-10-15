// Ya existía un método replace() , 
// sin embargo este método únicamente 
// cambiaba la primera coincidencia que 
// encontrara en el string.

const inputText = "If you're :) and you know it :clap your hands :clap :clap";

const emojiReplace = (text) => {
    let emojized = "";
    emojized = text.replaceAll(":)", "😀");
    emojized = emojized.replaceAll(":clap", "👏🏻");

    return emojized;
};

console.log(emojiReplace(inputText));
