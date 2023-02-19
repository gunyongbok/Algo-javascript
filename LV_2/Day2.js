function solution1(A, B) {
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);

    return A.reduce((answer, value, index) => answer + value * B[index], 0);
}

// 시간 초과

function solution2(s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        stack.push(s[i]);
        const a = stack.join('');
        if (a.includes('()')) {
            stack.pop();
            stack.pop();
        }
    }

    if (stack.length === 0) {
        return true;
    }
    return false;
}

function solution(s) {
    let value = 0;

    for (let i = 0; i < s.length; i++) {
        s[i] === '(' ? value++ : value--;

        if (value < 0) return false;
    }

    return value === 0 ? true : false;
}
