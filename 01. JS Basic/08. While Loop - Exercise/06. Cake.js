function cake(arr) {

    let index = 2;
    let widthOfCake = Number(arr[0]);
    let heightOfCake = Number(arr[1]);
    let sizeOfCake = widthOfCake * heightOfCake;
    let sumOfPartsOfCake = 0;

    while (arr[index] !== 'STOP') {

        let partsOfCake = Number(arr[index]);
        sumOfPartsOfCake += partsOfCake;

        index++;

        if (index === arr.length) {

            break;

        }
    }

    if (sumOfPartsOfCake <= sizeOfCake) {

        console.log(`${sizeOfCake - sumOfPartsOfCake} pieces are left.`);

    } else {

        console.log(`No more cake left! You need ${sumOfPartsOfCake - sizeOfCake} pieces more.`);

    }
}
cake(["10", "10", "20", "20", "20", "20", "21"]);
cake(["10", "2", "2", "4", "6", "STOP"]);