function house(n) {

    let countRowForRoof = (n + 1) / 2;
    let difference = 0;
    let countOfStars = 0;
    let str = '';
    let stars = '';

    if (n % 2 === 0) {

        stars = '**';
        countOfStars = 2;

    } else {

        stars = '*';
        countOfStars = 1;

    }

    for (let rowsOfRoof = 1; rowsOfRoof <= countRowForRoof; rowsOfRoof++) {

        if (rowsOfRoof > 1) {

            stars += '**';
            countOfStars += 2;

        }

        str += stars;
        difference = (n - countOfStars);

        for (let col = 1; col <= difference; col++) {

            if (col % 2 === 0) {

                str += '-';

            } else {

                str = '-' + str;

            }
        }

        console.log(str);
        str = '';

    }

    let countRowForFoundation = n / 2 - 1;

    for (let row = 0; row <= countRowForFoundation; row++) {

        for (let len = 1; len <= n; len++) {

            if (len === 1 || len === n) {

                str += '|';

            } else {

                str += '*';

            }

        }

        console.log(str);
        str = '';

    }
}
house(2);
house(3);
house(4);
house(5);
house(6);