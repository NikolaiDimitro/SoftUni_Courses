function equalSums(arr) {

    let sumLeft = 0;
    let sumRight = 0;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < i; j++) {

            sumLeft += arr[j];

        }

        for (let k = i + 1; k < arr.length; k++) {

            sumRight += arr[k];

        }

        if (sumLeft === sumRight) {

            console.log(i);
            count++;

        }

        sumLeft = 0;
        sumRight = 0;

    }

    if (count === 0) {

        console.log("no");

    }
}
equalSums([1, 2, 3, 3]);
equalSums([1, 2]);
equalSums([1]);
equalSums([1, 2, 3]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);