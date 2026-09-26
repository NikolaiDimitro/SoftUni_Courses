function touristShop(input) {

    let budget = Number(input[0]);
    let index = 1;
    let articul = input[index];
    let priceToArticle = Number(input[index]);
    let sum = 0;
    let count = 0
    let needMoney = sum - budget;

    for (let i = 1; i <= input.length; i++) {
        articul = input[i];
        if (articul === "Stop") {

            console.log(`You bought ${count} products for ${sum.toFixed(2)} leva.`);
            break;

        }

        i++;
        priceToArticle = Number(input[i]);
        count++;

        if (count % 3 === 0) {

            priceToArticle *= 0.5;

        }

        sum += priceToArticle;

        if (sum > budget) {

            needMoney = sum - budget;
            console.log(`You don't have enough money!`);
            console.log(`You need ${needMoney.toFixed(2)} leva!`);
        }

    }
}
touristShop(["153.20", "Backpack", "25.20", "Shoes", "54", "Sunglasses", "30 ", "Stop"]);
touristShop(["54", "Thermal", "underwear", "24", "Sunscreen", "45"]);