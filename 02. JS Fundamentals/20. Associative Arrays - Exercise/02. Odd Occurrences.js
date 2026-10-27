function oddOccurrences(str) {

    let wordObj = {};
    let wordArr = [];
    let arr = str.split(' ');

    for (let word of arr) {

        let currentWord = word.toLowerCase();

        if (!wordObj.hasOwnProperty(currentWord)) {

            wordObj[currentWord] = 1;

        } else {

            wordObj[currentWord]++;

        }
    }

    for (let word of arr) {

        let currentWord = word.toLowerCase();

        if (wordObj[currentWord] % 2 !== 0 && !wordArr.includes(currentWord)) {

            wordArr.push(currentWord);

        }
    }

    console.log(wordArr.join(' '));

}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');