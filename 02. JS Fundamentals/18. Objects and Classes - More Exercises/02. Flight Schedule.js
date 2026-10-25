function flightSchedule(arr) {

    let allFlights = arr.shift();
    let newStatus = arr.shift();
    let statusForCheck = arr.shift();
    let flighArr = [];

    for (let flight of allFlights) {

        let flightsObj = {};
        let status = 'Ready to fly';

        let [code, destination, secondPartOfDestination] = flight.split(' ');

        if (secondPartOfDestination) {

            destination += ' ' + secondPartOfDestination;

        }

        flightsObj['Destination'] = destination;

        newStatus.map((x) => {

            let [flight, st] = x.split(' ');

            if (flight === code) {

                status = st;

            }
        });

        flightsObj['Status'] = status;
        flighArr.push(flightsObj);

    }

    let filtered = flighArr.filter((x) => statusForCheck[0] === x.Status);

    for (let flight of filtered) {

        console.log(flight);

    }
}
flightSchedule([['WN269 Delaware', 'FL2269 Oregon', 'WN498 Las Vegas', 'WN3145 Ohio', 'WN612 Alabama', 'WN4010 New York', 'WN1173 California', 'DL2120 Texas', 'KL5744 Illinois', 'WN678 Pennsylvania'], ['DL2120 Cancelled', 'WN612 Cancelled', 'WN1173 Cancelled', 'SK430 Cancelled'], ['Cancelled']]);
flightSchedule([['WN269 Delaware', 'FL2269 Oregon', 'WN498 Las Vegas', 'WN3145 Ohio', 'WN612 Alabama', 'WN4010 New York', 'WN1173 California', 'DL2120 Texas', 'KL5744 Illinois', 'WN678 Pennsylvania'], ['DL2120 Cancelled', 'WN612 Cancelled', 'WN1173 Cancelled', 'SK330 Cancelled'], ['Ready to fly']]);