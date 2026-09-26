function basketballEquipment(annualFee) {

    let sneakers = annualFee * 0.6;
    let basketballTeam = sneakers * 0.8;
    let basketballBall = basketballTeam / 4;
    let basketballAccessories = basketballBall / 5;

    console.log(annualFee + sneakers + basketballTeam + basketballBall + basketballAccessories);

}
basketballEquipment(365);
basketballEquipment(550);