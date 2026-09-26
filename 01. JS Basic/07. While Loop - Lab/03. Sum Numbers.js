function sumNumbers(arr) {

    let endNumber = Number(arr[0]);
    let sum = 0;
    let index = 1;

    while (arr[index] !== arr.length) {

        sum += Number(arr[index]);

        if (sum >= endNumber) {

            break;

        }

        index++;

    }

    console.log(sum);

}
sumNumbers(["100", "10", "20", "30", "40"]);
sumNumbers(["20", "1", "2", "3", "4", "5", "6"]);