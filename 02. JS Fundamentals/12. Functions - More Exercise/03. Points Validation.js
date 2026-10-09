function pointsValidation(arr) {

    let x1 = arr[0];
    let y1 = arr[1];
    let x2 = arr[2];
    let y2 = arr[3];

    let distanceOfX1Y1ToBegin = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
    let distanceOfX2Y2ToBegin = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
    let distanceBetweenX1Y1ToX2Y2 = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

    if (Number.isInteger(distanceOfX1Y1ToBegin)) {

        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);

    } else {

        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);

    }

    if (Number.isInteger(distanceOfX2Y2ToBegin)) {

        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);

    } else {

        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);

    }

    if (Number.isInteger(distanceBetweenX1Y1ToX2Y2)) {

        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);


    } else {

        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);

    }
}
pointsValidation([3, 0, 0, 4]);
pointsValidation([2, 1, 1, 1]);