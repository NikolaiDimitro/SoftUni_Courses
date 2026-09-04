function sumPrimeNonPrime(arr) {

    let index = 0;
    let sumPrNumb = 0;
    let sumNPrimeNumb = 0;

    while (arr[index] !== 'stop') {

        let num = Number(arr[index]);

        if (num < 0) {

            console.log('Number is negative.');
            index++;
            continue;
        }

        if (num === 0 || num === 1) {

            sumNPrimeNumb += num;
            index++;
            continue;
        }

        let isPrime = true;

        for (let i = 2; i <= Math.sqrt(num); i++) {

            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            sumPrNumb += num;
        } else {
            sumNPrimeNumb += num;
        }

        index++;
    }

    console.log(`Sum of all prime numbers is: ${sumPrNumb}`);
    console.log(`Sum of all non prime numbers is: ${sumNPrimeNumb}`);
}
sumPrimeNonPrime(["3", "9", "0", "7", "19", "4", "stop"]);
sumPrimeNonPrime(["30", "83", "33", "-1", "20", "stop"]);
sumPrimeNonPrime(["0", "-9", "0", "stop"]);