function oddAndEvenSum(n) {

    let str = String(n);
    let sumEven = 0;
    let sumOdd = 0;

    for (let i = 0; i < str.length; i++) {

        if (Number(str[i]) % 2 === 0) {

            sumEven += Number(str[i]);

        } else {

            sumOdd += Number(str[i]);

        }
    }

    console.log(` Odd sum = ${sumOdd}, Even sum = ${sumEven}`);

}
oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);