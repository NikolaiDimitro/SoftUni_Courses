function transportPrice(countKilometres, partOfDay) {

    let price = 0;

    switch (partOfDay) {

        case 'day':

            if (countKilometres < 20) {

                price = 0.7 + (countKilometres * 0.79);

            } else if (countKilometres >= 20 && countKilometres < 100) {

                price = countKilometres * 0.09;

            } else {

                price = countKilometres * 0.06;

            }

            break;

        case 'night':

            if (countKilometres < 20) {

                price = 0.7 + (countKilometres * 0.9);

            } else if (countKilometres >= 20 && countKilometres < 100) {

                price = countKilometres * 0.09;

            } else {

                price = countKilometres * 0.06;

            }
    }

    console.log(price.toFixed(2));

}
transportPrice(5, 'day');
transportPrice(7, 'night');
transportPrice(25, 'day');
transportPrice(180, 'night');