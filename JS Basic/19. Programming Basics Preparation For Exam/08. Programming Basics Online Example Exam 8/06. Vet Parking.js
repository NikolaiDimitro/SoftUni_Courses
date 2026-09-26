function vetParking(countDay, countHour) {

    let price = 0;
    let sum = 0;
    let total = 0;

    for (let i = 1; i <= countDay; i++) {

        for (let index = 1; index <= countHour; index++) {

            if (i % 2 === 0 && index % 2 !== 0) {

                price = 2.50;
                sum += price;

            } else if (i % 2 !== 0 && index % 2 === 0) {

                price = 1.25;
                sum += price;

            } else {

                price = 1;
                sum += price

            }
        }

        console.log(`Day: ${i} - ${sum.toFixed(2)} leva`);
        total += sum;
        sum = 0;

    }

    console.log(`Total: ${total.toFixed(2)} leva`);

}
vetParking(2, 5);
vetParking(5, 2);