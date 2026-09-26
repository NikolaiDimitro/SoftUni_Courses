function schoolCamp(season, typeGroup, countStudents, countOvernightStays) {

    let price = 0;
    let typeSport = '';

    switch (season) {

        case 'Winter':

            if (typeGroup === 'boys' || typeGroup === 'girls') {

                price = countStudents * 9.6 * countOvernightStays;

            } else {

                price = countStudents * 10 * countOvernightStays;

            }

            if (typeGroup === 'girls') {

                typeSport = 'Gymnastics';


            } else if (typeGroup === 'boys') {

                typeSport = 'Judo';

            } else {

                typeSport = 'Ski';

            }

            break;

        case 'Spring':


            if (typeGroup === 'boys' || typeGroup === 'girls') {

                price = countStudents * 7.2 * countOvernightStays;

            } else {

                price = countStudents * 9.5 * countOvernightStays;

            }

            if (typeGroup === 'girls') {

                typeSport = 'Athletics';


            } else if (typeGroup === 'boys') {

                typeSport = 'Tennis';

            } else {

                typeSport = 'Cycling';

            }

            break;

        case 'Summer':

            if (typeGroup === 'boys' || typeGroup === 'girls') {

                price = countStudents * 15 * countOvernightStays;

            } else {

                price = countStudents * 20 * countOvernightStays;

            }

            if (typeGroup === 'girls') {

                typeSport = 'Volleyball';


            } else if (typeGroup === 'boys') {

                typeSport = 'Football';

            } else {

                typeSport = 'Swimming';

            }

            break;

    }

    if (countStudents >= 50) {

        price *= 0.5;

    } else if (countStudents >= 20) {

        price *= 0.85;

    } else if (countStudents >= 10) {

        price *= 0.95;

    }

    console.log(`${typeSport} ${price.toFixed(2)} lv.`);

}
schoolCamp('Spring', 'girls', 20, 7);
schoolCamp('Winter', 'mixed', 9, 15);
schoolCamp('Summer', 'boys', 60, 7);
schoolCamp('Spring', 'mixed', 17, 14);