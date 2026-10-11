function firstAndLastKNumbers(arr) {

    let kElement = arr[0];
    let firstKElements = arr.slice(1, kElement + 1);
    let lastKElements = arr.slice(arr.length - kElement);

    console.log(firstKElements.join(' '));
    console.log(lastKElements.join(' '));

}
firstAndLastKNumbers([2, 7, 8, 9]);
firstAndLastKNumbers([3, 6, 7, 8, 9]);