function theMostPowerfulWord(input) {

    let index = 0;
    let word = input[index];

    let maxPower = 0;
    let mostPowerfulWord = "";

    while (word !== "End of words") {

        let sum = 0;

        for (let i = 0; i < word.length; i++) {

            sum += word.charCodeAt(i);
        }

        let firstLetter = word[0].toLowerCase();

        if (firstLetter === "a" ||
            firstLetter === "e" ||
            firstLetter === "i" ||
            firstLetter === "o" ||
            firstLetter === "u" ||
            firstLetter === "y") {

            sum *= word.length;

        } else {

            sum = Math.floor(sum / word.length);
        }

        if (sum > maxPower) {

            maxPower = sum;
            mostPowerfulWord = word;
        }

        index++;
        word = input[index];
    }

    console.log(`The most powerful word is ${mostPowerfulWord} - ${maxPower}`);
    
}
theMostPowerfulWord(["The", "Most", "Powerful", "Word", "Is", "Experience", "End of words"]);
theMostPowerfulWord(["But", "Some", "People", "Say", "It's", "LOVE", "End of words"]);