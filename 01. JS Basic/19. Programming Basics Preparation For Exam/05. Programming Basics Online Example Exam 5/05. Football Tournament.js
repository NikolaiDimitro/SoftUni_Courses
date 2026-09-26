function footballTournament(input) {

    let name = input[0];
    let index = 2;
    let countMatch = Number(input[1]);
    let current = input[index];
    let sum = 0;
    let count = 0;
    let numb1 = 0;
    let numb2 = 0;

    while (current !== index.length) {

        if (current === "W") {

            sum += 3;
            count++;

        } else if (current === "D") {

            sum += 1;
            numb1++;

        } else {

            sum += 0;
            numb2++;

        }

        index++;
        current = input[index];

    }

    if (countMatch === 0) {

        console.log(`${name} hasn't played any games during this season.`);

    } else {

        console.log(`${name} has won ${sum} points during this season.`);
        console.log(`Total stats:`);
        console.log(`## W: ${count}`);
        console.log(`## D: ${numb1}`);
        console.log(`## L: ${numb2}`);
        console.log(`Win rate: ${(count / countMatch * 100).toFixed(2)}%`);

    }
}
footballTournament(["Liverpool", "10", "W", "D", "D", "W", "L", "W", "D", "D", "W", "W"]);
footballTournament(["Barcelona", "7", "W", "D", "L", "L", "W", "W", "D"]);
footballTournament(["Chelsea", "0"]);