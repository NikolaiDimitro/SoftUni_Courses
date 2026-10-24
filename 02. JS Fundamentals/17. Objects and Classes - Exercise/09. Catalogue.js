function catalogue(arr) {

    let obj = {};
    let letter = '';

    arr.sort((a, b) => a.localeCompare(b));

    for (let product of arr) {

        let [name, price] = product.split(' : ');

        obj[name] = Number(price);

    }

    let entries = Object.entries(obj);

    for (let product in obj) {

        if (letter !== product[0]) {

            letter = product[0];
            console.log(letter);
            console.log(`  ${product}: ${obj[product]}`);

        } else {

            console.log(`  ${product}: ${obj[product]}`);

        }
    }
}
catalogue(['Appricot : 20.4', 'Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10']);
catalogue(['Omlet : 5.4', 'Shirt : 15', 'Cake : 59']);