function sumOfNumbers(str) {

    let total = 0;

    for (let i = 0; i <= str.length - 1; i++) {

        let numb = Number(str[i]);
        total += numb

    }

    console.log(`The sum of the digits is:${total}`)

}
sumOfNumbers("1234");
sumOfNumbers("564891");