function diagonalAttack(arr) {

    let matrix = [];
    let count = 0;

    for (let row of arr) {

        let current = row.split(' ');
        matrix.push(current);

    }

    let sumOfLeftDiagonal = 0;
    let sumOfRightDiagonal = 0;

    for (let row = 0; row < matrix.length; row++) {

        for (let col = 0; col < matrix.length; col++) {

            if (row === col) {

                sumOfLeftDiagonal += Number(matrix[row][col]);

            }
        }
    }

    for (let row = 0; row < matrix.length; row++) {

        for (let col = matrix.length - 1; col >= 0; col--) {

            if (col + count === matrix.length - 1) {

                sumOfRightDiagonal += Number(matrix[row][col]);

            }
        }

        count++

    }

    if (sumOfLeftDiagonal === sumOfRightDiagonal) {

        let indexOfLeftDiagonal = 0;
        let indexOfRightDiagonal = matrix.length - 1;

        for (let row = 0; row < Math.floor(matrix.length / 2); row++) {

            for (let col = 0; col < matrix.length; col++) {

                if (col !== indexOfLeftDiagonal && col !== indexOfRightDiagonal) {

                    matrix[row][col] = sumOfLeftDiagonal;

                }
            }

            if (indexOfLeftDiagonal !== indexOfRightDiagonal) {

                indexOfLeftDiagonal++;
                indexOfRightDiagonal--;

            }
        }

        for (let row = Math.floor(matrix.length / 2); row < matrix.length; row++) {

            for (let col = 0; col < matrix.length; col++) {

                if (col !== indexOfLeftDiagonal && col !== indexOfRightDiagonal) {

                    matrix[row][col] = sumOfLeftDiagonal;

                }
            }

            indexOfLeftDiagonal++;
            indexOfRightDiagonal--;

        }
    }

    for (let row of matrix) {

        console.log(row.join(' '));

    }
}
diagonalAttack(['5 3 12 3 1', '11 4 23 2 5', '101 12 3 21 10', '1 4 5 2 2', '5 22 33 11 1']);
diagonalAttack(['1 1 1', '1 1 1', '1 1 0']);