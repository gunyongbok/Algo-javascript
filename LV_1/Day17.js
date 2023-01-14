const getDivisors = (num) => {
    const divisors = [];
    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            divisors.push(i);
            if (num / i != i) divisors.push(num / i);
        }
    }
    return divisors.length;
};

function solution(number, limit, power) {
    let container = [];
    let answer = 0;
    for (let i = 1; i <= number; i++) {
        container.push(getDivisors(i));
    }

    container.map((a) => {
        if (a > limit) {
            answer += power;
        } else {
            answer += a;
        }
    });
    return answer;
}

function solution(babbling) {
    let answer = 0;

    for (let word of babbling) {
        if (/(aya|ye|woo|ma)\1+/g.test(word)) continue;
        if (/^(aya|ye|woo|ma)+$/g.test(word)) {
            answer++;
        }
    }

    return answer;
}
