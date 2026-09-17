function carNumber(startingNumber, enduingNumber) {

    let str = '';

    for (let a = startingNumber; a <= enduingNumber; a++) {

        for (let b = startingNumber; b <= enduingNumber; b++) {

            for (let c = startingNumber; c <= enduingNumber; c++) {

                for (let d = startingNumber; d <= enduingNumber; d++) {

                    if (a % 2 === 0 && d % 2 !== 0 && a > d && (b + c) % 2 === 0 || d % 2 === 0 && a % 2 !== 0 && a > d && (b + c) % 2 === 0) {

                        str += `${a}${b}${c}${d} `;

                    }
                }
            }
        }
    }

    console.log(str);

}
carNumber(2, 3);
carNumber(3, 5);
carNumber(5, 8);