function employees(arr) {

    let obj = {};

    arr.forEach((x) => obj[x] = x.length);

    for (let key in obj) {

        console.log(`Name: ${key} -- Personal Number: ${obj[key]}`);

    }
}
employees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);
employees(['Samuel Jackson', 'Will Smith', 'Bruce Willis', 'Tom Holland']);