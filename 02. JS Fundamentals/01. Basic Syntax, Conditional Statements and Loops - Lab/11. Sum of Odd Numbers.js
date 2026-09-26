function sumOfOddNumbers(n) {

    let count = 0;
    let index = 0;
    let sum = 0;

    while (count < n) {

        if (index % 2 !== 0) {

            console.log(index);
            count++;
            sum += index;

        }

        index++;

    }

    console.log(`Sum: ${sum}`);

}
sumOfOddNumbers(5);
sumOfOddNumbers(3);