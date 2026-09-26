function sleepyTomCat(restDays) {

    let playTimeForRestDays = restDays * 127;
    let playTimeForWorkingDays = (365 - restDays) * 63;
    let totalPalyTime = playTimeForRestDays + playTimeForWorkingDays;
    let totalHours = 0;
    let minutesRemaining = 0;
    let differenceInMinutes = 0;

    if (totalPalyTime <= 30000) {

        differenceInMinutes = 30000 - totalPalyTime;
        totalHours = Math.floor(differenceInMinutes / 60);
        minutesRemaining = differenceInMinutes % 60;

        console.log('Tom sleeps well');
        console.log(`${totalHours} hours and ${minutesRemaining} minutes less for play`);


    } else {

        differenceInMinutes = totalPalyTime - 30000;
        totalHours = Math.floor(differenceInMinutes / 60);
        minutesRemaining = differenceInMinutes % 60;

        console.log(`Tom will run away`);
        console.log(`${totalHours} hours and ${minutesRemaining} minutes more for play`);

    }
}
sleepyTomCat(20);
sleepyTomCat(113);