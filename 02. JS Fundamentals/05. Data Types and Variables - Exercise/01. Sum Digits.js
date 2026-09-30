function sumDigits(n) {

    let numb = n.toString();
    let sum = 0;

    for (let i = 0; i <= numb.length - 1; i++) {

        let current = Number(numb[i]);
        sum += current;

    }

    console.log(sum);

}
sumDigits(245678);
sumDigits(97561);
sumDigits(543);