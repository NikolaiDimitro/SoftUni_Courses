function movieStars(input) {

    let budget = Number(input[0]);
    let salary = 0;

    for (let i = 1; i <= input.length; i++) {

        let name = input[i];

        if (name === "ACTION") {

            break;

        }

        let symbol = name.length;

        if (symbol > 15) {

            salary = budget * 0.20;
            budget -= salary;

        } else {

            salary = Number(input[i + 1]);
            budget -= salary;
            i++;

        }

        if (budget <= 0) {

            let needBudget = 0 - budget;
            console.log(`We need ${needBudget.toFixed(2)} leva for our actors.`);
            break;

        }
    }

    if (budget > 0) {

        console.log(`We are left with ${budget.toFixed(2)} leva.`);

    }
}
movieStars(["90000","Christian Bale","70000.50","Leonard DiCaprio","Kevin Spacey","24000.99"]);
movieStars(["90000","Christian Bale","70000.50","Leonard DiCaprio","Kevin Spacey","24000.99"])