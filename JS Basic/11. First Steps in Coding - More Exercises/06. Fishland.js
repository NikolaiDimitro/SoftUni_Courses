function fishland(priceToMackerel, priceToSprat, kilogramsBonito, kilogramsHorseMackerel, kilogramsMussels) {

    console.log(((kilogramsBonito * (priceToMackerel * 1.6)) + (kilogramsHorseMackerel * (priceToSprat * 1.8)) + kilogramsMussels * 7.5).toFixed(2));

}
fishland(6.90, 4.20, 1.5, 2.5, 1);
fishland(5.55, 3.57, 4.3, 3.6, 7);