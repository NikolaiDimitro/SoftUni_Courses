function revealWords(strWithWords, sentence) {

    let words = strWithWords.split(', ');
    let newSentence

    for (let word of words) {

        let length = word.length;
        let stars = '*'.repeat(length);

        newSentence = sentence.replace(stars, word);
        sentence = newSentence

    }

    console.log(newSentence);

}
revealWords('great', 'softuni is ***** place for learning new programming languages');
revealWords('great, learning', 'softuni is ***** place for ******** new programming languages');