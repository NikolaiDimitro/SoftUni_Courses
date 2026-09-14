function logistic(arr) {

    let countOfCargo = Number(arr[0]);
    let totalPriceOfAllCrgo = 0;
    let microbusCargo = 0;
    let truckCargo = 0;
    let trainCargo = 0;
    let totalCargo = 0;
    let tonsOfCargo = 0;

    for (let i = 1; i <= countOfCargo; i++) {

        tonsOfCargo = Number(arr[i]);

        totalCargo += tonsOfCargo;

        if (tonsOfCargo <= 3) {

            microbusCargo += tonsOfCargo;

        } else if (tonsOfCargo >= 4 && tonsOfCargo <= 11) {

            truckCargo += tonsOfCargo;

        } else {

            trainCargo += tonsOfCargo;

        }
    }

    totalPriceOfAllCrgo = microbusCargo * 200 + truckCargo * 175 + trainCargo * 120;

    console.log((totalPriceOfAllCrgo / totalCargo).toFixed(2));
    console.log(`${((microbusCargo / totalCargo) * 100).toFixed(2)}%`);
    console.log(`${((truckCargo / totalCargo) * 100).toFixed(2)}%`);
    console.log(`${((trainCargo / totalCargo) * 100).toFixed(2)}%`);

}
logistic(["4", "1", "5", "16", "3"]);
logistic(["5", "2", "10", "20", "1", "7"]);