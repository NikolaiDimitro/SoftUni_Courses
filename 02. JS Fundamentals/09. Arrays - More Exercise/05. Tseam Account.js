function tseamAccount(arr) {

    let newArr = arr[0].split(' ');
    let isHave = false;
    let index = 1;

    while (arr[index] !== 'Play!') {

        let current = arr[index].split(' ');

        if (current[0] === 'Install') {

            for (let game of newArr) {

                if (game === current[1]) {

                    isHave = true;
                    break;

                }
            }

            if (!isHave) {

                newArr.push(current[1]);

            }

        } else if (current[0] === 'Uninstall') {

            isHave = false;

            for (let game of newArr) {

                if (game === current[1]) {

                    isHave = true;
                    break;

                }
            }

            if (isHave) {

                newArr = newArr.filter((games) => games !== current[1]);

            }

        } else if (current[0] === 'Update') {

            isHave = false;

            for (let game of newArr) {

                if (current[1] === game) {

                    isHave = true;
                    break;

                }
            }

            if (isHave) {

                newArr = newArr.filter((games) => games !== current[1]);
                newArr.push(current[1]);

            }

        } else if (current[0] === 'Expansion') {

            isHave = false;

            let [game, expansion] = current[1].split('-');

            for (let games of newArr) {

                if (game === games) {

                    isHave = true;
                    break;

                }
            }

            if (newArr.includes(game)) {

                let index = newArr.indexOf(game);
                newArr.splice(index + 1, 0, `${game}:${expansion}`)

            }
        }

        index++;

    }

    console.log(newArr.join(' '));

}
tseamAccount(['CS WoW Diablo', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Play!']);
tseamAccount(['CS WoW Diablo', 'Uninstall XCOM', 'Update PeshoGame', 'Update WoW', 'Expansion Civ-V', 'Play!']);