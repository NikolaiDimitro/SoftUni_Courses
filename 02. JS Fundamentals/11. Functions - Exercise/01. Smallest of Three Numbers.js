function smallerOfThreeNumbers(num1, num2, num3) {

    let arr = [num1, num2, num3];
    let minNumber = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] <= minNumber) {

            minNumber = arr[i];

        }
    }

    console.log(minNumber);

}
smallerOfThreeNumbers(2, 5, 3);
smallerOfThreeNumbers(600, 342, 123);
smallerOfThreeNumbers(25, 21, 4);
smallerOfThreeNumbers(2, 2, 2);