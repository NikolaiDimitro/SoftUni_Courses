function easterTrip(destination, days, countNighte) {

    let price = 0;
    let sum = 0;

    switch (destination) {

        case "France":

            if (days === "21-23") {

                price = countNighte * 30;
                sum += price;

            } else if (days === "24-27") {

                price = countNighte * 35;
                sum += price;
                
            } else if (days === "28-31") {

                price = countNighte * 40;
                sum += price;

            }

            break;

        case "Italy":

            if (days === "21-23") {

                price = countNighte * 28;
                sum += price;

            } else if (days === "24-27") {

                price = countNighte * 32;
                sum += price;

            } else if (days === "28-31") {

                price = countNighte * 39;
                sum += price;

            }

            break;

        case "Germany":
            if (days === "21-23") {

                price = countNighte * 32;
                sum += price;

            } else if (days === "24-27") {

                price = countNighte * 37;
                sum += price;

            } else if (days === "28-31") {

                price = countNighte * 43;
                sum += price;

            }

            break;

    }

    console.log(`Easter trip to ${destination} : ${price.toFixed(2)} leva.`);

}
easterTrip('Germany','24-27',5);
easterTrip('Italy','21-23',7);
easterTrip('France','28-31',8);