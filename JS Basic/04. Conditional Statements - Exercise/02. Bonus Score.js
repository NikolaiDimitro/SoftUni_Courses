function bonusScore(startPoint) {

    let bonus = 0;

    if (startPoint <= 100) {

        bonus += 5;

        if (startPoint % 2 === 0) {

            bonus += 1;

        } else if (startPoint % 10 === 5) {

            bonus += 2;

        }

        console.log(bonus.toFixed(1));
        console.log((startPoint + bonus).toFixed(1));

    } else if (startPoint <= 1000) {

        bonus = startPoint * 0.2;

        if (startPoint % 2 === 0) {

            bonus += 1;

        } else if (startPoint % 10 === 5) {

            bonus += 2;

        }

        console.log(bonus.toFixed(1));
        console.log((startPoint + bonus).toFixed(1));

    } else {

        bonus = startPoint * 0.1;

        if (startPoint % 2 === 0) {

            bonus += 1;

        } else if (startPoint % 10 === 5) {

            bonus += 2;

        }

        console.log(bonus.toFixed(1));
        console.log((startPoint + bonus).toFixed(1));

    }
}
bonusScore(20);
bonusScore(175);
bonusScore(2703);
bonusScore(15873);