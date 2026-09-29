function specialNumbers(n) {

    let sum = 0;

    for (let i = 1; i <= n; i++) {

        let current = i.toString();
        let len = current.length;

        for (let f = 0; f <= len; f++) {

            let lastDigit = current % 10;

            current = parseInt(current / 10);
            sum += lastDigit;

        }

        if (sum === 5 || sum === 7 || sum === 11) {

            console.log(`${i} -> True`);

        } else {

            console.log(`${i} -> False`);

        }

        sum = 0;

    }
}
specialNumbers(15);
specialNumbers(20);