function tournamentOfChristmas(input) {

    let days = Number(input[0]);
    let index = 1;

    let totalMoney = 0;
    let winningDays = 0;
    let losingDays = 0;

    for (let day = 1; day <= days; day++) {

        let wins = 0;
        let losses = 0;
        let dailyMoney = 0;
        let sport = input[index];

        while (sport !== "Finish") {

            let result = input[index + 1];

            if (result === "win") {

                wins++;
                dailyMoney += 20;

            } else {

                losses++;

            }

            index += 2;
            sport = input[index];

        }

        if (wins > losses) {

            dailyMoney *= 1.10;
            winningDays++;

        } else {

            losingDays++;

        }

        totalMoney += dailyMoney;
        index++;

    }

    if (winningDays > losingDays) {

        totalMoney *= 1.20;
        console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);

    } else {

        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);

    }
}
tournamentOfChristmas(["2", "volleyball", "win", "football", "lose", "basketball", "win", "Finish", "golf", "win", "tennis", "win", "badminton", "win", "Finish"]);
tournamentOfChristmas(["3", "darts", "lose", "handball", "lose", "judo", "win", "Finish", "snooker", "lose", "swimming", "lose", "squash", "lose", "table tennis", "win", "Finish", "volleyball", "win", "basketball", "win", "Finish"]);