function weddingSeats(lastSector, countRowInFirstSector, countPlacesInOddRow) {

    let asciiCodeForASector = 'A'.charCodeAt(0);
    let asciiCodeForLastSector = lastSector.charCodeAt();
    let countRows = countRowInFirstSector;
    let countPlace = 0;
    let totalCountPlaces = 0;

    for (let s = asciiCodeForASector; s <= asciiCodeForLastSector; s++) {

        for (let r = 1; r <= countRows; r++) {

            if (r % 2 !== 0) {

                countPlace = countPlacesInOddRow;

            } else {

                countPlace = countPlacesInOddRow + 2;

            }

            for (let p = 97; p < 97 + countPlace; p++) {

                console.log(`${String.fromCharCode(s)}${r}${String.fromCharCode(p)}`);
                totalCountPlaces++;

            }
        }

        countRows++;

    }

    console.log(totalCountPlaces);

}
weddingSeats('B', 3, 2);
weddingSeats('C', 4, 2);