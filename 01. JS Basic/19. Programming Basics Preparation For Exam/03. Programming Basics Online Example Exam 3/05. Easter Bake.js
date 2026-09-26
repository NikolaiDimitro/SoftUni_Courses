function easterBake(input) {

    let countEasterBreads = Number(input[0]);

    let totalSugar = 0;
    let totalFlour = 0;

    let maxSugar = 0;
    let maxFlour = 0;

    let index = 1;

    for (let i = 0; i < countEasterBreads; i++) {

        let sugar = Number(input[index]);
        let flour = Number(input[index + 1]);

        totalSugar += sugar;
        totalFlour += flour;

        if (sugar > maxSugar) {

            maxSugar = sugar;

        }

        if (flour > maxFlour) {

            maxFlour = flour;

        }

        index += 2;
    }

    let sugarPackages = Math.ceil(totalSugar / 950);
    let flourPackages = Math.ceil(totalFlour / 750);

    console.log(`Sugar: ${sugarPackages}`);
    console.log(`Flour: ${flourPackages}`);
    console.log(`Max used flour is ${maxFlour} grams, max used sugar is ${maxSugar} grams.`);

}
easterBake(["3","400","350","250","300","450","380"]);
easterBake(["4","500","350","560","430","600","345","578", "543"]);