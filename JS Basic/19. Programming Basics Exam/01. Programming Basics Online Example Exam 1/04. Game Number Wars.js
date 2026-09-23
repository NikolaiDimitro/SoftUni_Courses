function gameNumberWars(input) {

    let firstPlayerName = input[0];
    let secondPlayerName = input[1];

    let index = 2;
    let currentInput = input[index];

    let firstNumber = Number(input[index]);
    let secondNumber = Number(input[index + 1]);

    let firstPlayerPoints = 0;
    let secondPlayerPoints = 0;

    while (currentInput !== "End of game") {

        firstNumber = Number(input[index]);
        secondNumber = Number(input[index + 1]);

        if (firstNumber > secondNumber) {

            firstPlayerPoints += (firstNumber - secondNumber);

        } else if (secondNumber > firstNumber) {

            secondPlayerPoints += (secondNumber - firstNumber);

        } else if (firstNumber === secondNumber) {

            index += 2;

            firstNumber = Number(input[index]);
            secondNumber = Number(input[index + 1]);

            if (firstNumber > secondNumber) {

                console.log(`Number wars!`);
                console.log(`${firstPlayerName} is winner with ${firstPlayerPoints} points`);
                break;

            } else if (secondNumber > firstNumber) {

                console.log(`Number wars!`);
                console.log(`${secondPlayerName} is winner with ${secondPlayerPoints} points`);
                break;
            }
        }

        index += 2;
        currentInput = input[index];
    }

    if (currentInput === "End of game") {

        console.log(`${firstPlayerName} has ${firstPlayerPoints} points`);
        console.log(`${secondPlayerName} has ${secondPlayerPoints} points`);

    }
}
gameNumberWars(["Desi", "Niki", "7", "5", "3", "4", "3", "3", "5", "3"]);
gameNumberWars(["Elena", "Simeon", "6", "3", "2", "5", "8", "9", "End of game"]);
gameNumberWars(["Aleks", "Georgi", "4", "5", "3", "2", "4", "3", "4", "4", "5", "2"]);