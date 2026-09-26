function easterShop(input) {

    let begin = Number(input[0])
    let index = 1;
    let action = input[index];
    let egg = Number(input[index]);
    let sum = 0;

    while (action !== "Close") {

        index++;

        egg = Number(input[index]);

        if (action === "Buy") {

            if (begin >= egg) {

                sum += egg;
                begin -= egg;

            } else if (begin <= egg) {

                console.log(`Not enough eggs in store!`);
                console.log(`You can buy only ${begin}.`);
                break;

            }

        } else if (action === "Fill") {

            begin += egg;

        }

        index++;
        action = input[index];

    }

    if (action === "Close") {

        console.log(`Store is closed!`);
        console.log(`${sum} eggs sold.`);

    }
}
easterShop(["13", "Buy", "8", "Fill", "3", "Buy", "10"]);
easterShop(["20", "Fill", "30", "Buy", "15", "Buy", "20", "Close"]);