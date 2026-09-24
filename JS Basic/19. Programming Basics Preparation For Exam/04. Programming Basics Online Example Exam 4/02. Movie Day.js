function movieDay(timeToPhoto, countScene, timeToScene) {

    let timeToTeren = timeToPhoto * 0.15;
    let total = timeToTeren + (countScene * timeToScene);

    if (total <= timeToPhoto) {

        let leftTime = timeToPhoto - total;
        console.log(`You managed to finish the movie on time! You have ${Math.round(leftTime)} minutes left!`);

    } else {

        let needTime = total - timeToPhoto;
        console.log(`Time is up! To complete the movie you need ${needTime} minutes.`);

    }
}
movieDay(120, 10, 11);
movieDay(60, 15, 3);