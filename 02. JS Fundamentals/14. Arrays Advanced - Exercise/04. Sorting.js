function sorting(arr) {

    let sortedArr = [...arr].sort((a, b) => b - a);
    let newArr = [];

    for (let i = 0; i < Math.ceil(arr.length / 2); i++) {

        newArr.push(sortedArr[i]);

        if (i !== sortedArr.length - 1 - i) {

            newArr.push(sortedArr[sortedArr.length - 1 - i]);

        }
    }

    console.log(newArr.join(' '));
    
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);