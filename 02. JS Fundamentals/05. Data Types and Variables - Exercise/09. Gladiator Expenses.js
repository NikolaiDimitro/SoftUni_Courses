function gladiatorExpenses(countLostBattle, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let total = 0;
    let countShieldBIsBroken = 0;

    for (let i = 1; i <= countLostBattle; i++) {

        if (i % 2 === 0) {

            total += helmetPrice;

        }

        if (i % 3 === 0) {

            total += swordPrice;

        }

        if (i % 6 === 0) {

            total += shieldPrice;
            countShieldBIsBroken++;

        }

        if (countShieldBIsBroken % 2 === 0 && countShieldBIsBroken !== 0) {

            total += armorPrice;
            countShieldBIsBroken = 0;

        }
    }

    console.log(`Gladiator expenses: ${total.toFixed(2)} aureus`);

}
gladiatorExpenses(7, 2, 3, 4, 5);
gladiatorExpenses(23, 12.50, 21.50, 40, 200);