function fuelTankPart2(typeFuel, countFuel, isHaveClubCard) {

    let totalPrice = 0;

    switch (typeFuel) {

        case 'Gasoline':

            if (isHaveClubCard === 'Yes') {

                totalPrice = countFuel * 2.04;

            } else {

                totalPrice = countFuel * 2.22;

            }

            if (countFuel >= 20 && countFuel <= 25) {

                totalPrice *= 0.92;

            } else if (countFuel > 25) {

                totalPrice *= 0.9;

            }

            break;

        case 'Diesel':

            if (isHaveClubCard === 'Yes') {

                totalPrice = countFuel * 2.21;

            } else {

                totalPrice = countFuel * 2.33;

            }

            if (countFuel >= 20 && countFuel <= 25) {

                totalPrice *= 0.92;

            } else if (countFuel > 25) {

                totalPrice *= 0.9;

            }

            break;

        case 'Gas':

            if (isHaveClubCard === 'Yes') {

                totalPrice = countFuel * 0.85;

            } else {

                totalPrice = countFuel * 0.93;

            }

            if (countFuel >= 20 && countFuel <= 25) {

                totalPrice *= 0.92;

            } else if (countFuel > 25) {

                totalPrice *= 0.9;

            }

            break;

    }

    console.log(`${totalPrice.toFixed(2)} lv.`);

}
fuelTankPart2('Gas', 30, 'Yes');
fuelTankPart2('Gasoline', 25, 'No');
fuelTankPart2('Diesel', 19, 'No');