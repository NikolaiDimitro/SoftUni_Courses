function skeleton(minutesInControl, secondOfControl, chuteLength, secondFor100meters) {

    let time = (chuteLength / 100) * secondFor100meters;
    let timeForReduce = (chuteLength / 120) * 2.5;
    let totalTimeOfMartin = time - timeForReduce;
    let timeOfControls = minutesInControl * 60 + secondOfControl;

    if (totalTimeOfMartin <= timeOfControls) {

        console.log(`Marin Bangiev won an Olympic quota!`);
        console.log(`His time is ${totalTimeOfMartin.toFixed(3)}.`);

    } else {

        console.log(`No, Marin failed! He was ${(totalTimeOfMartin - timeOfControls).toFixed(3)} second slower.`);

    }
}
skeleton(2, 12, 1200, 10);
skeleton(1, 20, 1546, 12);