function train(arr) {

    let passanger = arr[0].split(' ').map(x => Number(x));
    let maxPassangerForOneWagon = Number(arr[1]);
    let total = 0;

    for (let i = 2; i < arr.length; i++) {

        let current = arr[i];

        if (arr[i].includes('Add')) {

            let [command, pass] = current.split(' ');

            passanger.push(Number(pass));


        } else {

            for (let i = 0; i < passanger.length; i++) {

                let currentPassanger = passanger[i];
                current = Number(current);

                if (maxPassangerForOneWagon - current >= currentPassanger) {

                    total = currentPassanger + current;
                    passanger[i] = total;
                    break;

                }
            }
        }
    }

    console.log(passanger.join(' '));

}
train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);
train(['0 0 0 10 2 4', '10', 'Add 10', '10', '10', '10', '8', '6']);