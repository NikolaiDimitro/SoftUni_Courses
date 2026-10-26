function sequences(arr) {

    let result = [];

    for (let line of arr) {

        let currentArray = JSON.parse(line);
        currentArray.sort((a, b) => b - a);

        let isUnique = true;

        for (let existingArray of result) {

            if (existingArray.length === currentArray.length) {

                let isSame = true;

                for (let i = 0; i < currentArray.length; i++) {

                    if (existingArray[i] !== currentArray[i]) {

                        isSame = false;
                        break;

                    }
                }

                if (isSame) {

                    isUnique = false;
                    break;

                }
            }
        }

        if (isUnique) {

            result.push(currentArray);

        }
    }

    result.sort((a, b) => a.length - b.length);

    for (let array of result) {

        console.log(`[${array.join(', ')}]`);

    }
}
sequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"]);
sequences(["[7.14, 7.180, 7.339, 80.099]",
    "[7.339, 80.0990, 7.140000, 7.18]",
    "[7.339, 7.180, 7.14, 80.099]"]);