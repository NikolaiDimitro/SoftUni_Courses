function loadingBar(n) {

    let percentLoad = n / 10;
    let arr = [];
    let str = '';

    for (let i = 1; i <= 10; i++) {

        if (i <= percentLoad) {

            arr.push('%');

        } else {

            arr.push('.');

        }
    }

    str = `${n}% [${arr.join('')}]`;

    if (n === 100) {

        console.log('100% Complete!');
        console.log(str);

    } else {

        console.log(str);
        console.log('Still loading...');

    }
}
loadingBar(30);
loadingBar(50);
loadingBar(100);