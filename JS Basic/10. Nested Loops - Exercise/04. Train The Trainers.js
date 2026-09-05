function trainTheTrainers(arr) {

    let index = 2;
    let sum = 0;
    let countOfJudge = Number(arr[0]);
    let nameOfExercise = arr[1];
    let averageGrade = 0;
    let totalAverageGrades = 0;
    let countAverageGrade = 0;

    while (arr[index] !== 'Finish') {

        for (let i = index; i < index + countOfJudge; i++) {

            let grade = Number(arr[i]);

            sum += grade;

        }

        averageGrade = sum / countOfJudge;
        totalAverageGrades += averageGrade;

        sum = 0;
        countAverageGrade++;

        console.log(`${nameOfExercise} - ${averageGrade.toFixed(2)}.`);

        index += countOfJudge;
        nameOfExercise = arr[index];

        if (arr[index] !== 'Finish') {

            index++;

        }
    }

    console.log(`Student's final assessment is ${(totalAverageGrades / countAverageGrade).toFixed(2)}.`);

}
trainTheTrainers(["2", "While-Loop", "6.00", "5.50", "For-Loop", "5.84", "5.66", "Finish"]);
trainTheTrainers(["3", "Arrays", "4.53", "5.23", "5.00", "Lists", "5.83", "6.00", "5.42", "Finish"]);
trainTheTrainers(["2", "Objects and \"Classes", "5.77", "4.23", "Dictionaries", "4.62", "5.02", "RegEx", "2.88", "3.42", "Finish"]);