function matchFullName(str) {

    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+/gm
    let match = pattern.exec(str);
    let validNames = [];

    while (match !== null) {

        validNames.push(match[0]);
        match = pattern.exec(str);

    }

    console.log(validNames.join(' '));

}
matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");