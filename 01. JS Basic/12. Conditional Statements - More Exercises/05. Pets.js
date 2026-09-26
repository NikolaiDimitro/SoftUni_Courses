function pets(countDays, leftoverFood, foodForDaysOfDog, foodForDaysOfCat, foodForDaysOfTurtule) {

    let totalFood = (countDays * foodForDaysOfDog) + (countDays * foodForDaysOfCat) + (countDays * (foodForDaysOfTurtule / 1000));

    if (leftoverFood >= totalFood) {

        console.log(`${Math.floor(leftoverFood - totalFood)} kilos of food left.`);

    } else {

        console.log(`${Math.ceil(totalFood - leftoverFood)} more kilos of food are needed.`);

    }
}
pets(2, 10, 1, 1, 1200);
pets(5, 10, 2.1, 0.8, 321);