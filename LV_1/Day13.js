function solution(numbers, hand) {
    let answer = '';
    let left = '*';
    let right = '#';
    for (let i of numbers) {
        if (i === 1 || i === 4 || i === 7) {
            answer += 'L';
            left = i;
            continue;
        }
        if (i === 3 || i === 6 || i === 9) {
            answer += 'R';
            right = i;
        } else {
            // 현재의 오른손 왼손 위치 알아내기
            let r = findLocation(right);
            let l = findLocation(left);
            // 가운데 열의 숫자 숫자 위치 정보
            let m = findLocation(i);

            let rm = Math.abs(m[0] - r[0]) + Math.abs(m[1] - r[1]);
            let lm = Math.abs(m[0] - l[0]) + Math.abs(m[1] - l[1]);
            if (rm === lm) {
                if (hand === 'right') {
                    answer += 'R';
                    right = i;
                }
                if (hand === 'left') {
                    answer += 'L';
                    left = i;
                }
            }
            if (rm > lm) {
                answer += 'L';
                left = i;
            }
            if (lm > rm) {
                answer += 'R';
                right = i;
            }
        }
    }
    return answer;
}
solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right');

function findLocation(key) {
    let keypad = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        ['*', 0, '#'],
    ];
    for (let i = 0; i < keypad.length; i++) {
        for (let j = 0; j < 3; j++) {
            if (keypad[i][j] === key) {
                return [i, j];
            }
        }
    }
}
