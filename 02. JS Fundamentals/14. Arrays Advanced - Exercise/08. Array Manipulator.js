function arrayManipulator(numberArr, commandArr) {

    for (let i = 0; i < commandArr.length; i++) {

        let currentCommand = commandArr[i].split(' ');

        if (currentCommand[0] === 'add') {

            let index = Number(currentCommand[1]);
            let element = Number(currentCommand[2]);

            numberArr.splice(index, 0, element);

        } else if (currentCommand[0] === 'addMany') {

            let index = Number(currentCommand[1]);

            for (let el = 2; el < currentCommand.length; el++) {

                let element = Number(currentCommand[el]);
                numberArr.splice(index + (el - 2), 0, element);

            }

        } else if (currentCommand[0] === 'contains') {

            let element = Number(currentCommand[1]);
            console.log(numberArr.indexOf(element));

        } else if (currentCommand[0] === 'remove') {

            let index = Number(currentCommand[1]);
            numberArr.splice(index, 1);

        } else if (currentCommand[0] === 'shift') {

            let positions = Number(currentCommand[1]);

            if (numberArr.length > 0) {

                positions = positions % numberArr.length;

                for (let j = 0; j < positions; j++) {

                    let firstElement = numberArr.shift();
                    numberArr.push(firstElement);

                }
            }

        } else if (currentCommand[0] === 'sumPairs') {

            let newArr = [];

            for (let j = 0; j < numberArr.length; j += 2) {

                if (j + 1 < numberArr.length) {

                    newArr.push(numberArr[j] + numberArr[j + 1]);

                } else {

                    newArr.push(numberArr[j]);

                }
            }

            numberArr = newArr;

        } else if (currentCommand[0] === 'print') {

            console.log(`[ ${numberArr.join(', ')} ]`);
            break;

        }
    }
}
arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);
arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);