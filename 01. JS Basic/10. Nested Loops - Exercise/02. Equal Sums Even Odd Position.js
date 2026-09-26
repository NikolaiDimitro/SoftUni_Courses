function equalSumsOddPosition(n, m) {

    let sumOfEven = 0;
    let sumOfOdd = 0;
    let print = '';

    for (let i = n; i <= m; i++) {

        let str = '' + i;

        for (let k = 0; k <= str.length - 1; k++) {

            if (k % 2 === 0) {

                sumOfEven += Number(str[k]);

            } else {

                sumOfOdd += Number(str[k]);

            }
        }

        if (sumOfEven === sumOfOdd) {

            print += i + ' ';

        }

        sumOfEven = 0;
        sumOfOdd = 0;

    }

    console.log(print);

}
equalSumsOddPosition(100000, 100050);
equalSumsOddPosition(123456, 124000);
equalSumsOddPosition(299900, 300000);
equalSumsOddPosition(100115, 100120);