function letterCombinations(beginLetter, endLetter, permeableLetter) {

    let asciiNumberForBeginLetter = beginLetter.charCodeAt();
    let asciiNumberForEndLetter = endLetter.charCodeAt();
    let asciiNumberForPermeableLetter = permeableLetter.charCodeAt();
    let str = ''
    let count = 0;

    for (let i = asciiNumberForBeginLetter; i <= asciiNumberForEndLetter; i++) {

        for (let k = asciiNumberForBeginLetter; k <= asciiNumberForEndLetter; k++) {

            for (let l = asciiNumberForBeginLetter; l <= asciiNumberForEndLetter; l++) {

                let firstLetter = String.fromCharCode(i);
                let secondLetter = String.fromCharCode(k);
                let thirdLetter = String.fromCharCode(l);

                if (i !== asciiNumberForPermeableLetter && k !== asciiNumberForPermeableLetter && l !== asciiNumberForPermeableLetter) {

                    str += `${firstLetter}${secondLetter}${thirdLetter} `
                    count++;

                }
            }
        }
    }

    str += count;
    console.log(str);

}
letterCombinations('a', 'c', 'b');
letterCombinations('f', 'k', 'h');
letterCombinations('a', 'c', 'z');