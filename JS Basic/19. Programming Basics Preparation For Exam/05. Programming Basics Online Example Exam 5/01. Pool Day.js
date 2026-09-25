function poolDay(countPeople, entranceFee, sunbed, umbrella) {

    entranceFee *= countPeople;

    let umbrellaPrice = Math.ceil(countPeople / 2) * umbrella;
    let sunbedPrice = Math.ceil(countPeople * 0.75) * sunbed;
    let sum = entranceFee + umbrellaPrice + sunbedPrice;

    console.log(`${sum.toFixed(2)} lv.`);

}
poolDay(21, 5.50, 4.40, 6.20,);
poolDay(50, 6, 8, 4);