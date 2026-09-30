function binaryToDecimal(binary) {

    let position = 0;
    let sum = 0;

    for (let i = binary.length - 1; i >= 0; i--) {

        let number = Number(binary[i]);
        sum += number * Math.pow(2, position);
        position++;

    }

    console.log(sum);

}
binaryToDecimal('00001001');
binaryToDecimal('11110000');