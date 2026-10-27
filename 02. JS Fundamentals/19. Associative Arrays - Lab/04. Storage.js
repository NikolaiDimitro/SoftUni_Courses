function storage(arr) {

    let map = new Map();

    for (let i = 0; i < arr.length; i++) {

        let [product, num] = arr[i].split(' ');

        num = Number(num);

        if (!map.has(product)) {

            map.set(product, num);

        } else {

            map.set(product, map.get(product) + num);

        }
    }

    for (let product of map) {

        console.log(`${product[0]} -> ${product[1]}`);

    }
}
storage(['tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40']);
storage(['apple 50', 'apple 61', 'coffee 115', 'coffee 40']);