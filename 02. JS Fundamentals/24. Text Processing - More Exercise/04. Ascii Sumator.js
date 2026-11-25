function asciiSumator(arr) {

    let first = arr[0].charCodeAt();
    let second = arr[1].charCodeAt();
    let str = arr[2];

    let sum = 0;

    for (let letter of str) {

        let letterCharCode = letter.charCodeAt();

        if (letterCharCode > first && letterCharCode < second) {

            sum += letterCharCode;

        } else if (letterCharCode > second && letterCharCode < first) {

            sum += letterCharCode;

        }

    }

    console.log(sum);

}
asciiSumator(['.', '@', 'dsg12gr5653feee5']);
asciiSumator(['?', 'E', '@ABCEF']);
asciiSumator(['a', '1', 'jfe392$#@j24ui9ne#@$']);