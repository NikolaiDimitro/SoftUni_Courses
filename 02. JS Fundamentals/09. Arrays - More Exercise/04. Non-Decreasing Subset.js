function nonDecreasingSubset(arr) {

    let maxNumber = Number.MIN_SAFE_INTEGER;
    let filtered = arr.filter((el) => {

        if (el >= maxNumber) {

            maxNumber = el;
            return true;

        }

        return false;

    });

    console.log(filtered.join(' '));

}
nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasingSubset([1, 2, 3, 4]);
nonDecreasingSubset([20, 3, 2, 15, 6, 1]);