function tennisEquipment(priceToOneTennisRacket, countTennisRacket, countPairsOfSneakers) {

    let total = (priceToOneTennisRacket * countTennisRacket + (priceToOneTennisRacket / 6) * countPairsOfSneakers) * 1.2;

    console.log(`Price to be paid by Djokovic ${Math.floor(total / 8)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(total * 7 / 8)}`);

}
tennisEquipment(850, 4, 2);
tennisEquipment(386, 7, 4);