function nXnMatrix(n) {

    let print = '';

    for (let row = 0; row < n; row++) {

        for (let col = 0; col < n; col++) {

            print += n + ' ';

        }

        console.log(print);
        print = '';

    }
}
nXnMatrix(3);
nXnMatrix(7);
nXnMatrix(2);