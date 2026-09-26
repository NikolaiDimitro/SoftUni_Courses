function shoping(budget, countVideoCards, countProcessors, countRam) {

    let priceVideoCards = countVideoCards * 250;
    let priceProcessors = (priceVideoCards * 0.35) * countProcessors;
    let priceRam = (priceVideoCards * 0.1) * countRam;
    let totalPrice = priceVideoCards + priceProcessors + priceRam;

    if (countVideoCards > countProcessors) {

        totalPrice *= 0.85;

    }

    if (budget >= totalPrice) {

        console.log(`You have ${(budget - totalPrice).toFixed(2)} leva left!`);

    } else {

        console.log(`Not enough money! You need ${(totalPrice - budget).toFixed(2)} leva more!`);

    }
}
shoping(900, 2, 1, 3);
shoping(920.45, 3, 1, 1);