function squareFrame(n) {

    let str = '';

    for (let row = 1; row <= n; row++) {

        for (let column = 1; column <= n; column++) {

            if (row === 1 || row === n) {

                if (column === 1 || column === n) {

                    str += '+ ';

                } else {

                    str += '- ';

                }

            } else {

                if (column === 1 || column === n) {

                    str += '| ';

                } else {

                    str += '- ';

                }
            }
        }

        console.log(str);
        str = '';

    }
}
squareFrame(3);
squareFrame(4);
squareFrame(5);
squareFrame(6);