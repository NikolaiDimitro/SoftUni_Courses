function addAndRemove(arr) {

    let newArr = [];
    let values = 1;

    for (let command of arr) {

        if (command === 'add') {

            newArr.push(values);
            values++;

        } else {

            newArr.pop();
            values++;

        }
    }

    if (newArr.length === 0) {

        console.log('Empty');

    } else {

        console.log(newArr.join(' '));

    }
}
addAndRemove(['add', 'add', 'add', 'add']);
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
addAndRemove(['remove', 'remove', 'remove']);