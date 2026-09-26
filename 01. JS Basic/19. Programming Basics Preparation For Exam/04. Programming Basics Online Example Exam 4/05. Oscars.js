function oscars(input) {

    let nameActor = input[0];
    let academyPoint = Number(input[1]);
    let countjudge = Number(input[2]);

    for (let i = 3; i < input.length; i += 2) {

        let judgeName = input[i];
        let pointJudge = Number(input[i + 1]);
        let pointWonPerJudge = judgeName.length * pointJudge / 2;
        academyPoint += pointWonPerJudge;

        if (academyPoint > 1250.5) {

            console.log(`Congratulations, ${nameActor} got a nominee for leading role with ${academyPoint.toFixed(1)}!`);
            break;

        }
    }

    if (academyPoint <= 1250.5) {

        let needPoint = 1250.5 - academyPoint;
        console.log(`Sorry, ${nameActor} you need ${needPoint.toFixed(1)} more!`)

    }
}
oscars((["Zahari Baharov", "205", "4", "Johnny Depp", "45", "Will Smith", "29", "Jet Lee", "10", "Matthew Mcconaughey", "39"]));
oscars(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"]);