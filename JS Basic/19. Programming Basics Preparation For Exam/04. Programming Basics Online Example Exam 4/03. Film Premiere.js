function filmPremiere(movie, packetForMovie, countTicket) {

    let sum = 0

    switch (packetForMovie) {

        case "Drink":

            if (movie === "John Wick") {

                sum += countTicket * 12;

            } else if (movie === "Star Wars") {

                sum += countTicket * 18;

            } else if (movie === "Jumanji") {

                sum += countTicket * 9;

            }

            break;

        case "Popcorn":

            if (movie === "John Wick") {

                sum += countTicket * 15;

            } else if (movie === "Star Wars") {

                sum += countTicket * 25;

            } else if (movie === "Jumanji") {

                sum += countTicket * 11;

            }

            break;

        case "Menu":

            if (movie === "John Wick") {

                sum += countTicket * 19;

            } else if (movie === "Star Wars") {

                sum += countTicket * 30;

            } else if (movie === "Jumanji") {

                sum += countTicket * 14;

            }

            break;

    }

    if (countTicket >= 4 && movie === "Star Wars") {

        sum *= 0.70;

    } else if (countTicket === 2 && movie === "Jumanji") {

        sum *= 0.85
    }

    console.log(`Your bill is ${sum.toFixed(2)} leva.`);

}
filmPremiere('John Wick', 'Drink', 6);
filmPremiere('Star Wars', 'Popcorn', 4);
filmPremiere('Jumanji', 'Menu', 2);