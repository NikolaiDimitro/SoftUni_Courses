function spiceMustFlow(spice) {

    let index = spice;
    let sum = 0;
    let countDays = 0;

    while (index >= 100) {

        sum += index;
        sum -= 26;
        countDays++;
        index -= 10;

    }

    if (sum >= 26) {

        sum -= 26

    } else {

        sum = 0;

    }

    console.log(countDays);
    console.log(sum);

}
spiceMustFlow(111);
spiceMustFlow(450);