function suppliesForSchool(countChemicalPackages, countTokensPackages, litersOfDetergent, percentageDiscount) {

    console.log((countChemicalPackages * 5.8 + countTokensPackages * 7.2 + litersOfDetergent * 1.2) * (1 - percentageDiscount / 100));

}
suppliesForSchool(2, 3, 4, 25);
suppliesForSchool(4, 2, 5, 13);