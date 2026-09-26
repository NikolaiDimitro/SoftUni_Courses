function primalPairs(startValueOfFirstPair, startValueOfSecondPair, differenceWithStartInFirstPair, differenceWithStartInSecondPair) {

    let endForFirstPair = startValueOfFirstPair + differenceWithStartInFirstPair;
    let endForSecondPair = startValueOfSecondPair + differenceWithStartInSecondPair;
    let isPrime = true;

    for (let a = startValueOfFirstPair; a <= endForFirstPair; a++) {

        for (let b = startValueOfSecondPair; b <= endForSecondPair; b++) {

            for (let i = 2; i <= 7; i++) {

                if (a % i === 0 || b % i === 0) {

                    isPrime = false;
                    break;

                }
            }

            if (isPrime) {

                console.log(`${a}${b}`);

            }

            isPrime = true;

        }
    }
}
primalPairs(10, 20, 5, 5);
primalPairs(10, 30, 9, 6);