function aluminumJoinery(countWindows, windowType, paymentMethod) {

    let price = 0;

    switch (windowType) {

        case "90X130":

            price = countWindows * 110;

            if (countWindows > 30 && countWindows <= 59) {

                price *= 0.95;

            } else if (countWindows > 60) {

                price *= 0.92;

            }

            break;

        case "100X150":

            price = countWindows * 140;

            if (countWindows > 40 && countWindows <= 79) {

                price *= 0.94;

            } else if (countWindows > 80) {

                price *= 0.90;

            }

            break;

        case "130X180":

            price = countWindows * 190;

            if (countWindows > 20 && countWindows <= 49) {

                price *= 0.93;

            } else if (countWindows > 50) {

                price *= 0.88;

            }

            break;

        case "200X300":

            price = countWindows * 250;

            if (countWindows > 25 && countWindows <= 49) {

                price *= 0.91;

            } else if (countWindows > 50) {

                price *= 0.86;

            }

            break;
    }

    switch (paymentMethod) {

        case "With delivery":
            price += 60;
            break;

        case "Without delivery":
            break;
    }

    if (countWindows < 10) {

        console.log(`Invalid order`);

    } else if (countWindows > 99) {

        price *= 0.96;
    }

    if (countWindows >= 10) {

        console.log(`${price.toFixed(2)} BGN`);

    }
}
aluminumJoinery(40, '90X130', 'Without delivery');
aluminumJoinery(105, '100X150', 'With delivery',);
aluminumJoinery(2, '130X180', 'With delivery');