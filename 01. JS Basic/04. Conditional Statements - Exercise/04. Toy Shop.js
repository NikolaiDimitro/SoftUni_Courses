function toyShop(priceExcursion, countPuzzles, countTalkingDolls, countTeddyBears, countMinions, countTrucks) {

    let totalPriceOfToys = countPuzzles * 2.6 + countTalkingDolls * 3 + countTeddyBears * 4.1 + countMinions * 8.2 + countTrucks * 2;
    let totalCount = countPuzzles + countTalkingDolls + countTeddyBears + countMinions + countTrucks;


    if (totalCount >= 50) {

        totalPriceOfToys *= 0.75;

    }

    totalPriceOfToys *= 0.9;

    if (totalPriceOfToys >= priceExcursion) {

        console.log(`Yes! ${(totalPriceOfToys - priceExcursion).toFixed(2)} lv left.`);

    } else {

        console.log(`Not enough money! ${(priceExcursion - totalPriceOfToys).toFixed(2)} lv needed.`)

    }
}
toyShop(40.8, 20, 25, 30, 50, 10);
toyShop(320, 8, 2, 5, 5, 1);