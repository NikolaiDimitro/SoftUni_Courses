function oscarsCeremony(hallRental) {

    let figurines = hallRental * 0.7;
    let catering = figurines * 0.85;
    let soundReinforcement = catering * 1 / 2;

    console.log((hallRental + figurines + catering + soundReinforcement).toFixed(2));

}
oscarsCeremony(3500);
oscarsCeremony(5555);