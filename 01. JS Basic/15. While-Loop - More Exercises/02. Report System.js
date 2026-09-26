function reportSystem(arr) {

    let index = 1;
    let needMoney = Number(arr[0]);
    let sumOfCash = 0;
    let sumFromCreditCards = 0;
    let totalPay = 0;
    let countPayWithCash = 0;
    let countPayWithCreditCards = 0;

    while (arr[index] !== 'End') {

        let current = Number(arr[index]);

        if (index % 2 !== 0) {

            if (current > 100) {

                console.log('Error in transaction!');
                index++;
                continue;

            } else {

                sumOfCash += current;
                countPayWithCash++;
                totalPay += current;
                console.log('Product sold!');

            }

        } else {

            if (current < 10) {

                console.log('Error in transaction!');
                index++;
                continue;

            } else {

                sumFromCreditCards += current;
                countPayWithCreditCards++;
                totalPay += current;
                console.log('Product sold!');

            }
        }

        if (totalPay >= needMoney) {

            break;

        }

        index++;
    }

    if (totalPay >= needMoney) {

        console.log(`Average CS: ${(sumOfCash / countPayWithCash).toFixed(2)}`);
        console.log(`Average CC: ${(sumFromCreditCards / countPayWithCreditCards).toFixed(2)}`);

    } else {

        console.log(`Failed to collect required money for charity.`);

    }
}
reportSystem(["500", "120", "8", "63", "256", "78", "317"]);
reportSystem(["600", "86", "150", "98", "227", "End"]);