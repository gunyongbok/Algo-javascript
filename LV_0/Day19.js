function solution1(my_string) {
    const numStr = my_string.match(/[0-9]+/g);
    return numStr ? numStr.map(Number).reduce((a, c) => a + c, 0) : 0;
}

function solution2(board) {
    let result = 0;

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 1) {
                if (i !== 0 && board[i - 1][j] !== 1) {
                    board[i - 1][j] = 2;
                }
                if (i !== board.length - 1 && board[i + 1][j] !== 1) {
                    board[i + 1][j] = 2;
                }
                if (j !== 0 && board[i][j - 1] !== 1) {
                    board[i][j - 1] = 2;
                }
                if (j !== board[i].length - 1 && board[i][j + 1] !== 1) {
                    board[i][j + 1] = 2;
                }
                if (i !== 0 && j !== 0 && board[i - 1][j - 1] !== 1) {
                    board[i - 1][j - 1] = 2;
                }
                if (i !== 0 && j !== board[i].length - 1 && board[i - 1][j + 1] !== 1) {
                    board[i - 1][j + 1] = 2;
                }
                if (i !== board.length - 1 && j !== 0 && board[i + 1][j - 1] !== 1) {
                    board[i + 1][j - 1] = 2;
                }
                if (i !== board.length - 1 && j !== board[i].length - 1 && board[i + 1][j + 1] !== 1) {
                    board[i + 1][j + 1] = 2;
                }
            }
        }
    }
    board.forEach((a) => a.forEach((b) => (b === 0 ? result++ : null)));
    return result;
}

function solution3(sides) {
    let answer = [];
    const sorted = sides.sort((a, b) => a - b);
    for (let i = 1; i <= sorted[1]; i++) {
        if (sorted[0] + i > sorted[1]) {
            answer.push(i);
        }
    }
    for (let i = sorted[1] + 1; i < sorted[0] + sorted[1]; i++) {
        answer.push(i);
    }
    return answer.length;
}

function solution(spell, dic) {
    spell = spell.sort().join('');
    return dic.map((a) => a.split('').sort().join('')).find((a) => a === spell) === undefined ? 2 : 1;
}
