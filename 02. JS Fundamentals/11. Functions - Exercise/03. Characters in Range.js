function charactersInRange(char1, char2) {

    let asciiCodeOfChar1 = char1.charCodeAt();
    let asciiCodeOfChar2 = char2.charCodeAt();
    let print = '';

    if (asciiCodeOfChar1 >= asciiCodeOfChar2) {

        for (let i = asciiCodeOfChar2 + 1; i < asciiCodeOfChar1; i++) {

            print += String.fromCharCode(i) + ' ';

        }

    } else {

        for (let i = asciiCodeOfChar1 + 1; i < asciiCodeOfChar2; i++) {

            print += String.fromCharCode(i) + ' ';

        }
    }

    console.log(print);

}
charactersInRange('a', 'd');
charactersInRange('#', ':');
charactersInRange('C', '#');