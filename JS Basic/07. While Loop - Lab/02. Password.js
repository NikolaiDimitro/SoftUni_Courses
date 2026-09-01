function password(arr) {

    let index = 2;
    let userName = arr[0];
    let password = arr[1];

    while (arr[index] !== arr.length - 1) {

        if (arr[index] === password) {

            console.log(`Welcome ${userName}!`);
            break;

        }

        index++;

    }
}
password(["Nakov", "1234", "Pass", "1324", "1234"]);
password(["Gosho", "secret", "secret"]);