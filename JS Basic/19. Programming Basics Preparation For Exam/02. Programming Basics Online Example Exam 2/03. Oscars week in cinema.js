function oscarsWeekInCinema(name, typeRoom, countTickets) {

    let price = 0;

    switch (name) {

        case "A Star Is Born":
            if (typeRoom === "normal") {

                price = countTickets * 7.50;

            } else if (typeRoom === "luxury") {

                price = countTickets * 10.50;

            } else if (typeRoom === "ultra luxury") {

                price = countTickets * 13.50;

            }

            break;

        case "Bohemian Rhapsody":

            if (typeRoom === "normal") {

                price = countTickets * 7.35;

            } else if (typeRoom === "luxury") {

                price = countTickets * 9.45;

            } else if (typeRoom === "ultra luxury") {

                price = countTickets * 12.75;

            }

            break;

        case "Green Book":

            if (typeRoom === "normal") {

                price = countTickets * 8.15;

            } else if (typeRoom === "luxury") {

                price = countTickets * 10.25;

            } else if (typeRoom === "ultra luxury") {

                price = countTickets * 13.25;

            }

            break;

        case "The Favourite":

            if (typeRoom === "normal") {

                price = countTickets * 8.75;

            } else if (typeRoom === "luxury") {

                price = countTickets * 11.55;

            } else if (typeRoom === "ultra luxury") {
                price = countTickets * 13.95;

            }

            break;

    }

    console.log(`${name} -> ${price.toFixed(2)} lv.`);

}
oscarsWeekInCinema('A Star Is Born', 'luxury', 42);
oscarsWeekInCinema('Green Book', 'normal', 63);
oscarsWeekInCinema('The Favourite', 'ultra luxury', 34);