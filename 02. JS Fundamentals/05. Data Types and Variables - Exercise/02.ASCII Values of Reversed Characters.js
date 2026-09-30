function asciiValuesOfReversedCharacter(char1, char2, char3) {

    let printReversedChar = `${char3}${char2}${char1}`;
    let asciiValueOfChar1 = char1.charCodeAt();
    let asciiValueOfChar2 = char2.charCodeAt();
    let asciiValueOfChar3 = char3.charCodeAt();
    let printASCIIValues = `${asciiValueOfChar3} ${asciiValueOfChar2} ${asciiValueOfChar1}`;

    console.log(printReversedChar);
    console.log(printASCIIValues);

}
asciiValuesOfReversedCharacter('a', 'b', 'c');
asciiValuesOfReversedCharacter('%', '2', 'o');
asciiValuesOfReversedCharacter('1', '5', 'p');