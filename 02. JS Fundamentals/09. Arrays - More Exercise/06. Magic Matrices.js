function magicalMatries(arr) {

    let controll = 0;
    let count = 0;

    for (let row = 0; row < arr.length; row++) {

        let sumOfRow = 0;
        let sumOfCol = 0;

        for (let col = 0; col <= arr.length - 1; col++) {

            sumOfCol += arr[col][row];
            sumOfRow += arr[row][col]

        }

        if (sumOfCol === sumOfRow && count === 0) {

            controll = sumOfCol;

        } else if (sumOfCol === sumOfRow) {

            if (sumOfCol !== controll) {

                return false;

            }

        } else {

            return false;

        }

        count++;

    }

    return true;

}
magicalMatries([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);
magicalMatries([[11, 32, 45], [21, 0, 1], [21, 1, 1]]);
magicalMatries([[1, 0, 0], [0, 0, 1], [0, 1, 0]]);