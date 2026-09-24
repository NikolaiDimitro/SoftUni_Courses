function cinemaVoucher(arr) {

    let voucher = Number(arr[0]);
    let countTickets = 0;
    let countProducts = 0;

    for (let i = 1; i < arr.length; i++) {

        let purchase = arr[i];

        if (purchase === "End") {
            break;
        }

        let price;

        if (purchase.length > 8) {
            price = purchase.charCodeAt(0) + purchase.charCodeAt(1);

            if (price > voucher) {
                break;
            }

            voucher -= price;
            countTickets++;

        } else {
            price = purchase.charCodeAt(0);

            if (price > voucher) {
                break;
            }

            voucher -= price;
            countProducts++;
        }
    }

    console.log(countTickets);
    console.log(countProducts);
    
}
cinemaVoucher(["300","Captain Marvel","popcorn","Pepsi"]);
cinemaVoucher(["1500","Avengers: Endgame","Bohemian Rhapsody", "Deadpool 2","End"]);