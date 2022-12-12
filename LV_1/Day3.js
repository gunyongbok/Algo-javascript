function solution1(s) {
    return s.split('').sort().reverse().join('');
}

const countDivide = (n) => {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            count++;
        }
    }
    return count;
};

function solution2(left, right) {
    let answer = 0;
    for (let i = left; i <= right; i++) {
        if (countDivide(i) % 2 === 0) {
            answer += i;
        }
        if (countDivide(i) % 2 !== 0) {
            answer -= i;
        }
    }
    return answer;
}

function validateNumber(array) {
    const number = array.map((item) => isNaN(item));
    if (number.includes(true)) {
        return 1;
    }
}

function validateLength(array) {
    const length = array.length;
    if (length > 6 || length < 4 || length === 5) {
        return 1;
    }
}

function solution3(s) {
    let array = s.split('');
    if (validateNumber(array) === 1 || validateLength(array) === 1) {
        return false;
    }
    return true;
}

function solution4(price, money, count) {
    let sum = 0;
    for (let i = 1; i <= count; i++) {
        sum += price * i;
    }
    if (sum > money) {
        return sum - money;
    } else {
        return 0;
    }
}
