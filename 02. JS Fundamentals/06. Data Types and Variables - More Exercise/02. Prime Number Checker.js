function primeNumberChecker(n) {

    for (let i = 2; i < n; i++) {

        if (n % i === 0) {

            return false;

        }
    }

    return true;

}
primeNumberChecker(7);
primeNumberChecker(8);
primeNumberChecker(81);