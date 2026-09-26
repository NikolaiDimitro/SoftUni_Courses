function birthdayParty(input) {

    let rent = Number(input);
    let cake = rent * 0.20;
    let drinks = cake * 0.55;
    let animator = rent / 3;
    let budget = rent + cake + drinks + animator;

    console.log(budget.toFixed(1));

}
birthdayParty(2250);
birthdayParty(3720);