function fruitMarket(strawberryPrice, bananaCount, orangeCount, raspberryCount, strawberryCount) {

    let raspberryPrice = strawberryPrice * 0.5;
    let orangePrice = raspberryPrice * 0.6;
    let bananaPrice = raspberryPrice * 0.2;
    let sum = strawberryPrice * strawberryCount + bananaCount * bananaPrice + orangeCount * orangePrice + raspberryCount * raspberryPrice;

    console.log(sum.toFixed(2));

}
fruitMarket(48, 10, 3.3, 6.5, 1.7);
fruitMarket(63.5, 3.57, 6.35, 8.15, 2.5);