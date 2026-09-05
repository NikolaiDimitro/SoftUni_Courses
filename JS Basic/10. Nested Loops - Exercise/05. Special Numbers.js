function specialNumbers(n) {

    let isDevider = true;
    let newStr = '';

    for (let i = 1111; i <= 9999; i++) {

        let str = '' + i;

        for (let k = 0; k <= str.length - 1; k++) {

            let numb = Number(str[k]);

            if (n % numb !== 0) {

                isDevider = false;
                break;

            }

        }

        if (isDevider) {

            newStr += i + ' ';

        }

        isDevider = true;

    }

    console.log(newStr);

}
specialNumbers(3);
specialNumbers(11);
specialNumbers(16);