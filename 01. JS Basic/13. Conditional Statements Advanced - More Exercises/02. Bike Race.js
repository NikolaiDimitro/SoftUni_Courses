function bikeRace(countJuniorCyclists, countSeniorCyclists, typeRoute) {

    let totalCyclists = countJuniorCyclists + countSeniorCyclists;
    let totalMoneys = 0;

    switch (typeRoute) {

        case 'trail':

            totalMoneys += countJuniorCyclists * 5.5 + countSeniorCyclists * 7;

            break;

        case 'cross-country':

            totalMoneys += countJuniorCyclists * 8 + countSeniorCyclists * 9.5;

            if (totalCyclists >= 50) {

                totalMoneys *= 0.75;

            }

            break;

        case 'downhill':

            totalMoneys += countJuniorCyclists * 12.25 + countSeniorCyclists * 13.75;

            break;

        case 'road':

            totalMoneys += countJuniorCyclists * 20 + countSeniorCyclists * 21.5;

            break;

    }

    totalMoneys *= 0.95;
    console.log(totalMoneys.toFixed(2));

}
bikeRace(10, 20, 'trail');
bikeRace(21, 26, 'cross-country');
bikeRace(30, 25, 'cross-country');
bikeRace(10, 10, 'downhill');
bikeRace(3, 40, 'road');