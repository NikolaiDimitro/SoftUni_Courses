function chrismasTree(n) {

    let str = '';
    let intervals = '';
    let stars = '';

    for (let row = 0; row <= n; row++) {

        for (let i = n - 1; i >= row; i--) {

            intervals += ' ';

        }

        for (let i = 0; i < row; i++) {

            stars += '*';

        }

        str += intervals + stars + ' | ' + stars;

        console.log(str);

        intervals = '';
        stars = '';
        str = '';

    }
}
// chrismasTree(1);
// chrismasTree(2);
// chrismasTree(3);
chrismasTree(4);