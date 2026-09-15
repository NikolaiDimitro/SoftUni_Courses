function euqalPairs(arr) {

    let countPairsNumber = Number(arr[0]);
    let previousPairValue = 0;
    let count = 0;
    let isEqual = true;
    let difference = 0;
    let isBigger = 0;

    for (let i = 1; i <= arr.length - 1; i += 2) {

        let fn = Number(arr[i]);
        let sn = Number(arr[i + 1]);

        let value = fn + sn;
        count++;

        if (count > 1) {

            if (previousPairValue !== value) {

                difference = Math.abs(previousPairValue - value);
                isEqual = false;

                if (difference > isBigger) {

                    isBigger = difference;

                }

            } else {

                continue;

            }
        }

        previousPairValue = value;

    }

    if (isEqual) {

        console.log(`Yes, value=${previousPairValue}`);

    } else {

        console.log(`No, maxdiff=${difference}`);

    }
}
euqalPairs(["3", "1", "2", "0", "3", "4", "-1"]);
euqalPairs(["4", "1", "1", "3", "1", "2", "2", "0", "0"]);
euqalPairs(["2", "-1", "0", "0", "-1"]);
euqalPairs(["2", "1", "2", "2", "2"]);
euqalPairs(["1", "5", "5"]);
euqalPairs(["2", "-1", "2", "0", "-1"]);