function pyramidOfKingDjoser(base, increment) {

    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let floors = 0;

    for (let i = base; i >= 1; i -= 2) {

        floors++;

        if (i <= 2) {

            gold += i * i * increment;

        } else {

            stone += (i - 2) * (i - 2);

            if (floors % 5 === 0) {

                lapisLazuli += i * 4 - 4;

            } else {

                marble += i * 4 - 4;

            }
        }
    }

    console.log(`Stone required: ${Math.ceil(stone * increment)}`);
    console.log(`Marble required: ${Math.ceil(marble * increment)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli * increment)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(floors * increment)}`);

}
pyramidOfKingDjoser(11, 1);
pyramidOfKingDjoser(11, 0.75);
pyramidOfKingDjoser(12, 1);
pyramidOfKingDjoser(23, 0.5);