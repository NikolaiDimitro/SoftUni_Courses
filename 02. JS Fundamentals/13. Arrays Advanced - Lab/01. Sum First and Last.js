function sumFirstAndLast(arr) {

    let first = Number(arr.shift());
    let second = Number(arr.pop());

    console.log(first + second);

}
sumFirstAndLast(['20', '30', '40']);
sumFirstAndLast(['5', '10']);