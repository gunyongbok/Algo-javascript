function solution1(n) {
    // 주어진 n의 약수 중 홀수인 약수의 개수가 연속되는 수의 합의 개수다
    let arr = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0 && i % 2 === 1) {
            arr.push(i);
        }
    }
    return arr.length;
}

function solution2(n) {
    let answer,
        t1 = 0,
        t2 = 1;
    for (let i = 2; i <= n; i++) {
        answer = t1 + (t2 % 1234567);
        t1 = t2;
        t2 = answer;
    }
    return answer % 1234567;
}

function solution(n) {
    // 만약에 n이 2이면 이진수 10 -> 1의 개수 1개 100 -> 4
    let topCount = n.toString(2).split('1').length;

    while (true) {
        n++;
        let count = n.toString(2).split('1').length;
        if (topCount === count) {
            return n;
        }
    }
}
