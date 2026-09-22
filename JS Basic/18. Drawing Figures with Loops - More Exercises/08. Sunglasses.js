function sunglasses(n) {

    let str = '';
    let interval = '';
    let pipe = '';
    let forwardSlash = '';
    let stars = '*';
    let countSlash = 0;
    let countPipe = 0;

    for (let row = 1; row <= n; row++) {

        if (row === 1 || row === n) {

            for (let col = 1; col < 2 * n; col++) {

                stars += '*';

                if (col <= n) {

                    interval += ' ';

                }
            }

            str += stars + interval + stars;

            console.log(str);

            str = '';
            stars = '*';
            interval = '';

        } else {

            countSlash = 2 * n - 2;

            for (let i = 1; i <= 5 * n; i++) {


                if (i <= n) {

                    interval += ' ';
                    pipe += '|';

                }

                if (i <= (2 * n) - 2) {

                    forwardSlash += '\/';

                } else {

                    break;

                }
            }

            let glass = Math.floor((n + 1) / 2);

            if (row === glass) {

                str = stars + forwardSlash + stars + pipe + stars + forwardSlash + stars;

            } else {

                str = stars + forwardSlash + stars + interval + stars + forwardSlash + stars;

            }

            console.log(str);
            stars = '*';
            interval = '';
            forwardSlash = '';
            pipe = '';
            str = '';

        }
    }
}
sunglasses(3);
// sunglasses(4);
// sunglasses(5);
// sunglasses(6);