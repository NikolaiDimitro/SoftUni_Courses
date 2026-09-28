function englishNameOfTheLastDigit(number) {

    let strOfNumber = `${number}`;
    let length = strOfNumber.length;
    let lastNumber = strOfNumber[length - 1];
    let nameOfNumbers = '';

    if (lastNumber === '1') {

        nameOfNumbers = 'one'

    } else if (lastNumber === '2') {

        nameOfNumbers = 'two';

    } else if (lastNumber === '3') {

        nameOfNumbers = 'three';

    } else if (lastNumber === '4') {

        nameOfNumbers = 'four';

    } else if (lastNumber === '5') {

        nameOfNumbers = 'five';

    } else if (lastNumber === '6') {

        nameOfNumbers = 'six';

    } else if (lastNumber === '7') {

        nameOfNumbers = 'seven';

    } else if (lastNumber === '8') {

        nameOfNumbers = 'eight';

    } else if (lastNumber === '9') {

        nameOfNumbers = 'nine';

    } else if (lastNumber === '0') {

        nameOfNumbers = 'zero';

    }

    console.log(nameOfNumbers);

}
englishNameOfTheLastDigit(512);
englishNameOfTheLastDigit(1);
englishNameOfTheLastDigit(1643);