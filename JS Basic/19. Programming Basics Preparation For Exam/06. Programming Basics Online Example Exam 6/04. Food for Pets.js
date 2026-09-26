function foodAndPets(input) {

    let countDays = Number(input[0]);
    let totalFood = Number(input[1]);

    let totalDogFood = 0;
    let totalCatFood = 0;
    let totalAnimalFood = 0;
    let totalBiscuits = 0;

    let index = 2;

    for (let day = 1; day <= countDays; day++) {

        let dogFood = Number(input[index]);
        let catFood = Number(input[index + 1]);

        let animalFood = dogFood + catFood;

        totalDogFood += dogFood;
        totalCatFood += catFood;
        totalAnimalFood += animalFood;

        if (day % 3 === 0) {
            totalBiscuits += animalFood * 0.10;
        }

        index += 2;

        if (totalAnimalFood >= totalFood) {

            break;

        }
    }

    let foodPercent = totalAnimalFood / totalFood * 100;
    let dogPercent = totalDogFood / totalAnimalFood * 100;
    let catPercent = totalCatFood / totalAnimalFood * 100;

    console.log(`Total eaten biscuits: ${Math.round(totalBiscuits)}gr.`);
    console.log(`${foodPercent.toFixed(2)}% of the food has been eaten.`);
    console.log(`${dogPercent.toFixed(2)}% eaten from the dog.`);
    console.log(`${catPercent.toFixed(2)}% eaten from the cat.`);

}
foodAndPets(["3", "1000", "300", "20", "100", "30", "110", "40"]);
foodAndPets(["3", "500", "100", "30", "110", "25", "120", "35"]);