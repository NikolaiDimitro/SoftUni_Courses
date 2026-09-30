function cone(radius, height) {

    let v = 1 / 3 * Math.PI * Math.pow(radius, 2) * height;
    let s = Math.PI * radius * (radius + (Math.sqrt(Math.pow(height, 2) + Math.pow(radius, 2))));

    console.log(`volume = ${v.toFixed(4)}`);
    console.log(`area = ${s.toFixed(4)}`);

}
cone(3, 5);
cone(3.3, 7.8);