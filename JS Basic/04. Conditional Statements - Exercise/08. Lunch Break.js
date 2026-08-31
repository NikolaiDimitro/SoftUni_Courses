function lunchBreak(nameOfSeries, timeOfEpisod, timeForBreak,) {

    let timeForLunch = timeForBreak / 8;
    let timeForreCreation = timeForBreak / 4;
    let total = timeForBreak - timeForLunch - timeForreCreation;

    if (timeOfEpisod <= total) {

        console.log(`You have enough time to watch ${nameOfSeries} and left with ${Math.ceil(total - timeOfEpisod)} minutes free time.`);

    } else {

        console.log(`You don't have enough time to watch ${nameOfSeries}, you need ${Math.ceil(timeOfEpisod - total)} more minutes.`);

    }
}
lunchBreak("Game of Thrones", 60, 96);
lunchBreak("Teen Wolf", 48, 60);