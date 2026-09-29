function requiredReading(countPages, readPagesFor1Hour, numberOfTheDays) {

    let hours = (countPages / readPagesFor1Hour) / numberOfTheDays;
    console.log(hours);

}
requiredReading(212, 20, 2);
requiredReading(432, 15, 4);