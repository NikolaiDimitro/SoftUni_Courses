function safari(budget, fuelLiters, day) {

    let fuel = fuelLiters * 2.10;
    let price = fuel + 100;

    if (day === "Sunday") {

        price *= 0.8;

    } else if (day === "Saturday") {

        price *= 0.9;

    }

    if (budget >= price) {

        let leftMoney = budget - price;
        console.log(`Safari time! Money left: ${leftMoney.toFixed(2)} lv.`);

    } else {

        let neededMoney = price - budget;
        console.log(`Not enough money! Money needed: ${neededMoney.toFixed(2)} lv.`);

    }
}
safari(1000, 10, 'Sunday');
safari(120, 30, 'Saturday');
safari(105.20, 15, 'Sunday');