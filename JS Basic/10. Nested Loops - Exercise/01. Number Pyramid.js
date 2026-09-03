function numberPyramid(n) {

    let current = 1;
    let isBigger = false;
    let printCurrentLine = '';

    for (let r = 1; r <= n; r++) {

        for (let c = 1; c <= r; c++) {

            if (current > n) {

                isBigger = true;
                break;

            }

            printCurrentLine += current + " ";
            current++;

        }

        console.log(printCurrentLine);
        printCurrentLine = '';

        if (isBigger) {

            break;

        }
    }
}
numberPyramid(7);
numberPyramid(12);
numberPyramid(15);