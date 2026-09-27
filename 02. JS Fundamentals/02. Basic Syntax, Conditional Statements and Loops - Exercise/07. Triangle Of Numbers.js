function triangleOfNumbers(n) {

    let print = '';

    for (let row = 1; row <= n; row++) {

        for (let col = 1; col <= row; col++) {

            print += row + ' ';

        }

        console.log(print);
        print = '';

    }
}
triangleOfNumbers(3);
triangleOfNumbers(5);
triangleOfNumbers(6);