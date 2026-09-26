function dishwasher(arr) {

    let index = 1;
    let bottleForDishwasherDetergent = Number(arr[0]);
    let quantityOfProduct = bottleForDishwasherDetergent * 750;
    let countPlates = 0;
    let countPots = 0;
    let totalDishwasherDetergent = 0;

    while (arr[index] !== 'End') {

        let current = Number(arr[index]);

        if (index % 3 === 0) {

            countPots += current;

        } else {

            countPlates += current;

        }

        index++;

        if (index === arr.length) {

            break;

        }
    }

    totalDishwasherDetergent = countPlates * 5 + countPots * 15;

    if (quantityOfProduct >= totalDishwasherDetergent) {

        console.log(`Detergent was enough!`);
        console.log(`${countPlates} dishes and ${countPots} pots were washed.`);
        console.log(`Leftover detergent ${quantityOfProduct - totalDishwasherDetergent} ml.`);

    } else {

        console.log(`Not enough detergent, ${totalDishwasherDetergent - quantityOfProduct} ml. more necessary!`);

    }
}
dishwasher((["2", "53", "65", "55", "End"]));
dishwasher(["1", "10", "15", "10", "12", "13", "30"]);