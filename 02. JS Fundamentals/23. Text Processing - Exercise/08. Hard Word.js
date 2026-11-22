function hardWord(arr) {

    let str = arr[0];
    let words = arr[1];

    for (let word of words) {

        for (let i = 0; i < str.length; i++) {

            if (str[i] !== '_') {

                continue;

            }

            let start = i;

            while (i < str.length && str[i] === '_') {

                i++;

            }

            if (i - start === word.length) {

                str = str.substring(0, start) + word + str.substring(i);
                break;

            }
        }
    }

    console.log(str);

}
hardWord(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.', ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);