function matchTickets(budget, typeOfTickets, countPeopleInGroup) {

    let totalMoneyForTickets = 0;

    if (countPeopleInGroup >= 1 && countPeopleInGroup <= 4) {

        budget *= 0.25;

    } else if (countPeopleInGroup >= 5 && countPeopleInGroup <= 9) {

        budget *= 0.4;

    } else if (countPeopleInGroup >= 10 && countPeopleInGroup <= 24) {

        budget *= 0.5;

    } else if (countPeopleInGroup >= 25 && countPeopleInGroup <= 49) {

        budget *= 0.6;

    } else {

        budget *= 0.75;

    }

    if (typeOfTickets === 'Normal') {

        totalMoneyForTickets = countPeopleInGroup * 249.99;

    } else {

        totalMoneyForTickets = countPeopleInGroup * 499.99;

    }

    if (budget >= totalMoneyForTickets) {

        console.log(`Yes! You have ${(budget - totalMoneyForTickets).toFixed(2)} leva left.`);

    } else {

        console.log(`Not enough money! You need ${(totalMoneyForTickets - budget).toFixed(2)} leva.`);

    }
}
matchTickets(1000, 'Normal', 1);
matchTickets(30000, 'VIP', 49);