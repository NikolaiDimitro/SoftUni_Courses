function addBags(input) {

    let price20 = Number(input[0]);
    let cilogram = Number(input[1]);
    let dayOfTravels = Number(input[2]);
    let countBags = Number(input[3]);
    let price = 0;

    if (cilogram > 20) {

        price = price20;

    } else if (cilogram >= 10 && cilogram <= 20) {

        price = price20 * 0.50;

    } else if (cilogram < 10) {

        price = price20 * 0.20;

    }

    if (dayOfTravels > 30) {

        price *= 1.10;

    } else if (dayOfTravels >= 7 && dayOfTravels <= 30) {

        price *= 1.15;

    } else if (dayOfTravels < 7) {

        price *= 1.40;

    }

    price *= countBags;
    console.log(`The total price of bags is: ${price.toFixed(2)} lv.`);

}
addBags(30, 18, 15, 2);
addBags(25.50, 5, 36, 6);
addBags(63.80, 23, 3, 1);