function sumPrimeNonPrime(arr) {

    let index = 0;
    let sumPrimeNumber = 0;
    let sumNonPrime = 0;

    while (arr[index] !== 'stop') {

        let numb = Number(arr[index]);
        let isPrime = false;

        if (numb < 0) {

            console.log('Number is negative.');
            index++;
            continue;

        }

        if (numb < 2) {

            isPrime = false;
            sumNonPrime += numb;

        }

        for (let i = 2; i < numb; i++) {

            if (numb % i === 0) {

                isPrime = true;
                break;

            }
        }

        if (isPrime) {

            sumNonPrime += numb;

        } else {

            sumPrimeNumber += numb;

        }

        index++;

    }

    console.log(`Sum of all prime numbers is: ${sumPrimeNumber}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);

}
sumPrimeNonPrime(["3", "9", "0", "7", "19", "4", "stop"]);
sumPrimeNonPrime(["30", "83", "33", "-1", "20", "stop"]);
sumPrimeNonPrime(["0", "-9", "0", "stop"]);