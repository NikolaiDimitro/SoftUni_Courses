function passwordGenerator(arr) {

    let password = (arr[0] + arr[1]).toLowerCase();
    let replacement = arr[2].toUpperCase();
    let vowelIndex = 0;
    let result = '';

    for (let char of password) {

        if ('aeiou'.includes(char)) {
            result += replacement[vowelIndex % replacement.length];
            vowelIndex++;

        } else {

            result += char;

        }
    }

    console.log(`Your generated password is ${result.split('').reverse().join('')}`);
    
}
passwordGenerator(['ilovepizza', 'ihatevegetables','orange']);
passwordGenerator(['easymoneyeazylife', 'atleasttencharacters', 'absolute']);
passwordGenerator(['areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed']);