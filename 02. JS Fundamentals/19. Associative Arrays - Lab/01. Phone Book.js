function phoneBook(arr) {

    let personObj = {};

    for (let person of arr) {

        let [personName, phoneNumber] = person.split(' ');
        personObj[personName] = phoneNumber;

    }

    for (let personInfo in personObj) {

        console.log(`${personInfo} -> ${personObj[personInfo]}`);

    }
}
phoneBook(['Tim 0834212554', 'Peter 0877547887', 'Bill 0896543112', 'Tim 0876566344']);
phoneBook(['George 0552554', 'Peter 087587', 'George 0453112', 'Bill 0845344']);