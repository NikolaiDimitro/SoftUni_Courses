function rounding(number, accuracy) {

    if (accuracy > 15) {

        accuracy = 15;

    }

    console.log(parseFloat(number.toFixed(accuracy)));

}
rounding(3.1415926535897932384626433832795, 2);
rounding(10.5, 3);