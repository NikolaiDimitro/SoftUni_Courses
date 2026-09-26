function fishTank(length, width, height, percentFilled) {

    console.log(length * width * height * 0.001 * (1 - percentFilled / 100));

}
fishTank(85, 75, 47, 17);
fishTank(105, 77, 89, 18.5);