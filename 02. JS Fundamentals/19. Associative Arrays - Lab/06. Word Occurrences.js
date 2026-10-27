function wordOccurences(arr) {

    let obj = {};

    for (let i = 0; i < arr.length; i++) {

        let current = arr[i];
        let count = 1;

        if (i === 0) {

            for (let j = 1; j < arr.length; j++) {

                let nextCurrent = arr[j];

                if (current === nextCurrent) {

                    count++;

                }
            }

            obj[current] = count;

        } else {

            for (let j = 0; j < i; j++) {

                let previosWord = arr[j];

                if (current === previosWord) {

                    count++;

                }
            }

            for (let j = i + 1; j < arr.length; j++) {

                let nextWord = arr[j];

                if (current === nextWord) {

                    count++;

                }
            }

            obj[current] = count;

        }
    }

    let entries = Object.entries(obj).sort(([wordA, countA], [wordB, countB]) => countB - countA);

    for (let word of entries) {

        console.log(`${word[0]} -> ${word[1]} times`);

    }
}
wordOccurences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);
wordOccurences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);