function nameGame(input) {

    let index = 0;
    let nameOfGamer = input[index];

    let winnerName = "";
    let maxPoints = 0;

    while (nameOfGamer !== "Stop") {

        let points = 0;

        for (let i = 0; i < nameOfGamer.length; i++) {

            index++;
            let number = Number(input[index]);

            if (number === nameOfGamer.charCodeAt(i)) {
                points += 10;
            } else {
                points += 2;
            }
        }

        if (points >= maxPoints) {
            maxPoints = points;
            winnerName = nameOfGamer;
        }

        index++;
        nameOfGamer = input[index];
    }

    console.log(`The winner is ${winnerName} with ${maxPoints} points!`);
    
}
nameGame(["Ivan", "73", "20", "98", "110", "Ivo", "80", "65", "87", "Stop"]);
nameGame(["Pesho", "124", "34", "111", "97", "99", "Gosho", "98", "124", "88", "76", "18", "Stop"]);