function club(input) {

    let wannaMoney = Number(input[0]);
    let name = 0;
    let price = 0;
    let total = 0;

    for (let i = 1; i <= input.length; i += 2) {

        name = input[i];

        if (i >= input.length) {

            break;

        }

        let length = name.length
        let numb = Number(input[i + 1]);

        if (name === "Party!") {

            let needMoney = wannaMoney - total;
            console.log(`We need ${needMoney.toFixed(2)} leva more.`);
            break;

        }

        price = length * numb;

        if (price % 2 !== 0) {

            price *= 0.75

        }

        total += price

    }

    if (wannaMoney <= total) {

        console.log(`Target acquired.`);

    }

    console.log(`Club income - ${total.toFixed(2)} leva.`);

}
club(["500", "Bellini", "6", "Bamboo", "7", "Party!"]);
club(["100", "Sidecar", "7", "Mojito", "5", "White Russian", "10"]);