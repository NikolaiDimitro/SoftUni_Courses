function oldBooks(arr) {

    let book = arr[0];
    let index = 1;
    let count = 0;

    while (arr[index] !== 'No More Books') {

        let currentBook = arr[index];

        if (book === currentBook) {

            console.log(`You checked ${count} books and found it.`);

            return;

        }

        count++;

        if (index === arr.length) {

            break;

        }

        index++;

    }

    console.log(`The book you search is not here!`);
    console.log(`You checked ${count} books.`);

}
oldBooks(["Troy", "Stronger", "Life Style", "Troy"]);
oldBooks(["The Spot", "Hunger Games", "Harry Potter", "Torronto", "Spotify", "No More Books"]);
oldBooks(["Bourne", "True Story", "Forever", "More Space", "The Girl", "Spaceship", "Strongest", "Profit", "Tripple", "Stella", "The Matrix", "Bourne"]);
// oldBooks();