function suitcasesLoad(input) {
    
    let capacitet = Number(input[0]);
    let index = 1;
    let end = input[index];
    let bags = Number(input[index]);
    let sum = 0;
    let count = 0;

    while (end !== "End") {

        bags = Number(input[index]);
        count++;

        if (count === 3) {

            bags *= 1.10;

        }

        sum += bags;

        if (sum > capacitet) {

            count--;
            break;

        }

        index++;
        end = input[index];

    }

    if (end === "End") {

        console.log(`Congratulations! All suitcases are loaded!`);

    } else if (sum > capacitet) {

        console.log(`No more space!`);

    }

    console.log(`Statistic: ${count} suitcases loaded.`);

}
suitcasesLoad(["550", "100", "252", "72", "End"]);
suitcasesLoad(["700.5", "180", "340.6", "126", "220"]);
suitcasesLoad(["1200.2", "260", "380.5", "125.6", "305", "End"]);