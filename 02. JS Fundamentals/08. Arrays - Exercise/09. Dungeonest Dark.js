function dungeonestDark(str) {

    let arr = str.split("|");
    let hp = 100;
    let coins = 0;
    let countOfRooms = 0;

    for (let i = 0; i < arr.length; i++) {

        let currentRoom = arr[i].split(' ');

        countOfRooms++;

        if (currentRoom[0] === 'potion') {

            let heal = Number(currentRoom[1]);
            let difference = 100 - hp;

            if (heal > difference) {

                hp = 100;
                console.log(`You healed for ${difference} hp.`);

            } else {

                hp += heal;
                console.log(`You healed for ${heal} hp.`);

            }

            console.log(`Current health: ${hp} hp.`);

        } else if (currentRoom[0] === 'chest') {

            let coin = Number(currentRoom[1]);

            coins += coin;
            console.log(`You found ${coin} coins.`);

        } else {

            let nameOfMonster = currentRoom[0];
            let attackPoint = Number(currentRoom[1]);

            hp -= attackPoint;

            if (hp > 0) {

                console.log(`You slayed ${nameOfMonster}.`);

            } else {

                console.log(`You died! Killed by ${nameOfMonster}.`);
                console.log(`Best room: ${countOfRooms}`);
                return;

            }
        }
    }

    console.log('You\'ve made it!');
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${hp}`);

}
dungeonestDark("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
dungeonestDark("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");