function cinemTickets(arr) {

    let index = 0;
    let countStudentTickets = 0;
    let countStandartTickets = 0;
    let countKidsTickets = 0;
    let totalTicketsForTheProjection = 0;
    let totalTickets = 0;

    while (arr[index] !== 'Finish') {

        let nameOfMovie = arr[index];
        index++;

        let freePlacesInCinema = Number(arr[index]);
        index++;

        while (arr[index] !== 'End' && arr[index] !== 'Finish') {

            if (arr[index] === 'student') {

                countStudentTickets++;

            } else if (arr[index] === 'standard') {

                countStandartTickets++;

            } else {

                countKidsTickets++;
                
            }

            totalTicketsForTheProjection++;
            index++;

            if (totalTicketsForTheProjection === freePlacesInCinema) {

                break;

            }
        }

        console.log(`${nameOfMovie} - ${((totalTicketsForTheProjection / freePlacesInCinema) * 100).toFixed(2)}% full.`);

        totalTickets += totalTicketsForTheProjection;
        totalTicketsForTheProjection = 0;

        if (arr[index] === 'Finish') {

            break;

        }

        if (arr[index] === 'End') {

            index++;

        }
    }

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${((countStudentTickets / totalTickets) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((countStandartTickets / totalTickets) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((countKidsTickets / totalTickets) * 100).toFixed(2)}% kids tickets.`);

}
cinemTickets(["Taxi", "10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"]);
cinemTickets(["The Matrix", "20", "student", "standard", "kid", "kid", "student", "student", "standard", "student", "End", "The Green Mile", "17", "student", "standard", "standard", "student", "standard", "student", "End", "Amadeus", "3", "standard", "standard", "standard", "Finish"]);