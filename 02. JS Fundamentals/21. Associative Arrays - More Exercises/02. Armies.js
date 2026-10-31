function armies(arr) {

    let generalObj = {};

    for (let armie of arr) {

        if (armie.includes('arrives')) {

            let [general] = armie.split(' arrives');
            generalObj[general] = {};

        } else if (armie.includes(': ')) {

            let [general, armieAndCount] = armie.split(': ');
            let [armieName, countOfArmie] = armieAndCount.split(', ');

            countOfArmie = Number(countOfArmie);

            if (generalObj.hasOwnProperty(general)) {

                if (!generalObj[general].hasOwnProperty(armieName)) {

                    generalObj[general][armieName] = countOfArmie;

                } else {

                    generalObj[general][armieName] += countOfArmie;

                }
            }

        } else if (armie.includes(' + ')) {

            let [armieName, countOfArmie] = armie.split(' + ');

            countOfArmie = Number(countOfArmie);

            for (let generals in generalObj) {

                if (generalObj[generals].hasOwnProperty(armieName)) {

                    generalObj[generals][armieName] += countOfArmie;

                }
            }

        } else if (armie.includes('defeated')) {

            let [general] = armie.split(' defeated');

            delete generalObj[general];

        }
    }

    let entriesForGeneralObject = Object.entries(generalObj)
        .sort((a, b) =>
            Object.values(b[1]).reduce((sum, count) => sum + count, 0) -
            Object.values(a[1]).reduce((sum, count) => sum + count, 0));

    for (let general of entriesForGeneralObject) {

        let generalName = general[0];

        let armies = Object.entries(general[1])
            .sort((a, b) => b[1] - a[1]);

        let totalArmyCount = Object.values(general[1])
            .reduce((sum, count) => sum + count, 0);

        console.log(`${generalName}: ${totalArmyCount}`);

        for (let army of armies) {

            console.log(`>>> ${army[0]} - ${army[1]}`);

        }
    }
}
armies(['Rick Burr arrives',
    'Fergus: Wexamp, 30245',
    'Rick Burr: Juard, 50000',
    'Findlay arrives',
    'Findlay: Britox, 34540',
    'Wexamp + 6000',
    'Juard + 1350',
    'Britox + 4500',
    'Porter arrives',
    'Porter: Legion, 55000',
    'Legion + 302',
    'Rick Burr defeated',
    'Porter: Retix, 3205']);
armies(['Rick Burr arrives',
    'Findlay arrives',
    'Rick Burr: Juard, 1500',
    'Wexamp arrives',
    'Findlay: Wexamp, 34540',
    'Wexamp + 340',
    'Wexamp: Britox, 1155',
    'Wexamp: Juard, 43423']);