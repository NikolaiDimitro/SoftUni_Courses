function spiralMatrix(n, m) {

    let matrix = [];

    for (let row = 0; row < n; row++) {

        matrix.push(new Array(m).fill(0));

    }

    let number = 1;
    let top = 0;
    let bottom = n - 1;
    let left = 0;
    let right = m - 1;

    while (number <= n * m) {

        for (let col = left; col <= right; col++) {

            matrix[top][col] = number++;

        }

        top++;

        for (let row = top; row <= bottom; row++) {

            matrix[row][right] = number++;

        }

        right--;

        for (let col = right; col >= left; col--) {

            matrix[bottom][col] = number++;

        }

        bottom--;

        for (let row = bottom; row >= top; row--) {

            matrix[row][left] = number++;

        }

        left++;

    }

    for (let row of matrix) {

        console.log(row.join(' '));

    }
}
spiralMatrix(5, 5);
spiralMatrix(3, 3);