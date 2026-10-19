function solve(arr) {

    let rows = Number(arr[0]);
    let maze = arr.slice(1, rows + 1).map(row => row.split(''));

    let startRow;
    let startCol;

    for (let row = 0; row < rows; row++) {

        let col = maze[row].indexOf('k');

        if (col !== -1) {

            startRow = row;
            startCol = col;
            break;

        }
    }

    let visited = maze.map(row => Array(row.length).fill(false));

    let directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1]
    ];

    function findLongestPath(row, col) {
        if (row < 0 || row >= rows || col < 0 || col >= maze[row].length || maze[row][col] === '#' || visited[row][col]) {

            return { foundExit: false, moves: 0 };

        }

        visited[row][col] = true;

        let isExit = row === 0 || row === rows - 1 || col === 0 || col === maze[row].length - 1;

        let foundExit = isExit;
        let maxMoves = 0;

        for (let [rowChange, colChange] of directions) {

            let nextRow = row + rowChange;
            let nextCol = col + colChange;

            if (nextRow >= 0 && nextRow < rows && nextCol >= 0 && nextCol < maze[nextRow].length && maze[nextRow][nextCol] === ' ' && !visited[nextRow][nextCol]) {

                let result = findLongestPath(nextRow, nextCol);

                if (result.foundExit) {

                    foundExit = true;
                    maxMoves = Math.max(maxMoves, result.moves);

                }
            }
        }

        visited[row][col] = false;

        return { foundExit, moves: foundExit ? maxMoves + 1 : 0 };
    }

    let result = findLongestPath(startRow, startCol);

    if (result.foundExit) {

        console.log(`Kate got out in ${result.moves} moves`);

    } else {

        console.log('Kate cannot get out');

    }
}
katesWayOut([4, "######", "##  k#", "## ###", "## ###"]);
katesWayOut([5, "######", "##  k#", "## ###", "######", "## ###"]);