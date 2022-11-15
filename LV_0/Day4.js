function solution(n) {
    const answer = Math.ceil(n / 7);
    return answer;
}

function euclid(num1, num2) {
    const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
    const lcm = (a, b) => (a * b) / gcd(a, b);
    return [gcd(num1, num2), lcm(num1, num2)];
}

function solution1(n) {
    const pizza = euclid(n, 6)[1];
    return pizza / 6;
}

function solution2(slice, n) {
    return Math.ceil(n / slice);
}

function solution3(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

console.log(solution3([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
