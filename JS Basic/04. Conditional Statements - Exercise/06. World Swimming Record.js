function worldSwimmingRecord(recordInSeconds, distanceInMeters, timeForOneMeters) {

    let timeOfIvan = distanceInMeters * timeForOneMeters;
    let delay = Math.floor(distanceInMeters / 15);
    let newDealy = delay * 12.5;

    let totalTime = timeOfIvan + newDealy;

    if (recordInSeconds > totalTime) {

        console.log(`Yes, he succeeded! The new world record is ${(totalTime).toFixed(2)} seconds.`);

    } else {

        console.log(`No, he failed! He was ${(totalTime - recordInSeconds).toFixed(2)} seconds slower.`);

    }
}
worldSwimmingRecord(10464, 1500, 20);
worldSwimmingRecord(55555.67, 3017, 5.03);