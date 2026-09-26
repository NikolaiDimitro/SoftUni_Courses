function pipesInPool(poolVolumeInLiters, pipe1, pipe2, hours) {

    let totalLitersForFirstPipe = pipe1 * hours;
    let totalLitresForSecondPipe = pipe2 * hours;
    let totalLitres = totalLitersForFirstPipe + totalLitresForSecondPipe;

    if (poolVolumeInLiters >= totalLitres) {

        console.log(`The pool is ${((totalLitres / poolVolumeInLiters) * 100).toFixed(2)}% full. Pipe 1: ${((totalLitersForFirstPipe / totalLitres) * 100).toFixed(2)}%. Pipe 2: ${((totalLitresForSecondPipe / totalLitres) * 100).toFixed(2)}%.`);

    } else {

        console.log(`For ${hours} hours the pool overflows with ${totalLitres - poolVolumeInLiters} liters.`);

    }
}
pipesInPool(1000, 100, 120, 3);
pipesInPool(100, 100, 100, 2.5);