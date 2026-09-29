function amazingNumbers(n) {

    let number = n.toString();
    let sum = 0;

    for (let i = 0; i <= number.length - 1; i++) {

        let current = Number(number[i]);
        sum += current;

    }

    if (sum % 10 === 9) {

        console.log(`${n} Amazing? True`);

    } else {

        console.log(`${n} Amazing? False`);

    }
}
amazingNumbers(1233);
amazingNumbers(999);