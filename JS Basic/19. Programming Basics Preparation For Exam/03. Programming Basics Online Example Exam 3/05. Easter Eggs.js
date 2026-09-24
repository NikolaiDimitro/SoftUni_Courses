function easterEggs(input) {

    let countEgg = Number(input[0]);
    let maxColor = Number.MIN_SAFE_INTEGER;
    let colorisimo = 0;
    let red = 0;
    let orange = 0;
    let blue = 0;
    let green = 0;
    let color = "";

    for (let i = 1; i <= input.length; i++) {

        colorisimo = input[i];

        if (colorisimo === "red") {

            red++;

        } else if (colorisimo === "orange") {

            orange++;

        } else if (colorisimo === "blue") {

            blue++;

        } else if (colorisimo === "green") {

            green++;

        }

        if (red > maxColor) {

            maxColor = red
            color = "red";

        } else if (orange > maxColor) {

            maxColor = orange;
            color = "orange";

        } else if (blue > maxColor) {

            maxColor = blue;
            color = "blue";

        } else if (green > maxColor) {

            maxColor = green;
            color = "green";

        }
    }

    console.log(`Red eggs: ${red}`);
    console.log(`Orange eggs: ${orange}`);
    console.log(`Blue eggs: ${blue}`);
    console.log(`Green eggs: ${green}`);
    console.log(`Max eggs: ${maxColor} -> ${color}`);

}
easterEggs((["7", "orange", "blue", "green", "green", "blue", "red", "green"]));
easterEggs(["4", "blue", "red", "blue", "orange"]);