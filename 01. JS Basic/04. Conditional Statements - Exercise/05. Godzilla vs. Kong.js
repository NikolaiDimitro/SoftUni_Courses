function godzillaVsKong(budget, counteExtras, priceOfClothing) {

    let decorations = budget * 0.1;
    let totalPriceOfClothingOfAllExtras = priceOfClothing * counteExtras;

    if (counteExtras > 150) {

        totalPriceOfClothingOfAllExtras *= 0.9;

    }

    let totalPrice = decorations + totalPriceOfClothingOfAllExtras;

    if (budget < totalPrice) {

        console.log('Not enough money!');
        console.log(`Wingard needs ${(totalPrice - budget).toFixed(2)} leva more.`);

    } else {

        console.log('Action!');
        console.log(`Wingard starts filming with ${(budget - totalPrice).toFixed(2)} leva left.`);

    }
}
godzillaVsKong(20000, 120, 55.5);
godzillaVsKong(15437.62, 186, 57.99);
godzillaVsKong(9587.88, 222, 55.68);