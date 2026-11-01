function modernTimeOfHashTag(str) {

    let specialWordsArr = [];
    let words = str.split(' ');
    
    for (let word of words) {
        
        let isValide = true;
        
        if (word.startsWith('#') && word.length > 1) {

            let specailWord = word.substring(1);

            for (let chat of specailWord) {

                let charCode = chat.charCodeAt(0);

                if ((charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122)) {

                    isValide = false;
                    break;

                }
            }

            if (isValide) {

                specialWordsArr.push(specailWord);

            }
        }
    }

    for (let word of specialWordsArr) {

        console.log(word);

    }
}
modernTimeOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');
modernTimeOfHashTag('The symbol # is known #variously in English-speaking #regions as the #number sign');