function minNumber(arr) {

    let minNumber = Number.MAX_SAFE_INTEGER;
    let index = 0;

    while (arr[index] !== 'Stop') {

        if (Number(arr[index]) < minNumber) {

            minNumber = Number(arr[index]);

        }

        index++;

    }

    console.log(minNumber);

}
minNumber(["100", "99", "80", "70", "Stop"]);
minNumber(["-10", "20", "-30", "Stop"]);
minNumber(["45", "-20", "7", "99", "Stop"]);
minNumber(["999", "Stop"]);
minNumber(["-1", "-2", "Stop"]);