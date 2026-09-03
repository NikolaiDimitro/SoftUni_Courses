function coins(rest) {

    let index = 0;
    let count = 0;

    while (rest !== 0) {

        if (rest >= 2) {

            rest -= 2;
            count++;

        } else if (rest >= 1 && rest < 2) {

            rest -= 1;
            count++;

        } else if (rest >= 0.5 && rest < 1) {

            rest -= 0.5;
            count++;

        } else if (rest >= 0.2 && rest < 0.5) {

            rest -= 0.2;
            count++;

        } else if (rest >= 0.1 && rest < 0.2) {

            rest -= 0.1;
            count++;

        } else if (rest >= 0.05 && rest < 0.1) {

            rest -= 0.05;
            count++;

        } else if (rest >= 0.02 && rest < 0.05) {

            rest -= 0.02;
            count++;

        } else if (rest >= 0.01 && rest < 0.02) {

            rest -= 0.01;
            count++;

        }

        rest = rest.toFixed(2);
        rest = Number(rest);
        index++;

    }

    console.log(count);

}
coins(1.23);
coins(2);
coins(0.56);
coins(2.73);