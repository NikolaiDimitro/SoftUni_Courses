function harvest(x, y, z, countWorker) {

    let grapes = x * y;
    let grapesForWine = (grapes * 0.4) / 2.5;

    if (grapesForWine >= z) {

        console.log(`Good harvest this year! Total wine: ${Math.floor(grapesForWine)} liters.`);
        console.log(`${Math.ceil(grapesForWine - z)} liters left -> ${Math.ceil((grapesForWine - z) / countWorker)} liters per person.`);

    } else {

        console.log(`It will be a tough winter! More ${Math.floor(z - grapesForWine)} liters wine needed.`);
        console.log(``);

    }
}
harvest(650, 2, 175, 3);
harvest(1020, 1.5, 425, 4);