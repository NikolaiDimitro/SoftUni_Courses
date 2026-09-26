function flowers(countChrysanthemums, countRoses, countTulips, season, isHolyday) {

    let totalPrice = 0;

    switch (season) {

        case 'Spring':

            totalPrice = (countChrysanthemums * 2 + countRoses * 4.1 + countTulips * 2.5);

            if (isHolyday === 'Y') {

                totalPrice *= 1.15;

            }

            if (countTulips > 7) {

                totalPrice *= 0.95;

            }

            break;

        case 'Summer':

            totalPrice = (countChrysanthemums * 2 + countRoses * 4.1 + countTulips * 2.5);

            if (isHolyday === 'Y') {

                totalPrice *= 1.15;

            }

            if (isHolyday === 'Y') {

                totalPrice *= 1.15;

            }

            break;

        case 'Autumn':

            totalPrice = (countChrysanthemums * 3.75 + countRoses * 4.5 + countTulips * 4.15);

            if (isHolyday === 'Y') {

                totalPrice *= 1.15;

            }

            break;

        case 'Winter':

            totalPrice = (countChrysanthemums * 3.75 + countRoses * 4.5 + countTulips * 4.15);

            if (isHolyday === 'Y') {

                totalPrice *= 1.15;

            }

            if (countRoses >= 10) {

                totalPrice *= 0.9;

            }

            break;

    }

    if (countChrysanthemums + countRoses + countTulips > 20) {

        totalPrice *= 0.8;

    }

    totalPrice += 2;
    console.log(totalPrice.toFixed(2));

}
flowers(2, 4, 8, 'Spring', 'Y');
flowers(3, 10, 9, 'Winter', 'N');