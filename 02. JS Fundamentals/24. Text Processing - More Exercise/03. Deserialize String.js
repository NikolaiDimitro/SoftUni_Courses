function deserializeString(arr) {

    let index = 0;
    let result = [];

    while (arr[index] !== 'end') {

        let current = arr[index];

        let [char, indexes] = current.split(':');
        indexes = indexes.split('/').map((x) => Number(x));

        for (let ind of indexes) {

            if (result[ind] === undefined) {

                result[ind] = char;

            }
        }

        index++;

    }

    console.log(result.join(''));

}
deserializeString(['a:0/2/4/6',
    'b:1/3/5',
    'end']);
deserializeString(['a:0/3/5/11',
    'v:1/4',
    'j:2',
    'm:6/9/15',
    's:7/13',
    'd:8/14',
    'c:10',
    'l:12',
    'end']);