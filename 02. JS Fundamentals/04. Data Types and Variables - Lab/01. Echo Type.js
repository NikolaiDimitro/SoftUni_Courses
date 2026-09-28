function echoType(data) {

    console.log(typeof data);

    if (typeof data === "number" || typeof data === "string") {

        console.log(data);

    } else {

        console.log('Parameter is not suitable for printing');

    }
}
echoType('Hello, JavaScript!');
echoType(18);
echoType(null);