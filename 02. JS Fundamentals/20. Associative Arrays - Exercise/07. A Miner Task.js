function aMinerTask(arr) {

    let index = 0;
    let mineralsObj = {};

    while (index < arr.length) {

        let mineral = arr[index];

        index++;

        let quantity = Number(arr[index]);

        if (!mineralsObj.hasOwnProperty(mineral)) {

            mineralsObj[mineral] = quantity;

        } else {

            mineralsObj[mineral] += quantity;

        }

        index++;

    }

    for (let mineral in mineralsObj) {

        console.log(`${mineral} -> ${mineralsObj[mineral]}`);

    }
}
aMinerTask(['Gold', '155', 'Silver', '10', 'Copper', '17']);
aMinerTask(['gold', '155', 'silver', '10', 'copper', '17', 'gold', '15']);