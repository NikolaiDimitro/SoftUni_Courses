function moving(arr) {

    let index = 3;
    let sizeOfApartment = Number(arr[0]) * Number(arr[1]) * Number(arr[2]);
    let sumOfBoxes = 0;

    while (arr[index] !== 'Done') {

        let box = Number(arr[index]);
        sumOfBoxes += box;

        if (index === arr.length) {

            break;

        }

        index++;

        if (index === arr.length) {

            break;

        }
    }

    if (sumOfBoxes <= sizeOfApartment) {

        console.log(`${sizeOfApartment - sumOfBoxes} Cubic meters left.`);

    } else {

        console.log(`No more free space! You need ${sumOfBoxes - sizeOfApartment} Cubic meters more.`);

    }
}
moving(["10", "10", "2", "20", "20", "20", "20", "122"]);
moving(["10", "1", "2", "4", "6", "Done"]);