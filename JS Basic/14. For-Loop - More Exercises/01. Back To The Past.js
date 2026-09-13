function backToThePast(inheritedMoney, yearByWhichHeMustLive) {

    let totalSpentMoney = 0;
    let completeYearOfAge = 18;

    for (let i = 1800; i <= yearByWhichHeMustLive; i++) {

        if (i % 2 === 0) {

            totalSpentMoney += 12000;

        } else {

            totalSpentMoney += (12000 + (50 * completeYearOfAge));

        }

        completeYearOfAge++;

    }

    if (inheritedMoney >= totalSpentMoney) {

        console.log(`Yes! He will live a carefree life and will have ${(inheritedMoney - totalSpentMoney).toFixed(2)} dollars left.`);

    } else {

        console.log(`He will need ${(totalSpentMoney - inheritedMoney).toFixed(2)} dollars to survive.`);

    }
}
backToThePast(50000, 1802);
backToThePast(100000.15, 1808);