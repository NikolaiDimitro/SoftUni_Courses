function searchForANumber(arr, paramsArr) {

    let lengthOfTakeNumbers = paramsArr[0];
    let deleteNumbers = paramsArr[1];
    let searchedNumber = paramsArr[2];

    let allTakeNumbers = arr.slice(0, lengthOfTakeNumbers);
    allTakeNumbers.splice(0, deleteNumbers);

    let count = 0;

    allTakeNumbers.map((x, index) => {

        if (x === searchedNumber) {

            count++;

        };
    });

console.log(`Number ${searchedNumber} occurs ${count} times.`);

}
searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchForANumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);