function arrayManipulations(arr) {

    let newArr = arr[0].split(' ');

    for (let i = 1; i < arr.length; i++) {

        let [command, number, index] = arr[i].split(' ');

        if (command === 'Add') {

            newArr.push(number);

        } else if (command === 'Remove') {

            newArr = newArr.filter(x => x !== number);

        } else if (command === 'RemoveAt') {

            newArr.splice(Number(number), 1);

        } else {

            newArr.splice(Number(index), 0, number);

        }
    }

    console.log(newArr.join(' '));

}
arrayManipulations(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']);
arrayManipulations(['6 12 2 65 6 42', 'Add 8', 'Remove 12', 'RemoveAt 3', 'Insert 6 2']);