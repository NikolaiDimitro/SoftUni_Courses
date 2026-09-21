function squareOfStars(n) {

    let str = '';

    for (let row = 1; row <= n; row++) {

        for (let column = 1; column <= n; column++) {

            str += '* ';

        }

        console.log(str);

        str = '';

    }
}
squareOfStars(2);
squareOfStars(3);
squareOfStars(4);