function rectangleOfNxNStars(n) {

    let str = '';

    for (let row = 1; row <= n; row++) {

        for (let column = 1; column <= n; column++) {

            str += '*';

        }

        console.log(str);

        str = '';

    }
}
rectangleOfNxNStars(2);
rectangleOfNxNStars(3);
rectangleOfNxNStars(4);