function arenaTier(arr) {

    let index = 0;
    let gladiatorsObj = {};

    while (arr[index] !== 'Ave Cesar') {

        let current = arr[index];

        if (current.includes(' -> ')) {

            let [name, technique, skill] = current.split(' -> ');

            skill = Number(skill);

            if (!gladiatorsObj.hasOwnProperty(name)) {

                gladiatorsObj[name] = { [technique]: skill };

            } else if (!gladiatorsObj[name][technique] || gladiatorsObj[name][technique] < skill ) {

                gladiatorsObj[name][technique] = skill;

            }

        } else {

            let [firstGladiator, secondGladiator] = current.split(' vs ');

            if ( gladiatorsObj.hasOwnProperty(firstGladiator) && gladiatorsObj.hasOwnProperty(secondGladiator)) {

                let entriesForFirstGladiator = Object.entries(gladiatorsObj[firstGladiator]);
                let entriesForSecondGladiator = Object.entries(gladiatorsObj[secondGladiator]);

                let firstGladiatorTotalSkill = 0;
                let secondGladiatorTotalSkill = 0;

                for (let firstTechnique of entriesForFirstGladiator) {

                    for (let secondTechnique of entriesForSecondGladiator) {

                        if (firstTechnique[0] === secondTechnique[0]) {

                            firstGladiatorTotalSkill += firstTechnique[1];
                            secondGladiatorTotalSkill += secondTechnique[1];

                        }

                    }

                }

                if (firstGladiatorTotalSkill > 0 || secondGladiatorTotalSkill > 0) {

                    if (firstGladiatorTotalSkill > secondGladiatorTotalSkill) {

                        delete gladiatorsObj[secondGladiator];

                    } else if (secondGladiatorTotalSkill > firstGladiatorTotalSkill) {

                        delete gladiatorsObj[firstGladiator];

                    }

                }

            }

        }

        index++;

    }

    let entries = Object.entries(gladiatorsObj);


    entries.sort((a, b) => {

        let firstTotalSkill = Object.values(a[1])
            .reduce((sum, skill) => sum + skill, 0);

        let secondTotalSkill = Object.values(b[1])
            .reduce((sum, skill) => sum + skill, 0);

        return secondTotalSkill - firstTotalSkill ||
            a[0].localeCompare(b[0]);

    });

    for (let gladiator of entries) {

        let name = gladiator[0];
        let techniques = Object.entries(gladiator[1]);

        let totalSkill = techniques.reduce((sum, technique) => sum + technique[1], 0);

        console.log(`${name}: ${totalSkill} skill`);

        techniques.sort((a, b) =>

            b[1] - a[1] || a[0].localeCompare(b[0])

        );

        for (let technique of techniques) {

            console.log(`- ${technique[0]} <!> ${technique[1]}`);

        }

    }

}
arenaTier([ 'Peter -> BattleCry -> 400', 'Alex -> PowerPunch -> 300', 'Stefan -> Duck -> 200', 'Stefan -> Tiger -> 250', 'Ave Cesar']);
arenaTier([ 'Peter -> Duck -> 400', 'Julius -> Shield -> 150', 'Gladius -> Heal -> 200', 'Gladius -> Support -> 250', 'Gladius -> Shield -> 250', 'Peter vs Gladius', 'Gladius vs Julius', 'Gladius vs Maximilian', 'Ave Cesar']);