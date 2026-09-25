function travelAgency(nameOfCity, typeOfPacket, vipCard, countOfStay) {

    let price = 0;

    if (countOfStay > 7) {

        countOfStay -= 1;

    }
    switch (nameOfCity) {

        case "Bansko":

        case "Borovets":

            if (typeOfPacket === "noEquipment") {

                price = countOfStay * 80;

                if (vipCard === "yes") {

                    price *= 0.95;

                }

            } else if (typeOfPacket === "withEquipment") {

                price = countOfStay * 100;

                if (vipCard === "yes") {

                    price *= 0.90;

                }
            }

            break;

        case "Varna":

        case "Burgas":

            if (typeOfPacket === "noBreakfast") {

                price = countOfStay * 100;

                if (vipCard === "yes") {

                    price *= 0.93;

                }

            } else if (typeOfPacket === "withBreakfast") {

                price = countOfStay * 130;

                if (vipCard === "yes") {

                    price *= 0.88;

                }
            }

            break;

    }

    if (countOfStay < 1) {

        console.log(`Days must be positive number!`);

    } else if (typeOfPacket !== "noEquipment" && typeOfPacket !== "withEquipment" && typeOfPacket !== "noBreakfast" && typeOfPacket !== "withBreakfast" || nameOfCity !== "Bansko" && nameOfCity !== "Borovets" && nameOfCity !== "Varna" && nameOfCity !== "Burgas") {
        console.log(`Invalid input!`);

    } else {

        console.log(`The price is ${price.toFixed(2)}lv! Have a nice time!`);

    }
}
travelAgency('Borovets', 'noEquipment', 'yes', 6);
travelAgency('Bansko', 'withEquipment', 'no', 2);
travelAgency('Varna', 'withBreakfast', 'yes', 5);
travelAgency('Burgas', 'noBreakfast', 'no', 4);
travelAgency('Varna', 'withBreakfast', 'no', 0);
travelAgency('Gabrovo', 'noBreakfast', 'no', 3);