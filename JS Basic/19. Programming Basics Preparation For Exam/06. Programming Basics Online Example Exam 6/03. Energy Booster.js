function energyBooster(fruit, sizeOfSet, countSet) {

    let price = 0;

    switch (fruit) {

        case "Watermelon":

            if (sizeOfSet === "small") {

                price = countSet * 2 * 56;

            } else {

                price = countSet * 5 * 28.70;

            }

            break;

        case "Mango":

            if (sizeOfSet === "small") {

                price = countSet * 2 * 36.66;

            } else {

                price = countSet * 5 * 19.60;

            }

            break;

        case "Pineapple":

            if (sizeOfSet === "small") {

                price = countSet * 2 * 42.10;

            } else {

                price = countSet * 5 * 24.80;

            }

            break;

        case "Raspberry":

            if (sizeOfSet === "small") {

                price = countSet * 2 * 20;

            } else {

                price = countSet * 5 * 15.20;

            }

            break;

    }

    if (price >= 400 && price <= 1000) {

        price *= 0.85;

    } else if (price > 1000) {

        price *= 0.50;

    }

    console.log(`${price.toFixed(2)} lv.`);

}
energyBooster('Watermelon', 'big', 4);
energyBooster('Pineapple', 'small', 1);
energyBooster('Raspberry', 'small', 50);
energyBooster('Mango', 'big', 8);