function chessBoard(n) {

    let str = `<div class="chessboard">\n`;

    for (let row = 1; row <= n; row++) {

        str += `  <div>\n`;

        for (let col = 1; col <= n; col++) {

            if ((row + col) % 2 === 0) {

                str += `    <span class="black"></span>\n`;

            } else {

                str += `    <span class="white"></span>\n`;

            }
        }

        str += `  </div>\n`;

    }

    str += `</div>`;
    return str;

}
chessBoard(3);