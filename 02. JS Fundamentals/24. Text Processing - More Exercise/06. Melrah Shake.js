function melrahShake(arr) {

    let str = arr.shift();
    let pattern = arr.shift();

    while (pattern.length > 0) {

        let index = str.indexOf(pattern);
        let last = str.lastIndexOf(pattern);

        if (index === -1 || last === -1 || index === last) {

            break;

        }

        if (index + pattern.length > last) {

            str = str.substring(0, index) + str.substring(last + pattern.length);

        } else {

            str = str.substring(0, index) + str.substring(index + pattern.length, last) + str.substring(last + pattern.length);

        }

        console.log('Shaked it.');

        let middleIndex = Math.floor(pattern.length / 2);

        pattern = pattern.substring(0, middleIndex) + pattern.substring(middleIndex + 1);

    }

    console.log('No shake.');
    console.log(str);
    
}
melrahShake(['astalavista baby', 'sta']);
melrahShake(['##mtm!!mm.mm*mtm.#', 'mtm']);