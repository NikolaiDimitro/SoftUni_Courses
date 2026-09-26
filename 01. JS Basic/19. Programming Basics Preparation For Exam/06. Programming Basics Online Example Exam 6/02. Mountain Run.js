function mountainRun(recordInSeconds, distanceInMetres, timeForMetre) {

    let totalTime = distanceInMetres * timeForMetre;
    let delay = Math.floor(distanceInMetres / 50) * 30;
    let overTime = totalTime + delay;

    if (overTime < recordInSeconds) {

        console.log(`Yes! The new record is ${overTime.toFixed(2)} seconds.`);

    } else {

        let neededSeconds = overTime - recordInSeconds;
        console.log(`No! He was ${neededSeconds.toFixed(2)} seconds slower.`);

    }
}
mountainRun(10164, 1400, 25);
mountainRun(10164, 1400, 25);
mountainRun(1377, 389, 3);