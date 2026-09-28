function bitcointMining(arr) {

    let sum = 0;
    let priceToBitcoint = 11949.16;
    let priceOf1GGold = 67.51;
    let countOfDays = 0;
    let countOfDayOfFirstBitcoint = 0;
    let isHaveFirstBitcoint = false;

    for (let i = 0; i < arr.length; i++) {

        let current = Number(arr[i]);

        countOfDays++;

        if ((i + 1) % 3 === 0) {

            current *= 0.7;

        }

        sum += current;

        if (sum * priceOf1GGold >= priceToBitcoint) {

            if (!isHaveFirstBitcoint) {

                countOfDayOfFirstBitcoint = countOfDays;
                isHaveFirstBitcoint = true;

            }
        }
    }

    let countBitocoin = Math.floor((sum * priceOf1GGold) / priceToBitcoint);
    console.log(`Bought bitcoins: ${countBitocoin}`);

    if (countBitocoin > 0) {

        console.log(`Day of the first purchased bitcoin: ${countOfDayOfFirstBitcoint}`);

    }

    console.log(`Left money: ${(sum * priceOf1GGold - (countBitocoin * priceToBitcoint)).toFixed(2)} lv.`);

}
bitcointMining([100, 200, 300]);
bitcointMining([50, 100]);
bitcointMining([3124.15, 504.212, 2511.124]);