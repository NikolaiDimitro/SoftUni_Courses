function depositCalculator(depositAmount, depositDeadline, annualInterestRate) {

    console.log(depositAmount + depositDeadline * ((depositAmount * annualInterestRate) / 12) / 100);

}
depositCalculator(200, 3, 5.7);
depositCalculator(2350, 6, 7);