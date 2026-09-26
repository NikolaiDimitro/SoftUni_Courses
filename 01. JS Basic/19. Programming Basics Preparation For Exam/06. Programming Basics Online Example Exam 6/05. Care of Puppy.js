function careOfPuppy(input) {

    let food = Number(input[0]);
    let index = 1;

    food *= 1000;

    let adopted = input[index];
    let eatedFood = Number(input[index]);
    let sum = 0;

    while (adopted !== "Adopted") {

        eatedFood = Number(input[index]);
        sum += eatedFood;
        index++;
        adopted = input[index];

    }

    if (food >= sum) {

        let leftFood = food - sum;
        console.log(`Food is enough! Leftovers: ${leftFood} grams.`);

    } else {

        let needFood = sum - food;
        console.log(`Food is not enough. You need ${needFood} grams more.`);

    }
}
careOfPuppy(["4", "130", "345", "400", "180", "230", "120", "Adopted"]);
careOfPuppy(["3", "1000", "1000", "1000", "Adopted"]);
careOfPuppy(["2", "999", "456", "999", "999", "123", "456", "Adopted"]);