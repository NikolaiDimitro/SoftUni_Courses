function footbalResult(firstMatch, secondMatch, thirdMatch) {

    let win = 0;
    let draw = 0;
    let lost = 0;

    let homeGoalsForFirstMatch = Number(firstMatch[0]);
    let goalForVisitorsForFirstMatch = Number(firstMatch[2]);

    if (homeGoalsForFirstMatch > goalForVisitorsForFirstMatch) {

        win++;

    } else if (goalForVisitorsForFirstMatch > homeGoalsForFirstMatch) {

        lost++;

    } else {

        draw++;

    }

    let homeGoalsForSecondMatch = Number(secondMatch[0]);
    let goalForVisitorsForSecondMatch = Number(secondMatch[2]);

    if (homeGoalsForSecondMatch > goalForVisitorsForSecondMatch) {

        win++;

    } else if (goalForVisitorsForSecondMatch > homeGoalsForSecondMatch) {

        lost++;

    } else {

        draw++;

    }

    let homeGoalsForThirdMatch = Number(thirdMatch[0]);
    let goalForVisitorsForThirdMatch = Number(thirdMatch[2]);

    if (homeGoalsForThirdMatch > goalForVisitorsForThirdMatch) {

        win++;

    } else if (goalForVisitorsForThirdMatch > homeGoalsForThirdMatch) {

        lost++;

    } else {

        draw++;

    }

    console.log(`Team won ${win} games.`);
    console.log(`Team lost ${lost} games.`);
    console.log(`Drawn games: ${draw}`);

}
footbalResult('3:1', '0:2', '0:0');
footbalResult('4:2', '0:3', '1:0');
footbalResult('0:2', '0:1', '3:3');