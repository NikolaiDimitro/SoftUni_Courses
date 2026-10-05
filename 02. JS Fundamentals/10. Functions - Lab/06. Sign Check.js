function signCheck(numOne, numTwo, numThree) {

    let count = 0;

    if (numOne < 0) {

        count++;

    }

    if (numTwo < 0) {

        count++;

    }

    if (numThree < 0) {

        count++;

    }

    if (count % 2 === 0) {

        return 'Positive';

    } else {

        return 'Negative';

    }
}
signCheck(5, 12, -15);
signCheck(-6, -12, 14);
signCheck(-1, -2, -3);
signCheck(-5, 1, 1);