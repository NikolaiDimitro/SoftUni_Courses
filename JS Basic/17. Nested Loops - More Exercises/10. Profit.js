function profit(countCoinFrom1lv, countCoinFrom2lv, countBanknoteFrom5lv, sum) {

    for (let i = 0; i <= countCoinFrom1lv; i++) {

        for (let k = 0; k <= countCoinFrom2lv; k++) {

            for (let l = 0; l <= countBanknoteFrom5lv; l++) {

                if ((i * 1 + k * 2 + l * 5) === sum) {

                    console.log(`${i} * 1 lv. + ${k} * 2 lv. + ${l} * 5 lv. = ${sum} lv.`);

                }
            }
        }
    }
}
profit(3, 2, 3, 10);
profit(5, 3, 1, 7);