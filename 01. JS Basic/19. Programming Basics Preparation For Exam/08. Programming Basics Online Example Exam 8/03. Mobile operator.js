function mobileOperator(time, type, internet, countMonth) {

    let price = 0;

    switch (type) {
        case "Small":
            if (time === "one") {

                price = 9.98;

            } else if (time === "two") {

                price = 8.58;

            }

            break;

        case "Middle":

            if (time === "one") {

                price = 19.99;

            } else if (time === "two") {

                price = 17.09;

            }
            break;

        case "Large":

            if (time === "one") {

                price = 25.98;

            } else if (time === "two") {

                price = 23.59;

            }

            break;

        case "ExtraLarge":

            if (time === "one") {

                price = 35.99;

            } else if (time === "two") {

                price = 31.79;

            }
            break;

    }

    if (internet === "yes") {

        if (price <= 10) {

            price += 5.50;

        } else if (price <= 30) {

            price += 4.35;

        } else {

            price += 3.85

        }
    }
    if (time === "two") {

        price *= 0.9625;

    }

    price *= countMonth;
    console.log(`${price.toFixed(2)} lv.`);

}
mobileOperator('one', 'Small', 'yes', 10);
mobileOperator('two', 'Large', 'no', 10);
mobileOperator('two', 'ExtraLarge', 'yes', 20);
mobileOperator('two', 'Small', 'yes', 20);