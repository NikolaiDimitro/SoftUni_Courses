function summSeconds(a, b, c) {

    let totalSeconds = a + b + c;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    if (seconds < 10) {

        console.log(`${minutes}:0${seconds}`);

    } else {

        console.log(`${minutes}:${seconds}`)

    }
}
summSeconds(35, 45, 44);
summSeconds(22, 7, 34);
summSeconds(50, 50, 49);
summSeconds(14, 12, 10);