function bills(arr) {

    let months = Number(arr[0]);
    let totalElectricityBill = 0;
    let totalOtherThingBill = 0;
    let totalBill = 0;

    for (let i = 1; i <= months; i++) {

        let electricityBill = Number(arr[i]);

        let currentBill = electricityBill + 20 + 15;
        let otherThingBill = currentBill * 1.20;

        totalElectricityBill += electricityBill;
        totalOtherThingBill += otherThingBill;
        totalBill += electricityBill + otherThingBill;

    }

    console.log(`Electricity: ${totalElectricityBill.toFixed(2)} lv`);
    console.log(`Water: ${(months * 20).toFixed(2)} lv`);
    console.log(`Internet: ${(months * 15).toFixed(2)} lv`);
    console.log(`Other: ${totalOtherThingBill.toFixed(2)} lv`);
    console.log(`Average: ${((totalElectricityBill + months * 35 + totalOtherThingBill) / months).toFixed(2)} lv`);

}
bills(["5", "68.63", "89.25", "132.53", "93.53", "63.22"]);
bills(["8", "123.54", "231.54", "140.23", "100", "122.4", "430", "178.52", "64.2"]);