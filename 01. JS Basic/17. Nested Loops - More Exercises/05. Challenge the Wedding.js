function challengeTheWedding(countMan, countWoman, maxCountYable) {

    let count = 0;
    let str = '';

    for (let i = 1; i <= countMan; i++) {

        for (let k = 1; k <= countWoman; k++) {

            if (count < maxCountYable) {

                str += `(${i} <-> ${k}) `;
                count++;

            }
        }
    }

    console.log(str);

}
challengeTheWedding(2, 2, 6);
challengeTheWedding(2, 2, 3);
challengeTheWedding(5, 8, 40);