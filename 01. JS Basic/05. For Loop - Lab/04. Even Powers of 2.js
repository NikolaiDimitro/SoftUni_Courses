function evenPowersOf2(numb) {

    let result = 2;

    for (let i = 0; i <= numb; i++) {

        if (i === 0) {

            result = 2 ** i;
            console.log(result);
            result = 2;
            continue;

        }

        if (i % 2 === 0) {

            result = 2 ** i;
            console.log(result);

        }
    }
}
evenPowersOf2(3);
evenPowersOf2(4);
evenPowersOf2(5);
evenPowersOf2(6);
evenPowersOf2(7);