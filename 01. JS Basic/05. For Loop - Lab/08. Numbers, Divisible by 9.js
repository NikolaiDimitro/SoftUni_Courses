function numbersDivisibleBy9(numb1, numb2) {


    let sum = 0;

    for (let i = numb1; i <= numb2; i++) {

        if (i % 9 === 0) {

            sum += i;

        }
    }

    console.log(`The sum: ${sum}`)

    for (let i = numb1; i <= numb2; i++) {

        if (i % 9 === 0) {

            console.log(i);

        }

    }
}
numbersDivisibleBy9(100, 200);