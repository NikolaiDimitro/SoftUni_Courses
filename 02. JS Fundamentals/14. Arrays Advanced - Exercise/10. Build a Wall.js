function buildAWall(arr) {

    let minNumb = Number.MAX_SAFE_INTEGER;
    let countFootsForEachDay = 0;
    let totalFoot = 0;
    let concrete = 0;
    let concrateForEachDayArr = [];

    arr.map(x => {

        if (x < minNumb) {

            minNumb = x;

        }

    });

    let difference = 30 - minNumb;

    for (let i = 1; i <= difference; i++) {

        for (let i = 0; i < arr.length; i++) {

            if (arr[i] < 30) {

                arr[i]++;
                countFootsForEachDay++;

            }
        }

        totalFoot += countFootsForEachDay;
        concrete = countFootsForEachDay * 195;

        concrateForEachDayArr.push(concrete);
        countFootsForEachDay = 0;

    }

    console.log(concrateForEachDayArr.join(', '));
    console.log(`${totalFoot * 1900 * 195} pesos`);

}
buildAWall([21, 25, 28]);
buildAWall([17]);
buildAWall([17, 22, 17, 19, 17]);