function treasureFinder(arr) {

    let numberSequence = arr.shift().split(' ').map(Number);
    let index = 0;
    let ind = 0;
    let messageArr = [];
    let countOfRecource = 0;
    let countOfRecourceCoodrinates = 0;
    let typeResource = '';
    let coordinates = '';


    while (arr[index] !== 'find') {

        let message = '';

        let currentTreasure = arr[index];

        for (let i = 0; i < currentTreasure.length; i++) {

            while (ind < numberSequence.length) {

                let char = currentTreasure[i];
                let aciiCodeOfChar = char.charCodeAt();

                let currentNumber = numberSequence[ind];
                let newChar = String.fromCharCode(aciiCodeOfChar - currentNumber);

                message += newChar;

                if (i === currentTreasure.length - 1) {

                    break;

                }

                if (ind < numberSequence.length - 1) {

                    ind++;
                    i++;

                } else {

                    ind = 0;
                    i++;

                }
            }
        }

        messageArr.push(message);

        index++;
        ind = 0;

    }

    for (let message of messageArr) {

        for (let i = 0; i < message.length; i++) {

            let current = message[i];

            if (current === '&') {

                countOfRecource++;
                continue;

            }

            if (countOfRecource === 1) {

                typeResource += current;

            }

            if (current === '<') {

                countOfRecourceCoodrinates++;
                continue;

            }

            if (current === '>') {

                countOfRecourceCoodrinates++;

            }

            if (countOfRecourceCoodrinates === 1) {

                coordinates += current;

            }
        }

        console.log(`Found ${typeResource} at ${coordinates}`);
        countOfRecource = 0;
        countOfRecourceCoodrinates = 0;
        typeResource = '';
        coordinates = '';

    }
}
treasureFinder(["1 2 1 3",
    "ikegfp'jpne)bv=41P83X@",
    "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
    "find"]
);
treasureFinder(["1 4 2 5 3 2 1",
    `Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`,
    "tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC",
    "'stj)>34W68Z@",
    "find"]
);