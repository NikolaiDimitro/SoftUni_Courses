function schoolRegister(arr) {

    let studentArr = [];

    for (let student of arr) {

        let studentsObj = {};

        let [studentName, grade, averageScore] = student.split(', ');
        let [studenValue, studentKey] = studentName.split(': ');
        let [gradeValue, gradeKey] = grade.split(': ');
        let [averageScoreValue, averageScoreKey] = averageScore.split(': ');

        averageScoreKey = Number(averageScoreKey);
        gradeKey = Number(gradeKey);

        if (averageScoreKey >= 3) {

            gradeKey += 1;

            studentsObj[studenValue] = studentKey;
            studentsObj[gradeValue] = gradeKey;
            studentsObj[averageScoreValue] = averageScoreKey;

            studentArr.push(studentsObj);

        }
    }

    studentArr.sort((a, b) => a.Grade - b.Grade);

    let grade = 0;
    let gradeArr = [];
    let sumOfAveregeScore = 0;
    let countStundent = 0;

    studentArr.forEach((x, index) => {

        if (x['Grade'] > grade && index !== 0) {

            console.log(`List of students: ${gradeArr.join(', ')}`);
            console.log(`Average annual score from last year: ${(sumOfAveregeScore / countStundent).toFixed(2)}`);
            console.log(' ');

            gradeArr = [];
            countStundent = 0;
            sumOfAveregeScore = 0;

            grade = x['Grade'];

            console.log(`${grade} Grade`);
            gradeArr.push(x['Student name']);

            countStundent++;
            sumOfAveregeScore += Number(x['Graduated with an average score']);

        } else if (x['Grade'] > grade && index === 0) {

            grade = x['Grade'];

            console.log(`${grade} Grade`);
            gradeArr.push(x['Student name']);

            countStundent++;
            sumOfAveregeScore += Number(x['Graduated with an average score']);

        } else if (x['Grade'] <= grade) {

            gradeArr.push(x['Student name']);
            countStundent++;
            sumOfAveregeScore += Number(x['Graduated with an average score']);

        }
    });

    console.log(`List of students: ${gradeArr.join(', ')}`);
    console.log(`Average annual score from last year: ${(sumOfAveregeScore / countStundent).toFixed(2)}`);

}
schoolRegister(["Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"]);
schoolRegister(['Student name: George, Grade: 5, Graduated with an average score: 2.75',
    'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
    'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
    'Student name: John, Grade: 9, Graduated with an average score: 2.90',
    'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
    'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15']);