function login(arr) {

    let userName = arr[0];
    let password = '';
    let count = 0;

    for (let i = userName.length - 1; i >= 0; i--) {

        password += userName[i];

    }

    for (let i = 1; i <= arr.length - 1; i++) {

        if (arr[i] === password) {

            console.log(`User ${userName} logged in.`);
            return;

        } else {

            count++;

            if (count === 4 && arr[i] !== password) {

                console.log(`User ${userName} blocked!`);
                return;

            }

            console.log('Incorrect password. Try again.');

        }
    }
}
login(['Acer', 'login', 'go', 'let me in', 'recA']);
// login(['momo', 'omom']);
// login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);