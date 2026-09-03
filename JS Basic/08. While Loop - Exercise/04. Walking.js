function walking(arr) {

    let index = 0;
    let sumOfSteps = 0;

    while (index !== arr.length) {

        if (arr[index] === 'Going home') {

            index++;

        }

        let currentSteps = Number(arr[index]);

        sumOfSteps += currentSteps;

        if (sumOfSteps >= 10000) {

            console.log('Goal reached! Good job!');
            console.log(`${sumOfSteps - 10000} steps over the goal!`);
            return;

        }

        index++;

    }

    console.log(`${10000 - sumOfSteps} more steps to reach goal.`);

}
walking(["1000", "1500", "2000", "6500"]);
walking(["1500", "300", "2500", "3000", "Going home", "200"]);
walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);
walking(["125", "250", "4000", "30", "2678", "4682"]);