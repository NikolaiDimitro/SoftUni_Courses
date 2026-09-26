function vowelsSum(word) {

    let total = 0;

    for (let i = 0; i <= word.length - 1; i++) {

        let letter = word[i];

        if (letter === 'a') {

            total += 1;

        } else if (letter === 'e') {

            total += 2;

        } else if (letter === 'i') {

            total += 3;

        } else if (letter === 'o') {

            total += 4;

        } else if (letter === 'u') {

            total += 5;

        }
    }

    console.log(total);

}
vowelsSum("hello");
vowelsSum("hi");
vowelsSum("bamboo");
vowelsSum("beer");