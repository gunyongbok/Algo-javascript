function solution(n) {
    let jump = [0, 1, 2];
    for (let i = 3; i <= n; i++) {
        jump[i] = (jump[i - 2] + jump[i - 1]) % 1234567;
    }
    return jump[n];
}

console.log(solution(1));
