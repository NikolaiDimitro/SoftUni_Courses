function trekkingMania(arr) {

    let totalPeople = 0;
    let musala = 0;
    let monblan = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;

    for (let i = 1; i < arr.length; i++) {

        let countPeople = Number(arr[i]);
        totalPeople += countPeople;

    }

    for (let i = 1; i < arr.length; i++) {

        let countPeople = Number(arr[i]);

        if (countPeople <= 5) {

            musala += countPeople;

        } else if (countPeople <= 12) {

            monblan += countPeople;

        } else if (countPeople <= 25) {

            kilimanjaro += countPeople;

        } else if (countPeople <= 40) {

            k2 += countPeople;

        } else {

            everest += countPeople;

        }
    }

    console.log((musala / totalPeople * 100).toFixed(2) + "%");
    console.log((monblan / totalPeople * 100).toFixed(2) + "%");
    console.log((kilimanjaro / totalPeople * 100).toFixed(2) + "%");
    console.log((k2 / totalPeople * 100).toFixed(2) + "%");
    console.log((everest / totalPeople * 100).toFixed(2) + "%");

}
trekkingMania(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]);
trekkingMania(["5", "25", "41", "31", "250", "6"]);