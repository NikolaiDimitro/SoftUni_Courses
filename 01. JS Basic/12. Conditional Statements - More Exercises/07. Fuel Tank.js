function fuelTank(typefuel, countLitresInTank) {

    switch (typefuel) {

        case 'Diesel':

            if (countLitresInTank >= 25) {

                console.log(`You have enough ${typefuel.toLowerCase()}.`);

            } else {

                console.log(`Fill your tank with ${typefuel.toLowerCase()}!`);

            }

            break;

        case 'Gasoline':

            if (countLitresInTank >= 25) {

                console.log(`You have enough ${typefuel.toLowerCase()}.`);

            } else {

                console.log(`Fill your tank with ${typefuel.toLowerCase()}!`);

            }

            break;

        case 'Gas':

            if (countLitresInTank >= 25) {

                console.log(`You have enough ${typefuel.toLowerCase()}.`);

            } else {

                console.log(`Fill your tank with ${typefuel.toLowerCase()}!`);

            }

            break;

        default:

            console.log(`Invalid fuel!`);

            break;

    }
}
fuelTank('Diesel', 10);
fuelTank('Gasoline', 40);
fuelTank('Gas', 25);
fuelTank('Kerosene', 200);