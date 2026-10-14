function houseParty(arr) {

    let listOfGuests = [];

    for (let i = 0; i < arr.length; i++) {

        let currentGuest = arr[i].split(' ');

        if (currentGuest.includes('not')) {

            if (listOfGuests.includes(currentGuest[0])) {

                let index = listOfGuests.indexOf(currentGuest[0]);
                listOfGuests.splice(index, 1);

            } else {

                console.log(`${currentGuest[0]} is not in the list!`);


            }

        } else {

            if (listOfGuests.includes(currentGuest[0])) {

                console.log(`${currentGuest[0]} is already in the list!`);


            } else {

                listOfGuests.push(currentGuest[0]);

            }
        }
    }

    for (let guest of listOfGuests) {

        console.log(guest);

    }
}
houseParty(['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!']);
houseParty(['Tom is going!', 'Annie is going!', 'Tom is going!', 'Garry is going!', 'Jerry is going!']);