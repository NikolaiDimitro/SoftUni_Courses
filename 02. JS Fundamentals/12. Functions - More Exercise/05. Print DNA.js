function printDNA(n) {

    let letters = 'ATCGTTAGGG';
    let index = 0;

    for (let row = 0; row < n; row++) {

        let first = letters[index % letters.length];
        index++;

        let second = letters[index % letters.length];
        index++;

        let line = '';

        if (row % 4 === 0) {

            line = `**${first}${second}**`;

        } else if (row % 4 === 1) {

            line = `*${first}--${second}*`;

        } else if (row % 4 === 2) {

            line = `${first}----${second}`;

        } else {

            line = `*${first}--${second}*`;

        }

        console.log(line);

    }
}
printDNA(4);
printDNA(10);