function easterCompetition(input) {

    let countKozunaci = Number(input[0]);
    let index = 0;
    let name = input[index];
    let num = Number(input[index]);
    let count = Number.MIN_SAFE_INTEGER;
    let sum = 0;
    let name2 = "";
    let winner = "";
    let count2 = 0;

    for (let i = 1; i <= countKozunaci; i++) {

        index++;
        name = input[index];
        name2 = name
        index++;
        sum = 0;

        while (name !== "Stop") {

            num = Number(input[index]);
            sum += num;
            index++;
            name = input[index];

            if (name === "Stop") {

                console.log(`${name2} has ${sum} points.`);

                if (sum > count) {

                    count2 = sum;

                }
                if (sum > count) {

                    count = sum;
                    winner = name2;
                    console.log(`${name2} is the new number 1!`);

                }
            }
        }
    }

    console.log(`${winner} won competition with ${count2} points!`);

}
easterCompetition(["3", "Chef Manchev", "10", "10", "10", "10", "Stop", "Natalie", "8", "2", "9", "Stop", "George", "9", "2", "4", "2", "Stop"]);
easterCompetition(["2", "Chef Angelov", "9", "9", "9", "Stop", "Chef Rowe", "10", "10", "10", "10", "Stop"]);