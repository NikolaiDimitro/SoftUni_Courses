function easterLunch(countKozunaks, eggCartons, kilogramsCookies) {

    let kozunaks = countKozunaks * 3.20;
    let cookies = kilogramsCookies * 5.40;
    let eggs = eggCartons * 4.35;
    let pain = eggCartons * 12 * 0.15;
    let total = kozunaks + cookies + eggs + pain;

    console.log(total.toFixed(2));

}
easterLunch(3, 2, 3);
easterLunch(4, 4, 3);