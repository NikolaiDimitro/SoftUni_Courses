function housePainting(x, y, h) {

    let areOfFrontAndBackWall = 2 * (x * x) - (1.2 * 2);
    let areaOfsideWalls = 2 * (x * y) - 2 * (1.5 * 1.5);
    let totalAreaOfAllWalls = areOfFrontAndBackWall + areaOfsideWalls;
    let totalGreenPain = (totalAreaOfAllWalls / 3.4).toFixed(2);

    let frontAndRearOfTheRoof = 2 * (x * y);
    let sideOfTheRoof = 2 * (x * h / 2);
    let totalAreaOfRoof = (frontAndRearOfTheRoof + sideOfTheRoof).toFixed(2);
    let totalRedPain = (totalAreaOfRoof / 4.3).toFixed(2);

    console.log(totalGreenPain);
    console.log(totalRedPain);

}
housePainting(6, 10, 5.2);