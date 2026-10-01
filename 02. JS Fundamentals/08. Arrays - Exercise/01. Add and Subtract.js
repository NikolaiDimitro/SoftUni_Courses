function addAndSubtract(arr) {

    let newArr = [];
    let sumForOriginalArr = 0;
    let sumForNewArr = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] % 2 === 0) {

            newArr.push(arr[i] + i);

        } else {

            newArr.push(arr[i] - i);

        }

        sumForOriginalArr += arr[i];
        sumForNewArr += newArr[i];

    }

    console.log(newArr);
    console.log(sumForOriginalArr);
    console.log(sumForNewArr);

}
addAndSubtract([5, 15, 23, 56, 35]);
addAndSubtract([-5, 11, 3, 0, 2]);