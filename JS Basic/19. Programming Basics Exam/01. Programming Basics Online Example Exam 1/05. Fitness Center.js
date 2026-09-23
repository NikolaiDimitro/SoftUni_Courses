function fitnessCenter(input) {

    let countPosetiteli = Number(input[0]);
    let totalcount = 0;
    let totalcount2 = 0;
    let back = 0;
    let chest = 0;
    let legs = 0;
    let abs = 0;
    let proteinShake = 0;
    let proteinBar = 0;

    for (let i = 1; i <= countPosetiteli; i++) {

        let coco = input[i];

        if (coco === "Back") {

            back++;
            totalcount++;

        } else if (coco === "Chest") {

            chest++;
            totalcount++;

        } else if (coco === "Legs") {

            legs++;
            totalcount++;

        } else if (coco === "Abs") {

            abs++;
            totalcount++;

        } else if (coco === "Protein shake") {

            proteinShake++;
            totalcount2++;

        } else if (coco === "Protein bar") {

            proteinBar++;
            totalcount2++;

        }
    }

    console.log(`${back} - back`);
    console.log(`${chest} - chest`);
    console.log(`${legs} - legs`);
    console.log(`${abs} - abs`);
    console.log(`${proteinShake} - protein shake`);
    console.log(`${proteinBar} - protein bar`);
    console.log(`${(totalcount / countPosetiteli * 100).toFixed(2)}% - work out`);
    console.log(`${(totalcount2 / countPosetiteli * 100).toFixed(2)}% - protein`);

}
fitnessCenter(["10", "Back", "Chest", "Legs", "Abs", "Protein shake", "Protein bar", "Protein shake", "Protein bar", "Legs", "Abs"]);
fitnessCenter(["7", "Chest", "Back", "Legs", "Legs", "Abs", "Protein shake", "Protein bar"]);