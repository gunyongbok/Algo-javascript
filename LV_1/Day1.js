function solution1(n) {
    let answer = [];
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            answer.push(i);
        }
    }
    answer.map((a) => {
        sum += a;
    });
    return sum;
}

function solution2(n) {
    let num = Math.sqrt(n);
    if (Number.isInteger(num) === true) {
        return (num + 1) * (num + 1);
    }
    return -1;
}

function solution3(s) {
    let pCount = 0;
    let yCount = 0;
    let sArray = s.toLowerCase().split('');
    sArray.map((a) => {
        if (a === 'p') {
            pCount++;
        }
        if (a === 'y') {
            yCount++;
        }
    });
    if (pCount === yCount || (pCount === 0 && yCount === 0)) {
        return true;
    }
    return false;
}

function solution4(s) {
    return Number(s);
}

function solution5(n) {
    let answer;
    for (let i = 1; i <= n; i++) {
        if (n % i === 1) {
            answer = i;
            break;
        }
    }
    return answer;
}
