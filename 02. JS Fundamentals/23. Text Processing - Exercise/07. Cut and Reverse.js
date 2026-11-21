function cutAndReverse(str) {

    let firstHalf = str.slice(0, str.length / 2);
    let secondHalf = str.slice(str.length / 2);

    firstHalf = firstHalf.split('').reverse().join('');
    secondHalf = secondHalf.split('').reverse().join('');

    console.log(firstHalf);
    console.log(secondHalf);

}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');