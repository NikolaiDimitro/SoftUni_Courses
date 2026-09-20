function sumOfTwoNumbers(beginOfInterval, endOfInterval, magicNumber) {

    let count = 0;

    for (let i = beginOfInterval; i <= endOfInterval; i++) {

        for (let k = beginOfInterval; k <= endOfInterval; k++) {

            count++;

            if (i + k === magicNumber) {

                console.log(`Combination N:${count} (${i} + ${k} = ${magicNumber})`);
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