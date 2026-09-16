function oddEvenPosition(arr) {

    let countNumber = Number(arr[0]);
    let oddSum = 0;
    let evenSum = 0;
    let oddMinNumber = Number.MAX_SAFE_INTEGER;
    let evenMinNumber = Number.MAX_SAFE_INTEGER;
    let oddMaxNumber = Number.MIN_SAFE_INTEGER;
    let evenMaxNumber = Number.MIN_SAFE_INTEGER;
    let isHaveOdd = false;
    let isHaveEven = false;

    for (let i = 1; i <= countNumber; i++) {

        let current = Number(arr[i]);

        if (i % 2 === 0) {

            isHaveEven = true;
            evenSum += current;

            if (current > evenMaxNumber) {

                evenMaxNumber = current;

            }

            if (current < evenMinNumber) {

                evenMinNumber = current;

            }
        } else {

            isHaveOdd = true;
            oddSum += current;

            if (current > oddMaxNumber) {

                oddMaxNumber = current;

            }

            if (current < oddMinNumber) {

                oddMinNumber = current;

            }
        }
    }

    console.log(`OddSum=${oddSum.toFixed(2)},`);


    if (!isHaveOdd) {

        console.log(`OddMin=No,`);
        console.log(`OddMax=No,`);

    } else {

        console.log(`OddMin=${oddMinNumber.toFixed(2)},`);
        console.log(`OddMax=${oddMaxNumber.toFixed(2)},`);

    }

    console.log(`EvenSum=${evenSum.toFixed(2)},`);

    if (!isHaveEven) {

        console.log(`EvenMin=No,`);
        console.log(`EvenMax=No`);

    } else {

        console.log(`EvenMin=${evenMinNumber.toFixed(2)},`);
        console.log(`EvenMax=${evenMaxNumber.toFixed(2)}`);

    }
}
oddEvenPosition(["6", "2", "3", "5", "4", "2", "1"]);
oddEvenPosition(["2", "1.5", "-2.5"]);
oddEvenPosition(["1", "1"]);
oddEvenPosition(["0"]);
oddEvenPosition(["5", "3", "-2", "8", "11", "-3"]);
oddEvenPosition(["4", "1.5", "1.75", "1.5", "1.75"]);
oddEvenPosition(["1", "-5"]);
oddEvenPosition(["3", "-1", "-2", "-3"]);