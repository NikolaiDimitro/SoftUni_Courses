function rhombusOfStars(n) {

    let str = '';
    let intervals = '';

    for (let row = 1; row <= n; row++) {

        for (let i = 1; i <= n - row; i++) {

            intervals += ' ';

        }

        str += intervals + '*';

        for (let i = 1; i <= row - 1; i++) {

            str += ' *';

        }

        console.log(str);

        str = '';
        intervals = '';

    }

    for (let row = n - 1; row >= 1; row--) {


        for (let i = 1; i <= n - row; i++) {

            intervals += ' ';

        }

        str += intervals + '*';

        for (let i = 1; i <= row - 1; i++) {

            str += ' *';

        }

        console.log(str);

        str = '';
        intervals = '';

    }
}
rhombusOfStars(1);
rhombusOfStars(2);
rhombusOfStars(3);
rhombusOfStars(4);