function multiplyBy2(arr) {

    let index = 0;
    let numb = Number(arr[0]);

    if (numb < 0) {

        console.log(`Negative number!`);

    }

    while (numb >= 0) {

        console.log(`Result: ${(numb * 2).toFixed(2)}`);

        index++;
        numb = Number(arr[index]);

        if (numb < 0) {

            console.log(`Negative number!`);

        }
    }
}
multiplyBy2(["12", "43.2144", "12.3", "543.23", "-20"]);
multiplyBy2(["23.43", "12.3245", "0", "65.23432", "23", "65", "-12"]);
multiplyBy2([-123]);