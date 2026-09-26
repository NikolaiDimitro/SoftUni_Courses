function renovation(input) {
    
    let height = Number(input[0]);
    let width = Number(input[1]);
    let dontPain = Number(input[2]);
    let word = 0;
    let litres = 0;
    let size = height * width * 4;
    let total = size - (dontPain / 100 * size);
    let sum = 0;

    for (let i = 3; i <= input.length - 1; i++) {

        word = input[i];

        if (word === "Tired!") {

            let needMoney = total - sum;
            break;

        }

        litres = Number(input[i]);
        sum += litres;

    }

    if (word === "Tired!") {

        let needMoney = total - sum;
        console.log(`${needMoney} quadratic m left.`);


    } else if (sum > total) {

        let leftMoney = sum - total;
        console.log(`All walls are painted and you have ${leftMoney} l paint left!`);

    } else if (total >= sum) {

        console.log(`All walls are painted! Great job, Pesho!`);

    }
}
renovation(["3", "5", "10", "2", "3", "4", "Tired!"]);
renovation(["2", "3", "25", "6", "7", "8"]);