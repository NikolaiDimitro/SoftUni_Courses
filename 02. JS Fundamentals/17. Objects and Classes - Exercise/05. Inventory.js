function inventory(arr) {

    let hereArr = [];

    for (let i = 0; i < arr.length; i++) {

        let [heroName, heroLevel, heroInventory] = arr[i].split(' / ');

        heroLevel = Number(heroLevel);
        hereArr.push({ name: heroName, level: heroLevel, inventory: heroInventory });

    }

    hereArr.sort((a, b) => a.level - b.level);
    hereArr.map((x) => {

        console.log(`Hero: ${x.name}`);
        console.log(`level => ${x.level}`);
        console.log(`items => ${x.inventory}`);

    });

}
inventory([ 'Isacc / 25 / Apple, GravityGun', 'Derek / 12 / BarrelVest, DestructionSword', 'Hes / 1 / Desolator, Sentinel, Antara']);
inventory([ 'Batman / 2 / Banana, Gun', 'Superman / 18 / Sword', 'Poppy / 28 / Sentinel, Antara']);