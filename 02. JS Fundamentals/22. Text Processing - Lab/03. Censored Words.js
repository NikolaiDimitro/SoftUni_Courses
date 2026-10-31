function censoredWords(sentence, word) {

    let censored = sentence.replace(word, repeat(word));

    while (censored.includes(word)) {

        censored = censored.replace(word, repeat(word));

    }

    function repeat(word) {

        let length = word.length;

        return '*'.repeat(length);

    }

    console.log(censored);

}
censoredWords('A small sentence with some words', 'small');
censoredWords('Find the hidden word', 'hidden');