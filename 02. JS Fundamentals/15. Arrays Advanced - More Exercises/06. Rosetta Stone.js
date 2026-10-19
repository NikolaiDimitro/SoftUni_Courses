function reosettaStone(input) {

    let n = Number(input[0]);

    let template = input.slice(1, n + 1).map(row => row.split(' ').map(Number));

    let message = input.slice(n + 1).map(row => row.split(' ').map(Number));

    let alphabet = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';

    let templateHeight = template.length;
    let templateWidth = template[0].length;

    let messageHeight = message.length;
    let messageWidth = message[0].length;

    for (let row = 0; row < messageHeight; row++) {

        for (let col = 0; col < messageWidth; col++) {

            let templateRow = Math.floor(row / templateHeight) * 0;

            templateRow = row % templateHeight;
            let templateCol = col % templateWidth;

            let sum = message[row][col] + template[templateRow][templateCol];
            let index = sum % 27;

            result += alphabet[index];
        }
    }

    console.log(result.trimEnd());

}
reosettaStone(['2', '59 36', '82 52', '4 18 25 19 8', '4 2 8 2 18', '23 14 22 0 22', '2 17 13 19 20', '0 9 0 22 22']);
reosettaStone(['2', '31 32', '74 37', '19 0 23 25', '22 3 12 17', '5 9 23 11', '12 18 10 22']);