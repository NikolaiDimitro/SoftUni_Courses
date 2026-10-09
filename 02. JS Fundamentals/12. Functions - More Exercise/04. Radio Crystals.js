function radioCrystals(arr) {

    let target = arr[0];

    for (let i = 1; i < arr.length; i++) {

        let current = arr[i];

        console.log(`Processing chunk ${current} microns`);

        let count = 0;

        while (current / 4 >= target) {

            current /= 4;
            count++;

        }

        if (count > 0) {

            console.log(`Cut x${count}`);
            console.log('Transporting and washing');
            current = Math.floor(current);

        }

        count = 0;

        while (current * 0.8 >= target) {

            current *= 0.8;
            count++;

        }

        if (count > 0) {

            console.log(`Lap x${count}`);
            console.log('Transporting and washing');
            current = Math.floor(current);

        }

        count = 0;

        while (current - 20 >= target - 1) {

            current -= 20;
            count++;

        }

        if (count > 0) {

            console.log(`Grind x${count}`);
            console.log('Transporting and washing');
            current = Math.floor(current);

        }

        count = 0;

        while (current - 2 >= target - 1) {

            current -= 2;
            count++;

        }

        if (count > 0) {

            console.log(`Etch x${count}`);
            console.log('Transporting and washing');
            current = Math.floor(current);

        }

        if (current < target) {

            current++;
            console.log('X-ray x1');

        }

        console.log(`Finished crystal ${current} microns`);

    }
}
radioCrystals([1375, 50000]);
radioCrystals([1000, 4000, 8100]);