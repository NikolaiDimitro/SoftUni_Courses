function serealizeString(arr) {

    let str = arr[0];
    let previouslySymbol = [];
    let all = '';

    for (let letter of str) {

        let isFirst = true;

        if (!previouslySymbol.includes(letter)) {

            previouslySymbol.push(letter);
            all += letter + ':';

            for (let i = 0; i < str.length; i++) {

                if (str[i] === letter) {

                    if (isFirst) {

                        isFirst = false;
                        all += `${i}`;

                    } else {

                        all += `/${i}`;

                    }
                }
            }

            console.log(all);
            all = '';

        }
    }
}
serealizeString(["abababa"]);
serealizeString(["avjavamsdmcalsdm"]);