function solution(board, moves) {
    // 뽑힌 인형들을 저장하는 바구니
    let basket = [];
    // basket안에서 같은 인형이여서 사라진 인형의 개수
    let result = 0;
    // basket안에서 삭제된 요소를 삭제히고 저장해주는 바구니
    let newBoard = Array.from(Array(board.length), () => Array());
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            newBoard[j].push(board[i][j]);
        }
    }

    let filteredBoard = [];
    for (let i = 0; i < board.length; i++) {
        filteredBoard.push(newBoard[i].filter((n) => n !== 0));
    }

    for (let i = 0; i < moves.length; i++) {
        if (basket.length === 0) {
            basket.push(filteredBoard[moves[i] - 1].shift());
        } else {
            let last = basket[basket.length - 1];
            let newPick = filteredBoard[moves[i] - 1].shift();

            if (last === newPick && newPick !== undefined) {
                result++;
                basket.pop();
            } else {
                basket.push(newPick);
            }
        }
    }
    return result * 2;
}

solution(
    [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 3],
        [0, 2, 5, 0, 1],
        [4, 2, 4, 4, 2],
        [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
);
