function flowerShop(countMagnolias, countHyacinths, countRoses, countCacti, priceOfGift) {

    let totalProfit = (countMagnolias * 3.25 + countHyacinths * 4 + countRoses * 3.5 + countCacti * 8) * 0.95;

    if (totalProfit >= priceOfGift) {

        console.log(`She is left with ${Math.floor(totalProfit - priceOfGift)} leva.`);

    } else {

        console.log(`She will have to borrow ${Math.ceil(priceOfGift - totalProfit)} leva.`);

    }
}
flowerShop(2, 3, 5, 1, 50);
flowerShop(15, 7, 5, 10, 100);