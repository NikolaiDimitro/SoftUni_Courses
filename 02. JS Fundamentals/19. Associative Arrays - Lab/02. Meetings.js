function meeting(arr) {

    let meetObj = {};

    for (let meet of arr) {

        let [weekDay, personaName] = meet.split(' ');

        if (meetObj.hasOwnProperty(weekDay)) {

            console.log(`Conflict on ${weekDay}!`);

        } else {

            meetObj[weekDay] = personaName;
            console.log(`Scheduled for ${weekDay}`);

        }
    }

    for (let meet in meetObj) {

        console.log(`${meet} -> ${meetObj[meet]}`);

    }
}
meeting(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim']);
meeting(['Friday Bob', 'Saturday Ted', 'Monday Bill', 'Monday John', 'Wednesday George']);