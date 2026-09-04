function sumPrimeNonPrime(arr) {

    let index = 0;
    let sumPrNumb = 0;
    let sumNPrimeNumb = 0

    while (arr[index] !== 'stop') {

        for (let i = 0; i <= arr.length - 2; i++) {

            let num = Number(arr[i]);


            if (num < 0) {

                console.log('Number is negative.');
                break;


            }

            if (num % 2 === 0 || num % 3 === 0 || num % 7 === 0 || num % 10 === 5 || num % 10 === 0) {

                sumPrNumb += num;

            } else {

                sumNPrimeNumb += num;

            }



            index++;

        }



    }

    console.log(`Sum of all prime numbers is: ${sumPrNumb}`);
    console.log(`Sum of all non prime numbers is: ${sumNPrimeNumb}`);




}
sumPrimeNonPrime(["3",

    "9",

    "0",

    "7",

    "19",

    "4",

    "stop"]);
// sumPrimeNonPrime(["30",

//     "83",

//     "33",

//     "-1",

//     "20",

//     "stop"]);
// sumPrimeNonPrime(["0",

//     "-9",

//     "0",

//     "stop"]);
// sumPrimeNonPrime();