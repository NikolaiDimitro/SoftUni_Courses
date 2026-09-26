function averageNumber(arr) {


    let n = Number(arr[0]);
    let sum = 0;

    for (let i = 1; i <= n; i++) {

        let current = Number(arr[i]);
        sum += current;

    }

    console.log((sum / n).toFixed(2));

}
averageNumber(["4", "3", "2", "4", "2"]);
averageNumber(["2", "6", "4"]);
averageNumber(["3", "82", "43", "22"]);
averageNumber(["4", "95", "23", "76", "23"]);