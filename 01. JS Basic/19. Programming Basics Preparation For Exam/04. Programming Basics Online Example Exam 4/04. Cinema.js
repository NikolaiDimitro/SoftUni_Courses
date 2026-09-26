function cinema(input) {

    let capacitetOfCinema = Number(input[0]);
    let people = 0;
    let totalPeople = 0;
    let end = "";
    let totalSum = 0;

    for (let i = 1; i <= input.length; i++) {

        end = input[i];

        if (end === "Movie time!") {

            let leftPlace = capacitetOfCinema - totalPeople;
            console.log(`There are ${leftPlace} seats left in the cinema.`);
            console.log(`Cinema income - ${totalSum} lv.`);

        }

        people = Number(input[i]);
        totalPeople += people;
        sum = people * 5

        if (totalPeople > capacitetOfCinema) {

            console.log(`The cinema is full.`);
            console.log(`Cinema income - ${totalSum} lv.`);
            break;

        }

        if (people % 3 === 0) {

            sum -= 5

        }

        totalSum += sum;

    }
}
cinema((["60","10","6","3","20","15","Movie time!"]));
cinema((["50","15","10","10","15","5"]));
cinema((["100","10","10","10","10","10","10","10","10","10","10","Movie time!"]));