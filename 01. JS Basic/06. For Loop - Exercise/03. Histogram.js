function histogram(arr) {

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    let totalNumber = arr[0];

    for (let i = 1; i < arr.length; i++) {

        let number = arr[i];

        if (number < 200) {

            p1++;

        } else if (number < 400) {


            p2++;

        } else if (number < 600) {

            p3++;

        } else if (number < 800) {

            p4++;

        } else {

            p5++;

        }
    }

    console.log(`${((p1 / totalNumber) * 100).toFixed(2)}%`);
    console.log(`${((p2 / totalNumber) * 100).toFixed(2)}%`);
    console.log(`${((p3 / totalNumber) * 100).toFixed(2)}%`);
    console.log(`${((p4 / totalNumber) * 100).toFixed(2)}%`);
    console.log(`${((p5 / totalNumber) * 100).toFixed(2)}%`);

}
histogram([3, 1, 2, 999]);
histogram([7, 800, 801, 250, 199, 399, 599, 799]);
histogram([9, 367, 99, 200, 799, 999, 333, 555, 111, 9]);
histogram([14, 53, 7, 56, 180, 450, 920, 12, 7, 150, 250, 680, 2, 600, 200]);