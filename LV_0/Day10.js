function solution1(box, n) {
    const answer = Math.floor(box[0] / n) * Math.floor(box[1] / n) * Math.floor(box[2] / n);
    return answer;
}

function solution2(n) {
    let stack = [];
    for (let i = 1; i <= n; i++) {
        let count = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                count += 1;
            }
        }
        stack.push(count);
    }
    let answer = 0;
    for (let i = 0; i < n; i++) {
        if (stack[i] > 2) {
            answer++;
        }
    }
    return answer;
}

function solution(n) {
    let result;
    for (let i = 1; i < 100; i++) {
        if (n < factorial(i)) {
            return i - 1;
        }
    }
}

const factorial = (n) => {
    let result = BigInt(1);
    for (let i = 1; i <= n; i++) {
        result = result * BigInt(i);
    }
    return result;
};
