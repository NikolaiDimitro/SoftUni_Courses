function sumOfTwoNumbers(start, end, magicNumber) {

    let count = 0;

    for (let f = start; f <= end; f++) {

        for (let s = start; s <= end; s++) {

            count++;

            if (f + s === magicNumber) {

                console.log(`Combination N:${count} (${f} + ${s} = ${magicNumber})`);
                return;

            }
        }
    }

    console.log(`${count} combinations - neither equals ${magicNumber}`);

}
sumOfTwoNumbers(1, 10, 5);
sumOfTwoNumbers(88, 888, 1000);
sumOfTwoNumbers(23, 24, 20);
sumOfTwoNumbers(88, 888, 2000);