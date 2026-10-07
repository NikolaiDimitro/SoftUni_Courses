function palindromeIntegers(arr) {

    for (let i = 0; i < arr.length; i++) {

        arr[i] = String(arr[i]);

    }

    for (let i = 0; i < arr.length; i++) {

        let current = arr[i];
        let str = '';

        for (let j = current.length - 1; j >= 0; j--) {

            str += `${current[j]}`;

        }

        if (str === current) {

            console.log(true);

        } else {

            console.log(false);

        }
    }
}
palindromeIntegers([123, 323, 421, 121]);
palindromeIntegers([32, 2, 232, 1010]);