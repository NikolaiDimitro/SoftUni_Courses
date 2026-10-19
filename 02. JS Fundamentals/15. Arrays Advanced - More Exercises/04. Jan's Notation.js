function jansNotation(arr) {

    let numbers = [];

    for (let element of arr) {

        if (typeof element === 'number') {

            numbers.push(element);

        } else {

            if (numbers.length < 2) {

                console.log('Error: not enough operands!');
                return;

            }

            let secondNumber = numbers.pop();
            let firstNumber = numbers.pop();
            let result;

            switch (element) {

                case '+':

                    result = firstNumber + secondNumber;
                    break;

                case '-':

                    result = firstNumber - secondNumber;
                    break;

                case '*':

                    result = firstNumber * secondNumber;
                    break;

                case '/':

                    result = firstNumber / secondNumber;
                    break;

            }

            numbers.push(result);

        }
    }

    if (numbers.length === 1) {

        console.log(numbers[0]);

    } else {

        console.log('Error: too many operands!');

    }
}
jansNotation([3, 4, '+']);
jansNotation([5, 3, 4, '*', '-']);
jansNotation([7, 33, 8, '-']);
jansNotation([15, '/']);