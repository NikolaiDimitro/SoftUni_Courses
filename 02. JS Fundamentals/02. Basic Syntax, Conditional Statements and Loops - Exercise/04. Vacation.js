function vacation(countPeaple, typeOfGroup, dayOfWeek) {

    let totalPrice = 0;

    switch (typeOfGroup) {

        case 'Students':

            if (dayOfWeek === 'Friday') {

                totalPrice = countPeaple * 8.45;

            } else if (dayOfWeek === 'Saturday') {

                totalPrice = countPeaple * 9.8;

            } else if (dayOfWeek === 'Sunday') {

                totalPrice = countPeaple * 10.46;

            }

            if (countPeaple >= 30) {

                totalPrice *= 0.85;

            }

            break;

        case 'Business':

            if (countPeaple >= 100) {

                countPeaple -= 10;

            }

            if (dayOfWeek === 'Friday') {

                totalPrice = countPeaple * 10.9;

            } else if (dayOfWeek === 'Saturday') {

                totalPrice = countPeaple * 15.6;

            } else if (dayOfWeek === 'Sunday') {

                totalPrice = countPeaple * 16;

            }

            break;

        case 'Regular':

            if (dayOfWeek === 'Friday') {

                totalPrice = countPeaple * 15;

            } else if (dayOfWeek === 'Saturday') {

                totalPrice = countPeaple * 20;

            } else if (dayOfWeek === 'Sunday') {

                totalPrice = countPeaple * 22.5;

            }

            if (countPeaple >= 10 && countPeaple <= 20) {

                totalPrice *= 0.95;

            }

            break;

    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);

}
vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");