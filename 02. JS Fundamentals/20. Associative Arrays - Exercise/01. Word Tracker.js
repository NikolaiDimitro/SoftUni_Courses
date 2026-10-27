function wordTracker(arr) {

    let obj = {};
    let words = arr.shift().split(` `);

    for (let word of words) {

        let count = 0;

        for (let other of arr) {

            if (word === other) {

                count++;

            }
        }

        obj[word] = count;

    }

    obj = Object.entries(obj).sort((a, b) => b[1] - a[1]);

    for (let word of obj) {

        console.log(`${word[0]} - ${word[1]}`);

    }
}
wordTracker(['this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task']);
wordTracker(['is the', 'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']);