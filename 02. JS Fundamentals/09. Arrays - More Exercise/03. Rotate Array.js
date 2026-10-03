function rotateArray(arr) {

    let countRotate = arr.pop();

    for (let i = 0; i < countRotate; i++) {

        let current = arr.pop();
        arr.unshift(current);

    }

    console.log(arr.join(' '));

}
rotateArray(['1', '2', '3', '4', '2']);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);