function easterDecoration(input) {

    let countClients = Number(input[0]);
    let index = 0;
    let purchase = input[index];
    let sum = 0;
    let count = 0;
    let totalSum = 0;

    for (let i = 1; i <= countClients; i++) {

        index++;
        purchase = input[index];

        while (purchase !== "Finish") {

            if (purchase === "basket") {

                sum += 1.50;
                count++;

            } else if (purchase === "wreath") {

                sum += 3.80;
                count++;

            } else if (purchase === "chocolate bunny") {

                sum += 7;
                count++;
                
            }

            index++;
            purchase = input[index];

            if (purchase === "Finish") {

                if (count % 2 === 0) {

                    sum *= 0.80;

                }

                console.log(`You purchased ${count} items for ${sum.toFixed(2)} leva.`);
                totalSum += sum;
                sum = 0;
                count = 0;

            }
        }
    }

    console.log(`Average bill per client is: ${(totalSum / countClients).toFixed(2)} leva.`);

}
easterDecoration(["2", "basket", "wreath", "chocolate bunny", "Finish", "wreath", "chocolate bunny", "Finish"]);
easterDecoration(["1", "basket", "wreath", "chocolate bunny", "wreath", "basket", "chocolate bunny", "Finish"]);