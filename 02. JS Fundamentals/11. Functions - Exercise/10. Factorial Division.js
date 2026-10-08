function factorialDivision(first, second) {

    let sumOfFirstNumber = 1;
    let sumeOfSecondNumber = 1;

    for (let i = first; i >= 1; i--) {

        sumOfFirstNumber *= i;

    }

    for (let i = second; i >= 1; i--) {

        sumeOfSecondNumber *= i;

    }

    console.log((sumOfFirstNumber / sumeOfSecondNumber).toFixed(2));

}
factorialDivision(5, 2);
factorialDivision(6, 2);