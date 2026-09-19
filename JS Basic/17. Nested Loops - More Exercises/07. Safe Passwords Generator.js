function safePasswordGenerator(a, b, maxGeneratedPassword) {

    let count = 0;
    let str = '';

    for (let x = 1; x <= a; x++) {

        for (let y = 1; y <= b; y++) {

            let firstLetter = String.fromCharCode(35 + count % 21);
            let secondLetter = String.fromCharCode(64 + count % 33);

            let password = `${firstLetter}${secondLetter}${x}${y}${secondLetter}${firstLetter}`;

            str += password + '|';

            count++;

            if (count >= maxGeneratedPassword) {

                console.log(str);
                return;

            }
        }
    }

    console.log(str);

}
safePasswordGenerator(2, 3, 10);
safePasswordGenerator(20, 50, 10);