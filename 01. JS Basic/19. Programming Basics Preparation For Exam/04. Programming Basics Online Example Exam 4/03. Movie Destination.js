function movieDestionation(budget, destination, season, countDays) {

    let sum = 0;

    switch (destination) {

        case "Dubai":

            if (season === "Winter") {

                sum += countDays * 45000;

            } else if (season === "Summer") {

                sum += countDays * 40000;

            }

            break;

        case "Sofia":

            if (season === "Winter") {

                sum += countDays * 17000;

            } else if (season === "Summer") {

                sum += countDays * 12500;

            }

            break;

        case "London":

            if (season === "Winter") {

                sum += countDays * 24000;

            } else if (season === "Summer") {

                sum += countDays * 20250;

            }

            break;

    }

    if (destination === "Dubai") {

        sum *= 0.7;

    } else if (destination === "Sofia") {

        sum *= 1.25;

    }
    if (budget >= sum) {

        let leftMoney = budget - sum;
        console.log(`The budget for the movie is enough! We have ${leftMoney.toFixed(2)} leva left!`);

    } else if (budget < sum) {

        let needMoney = sum - budget;
        console.log(`The director needs ${needMoney.toFixed(2)} leva more!`);

    }
}
movieDestionation(400000,'Sofia','Winter',20);
movieDestionation(1000000,'Dubai','Summer',5);
movieDestionation(200000,'London','Summer',7);