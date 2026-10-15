function sortAnArrayBy2Criteria(arr) {

    arr.sort((a, b) => a.length - b.length || a.localeCompare(b));

    for (let word of arr) {

        console.log(word);

    }
}
sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma']);
sortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);