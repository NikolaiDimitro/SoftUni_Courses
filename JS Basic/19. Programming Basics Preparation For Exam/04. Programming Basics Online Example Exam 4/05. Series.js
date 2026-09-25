function series(input) {

    let budget = Number(input[0]);
    let countSerial = Number(input[1]);
    let index = 2;
    let nameOfSerial = input[index];
    let priceOfSerial = Number(input[index]);
    let sum = 0;

    while (index !== input.length) {

        nameOfSerial = input[index];
        index++;
        priceOfSerial = Number(input[index]);

        switch (nameOfSerial) {

            case "Thrones":
                priceOfSerial *= 0.5;
                break;

            case "Lucifer":

                priceOfSerial *= 0.6;
                break;

            case "Protector":

                priceOfSerial *= 0.7;
                break;

            case "TotalDrama":

                priceOfSerial *= 0.8;
                break;

            case "Area":

                priceOfSerial *= 0.9;

        }

        sum += priceOfSerial;
        index++
        nameOfSerial = input[index];

    }

    if (budget >= sum) {

        let leftMoney = budget - sum;
        console.log(`You bought all the series and left with ${leftMoney.toFixed(2)} lv.`);

    } else if (sum > budget) {

        let needMoney = sum - budget;
        console.log(`You need ${needMoney.toFixed(2)} lv. more to buy the series!`);

    }
}
series(["10","3","Thrones","5","Riverdale","5","Gotham","2"]);
series((["25","6","Teen Wolf","8","Protector","5","TotalDrama","5","Area","4","Thrones","5","Lucifer","9"]));