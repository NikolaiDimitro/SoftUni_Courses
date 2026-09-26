function movieProfit(nameOfMovie, countDay, countTicket, priceOfTicket, percentForCinema) {

    let totalMoney = countDay * countTicket * priceOfTicket;
    let totalMoneyForCinema = percentForCinema / 100 * totalMoney;
    let total = totalMoney - totalMoneyForCinema;

    console.log(`The profit from the movie ${nameOfMovie} is ${total.toFixed(2)} lv.`);

}
movieProfit('The Programmer', 20, 500, 7.50, 7);
movieProfit('Python Basics', 40, 34785, 10.45, 14);
movieProfit('The Jungle', 22, 20500, 9.37, 30);