function maxNumber(arr) {

    let newArr = [];
    let isMax = true;

    for (let i = 0; i < arr.length; i++) {

        for (let j = i + 1; j < arr.length; j++) {

            if (arr[j] > arr[i]) {

                isMax = false;
                break;

            }

        }

        if (isMax) {

            newArr.push(arr[i]);

        }


    }

console.log(newArr.join(' '));

}
maxNumber([1, 4, 3, 2]);
// maxNumber([14, 24, 3, 19, 15, 17]);
// maxNumber([41, 41, 34, 20]);
// maxNumber([27, 19, 42, 2, 13, 45, 48]);