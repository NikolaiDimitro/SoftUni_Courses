function valueOfAString(arr) {

    let str = arr[0];
    let typeOfLetters = arr[1];
    let sum = 0;

    if (typeOfLetters === 'LOWERCASE') {

        for (let letter of str) {

            let charCode = letter.charCodeAt(letter);

            if (charCode >= 97 && charCode <= 122) {

                sum += charCode;

            }
        }

    } else if (typeOfLetters === 'UPPERCASE') {

        for (let letter of str) {

            let charCode = letter.charCodeAt(letter);

            if (charCode >= 65 && charCode <= 90) {

                sum += charCode;

            }
        }
    }

    console.log(`The total sum is: ${sum}`);

}
valueOfAString(['HelloFromMyAwesomePROGRAM', 'LOWERCASE']);
valueOfAString(['AC/DC', 'UPPERCASE']);