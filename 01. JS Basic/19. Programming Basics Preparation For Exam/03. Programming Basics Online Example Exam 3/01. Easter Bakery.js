function easterBakery(priceFlour, kilogramFlour, kilogramsSugar, eggsCarton, yeast) {

    let priceSugar = priceFlour * 0.75;
    let priceEggsCarton = priceFlour * 1.10;
    let priceYeast = priceSugar * 0.20;
    let flour = priceFlour * kilogramFlour;
    let sugar = kilogramsSugar * priceSugar;
    let eggs = eggsCarton * priceEggsCarton;
    let priceYeasts = yeast * priceYeast;
    let total = flour + sugar + eggs + priceYeasts;

    console.log(total.toFixed(2));

}
easterBakery(50, 10, 3.5, 6, 1);
easterBakery(63.44, 3.57, 6.35, 8, 2);