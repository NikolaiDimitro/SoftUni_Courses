function accountBalance(arr) {

    let sum = 0;
    let index = 0;

    while (arr[index] !== 'NoMoreMoney') {

        let currentMoney = Number(arr[index]);

        if (currentMoney < 0) {

            console.log('Invalid operation!');
            break;

        }

        sum += currentMoney;
        console.log(`Increase: ${currentMoney.toFixed(2)}`);

        index++;

    }

    console.log(`Total: ${sum.toFixed(2)}`);

}
accountBalance(["5.51", "69.42", "100", "NoMoreMoney"]);
accountBalance(["120", "45.55", "-150"]);