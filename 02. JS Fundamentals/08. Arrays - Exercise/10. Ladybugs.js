function ladybugs(arr) {
    
    let sizeOfFiled = Number(arr[0]);
    let ladybugsPositions = arr[1].split(' ');

    ladybugsPositions = ladybugsPositions.map(Number);

    let field = [];

    for (let i = 0; i < sizeOfFiled; i++) {

        field.push(0);

    }

    for (let index of ladybugsPositions) {

        if (index >= 0 && index < sizeOfFiled) {

            field[index] = 1;

        }
    }

    for (let i = 2; i < arr.length; i++) {

        let command = arr[i];

        if (!command) break;

        let tokens = command.split(' ');
        let ladybugIndex = Number(tokens[0]);
        let direction = tokens[1];
        let flyLength = Number(tokens[2]);

        if (ladybugIndex < 0 || ladybugIndex >= sizeOfFiled || field[ladybugIndex] !== 1) {

            continue;

        }

        field[ladybugIndex] = 0;

        let step = direction === 'right' ? flyLength : -flyLength;
        let nextIndex = ladybugIndex + step;

        while (nextIndex >= 0 && nextIndex < sizeOfFiled) {

            if (field[nextIndex] === 0) {

                field[nextIndex] = 1;
                break;

            }

            nextIndex += step;

        }
    }

    console.log(field.join(' '));

}
ladybugs([3, '0 1', '0 right 1', '2 right 1']);
ladybugs([3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);
ladybugs([5, '3', '3 left 2', '1 left -2']);