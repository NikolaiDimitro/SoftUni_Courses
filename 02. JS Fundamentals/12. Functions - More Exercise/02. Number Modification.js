function numberModification(n) {

    let numb = String(n);
    let countInteger = numb.length;
    let total = 0;

    let average = 0;

    for (let i = 0; i < countInteger; i++) {

        total += Number(numb[i]);

    }

    average = total / countInteger;

    if (average > 5) {

        average = Number(average);

    } else {

        while (average < 5) {

            numb += '9';
            total += 9;
            countInteger++;
            average = total / countInteger;

        }
    }

    console.log(Number(numb));

}
numberModification(101);
numberModification(5835);