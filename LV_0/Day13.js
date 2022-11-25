function solution1(array, n) {
    array.push(n);
    const answer = array.sort((a, b) => a - b);
    if (n - answer[answer.indexOf(n) - 1] > answer[answer.indexOf(n) + 1] - n) {
        return answer[answer.indexOf(n) + 1];
    }
    return answer[answer.indexOf(n) - 1];
}

function solution2(order) {
    const answer = String(order).split('');
    let count = 0;
    answer.map((a) => {
        if (a === '3' || a === '6' || a === '9') {
            count++;
        }
    });
    return count;
}

function solution3(cipher, code) {
    const array = cipher.split('');
    const result = [];
    for (let i = 0; i <= array.length; i++) {
        if (i % code === 0) {
            result.push(array[i - 1]);
        }
    }
    result.shift();
    return result.join('');
}

function solution(my_string) {
    let answer = '';
    for (const x of my_string) {
        if (x === x.toUpperCase()) {
            answer += x.toLowerCase();
        } else {
            answer += x.toUpperCase();
        }
    }
    return answer;
}
