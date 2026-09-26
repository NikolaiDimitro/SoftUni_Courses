function vacation(arr) {

    let moneyForVacation = Number(arr[0]);
    let availableMoney = Number(arr[1]);
    let index = 2;
    let countSpendDays = 0;
    let totalDays = 0;

    while (index <= arr.length) {

        totalDays++;

        let action = arr[index];

        index++;

        let currentMoney = Number(arr[index]);

        if (action === 'spend') {

            countSpendDays++;

            if (currentMoney <= availableMoney) {

                availableMoney -= currentMoney;

            } else {

                availableMoney = 0;

            }

            if (countSpendDays === 5) {

                console.log(`You can't save the money.`);
                console.log(`${totalDays}`);
                return;

            }
        }

        if (action === 'save') {

            availableMoney += currentMoney;
            countSpendDays = 0;

            if (availableMoney >= moneyForVacation) {

                console.log(`You saved the money for ${totalDays} days.`);

            }
        }

        index++;

    }
}
vacation(["2000", "1000", "spend", "1200", "save", "2000"]);
vacation(["110", "60", "spend", "10", "spend", "10", "spend", "10", "spend", "10", "spend", "10"]);
vacation(["250", "150", "spend", "50", "spend", "50", "save", "100", "save", "100"]);