function readText(arr) {

    let index = 0;

    while (arr[index] !== 'Stop') {

        console.log(arr[index]);

        index++;

    }
}
readText(["Nakov", "SoftUni", "Sofia", "Bulgaria", "SomeText", "Stop", "AfterStop", "Europe", "HelloWorld"]);
readText(["Sofia", "Berlin", "Moscow", "Athens", "Madrid", "London", "Paris", "Stop", "AfterStop"]);