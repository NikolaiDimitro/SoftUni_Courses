function pascalCaseSpliter(str) {

    let word = '';
    let wordArr = [];

    for (let letter of str) {

        if (letter === letter.toUpperCase() && word !== '') {

            wordArr.push(word);
            word = '';

        }

        word += letter;

    }

    wordArr.push(word);
    console.log(wordArr.join(', '));

}
pascalCaseSpliter('SplitMeIfYouCanHaHaYouCantOrYouCan');
pascalCaseSpliter('HoldTheDoor');
pascalCaseSpliter('ThisIsSoAnnoyingToDo');