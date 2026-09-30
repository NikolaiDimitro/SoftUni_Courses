function lowerOrUpper(letter) {

    let asciiValues = letter.charCodeAt();

    if (asciiValues >= 65 && asciiValues <= 90) {

        console.log('upper-case');

    } else {

        console.log('lower-case');

    }
}
lowerOrUpper('L');
lowerOrUpper('f');