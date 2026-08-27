function timePlus15minutes(hour, minutes) {

    let newHour = hour
    let newMinutes = minutes + 15;

    if (newMinutes >= 60) {

        newHour += 1;
        newMinutes -= 60;

    }

    if (newHour >= 24) {

        newHour -= 24;

    }

    if (newMinutes < 10) {

        console.log(`${newHour}:0${newMinutes}`);

    } else {

        console.log(`${newHour}:${newMinutes}`);

    }
}
timePlus15minutes(1, 46);
timePlus15minutes(0, 1);
timePlus15minutes(23, 59);
timePlus15minutes(11, 8);
timePlus15minutes(12, 49);