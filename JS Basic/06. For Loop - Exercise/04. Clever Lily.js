function cleverLily(ages, washingMachinePrice, toyPrice) {

    let money = 0;
    let count = 0;
    let totalMoney = 0;

    for (let i = 1; i <= ages; i++) {

        if (i % 2 === 0) {

            money += 10;
            totalMoney += money - 1;

        } else {

            count++;

        }
    }

    totalMoney += count * toyPrice;

    if (totalMoney >= washingMachinePrice) {

        console.log(`Yes! ${(totalMoney - washingMachinePrice).toFixed(2)}`);

    } else {

        console.log(`No! ${(washingMachinePrice - totalMoney).toFixed(2)}`);

    }
}
cleverLily(10, 170.00, 6);
cleverLily(21, 1570.98, 3);