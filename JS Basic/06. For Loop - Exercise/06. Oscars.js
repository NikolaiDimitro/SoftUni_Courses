function oscars(arr) {

    let actorName = arr[0];
    let pointsFromAcademy = Number(arr[1]);
    let countOfJudges = Number(arr[2]);
    let totalPoints = pointsFromAcademy;

    for (let i = 3; i < countOfJudges * 2 + 3; i += 2) {

        let nameOfJudge = arr[i];
        let pointsFromJudge = Number(arr[i + 1]);

        totalPoints += (nameOfJudge.length * pointsFromJudge) / 2;

        if (totalPoints > 1250.5) {

            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${totalPoints.toFixed(1)}!`);
            return;

        }
    }

    console.log(`Sorry, ${actorName} you need ${(1250.5 - totalPoints).toFixed(1)} more!`);

}
oscars(["Zahari Baharov", "205", 4, "Johnny Depp", "45", "Will Smith", "29", "Jet Lee", "10", "Matthew Mcconaughey", "39"]);
oscars(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"]);