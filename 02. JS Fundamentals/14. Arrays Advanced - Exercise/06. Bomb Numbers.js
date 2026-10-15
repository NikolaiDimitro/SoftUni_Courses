function bombNumbers(sequence, bombArr) {

    let bombNumber = bombArr[0];
    let power = bombArr[1];

    while (sequence.includes(bombNumber)) {

        let index = sequence.indexOf(bombNumber);

        let start = Math.max(0, index - power);
        let count = Math.min(sequence.length - 1, index + power) - start + 1;

        sequence.splice(start, count);

    }

    let sum = 0;

    for (let number of sequence) {

        sum += number;

    }

    console.log(sum);

}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);