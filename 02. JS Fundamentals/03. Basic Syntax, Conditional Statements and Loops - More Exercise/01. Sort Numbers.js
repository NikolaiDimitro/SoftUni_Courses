function sortNumbers(first, second, third) {

    if (first >= second && first >= third) {

        console.log(first);

        if (second >= third) {

            console.log(second);
            console.log(third);

        } else {

            console.log(third);
            console.log(second);

        }

    } else if (second >= first && second >= third) {

        console.log(second);

        if (first >= third) {

            console.log(first);
            console.log(third);

        } else {

            console.log(third);
            console.log(first);

        }

    } else {

        console.log(third);

        if (first >= second) {

            console.log(first);
            console.log(second);

        } else {

            console.log(second);
            console.log(first);

        }
    }
}
sortNumbers(2, 1, 3);
sortNumbers(-2, 1, 3);
sortNumbers(0, 0, 2);