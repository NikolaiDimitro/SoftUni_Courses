function addressBook(arr) {

    let adressObj = {};

    for (let adress of arr) {

        let [personName, personAdress] = adress.split(':');

        adressObj[personName] = personAdress;

    }

    let entries = Object.entries(adressObj);

    entries.sort(([adresNameForA, addressesForA], [adresNameForB, adressesForB]) => adresNameForA.localeCompare(adresNameForB));

    for (let adres of entries) {

        console.log(`${adres[0]} -> ${adres[1]}`);

    }
}
addressBook(['Tim:Doe Crossing', 'Bill:Nelson Place', 'Peter:Carlyle Ave', 'Bill:Ornery Rd']);
addressBook(['Bob:Huxley Rd', 'John:Milwaukee Crossing', 'Peter:Fordem Ave', 'Bob:Redwing Ave', 'George:Mesta Crossing', 'Ted:Gateway Way', 'Bill:Gateway Way', 'John:Grover Rd', 'Peter:Huxley Rd', 'Jeff:Gateway Way', 'Jeff:Huxley Rd']);