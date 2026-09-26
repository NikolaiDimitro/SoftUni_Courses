function bestPlayer(input) {

    let index = 0;
    let name = 0;
    let score = Number(input[index]);
    let max = Number.MIN_SAFE_INTEGER
    let golMaistor = ""

    while (index <= input.length - 1) {

        if (name > input.length - 1 && score > input.length - 1) {

            break;

        }

        name = input[index];

        if (index === "END" || name === "END") {

            break;

        }

        index++;
        score = Number(input[index]);

        if (score > max) {

            max = score;
            golMaistor = input[index - 1];

        }

        index++;

    }
    if (max >= 3) {

        console.log(`${golMaistor} is the best player!`);
        console.log(`He has scored ${max} goals and made a hat-trick !!!`);

    } else {

        console.log(`${golMaistor} is the best player!`);
        console.log(`He has scored ${max} goals.`);

    }
}
bestPlayer(["Neymar", "2", "Ronaldo", "1", "Messi", "3", "END"]);
bestPlayer(["Silva", "5", "Harry Kane", "10"]);
bestPlayer(["Rooney", "1", "Junior", "2", "Paolinio", "2", "END"]);
bestPlayer(["Petrov", "2", "Drogba", "11"]);
bestPlayer(["Zidane", "1", "Felipe", "2", "Johnson", "4", "END"]);