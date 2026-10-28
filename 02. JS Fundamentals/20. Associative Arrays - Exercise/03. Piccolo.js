function piccolo(arr) {

    let parkingMap = new Map();
    let parkingArr = [];

    arr.map((x) => {

        let [action, carNumber] = x.split(', ');

        if (!parkingMap.has(carNumber) && action === 'IN') {

            parkingMap.set(carNumber);

        } else if (parkingMap.has(carNumber) && action === 'OUT') {

            parkingMap.delete(carNumber);

        }
    });

    if (parkingMap.size === 0) {

        console.log('Parking Lot is Empty');

    } else {

        for (let car of parkingMap) {

            parkingArr.push(car[0]);

        }

        parkingArr.sort((a, b) => a.localeCompare(b));

        for (let car of parkingArr) {

            console.log(car);

        }
    }
}
piccolo(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'IN, CA9999TT', 'IN, CA2866HI', 'OUT, CA1234TA', 'IN, CA2844AA', 'OUT, CA2866HI', 'IN, CA9876HH', 'IN, CA2822UU']);
piccolo(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'OUT, CA1234TA']);