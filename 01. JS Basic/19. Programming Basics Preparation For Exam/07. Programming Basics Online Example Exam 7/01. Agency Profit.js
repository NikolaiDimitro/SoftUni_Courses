function agencyProfit(airline, adultTickets, childTickets, adultPrice, serviceFee) {

    let childPrice = adultPrice * 0.30;

    let adultTicketPrice = adultPrice + serviceFee;
    let childTicketPrice = childPrice + serviceFee;

    let totalPrice = adultTickets * adultTicketPrice
        + childTickets * childTicketPrice;

    let profit = totalPrice * 0.20;

    console.log(`The profit of your agency from ${airline} tickets is ${profit.toFixed(2)} lv.`);

}
agencyProfit('WizzAir', 15, 5, 120, 40);
agencyProfit('Ryanair', 60, 23, 158.96, 39.12);