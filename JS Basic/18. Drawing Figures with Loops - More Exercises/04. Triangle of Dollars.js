function triangleOfDollars(n) {

    let str = '';

    for (let row = 1; row <= n; row++) {

        for (let column = 1; column <= row; column++) {

            str += '$ ';

        }

        console.log(str);

        str = '';

    }
}
triangleOfDollars(2);
triangleOfDollars(3);
triangleOfDollars(4);
triangleOfDollars(5);