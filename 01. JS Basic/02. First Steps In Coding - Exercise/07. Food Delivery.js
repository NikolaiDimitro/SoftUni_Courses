function foodDelivery(chickenMenu, fishMenu, vegetarianMenu) {

    let menusWithoutDesert = chickenMenu * 10.35 + fishMenu * 12.4 + vegetarianMenu * 8.15;
    let total = menusWithoutDesert + (menusWithoutDesert * 0.2) + 2.5;

    console.log(total);

}
foodDelivery(2, 4, 3);
foodDelivery(9, 2, 6);