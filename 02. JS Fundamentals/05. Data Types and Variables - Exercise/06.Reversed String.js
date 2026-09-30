function reversedString(str) {

    let newStr = '';

    for (let i = str.length - 1; i >= 0; i--) {

        newStr += str[i];

    }

    console.log(newStr);

}
reversedString('Information');
reversedString('star');
reversedString('racecar');