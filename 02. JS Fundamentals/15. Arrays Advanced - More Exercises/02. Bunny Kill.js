function bunnyKill(arr) {

    let matrix = arr
        .slice(0, -1)
        .map(row => row.split(' ').map(Number));

    let bombCoordinates = arr[arr.length - 1].split(' ');
    let snowballDamage = 0;
    let killedBunnies = 0;

    for (let coordinates of bombCoordinates) {

        let [row, col] = coordinates.split(',').map(Number);
        let bombDamage = matrix[row][col];

        if (bombDamage <= 0) {

            continue;

        }

        snowballDamage += bombDamage;
        killedBunnies++;

        for (let r = row - 1; r <= row + 1; r++) {

            for (let c = col - 1; c <= col + 1; c++) {

                if (r >= 0 && r < matrix.length &&c >= 0 && c < matrix[r].length) {

                    if (r === row && c === col) {

                        continue;

                    }

                    matrix[r][c] = Math.max(0, matrix[r][c] - bombDamage );

                }
            }
        }

        matrix[row][col] = 0;

    }

    for (let row = 0; row < matrix.length; row++) {

        for (let col = 0; col < matrix[row].length; col++) {

            if (matrix[row][col] > 0) {

                snowballDamage += matrix[row][col];
                killedBunnies++;

            }
        }
    }

    console.log(snowballDamage);
    console.log(killedBunnies);

}
bunnyKill(['5 10 15 20','10 10 10 10', '10 15 10 10','10 10 10 10', '2,2 0,1']);
bunnyKill(['10 10 10','10 10 10', '10 10 10', '0,0']);