function aTravelTime(arr) {

    let destinationObj = {};

    for (let counrtys of arr) {

        let [country, town, price] = counrtys.split(' > ');

        price = Number(price);

        if (!destinationObj.hasOwnProperty(country)) {

            destinationObj[country] = { [town]: price };

        } else if (!destinationObj[country].hasOwnProperty(town) || destinationObj[country][town] > price) {

            destinationObj[country][town] = price;

        }
    }

    let entries = Object.entries(destinationObj).sort(([countryA], [countryB]) => countryA.localeCompare(countryB));

    for (let county of entries) {

        let str = `${county[0]} -> `;
        let townEntries = Object.entries(county[1]).sort(([, priceA], [, priceB]) => priceA - priceB).forEach((x) => str += `${x[0]} -> ${x[1]} `);
        console.log(str);

    }
}
aTravelTime(["Bulgaria > Sofia > 500", "Bulgaria > Sopot > 800", "France > Paris > 2000", "Albania > Tirana > 1000", "Bulgaria > Sofia > 200"]);
aTravelTime([ 'Bulgaria > Sofia > 25000', 'Bulgaria > Sofia > 25000', 'Kalimdor > Orgrimar > 25000', 'Albania > Tirana > 25000', 'Bulgaria > Varna > 25010', 'Bulgaria > Lukovit > 10']);