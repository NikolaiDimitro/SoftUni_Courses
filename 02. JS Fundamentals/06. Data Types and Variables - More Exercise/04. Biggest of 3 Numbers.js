function biggestOf3Numbers(firstNumber, secondNumber, thirdNumber) {

    let maxNumber = 0;

    if (firstNumber >= secondNumber && firstNumber >= thirdNumber) {

        maxNumber = firstNumber;

    } else if (secondNumber >= firstNumber && secondNumber >= thirdNumber) {

        maxNumber = secondNumber;

    } else {

        maxNumber = thirdNumber;

    }

    console.log(maxNumber);

}
biggestOf3Numbers(-2, 7, 3);
biggestOf3Numbers(130, 5, 99);
biggestOf3Numbers(43, 43.2, 43.1);
biggestOf3Numbers(2, 2, 2);