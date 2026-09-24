function easterEggsBattle(input) {

    let firstPlayer = Number(input[0]);
    let secondPlayer = Number(input[1]);

    for (let index = 2; index < input.length; index++) {

        let winner = input[index];

        if (winner === "End") {

            console.log(`Player one has ${firstPlayer} eggs left.`);
            console.log(`Player two has ${secondPlayer} eggs left.`);
            break;

        }

        if (winner === "one") {

            secondPlayer--;

        } else if (winner === "two") {

            firstPlayer--;

        }

        if (firstPlayer === 0) {

            console.log(`Player one is out of eggs. Player two has ${secondPlayer} eggs left.`);
            break;

        }

        if (secondPlayer === 0) {

            console.log(`Player two is out of eggs. Player one has ${firstPlayer} eggs left.`);
            break;

        }
    }
}
easterEggsBattle(["5", "4", "one", "two", "one", "two", "two", "End "])
easterEggsBattle(["2", "6", "one", "two", "two "]);
easterEggsBattle((["6", "3", "one", "two", "two", "one", "one"]));