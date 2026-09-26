function darts(input) {

    let playerName = input[0];
    let remainingPoints = 301;
    let index = 1;

    let successfulShots = 0;
    let unsuccessfulShots = 0;

    while (input[index] !== "Retire") {

        let shotType = input[index];
        let points = Number(input[index + 1]);
        let shotPoints = 0;

        if (shotType === "Triple") {

            shotPoints = points * 3;

        } else if (shotType === "Double") {

            shotPoints = points * 2;

        } else if (shotType === "Single") {

            shotPoints = points;
        }

        if (shotPoints <= remainingPoints) {

            remainingPoints -= shotPoints;
            successfulShots++;

        } else {

            unsuccessfulShots++;

        }

        if (remainingPoints === 0) {

            console.log(`${playerName} won the leg with ${successfulShots} shots.`);
            break;

        }

        index += 2;
    }

    if (input[index] === "Retire") {

        console.log(`${playerName} retired after ${unsuccessfulShots} unsuccessful shots.`);

    }
}
darts(["Michael van Gerwen", "Triple", "20", "Triple", "19", "Double", "10", "Single", "3", "Single", "1", "Triple", "20", "Triple", "20", "Double", "20"])
darts(["Stephen Bunting", "Triple", "20", "Triple", "20", "Triple", "20", "Triple", "20", "Triple", "20", "Triple", "20", "Double", "7", "Single", "12", "Double", "1", "Single", "1"])
darts(["Rob Cross", "Triple", "20", "Triple", "20", "Triple", "20", "Triple", "20", "Double", "20", "Triple", "20", "Double", "5", "Triple", "10", "Double", "6", "Retire"]) 