function vacation(budget, season) {

    let country = '';
    let placeToAccommodation = '';
    let priceToVacation = 0;

    switch (season) {

        case 'Summer':

            if (budget <= 1000) {

                placeToAccommodation = 'Camp';
                priceToVacation = budget * 0.65;
                country = 'Alaska';

            } else if (budget > 1000 && budget <= 3000) {

                placeToAccommodation = 'Hut';
                priceToVacation = budget * 0.80;
                country = 'Alaska';

            } else {

                placeToAccommodation = 'Hotel';
                priceToVacation = budget * 0.90;
                country = 'Alaska';

            }

            break;

        case 'Winter':

            if (budget <= 1000) {

                placeToAccommodation = 'Camp';
                priceToVacation = budget * 0.45;
                country = 'Morocco';

            } else if (budget > 1000 && budget <= 3000) {

                placeToAccommodation = 'Hut';
                priceToVacation = budget * 0.60;
                country = 'Morocco';

            } else {

                placeToAccommodation = 'Hotel';
                priceToVacation = budget * 0.90;
                country = 'Morocco';

            }

            break;

    }

    console.log(`${country} - ${placeToAccommodation} - ${priceToVacation.toFixed(2)}`);

}
vacation(800, 'Summer');
vacation(799.50, 'Winter');
vacation(1100, 'Summer');
vacation(2543.99, 'Winter');
vacation(3460, 'Summer');
vacation(5000, 'Winter');