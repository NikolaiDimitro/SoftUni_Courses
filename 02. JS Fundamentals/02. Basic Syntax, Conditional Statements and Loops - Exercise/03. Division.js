function division(n) {

    let maxDivisor = 0;

    if (n % 2 === 0) {

        maxDivisor = 2;

    }

    if (n % 3 === 0) {

        maxDivisor = 3;

    }

    if (n % 6 === 0) {

        maxDivisor = 6;

    }

    if (n % 7 === 0) {

        maxDivisor = 7;

    }

    if (n % 10 === 0) {

        maxDivisor = 10;

    }

    if (maxDivisor > 0) {

        console.log(`The number is divisible by ${maxDivisor}`);

    } else {

        console.log('Not divisible');

    }
}
division(30);
division(15);
division(12);
division(1643);