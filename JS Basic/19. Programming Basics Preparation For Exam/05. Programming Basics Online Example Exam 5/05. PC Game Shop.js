function pcGameShop(input) {
    
    let index = 1;
    let countGames = Number(input[0]);
    let nameOfGames = input[index];
    let count = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;

    while (index !== input.length) {

        nameOfGames = input[index];

        switch (nameOfGames) {

            case "Hearthstone":

                count++;
                index++
                break;

            case "Fornite":

                count2++;
                index++
                break;

            case "Overwatch":

                count3++;
                index++
                break;

            default:

                count4++;
                index++

        }
    }

    console.log(`Hearthstone - ${(count / countGames * 100).toFixed(2)}%`);
    console.log(`Fornite - ${(count2 / countGames * 100).toFixed(2)}%`);
    console.log(`Overwatch - ${(count3 / countGames * 100).toFixed(2)}%`);
    console.log(`Others - ${(count4 / countGames * 100).toFixed(2)}%`);

}
pcGameShop(["4","Hearthstone", "Fornite", "Overwatch", "Counter-Strike"]);
pcGameShop(["3", "Hearthstone", "Diablo 2", "Star Craft 2"]);