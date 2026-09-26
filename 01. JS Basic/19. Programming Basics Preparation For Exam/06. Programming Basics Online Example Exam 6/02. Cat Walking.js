function catWalking(minutes, countWalks, countCalories) {

    let burnedCalories = minutes * countWalks * 5;
    let neededMinimumCalories = countCalories * 0.5;

    if (burnedCalories >= neededMinimumCalories) {

        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${burnedCalories}.`);

    } else {

        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${burnedCalories}.`);

    }
}
catWalking(30, 3, 600);
catWalking(15, 2, 500);
catWalking(40, 2, 300);