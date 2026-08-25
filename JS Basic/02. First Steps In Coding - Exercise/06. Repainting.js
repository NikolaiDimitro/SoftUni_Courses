function repainting(countNylon, countPaint, countThinner, hoursWork) {

    let moneyForMaterials = (countNylon + 2) * 1.5 + (countPaint * 1.1) * 14.5 + (countThinner * 5) + 0.4;
    let moneyForWorkers = (moneyForMaterials * 0.3) * hoursWork;

    console.log(moneyForMaterials + moneyForWorkers);

}
repainting(10, 11, 4, 8);
repainting(5, 10, 10, 1);