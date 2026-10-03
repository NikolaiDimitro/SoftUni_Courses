function printNthElement(arr) {

    let print = '';
    let step = 0;
    let startIndex = 0;

    for (let i = 0; i <= arr.length - 1; i++) {

        if (i === arr.length - 1) {

            step = Number(arr[i]);

        }

    }

    for (let i = 0; i < arr.length - 1; i++) {

        if (startIndex === i) {

            print += `${arr[i]} `;
            startIndex += step;

        }
    }

    console.log(print);

}
printNthElement(['5', '20', '31', '4', '20', '2']);
printNthElement(['dsa', 'asd', 'test', 'test', '2']);
printNthElement(['1', '2', '3', '4', '5', '6']);