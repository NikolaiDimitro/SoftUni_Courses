function traveling(arr) {

    let index = 0;
    let sum = 0;

    while (arr[index] !== 'End') {

        let destination = arr[index];
        index++;

        let budget = Number(arr[index]);
        index++;

        while (sum < budget) {

            let savedMoney = Number(arr[index]);
            sum += savedMoney;

            index++;

        }

        sum = 0;
        console.log(`Going to ${destination}!`);

    }
}
traveling(["Greece", "1000", "200", "200", "300", "100", "150", "240", "Spain", "1200", "300", "500", "193", "423", "End"]);
traveling(["France", "2000", "300", "300", "200", "400", "90", "258", "360", "650", "Portugal", "1450", "400", "400", "200", "300", "300", "Egypt", "1900", "1000", "280", "300", "500", "End"]);