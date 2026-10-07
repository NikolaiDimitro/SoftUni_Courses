function passwordValidator(password) {

    let count = 0;
    let isValid = true;

    if (password.length < 6 || password.length > 10) {

        console.log('Password must be between 6 and 10 characters');
        isValid = false;

    }

    for (let i = 0; i < password.length; i++) {

        let current = password[i];

        let asciiCode = current.charCodeAt();

        if (!(asciiCode >= 48 && asciiCode <= 57) && !(asciiCode >= 65 && asciiCode <= 90) && !(asciiCode >= 97 && asciiCode <= 122)) {

            console.log('Password must consist only of letters and digits');
            isValid = false;
            break;

        }

        if (asciiCode >= 48 && asciiCode <= 57) {

            count++;

        }
    }

    if (count < 2) {

        console.log('Password must have at least 2 digits');
        isValid = false;

    }

    if (isValid) {

        console.log('Password is valid');

    }
}
passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s');