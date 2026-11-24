function lettersChangeNumbers(input) {

    let strings = input.split(' ').filter(x => x !== '');

    let totalSum = 0;

    for (let currentString of strings) {

        let firstLetter = currentString[0];
        let lastLetter = currentString[currentString.length - 1];

        let number = Number(currentString.slice(1, -1));

        let firstPosition = firstLetter.toLowerCase().charCodeAt(0) - 96;
        let lastPosition = lastLetter.toLowerCase().charCodeAt(0) - 96;

        if (firstLetter === firstLetter.toUpperCase()) {

            number /= firstPosition;
            
        } else {

            number *= firstPosition;

        }

        if (lastLetter === lastLetter.toUpperCase()) {

            number -= lastPosition;

        } else {

            number += lastPosition;

        }

        totalSum += number;

    }

    console.log(totalSum.toFixed(2));

}
lettersChangeNumbers('A12b s17G');
lettersChangeNumbers('P34562Z q2576f   H456z');
lettersChangeNumbers('a1A');