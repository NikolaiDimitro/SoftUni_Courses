function familyTrip(budjet, countNight, price, percentAdditionalExpenses) {

    let total = 0

    if (countNight > 7) {

        price *= 0.95;

    }

    total = countNight * price + (percentAdditionalExpenses / 100 * budjet);

    if (budjet >= total) {

        let leftMoney = budjet - total;
        console.log(`Ivanovi will be left with ${leftMoney.toFixed(2)} leva after vacation.`);

    } else {

        let needMoney = total - budjet;
        console.log(`${needMoney.toFixed(2)} leva needed.`);

    }
}
familyTrip(800.50, 8, 100, 2);
familyTrip(500, 7, 66, 15);