function basketballEquipment(annualFee) {

    let pairsOfSneakers = annualFee * 0.6;
    let uniform = pairsOfSneakers * 0.8;
    let ball = uniform * 1 / 4;
    let accessories = ball * 1 / 5;
    let total = annualFee + pairsOfSneakers + uniform + ball + accessories;

    console.log(total.toFixed(2));

}
basketballEquipment(320);
basketballEquipment(550);
basketballEquipment(230);