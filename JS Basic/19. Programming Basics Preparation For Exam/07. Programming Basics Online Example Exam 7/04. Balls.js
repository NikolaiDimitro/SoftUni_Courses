function balls(input) {

    let ballsCount = Number(input[0]);
    let sum = 0;
    let red = 0;
    let orange = 0;
    let yellow = 0;
    let white = 0;
    let black = 0;
    let other = 0;
    let color = 0;

    for (let i = 1; i <= input.length - 1; i++) {

        color = input[i];

        switch (color) {

            case "red":

                sum += 5;
                red++;
                break;

            case "orange":

                sum += 10;
                orange++;
                break;

            case "yellow":

                sum += 15;
                yellow++;
                break;

            case "white":

                sum += 20;
                white++;
                break;

            case "black":

                sum /= 2;
                black++;
                break;

            default:

                other++;
                break;

        }
    }

    console.log(`Total points: ${Math.floor(sum)}`);
    console.log(`Red balls: ${red}`);
    console.log(`Orange balls: ${orange}`);
    console.log(`Yellow balls: ${yellow}`);
    console.log(`White balls: ${white}`);
    console.log(`Other colors picked: ${other}`);
    console.log(`Divides from black balls: ${black}`);

}
balls(["3", "white", "black", "pink"]);
balls(["5", "red", "red", "ddd", "ddd", "ddd"]);