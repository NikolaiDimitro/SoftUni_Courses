function rightPlace(str, char, string) {

    let newStr = '';

    for (let i = 0; i <= str.length - 1; i++) {

        let current = str[i];

        if (current === '_') {

            newStr += char;

        } else {

            newStr += current;

        }
    }

    if (newStr === string) {

        console.log('Matched');

    } else {

        console.log('Not Matched');

    }
}
rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String');