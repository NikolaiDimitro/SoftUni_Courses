function orbit(arr) {

    let width = arr[0];
    let height = arr[1];
    let x = arr[2];
    let y = arr[3];
    let matrix = [];

    for (let i = 0; i < height; i++) {

        matrix.push(new Array(width).fill(0));

    }

    for (let row = 0; row < height; row++) {

        for (let col = 0; col < width; col++) {

            if (row === x && col === y) {

                matrix[row][col] = 1;

            }
        }
    }

    for (let row = 0; row < matrix.length; row++) {

        for (let col = 0; col < width; col++) {

            if (row === x && col !== y) {

                let differenceWithX = Math.abs(col - y);
                matrix[row][col] = differenceWithX + 1;

            } else if (row !== x || col !== y) {

                let differenceWithX = Math.abs(row - x) + 1;
                let differenceWithY = Math.abs(col - y) + 1;

                if (differenceWithX >= differenceWithY) {

                    matrix[row][col] = differenceWithX;

                } else {

                    matrix[row][col] = differenceWithY;

                }
            }
        }
    }

    for (let row of matrix) {

        console.log(row.join(' '));

    }
}
orbit([4, 4, 0, 0]);
orbit([5, 5, 2, 2]);
orbit([3, 3, 2, 2]);