function graduation(arr) {

    let nameOfStudent = arr[0];
    let index = 1;
    let clas = 0;
    let count = 0;
    let sum = 0;

    while (index !== arr.length) {

        let currentGrade = Number(arr[index]);

        if (currentGrade >= 4) {

            clas++;

            if (count === 1) {

                count = 0;

            }

            sum += currentGrade;

        } else {

            count++;
            index++;

            if (currentGrade < 4 && count === 2) {

                clas++;
                console.log(`${nameOfStudent} has been excluded at ${clas} grade`);
                return;

            }

            continue;

        }

        index++;

    }

    console.log(`${nameOfStudent} graduated. Average grade: ${(sum / 12).toFixed(2)}`);

}
graduation(["Gosho", "5", "5.5", "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"]);
graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);