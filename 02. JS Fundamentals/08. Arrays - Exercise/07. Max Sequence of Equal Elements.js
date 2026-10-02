function maxSequerenceOfEqualElements(arr) {

    let bestNumber = arr[0];
    let bestCount = 1;
    let currentCount = 1;

    for (let i = 1; i < arr.length; i++) {

        if (arr[i] === arr[i - 1]) {

            currentCount++;

        } else {

            currentCount = 1;

        }

        if (currentCount > bestCount) {

            bestCount = currentCount;
            bestNumber = arr[i];

        }
    }

    let result = [];

    for (let i = 0; i < bestCount; i++) {

        result.push(bestNumber);

    }

    console.log(result.join(' '));
    
}
maxSequerenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequerenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);
maxSequerenceOfEqualElements([4, 4, 4, 4]);
maxSequerenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);