function orders(order, quantity) {

    let total = 0;

    if (order === 'coffee') {

        total = quantity * 1.5;

    } else if (order === 'water') {

        total = quantity * 1;

    } else if (order === 'coke') {

        total = quantity * 1.4;

    } else if (order === 'snacks') {

        total = quantity * 2;

    }

    console.log(total.toFixed(2));

}
orders("water", 5);
orders("coffee", 2);