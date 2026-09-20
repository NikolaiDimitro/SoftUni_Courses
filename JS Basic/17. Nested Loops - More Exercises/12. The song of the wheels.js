function theSongOfTheWheels(m) {

    let count = 0;
    let password = '';
    let str = '';

    for (let a = 1; a <= 9; a++) {

        for (let b = 1; b <= 9; b++) {

            for (let c = 1; c <= 9; c++) {

                for (let d = 1; d <= 9; d++) {

                    if (a < b && c > d && (a * b + c * d) === m) {

                        str += `${a}${b}${c}${d} `;
                        count++;

                        if (count === 4) {

                            password = `${a}${b}${c}${d}`;

                        }
                    }
                }
            }
        }
    }


    console.log(str);

    if (count >= 4) {

        console.log(`Password: ${password}`);

    } else {

        console.log(`No!`);

    }
}
// theSongOfTheWheels(11);
// theSongOfTheWheels(139);
// theSongOfTheWheels(110);
theSongOfTheWheels(55);