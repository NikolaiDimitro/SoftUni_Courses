function building(countFloors, countRooms) {

    for (let f = countFloors; f >= 1; f--) {

        let str = '';

        for (let r = 0; r < countRooms; r++) {

            if (f === countFloors) {

                str += `L${f}${r} `;

            }

            if (f % 2 === 1 && f !== countFloors) {

                str += `A${f}${r} `;

            } else if (f % 2 === 0 && f !== countFloors) {

                str += `O${f}${r} `;

            }
        }

        console.log(str);

    }
}
building(6, 4);
building(9, 5);