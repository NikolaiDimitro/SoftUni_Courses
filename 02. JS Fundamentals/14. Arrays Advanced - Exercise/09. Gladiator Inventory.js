function gladiatorInventory(arr) {

    let currentEquipment = arr[0].split(' ');

    for (let i = 1; i < arr.length; i++) {

        let [command, equipment] = arr[i].split(' ');

        if (command === 'Buy') {

            if (!currentEquipment.includes(equipment)) {

                currentEquipment.push(equipment);

            }

        } else if (command === 'Trash') {

            if (currentEquipment.includes(equipment)) {

                let index = currentEquipment.indexOf(equipment);
                currentEquipment.splice(index, 1);

            }

        } else if (command === 'Repair') {

            if (currentEquipment.includes(equipment)) {

                let index = currentEquipment.indexOf(equipment);

                currentEquipment.splice(index, 1);
                currentEquipment.push(equipment);

            }

        } else if (command === 'Upgrade') {

            let [equipments, upgrade] = equipment.split('-');

            if (currentEquipment.includes(equipments)) {

                let index = currentEquipment.indexOf(equipments);
                let formatEquipment = `${equipments}:${upgrade}`

                currentEquipment.splice(index + 1, 0, formatEquipment);

            }
        }
    }

    console.log(currentEquipment.join(' '));

}
gladiatorInventory(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel']);
gladiatorInventory(['SWORD Shield Spear', 'Trash Bow', 'Repair Shield', 'Upgrade Helmet-V']);