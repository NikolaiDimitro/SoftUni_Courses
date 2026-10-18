function equalNeighbors(arr) {

    let count = 0;

    for (let row = 0; row < arr.length; row++) {

        for (let col = 0; col < arr[row].length - 1; col++) {

            if (arr[row][col] === arr[row][col + 1]) {

                count++;

            }
        }

        if (row + 1 < arr.length) {

            for (let col = 0; col < arr[row].length; col++) {

                if (col < arr[row + 1].length && arr[row][col] === arr[row + 1][col]) {

                    count++;

                }
            }
        }
    }

    return count;

}
equalNeighbors([['2', '3', '4', '7', '0'], ['4', '0', '5', '3', '4'], ['2', '3', '5', '4', '2'], ['9', '8', '7', '5', '4']]);
equalNeighbors([['test', 'yo', 'yo', 'ho'], ['well', 'done', 'no', '6'], ['not', 'done', 'yet', '5']]);