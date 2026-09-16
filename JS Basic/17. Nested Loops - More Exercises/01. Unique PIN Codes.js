function uniquePinCodes(x, y, z) {

    for (let i = 1; i <= x; i++) {

        for (let j = 2; j <= y; j++) {

            for (let k = 1; k <= z; k++) {

                if (i % 2 === 0) {

                    if (j === 2 || j === 3 || j === 5 || j === 7) {

                        if (k % 2 === 0) {

                            console.log(`${i} ${j} ${k}`);

                        }
                    }
                }
            }
        }
    }
}
uniquePinCodes(3, 5, 5);
uniquePinCodes(8, 2, 8);