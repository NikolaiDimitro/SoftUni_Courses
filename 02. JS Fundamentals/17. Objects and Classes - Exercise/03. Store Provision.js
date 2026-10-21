function storeProvision(shopProductsArr, deliveryProductsArr) {

    let productsObj = {};

    for (let i = 0; i < shopProductsArr.length - 1; i += 2) {

        productsObj[shopProductsArr[i]] = Number(shopProductsArr[i + 1]);

    }

    for (let i = 0; i < deliveryProductsArr.length - 1; i += 2) {

        let product = deliveryProductsArr[i];
        let quantity = Number(deliveryProductsArr[i + 1]);

        if (shopProductsArr.includes(product)) {

            productsObj[product] += quantity;

        } else {

            productsObj[product] = quantity;

        }
    }

    for (let product in productsObj) {

        console.log(`${product} -> ${productsObj[product]}`);

    }
}
storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'], ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);
storeProvision(['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'], ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30']);