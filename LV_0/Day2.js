function solution(num1, num2) {
    var divide = num1 / num2;
    let answer = Math.floor(divide * 1000);
    return answer;
}

function solution1(num1, num2) {
    if (num1 === num2) {
        return 1;
    }
    return -1;
}

function solution2(denum1, num1, denum2, num2) {
    function euclid(num1, num2) {
        const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
        const lcm = (a, b) => (a * b) / gcd(a, b);
        return [gcd(num1, num2), lcm(num1, num2)];
    }
    const lcm = euclid(num1, num2)[1];
    const euclidNum1 = lcm / num1;
    const euclidNum2 = lcm / num2;
    const answerDenum = denum1 * euclidNum1 + denum2 * euclidNum2;
    const answerNum = num2 * euclidNum2;
    const gcd = euclid(answerDenum, answerNum)[0];

    return [answerDenum / gcd, answerNum / gcd];
}

function solution3(numbers) {
    const answer = numbers.map((array) => array * 2);
    return answer;
}
