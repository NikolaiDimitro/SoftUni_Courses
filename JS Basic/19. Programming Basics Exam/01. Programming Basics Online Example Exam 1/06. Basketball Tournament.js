function basketballTournament2(input) {

    let index = 0;
    let nameOfTornament = input[index];
    let name = nameOfTornament;
    let first = 0;
    let second = 0;
    let totalMatch = 0;
    let win = 0;
    let lose = 0;
    let num = 0
    let countMatch = 0;
    let difernet = 0;
    let diferent2 = 0;

    while (nameOfTornament !== "End of tournaments") {

        nameOfTornament = input[index];
        name = nameOfTornament;
        index++;
        countMatch = Number(input[index]);
        index++
        num = 0;

        for (let i = 1; i <= countMatch; i++) {

            first = Number(input[index]);
            index++;
            second = Number(input[index]);

            if (first > second) {

                totalMatch++;
                win++;
                num++;
                difernet = first - second;
                console.log(`Game ${num} of tournament ${nameOfTornament}: win with ${difernet} points.`);
                index++

            } else if (first < second) {

                totalMatch++;
                lose++;
                num++;
                diferent2 = second - first;
                console.log(`Game ${num} of tournament ${nameOfTornament}: lost with ${diferent2} points.`);
                index++;

            }
        }

        if (nameOfTornament === "End of tournaments") {

            console.log(`${(win / totalMatch * 100).toFixed(2)}% matches win`);
            console.log(`${(lose / totalMatch * 100).toFixed(2)}% matches lost`);

        }
    }
}
basketballTournament2(["Dunkers", "2", "75", "65", "56", "73", "Fire Girls", "3", "67", "34", "83", "98", "66", "45", "End of tournaments"]);
basketballTournament2(["Ballers", "3", "87", "63", "56", "65", "75", "64", "Sharks", "4", "64", "76", "65", "86", "68", "99", "45", "78", "End of tournaments"]);