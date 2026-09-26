function fitnessCard(budget, jender, age, sport) {
    
    let price = 0;

    switch (sport) {

        case "Gym":

            if (jender === "m") {

                price = 42;

            } else {

                price = 35;

            }
            break;

        case "Boxing":

            if (jender === "m") {

                price = 41;

            } else {

                price = 37;

            }

            break;

        case "Yoga":

            if (jender === "m") {

                price = 45;

            } else {

                price = 42;

            }

            break;

        case "Zumba":

            if (jender === "m") {

                price = 34;

            } else {

                price = 31;

            }

            break;

        case "Dances":

            if (jender === "m") {

                price = 51;

            } else {

                price = 53;

            }

            break;

        case "Pilates":

            if (jender === "m") {

                price = 39;

            } else {

                price = 37;
            }

            break;

    }
    if (age <= 19) {

        price *= 0.8;

    }
    if (budget >= price) {

        console.log(`You purchased a 1 month pass for ${sport}.`);

    } else {

        let needMoney = price - budget;
        console.log(`You don't have enough money! You need $${needMoney.toFixed(2)} more.`);

    }
}
fitnessCard(50, 'm', 23);
fitnessCard(20, 'f', 15, 'Yoga');
fitnessCard(10, 'm', 50, 'Pilates');