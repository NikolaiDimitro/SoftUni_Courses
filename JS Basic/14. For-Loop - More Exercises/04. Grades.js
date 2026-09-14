function grades(arr) {

    let countStudents = Number(arr[0]);
    let totalGrades = 0;
    let gradesBetween2To3 = 0;
    let gradesBetween3To4 = 0;
    let gradesBetween4To5 = 0;
    let topGrades = 0;

    for (let i = 1; i <= countStudents; i++) {

        let grade = Number(arr[i]);

        totalGrades += grade;

        if (grade >= 2 && grade <= 2.99) {

            gradesBetween2To3++;

        } else if (grade >= 3 && grade <= 3.99) {

            gradesBetween3To4++;

        } else if (grade >= 4 && grade <= 4.99) {

            gradesBetween4To5++;

        } else {

            topGrades++;

        }
    }

    console.log(`Top students: ${((topGrades / countStudents) * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${((gradesBetween4To5 / countStudents) * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${((gradesBetween3To4 / countStudents) * 100).toFixed(2)}%`);
    console.log(`Fail: ${((gradesBetween2To3 / countStudents) * 100).toFixed(2)}%`);
    console.log(`Average: ${(totalGrades / countStudents).toFixed(2)}`);

}
grades(["10", "3.00", "2.99", "5.68", "3.01", "4", "4", "6.00", "4.50", "2.44", "5"]);
grades(["6", "2", "3", "4", "5", "6", "2.2"]);