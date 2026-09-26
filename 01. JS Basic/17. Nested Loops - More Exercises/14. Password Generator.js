function passwordGenerator(n, l) {

    let str = '';

    for (let a = 1; a <= n; a++) {

        for (let b = 1; b <= n; b++) {

            for (let c = 97; c <= 97 + l - 1; c++) {

                for (let d = 97; d <= 97 + l - 1; d++) {

                    for (let e = 1; e <= n; e++) {

                        let cLetter = String.fromCharCode(c);
                        let dLetter = String.fromCharCode(d);

                        if (e > a && e > b) {

                            str += `${a}${b}${cLetter}${dLetter}${e} `;

                        }
                    }
                }
            }
        }
    }

    console.log(str);

}
passwordGenerator(2, 4);
passwordGenerator(3, 1);
passwordGenerator(3, 2);
passwordGenerator(4, 2);