function salary(arr) {

    let salary = Number(arr[1]);

    for (let i = 2; i <= arr.length - 1; i++) {

        if (arr[i] === 'Facebook') {

            salary -= 150;

        } else if (arr[i] === 'Instagram') {

            salary -= 100;

        } else if (arr[i] === 'Reddit') {

            salary -= 50;

        }

        if (salary <= 0) {

            console.log('You have lost your salary.');
            return;

        }
    }

    console.log(salary);

}
salary([10, 750, "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"]);
salary([3, 500, "Github.com", "Stackoverflow.com", "softuni.bg"]);
salary([3, 500, "Facebook", "Stackoverflow.com", "softuni.bg"]);