function paintingEggs(size, color, countPartids) {

    let price = 0;
    let sum = 0;

    switch (size) {

        case "Large":

            if (color === "Red") {

                price = countPartids * 16;
                sum += price;

            } else if (color === "Green") {

                price = countPartids * 12;
                sum += price;

            } else if (color === "Yellow") {

                price = countPartids * 9;
                sum += price;

            }

            break;

        case "Medium":

            if (color === "Red") {

                price = countPartids * 13;
                sum += price;

            } else if (color === "Green") {

                price = countPartids * 9;
                sum += price;

            } else if (color === "Yellow") {

                price = countPartids * 7;
                sum += price;

            }

            break;

        case "Small":

            if (color === "Red") {

                price = countPartids * 9;
                sum += price;

            } else if (color === "Green") {

                price = countPartids * 8;
                sum += price;

            } else if (color === "Yellow") {

                price = countPartids * 5;
                sum += price;

            }

            break;

    }

    sum *= 0.65;
    console.log(`${sum.toFixed(2)} leva.`);
    
}
paintingEggs('Large','Red',7);
paintingEggs('Medium', 'Green', 5);
paintingEggs('Small', 'Yellow', 3);