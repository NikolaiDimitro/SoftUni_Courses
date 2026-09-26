function easterParty(guestCount, pricePerPerson, budget) {

    if (guestCount >= 10 && guestCount <= 15) {

        pricePerPerson *= 0.85;

    } else if (guestCount > 15 && guestCount <= 20) {

        pricePerPerson *= 0.80;

    } else if (guestCount > 20) {

        pricePerPerson *= 0.75;

    }

    let total = guestCount * pricePerPerson + budget * 0.10;

    if (total <= budget) {

        let remainingMoney = budget - total;

        console.log(`It is party time! ${remainingMoney.toFixed(2)} leva left.`);

    } else if (total > budget) {

        let neededMoney = total - budget;

        console.log(`No party! ${neededMoney.toFixed(2)} leva needed.`);
        
    }
}
easterParty(18,30,450,);
easterParty(8,25,340,);
easterParty(24,35,550,);