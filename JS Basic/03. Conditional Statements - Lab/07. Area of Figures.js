function areaOfFigures(...args) {

    if (args[0] === "square") {

        console.log((args[1] * args[1]).toFixed(3));

    } else if (args[0] === "rectangle") {

        console.log((args[1] * args[2]).toFixed(3));

    } else if (args[0] === "circle") {

        console.log((Math.PI * args[1] * args[1]).toFixed(3));

    } else {

        console.log((args[1] * args[2] / 2).toFixed(3));

    }
}
areaOfFigures("square", 5);
areaOfFigures("rectangle", 7, 2.5);
areaOfFigures("circle", 6);
areaOfFigures("triangle", 4.5, 20);