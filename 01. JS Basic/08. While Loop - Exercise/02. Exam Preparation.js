function examPreparation(arr) {

    let index = 1;
    let countBadGrade = 0;
    let countGoodGrade = 0;
    let sumGoodGrade = 0;
    let totalTasks = 0;
    let lastTask = '';
    let badGradesAllowed = Number(arr[0]);


    while (arr[index] !== 'Enough') {

        let nameOfTask = arr[index];

        lastTask = nameOfTask;
        totalTasks++;

        index++;

        let grade = Number(arr[index]);

        index++;

        if (grade > 4) {

            countGoodGrade++;
            sumGoodGrade += grade;

        } else {

            countBadGrade++;
            sumGoodGrade += grade;

        }

        if (countBadGrade === badGradesAllowed) {

            console.log(`You need a break, ${badGradesAllowed} poor grades.`);
            return;

        }

        if (index >= arr.length) {

            break;

        }
    }

    console.log(`Average score: ${(sumGoodGrade / totalTasks).toFixed(2)}`);
    console.log(`Number of problems: ${totalTasks}`);
    console.log(`Last problem: ${lastTask}`);

}
examPreparation(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"]);
examPreparation(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);