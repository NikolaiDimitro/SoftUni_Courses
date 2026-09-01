function sequence2kPlus1(n) {

    let index = 0;
    let result = 1;

    while (result <= n) {

        console.log(result);
        index++;
        result = 2 * result + 1;

    }
}
sequence2kPlus1(3);
sequence2kPlus1(8);
sequence2kPlus1(17);
sequence2kPlus1(31);