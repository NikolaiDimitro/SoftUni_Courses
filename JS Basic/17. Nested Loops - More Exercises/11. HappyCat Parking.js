function happyCatParking(countDays, countHours) {

    let total = 0;
    let currentPrice = 0;

    for (let d = 1; d <= countDays; d++) {

        for (let h = 1; h <= countHours; h++) {

            if (d % 2 === 0 && h % 2 !== 0) {

                currentPrice += 2.5;

            } else if (d % 2 !== 0 && h % 2 === 0) {

                currentPrice += 1.25;

            } else {

                currentPrice += 1;

            }
        }

        total += currentPrice;
        console.log(`Day: ${d} - ${currentPrice.toFixed(2)} leva`);
        currentPrice = 0;

    }

    console.log(`Total: ${total.toFixed(2)} leva`);

}
happyCatParking(2, 5);
happyCatParking(5, 2);