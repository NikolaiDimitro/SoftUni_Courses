function godzillavsKong(budget, countStatisticians, priceClothing) {

    let decor = budget * 0.10;
    let totalPriceClothing = priceClothing * countStatisticians;

    if (countStatisticians > 150) {

        totalPriceClothing *= 0.9;

    }

    let total = decor + totalPriceClothing;

    if (total > budget) {

        let needMoney = total - budget;
        console.log(`Not enough money!`)
        console.log(`Wingard needs ${needMoney.toFixed(2)} leva more.`);

    } else {

        let leftMoney = budget - total;
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${leftMoney.toFixed(2)} leva left.`);

    }
}
godzillavsKong(20000, 120, 55.5);
godzillavsKong(15437.62, 186, 57.99);
godzillavsKong(9587.88, 222, 55.68);