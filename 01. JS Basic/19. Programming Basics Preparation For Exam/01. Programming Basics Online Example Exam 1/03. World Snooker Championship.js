function worldSnookerChampionship(stage, ticketType, ticketCount, pictureWithTrophy) {

    let price = 0;
    let finalPrice = 0;

    switch (stage) {

        case "Quarter final":

            if (ticketType === "Standard") {

                price = ticketCount * 55.50;

            } else if (ticketType === "Premium") {

                price = ticketCount * 105.20;

            } else if (ticketType === "VIP") {

                price = ticketCount * 118.90;
            }

            break;

        case "Semi final":

            if (ticketType === "Standard") {

                price = ticketCount * 75.88;

            } else if (ticketType === "Premium") {

                price = ticketCount * 125.22;

            } else if (ticketType === "VIP") {

                price = ticketCount * 300.40;
            }

            break;

        case "Final":

            if (ticketType === "Standard") {

                price = ticketCount * 110.10;

            } else if (ticketType === "Premium") {

                price = ticketCount * 160.66;

            } else if (ticketType === "VIP") {

                price = ticketCount * 400.00;
            }

            break;
    }

    finalPrice = price;

    if (price >= 2500 && price <= 4000) {

        finalPrice = price * 0.90;

    } else if (price > 4000) {

        finalPrice = price * 0.75;
    }

    if (pictureWithTrophy === "Y" && price > 4000) {

        finalPrice += 0;

    } else if (pictureWithTrophy === "Y") {

        finalPrice += ticketCount * 40;
    }

    console.log(finalPrice.toFixed(2));
}
worldSnookerChampionship("Quarter final", "Standard", "11", "N")