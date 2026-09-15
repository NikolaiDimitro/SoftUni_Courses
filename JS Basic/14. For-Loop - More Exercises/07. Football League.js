function footballLeague(arr) {

    let stadiumCapacity = Number(arr[0]);
    let countFans = Number(arr[1]);
    let countASector = 0;
    let countBSector = 0;
    let countVSector = 0;
    let countGSector = 0;

    for (let i = 2; i <= countFans + 1; i++) {

        if (arr[i] === 'A') {

            countASector++;

        } else if (arr[i] === 'B') {

            countBSector++;

        } else if (arr[i] === 'V') {

            countVSector++;

        } else {

            countGSector++;

        }
    }

    console.log(`${((countASector / countFans) * 100).toFixed(2)}%`);
    console.log(`${((countBSector / countFans) * 100).toFixed(2)}%`);
    console.log(`${((countVSector / countFans) * 100).toFixed(2)}%`);
    console.log(`${((countGSector / countFans) * 100).toFixed(2)}%`);
    console.log(`${((countFans / stadiumCapacity) * 100).toFixed(2)}%`);

}
footballLeague(["76", "10", "A", "V", "V", "V", "G", "B", "A", "V", "B", "B"]);
footballLeague(["93", "16", "A", "V", "G", "G", "B", "B", "G", "B", "A", "B", "B", "B", "A", "B", "B", "A"]);
footballLeague(["1000", "12", "A", "A", "V", "V", "A", "G", "A", "A", "V", "G", "V", "A"]);