function tennisRanklist(arr) {

    let countTournaments = Number(arr[0]);
    let startPoint = Number(arr[1]);
    let pointsEarned = 0;
    let totalPoints = startPoint;
    let countWins = 0;

    for (let i = 2; i <= countTournaments + 1; i++) {

        if (arr[i] === 'W') {

            pointsEarned += 2000;
            totalPoints += 2000;
            countWins++;

        } else if (arr[i] === 'F') {

            pointsEarned += 1200;
            totalPoints += 1200;

        } else {

            pointsEarned += 720;
            totalPoints += 720;

        }
    }

    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${Math.floor(pointsEarned / countTournaments)}`);
    console.log(`${((countWins / countTournaments) * 100).toFixed(2)}%`);

}
tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);
tennisRanklist(["4", "750", "SF", "W", "SF", "W"])