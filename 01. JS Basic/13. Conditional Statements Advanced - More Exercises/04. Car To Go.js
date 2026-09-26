function carToGo(budget, season) {

    let classCar = '';
    let typeCar = '';
    let moneyForCar = 0;

    switch (season) {

        case 'Summer':

            if (budget <= 100) {

                classCar = 'Economy class';
                moneyForCar = budget * 0.35;
                typeCar = 'Cabrio';

            } else if (budget > 100 && budget <= 500) {

                classCar = 'Compact class';
                moneyForCar = budget * 0.45;
                typeCar = 'Cabrio';

            } else {

                classCar = 'Luxury class';
                moneyForCar = budget * 0.9;
                typeCar = 'Jeep';

            }

            break;

        case 'Winter':

            if (budget <= 100) {

                classCar = 'Economy class';
                moneyForCar = budget * 0.65;
                typeCar = 'Jeep';

            } else if (budget > 100 && budget <= 500) {

                classCar = 'Compact class';
                moneyForCar = budget * 0.8;
                typeCar = 'Jeep';

            } else {

                classCar = 'Luxury class';
                moneyForCar = budget * 0.9;
                typeCar = 'Jeep';

            }

            break;

    }

    console.log(`${classCar}`);
    console.log(`${typeCar} - ${moneyForCar.toFixed(2)}`);

}
carToGo(450, 'Summer');
carToGo(450, 'Winter');
carToGo(99.99, 'Summer');
carToGo(70.50, 'Winter');