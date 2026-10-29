function componyUsers(componyArr) {

    let obj = {};

    for (let compony of componyArr) {

        let [componyName, id] = compony.split(' -> ');

        if (!obj.hasOwnProperty(componyName)) {

            obj[componyName] = { id: [id] };

        } else {

            if (!obj[componyName].id.includes(id)) {

                obj[componyName].id.push(id);

            }
        }
    }

    let entries = Object.entries(obj).sort(([nameA, aOb], [nameB, bOb]) => nameA.localeCompare(nameB))

    for (let index of entries) {

        console.log(index[0]);

        let newEntries = Object.entries(index[1]);

        for (let iden of newEntries[0][1]) {

            console.log(`-- ${iden}`);

        }
    }
}
componyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345']);
componyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111']);