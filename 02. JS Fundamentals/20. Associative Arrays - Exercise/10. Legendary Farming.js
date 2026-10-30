function legendaryFarming(str) {

    let materialsArr = str.split(' ');
    let materialsObj = {

        'fragments': 0,
        'shards': 0,
        'motes': 0,

    };

    let junkObj = {};

    for (let i = 1; i < materialsArr.length; i += 2) {

        let material = materialsArr[i].toLowerCase();
        let quantity = materialsArr[i - 1];

        quantity = Number(quantity);

        if (material !== 'fragments' && material !== 'shards' && material !== 'motes') {

            junkObj[material] = (junkObj[material] || 0) + quantity;


        } else if (material === 'fragments') {

            materialsObj.fragments += quantity;

        } else if (material === 'shards') {

            materialsObj.shards += quantity;

        } else {

            materialsObj.motes += quantity;

        }

        if (materialsObj.fragments >= 250) {

            materialsObj.fragments -= 250;
            console.log(('Valanyr obtained!'));
            break;


        } else if (materialsObj.motes >= 250) {

            materialsObj.motes -= 250;
            console.log(('Dragonwrath obtained!'));
            break;

        } else if (materialsObj.shards >= 250) {

            materialsObj.shards -= 250;
            console.log(('Shadowmourne obtained!'));
            break;

        }
    }

    let entriesForNonJunkMaterials = Object.entries(materialsObj).sort(([materialA, quantityA], [materialB, quantityB]) => quantityB - quantityA || materialA.localeCompare(materialB));
    let entriesForJunkMaterials = Object.entries(junkObj).sort(([nameA, quantityA], [nameB, quantityB]) => nameA.localeCompare(nameB));

    for (let item of entriesForNonJunkMaterials) {

        console.log(`${item[0]}: ${item[1]}`);


    }

    for (let item of entriesForJunkMaterials) {

        console.log(`${item[0]}: ${item[1]}`);

    }
}
legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');
legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');