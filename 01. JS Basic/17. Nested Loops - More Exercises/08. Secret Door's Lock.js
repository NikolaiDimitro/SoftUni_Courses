function secretDoorsLock(hundreds, dozens, units) {

    for (let i = 1; i <= hundreds; i++) {

        for (let k = 2; k <= dozens; k++) {

            for (let l = 1; l <= units; l++) {

                if (i % 2 === 0 && (k === 2 || k === 3 || k === 5 || k === 7) && l % 2 === 0) {

                    console.log(`${i} ${k} ${l}`);

                }
            }
        }
    }
}
secretDoorsLock(3, 5, 5);
secretDoorsLock(8, 2, 8);