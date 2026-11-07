function stringSubstring(word, text) {

    text = text.split(' ');

    for (let part of text) {

        part = part.toLowerCase();

        if (part === word) {

            return console.log(word);

        }
    }

    console.log(`${word} not found!`);

}
stringSubstring('javascript', 'JavaScript is the best programming language');
stringSubstring('python', 'JavaScript is the best programming language');