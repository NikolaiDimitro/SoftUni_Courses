function streamOfLetters(arr) {

    let index = 0;
    let countForLetterC = 0;
    let countForLetterN = 0;
    let countForLette0 = 0;
    let word = '';
    let expression = '';

    while (arr[index] !== 'End') {

        if (countForLetterC === 1 && countForLetterN === 1 && countForLette0 === 1) {

            word += ' ';
            expression += word;
            word = '';
            countForLetterC = 0;
            countForLetterN = 0;
            countForLette0 = 0;

        }

        let current = arr[index];

        if (arr[index] === 'End') {

            break;

        }

        if (current.charCodeAt() >= 65 && current.charCodeAt() <= 90 || current.charCodeAt() >= 97 && current.charCodeAt() <= 122) {

            if (current.charCodeAt() === 99) {

                if (countForLetterC === 1) {

                    word += current;
                    index++;
                    continue;

                } else {

                    countForLetterC++;
                    index++
                    continue;

                }

            } else if (current.charCodeAt() === 110) {

                if (countForLetterN === 1) {

                    word += current;
                    index++;
                    continue;

                } else {

                    countForLetterN++;
                    index++;
                    continue;

                }

            } else if (current.charCodeAt() === 111) {

                if (countForLette0 === 1) {

                    word += current;
                    index++;
                    continue;

                } else {

                    countForLette0++;
                    index++;
                    continue;

                }
            }

            word += current;

        }

        index++;

        if (countForLetterC === 1 && countForLetterN === 1 && countForLette0 === 1) {

            word += ' ';
            expression += word;
            word = '';
            countForLetterC = 0;
            countForLetterN = 0;
            countForLette0 = 0;

        }
    }

    if (countForLetterC === 1 && countForLetterN === 1 && countForLette0 === 1) {

        word += ' ';
        expression += word;
        word = '';
        countForLetterC = 0;
        countForLetterN = 0;
        countForLette0 = 0;

    }

    console.log(expression);

}
streamOfLetters((["H", "n", "e", "l", "l", "o", "o", "c", "t", "c", "h", "o", "e", "r", "e", "n", "e", "End"]));
streamOfLetters((["%", "!", "c", "^", "B", "`", "o", "%", "o", "o", "M", ")", "{", "n", "\\", "A", "D", "End"]));
streamOfLetters(["o", "S", "%", "o", "l", "^", "v", "e", "c", "n", "&", "m", "e", "c", "o", "n", "End"]);