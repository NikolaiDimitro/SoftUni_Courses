function coffeeMachine(drinks, sugar, countDrinks) {

    let price = 0;

    switch (drinks) {

        case "Espresso":

            if (sugar === "Without") {

                price = countDrinks * 0.90 * 0.65;

            } else if (sugar === "Normal") {

                price = countDrinks * 1.00;

            } else if (sugar === "Extra") {

                price = countDrinks * 1.20;

            }

            if (countDrinks >= 5) {

                price *= 0.75;

            }

            break;

        case "Cappuccino":

            if (sugar === "Without") {

                price = countDrinks * 1.00 * 0.65;

            } else if (sugar === "Normal") {

                price = countDrinks * 1.20;

            } else if (sugar === "Extra") {

                price = countDrinks * 1.60;

            }

            break;

        case "Tea":

            if (sugar === "Without") {

                price = countDrinks * 0.50 * 0.65;

            } else if (sugar === "Normal") {

                price = countDrinks * 0.60;

            } else if (sugar === "Extra") {

                price = countDrinks * 0.70;

            }

            break;

    }
    if (price > 15) {

        price *= 0.80;

    }

    console.log(`You bought ${countDrinks} cups of ${drinks} for ${price.toFixed(2)} lv.`);

}
coffeeMachine(800.50, 8, 100, 2);
coffeeMachine(500, 7, 66, 15);