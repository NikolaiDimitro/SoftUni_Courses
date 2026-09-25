function changeBureau(bitcoin, chinaUan, commission) {

    let priceBitcoin = (bitcoin * 1168) / 1.95;
    let priceChinaUan = (((chinaUan * 0.15) * 1.76)) / 1.95;
    let sum = ((priceChinaUan + priceBitcoin) / 100) * commission;
    let totalSum = (priceBitcoin + priceChinaUan) - sum;

    console.log(totalSum.toFixed(2));

}
changeBureau(1, 5, 5);
changeBureau(20, 5678, 2.4);
changeBureau(7, 50200.12, 3);