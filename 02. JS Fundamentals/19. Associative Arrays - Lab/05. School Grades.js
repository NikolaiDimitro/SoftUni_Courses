function schoolGrades(arr) {

    let studentObj = {};

    for (let student of arr) {

        let current = student.split(' ');
        let studentName = current.shift();

        let sumOfGrades = 0;
        let countOfGrade = 0;

        for (let grade of current) {

            sumOfGrades += Number(grade);
            countOfGrade++;

        }

        if (!studentObj.hasOwnProperty(studentName)) {

            studentObj[studentName] = {

                sum: sumOfGrades,
                count: countOfGrade

            }

        } else {

            studentObj[studentName].sum += sumOfGrades;
            studentObj[studentName].count += countOfGrade;

        }
    }

    for (let student in studentObj) {

        let sum = studentObj[student].sum;
        let count = studentObj[student].count;
        let averegeSum = (sum / count).toFixed(2);

        studentObj[student] = averegeSum;

    }

    let entries = Object.entries(studentObj)
        .sort(([studentNameA, studentAveregeGradeOfA], [studentNameB, studentAveregeGradeOfB]) => studentNameA.localeCompare(studentNameB));

    for (let student of entries) {

        console.log(`${student[0]}: ${student[1]}`);

    }
}
schoolGrades(['Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6']);
schoolGrades(['Steven 3 5 6 4', 'George 4 6', 'Tammy 2 5 3', 'Steven 6 3']);