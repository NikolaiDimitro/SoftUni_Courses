function easterGuest(countGuests, budget) {

    let easterBreads = Math.ceil(countGuests / 3);
    let eggs = countGuests * 2;
    let total = easterBreads * 4 + eggs * 0.45;

    if (budget >= total) {

        let leftMoney = budget - total;
        console.log(`Lyubo bought ${easterBreads} Easter bread and ${eggs} eggs.`);
        console.log(`He has ${leftMoney.toFixed(2)} lv. left.`);

    } else {

        let needMoney = total - budget
        console.log(`Lyubo doesn't have enough money.`);
        console.log(`He needs ${needMoney.toFixed(2)} lv. more.`);
        
    }
}
easterGuest(10,35);
easterGuest(9, 12);
// easterGuest();
// easterGuest();