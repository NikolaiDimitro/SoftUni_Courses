function tennisRanklist(input) {

    let countTournir = Number(input[0]);
    let beginPoint = Number(input[1]);
    let sum = 0;
    let count = 0;
    let count2 = 0;
    let count3 = 0;
    let total = 0;

    for (let i = 2; i <= countTournir + 2; i++) {

        let coco = input[i];

        if (coco === "W") {

            sum += 2000;
            count++;

        } else if (coco === "F") {

            sum += 1200;
            count2++;

        } else if (coco === "SF") {

            sum += 720;
            count3++;

        }

        total = beginPoint + sum;

    }

    console.log(`Final points: ${total}`);
    console.log(`Average points: ${Math.floor(sum / countTournir)}`);
    console.log(`${(count / countTournir * 100).toFixed(2)}%`);

}
tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);
tennisRanklist(["4", "750", "SF", "W", "SF", "W"]);
tennisRanklist(["7", "1200", "SF", "F", "W", "F", "W", "SF", "W"]);