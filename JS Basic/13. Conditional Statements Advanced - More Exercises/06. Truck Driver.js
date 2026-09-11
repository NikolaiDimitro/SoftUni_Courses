function truckDriver(season, kilometresForMonth) {

    let totalMoney = 0;

    switch (season) {

        case 'Spring':
        case 'Autumn':

            if (kilometresForMonth <= 5000) {

                totalMoney = (kilometresForMonth * 0.75) * 4;

            } else if (kilometresForMonth < 10000) {

                totalMoney = (kilometresForMonth * 0.95) * 4;

            } else {

                totalMoney = (kilometresForMonth * 1.45) * 4;

            }

            break;

        case 'Summer':

            if (kilometresForMonth <= 5000) {

                totalMoney = (kilometresForMonth * 0.9) * 4;

            } else if (kilometresForMonth < 10000) {

                totalMoney = (kilometresForMonth * 1.10) * 4;

            } else {

                totalMoney = (kilometresForMonth * 1.45) * 4;

            }

            break;

        case 'Winter':

            if (kilometresForMonth <= 5000) {

                totalMoney = (kilometresForMonth * 1.05) * 4;

            } else if (kilometresForMonth < 10000) {

                totalMoney = (kilometresForMonth * 1.25) * 4;

            } else {

                totalMoney = (kilometresForMonth * 1.45) * 4;

            }

            break;

    }

    totalMoney *= 0.9;
    console.log(totalMoney.toFixed(2));

}
truckDriver('Summer', 3455);
truckDriver('Winter', 4350);
truckDriver('Winter', 5678);
truckDriver('Winter', 16042);
truckDriver('Spring', 1600);
truckDriver('Autumn', 8600);
truckDriver('Spring', 16942);