function trainingLab(h, w) {

    let widthInCM = (w * 100) - 100;
    let deskInRow = Math.floor(widthInCM / 70);

    let length = h * 100;
    let row = Math.floor(length / 120);

    let totalDesk = deskInRow * row - 3;

    console.log(totalDesk);

}
trainingLab(15, 8.9);
trainingLab(8.4, 5.2);