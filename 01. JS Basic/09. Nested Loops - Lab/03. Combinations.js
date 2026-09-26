function combinations(n) {

    let count = 0;

    for (let f = 0; f <= n; f++) {

        for (let s = 0; s <= n; s++) {

            for (let t = 0; t <= n; t++) {

                if (f + s + t === n) {

                    count++;

                }
            }
        }
    }

    console.log(count);

}
combinations(25);