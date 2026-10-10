function negativeOrPositiveNumbers(arr) {

    let result = [];

    for (let i = 0; i < arr.length; i++) {

        let currentNumber = Number(arr[i]);

        if (currentNumber < 0) {

            result.unshift(currentNumber);

        } else {

            result.push(currentNumber);

        }
    }

    for (let number of result) {

        console.log(number);

    }
}
negativeOrPositiveNumbers(['7', '-2', '8', '9']);
negativeOrPositiveNumbers(['3', '-2', '0', '-1']);