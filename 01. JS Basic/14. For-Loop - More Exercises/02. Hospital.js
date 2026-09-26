function hospital(arr) {

    let periodForCalculation = Number(arr[0]);
    let treatedPatients = 0;
    let untreatedPatients = 0;
    let countDoctors = 7;

    for (let i = 1; i <= periodForCalculation; i++) {

        let patientForDay = Number(arr[i]);

        if (i % 3 === 0 && untreatedPatients > treatedPatients) {

            countDoctors++;

        }

        if (patientForDay > countDoctors) {

            treatedPatients += countDoctors;
            untreatedPatients += patientForDay - countDoctors;

        } else {

            treatedPatients += patientForDay;

        }
    }

    console.log(`Treated patients: ${treatedPatients}.`);
    console.log(`Untreated patients: ${untreatedPatients}.`);

}
hospital(["4", "7", "27", "9", "1"]);
hospital(["6", "25", "25", "25", "25", "25", "2"]);