function gameOfIntervale(arr) {

    let countMove = Number(arr[0]);
    let total = 0;
    let numbBetween0To9 = 0;
    let numbBetween10To19 = 0;
    let numbBetween20To29 = 0;
    let numbBetween30To39 = 0;
    let numbeBetween40To50 = 0;
    let invalidNumber = 0;

    for (let i = 1; i <= countMove; i++) {

        let numb = Number(arr[i]);

        if (numb >= 0 && numb <= 9) {

            total += numb * 0.2;
            numbBetween0To9++;

        } else if (numb >= 10 && numb <= 19) {

            total += numb * 0.3;
            numbBetween10To19++;

        } else if (numb >= 20 && numb <= 29) {

            total += numb * 0.4;
            numbBetween20To29++;

        } else if (numb >= 30 && numb <= 39) {

            total += 50;
            numbBetween30To39++;

        } else if (numb >= 40 && numb <= 50) {

            total += 100;
            numbeBetween40To50++;

        } else {

            total /= 2;
            invalidNumber++;

        }
    }

    console.log(total.toFixed(2));
    console.log(`From 0 to 9: ${((numbBetween0To9 / countMove) * 100).toFixed(2)}%`);
    console.log(`From 10 to 19: ${((numbBetween10To19 / countMove) * 100).toFixed(2)}%`);
    console.log(`From 20 to 29: ${((numbBetween20To29 / countMove) * 100).toFixed(2)}%`);
    console.log(`From 30 to 39: ${((numbBetween30To39 / countMove) * 100).toFixed(2)}%`);
    console.log(`From 40 to 50: ${((numbeBetween40To50 / countMove) * 100).toFixed(2)}%`);
    console.log(`Invalid numbers: ${((invalidNumber / countMove) * 100).toFixed(2)}%`);

}
gameOfIntervale(["10", "43", "57", "-12", "23", "12", "0", "50", "40", "30", "20"]);