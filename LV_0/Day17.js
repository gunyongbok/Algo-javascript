function solution1(n, t) {
    let answer = n;
    for (let i = 1; i <= t; i++) {
        answer = answer * 2;
    }
    return answer;
}

function solution2(my_string) {
    const result = Array.from(my_string.toLowerCase()).sort();
    return result.join('');
}

function solution3(array) {
    let answer = 0;
    const result = array.join('').split('');
    result.map((a) => {
        if (a === '7') {
            answer++;
        }
    });
    return answer;
}

function solution(my_str, n) {
    let count = 0;
    let answer = [];
    for (let i = 1; i <= Math.ceil(my_str.length / n); i++) {
        answer.push(my_str.slice(count, n + count));
        count += n;
    }
    return answer;
}
