function furniture(arr) {

    let pattern = />>(?<furniture>[A-Za-z]+)<<(?<price>\d{1,}(.\d{1,})?)!(?<quantity>\d+)/;
    let index = 0;

    let total = 0;
    let furnitureArr = [];

    while (arr[index] !== 'Purchase') {

        let current = arr[index];
        let exec = pattern.exec(current);

        if (exec) {

            furnitureArr.push(exec.groups.furniture);
            total += Number(exec.groups.price) * Number(exec.groups.quantity);

        }

        index++;

    }

    console.log('Bought furniture:');
    furnitureArr.map((x) => console.log(x));
    console.log(`Total money spend: ${total.toFixed(2)}`);

}
furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']
);
furniture(['>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase']
);
furniture(['>Invalid<<!4',
    '>Invalid<<!2',
    '>Invalid<<!5',
    'Purchase']
);