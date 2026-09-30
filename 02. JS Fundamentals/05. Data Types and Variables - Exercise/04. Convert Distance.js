function convertDistance(meters) {

    console.log(`${meters} meters is equal to ${meters / 1000} kilometers.`);
    console.log(`${meters / 1000} kilometers is equal to ${((meters / 1000) * 0.621371).toFixed(2)} miles.`);

}
convertDistance(1852);
convertDistance(798);