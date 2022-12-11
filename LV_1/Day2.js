function solution1(a, b) {
    let answer = 0;
    if (a > b) {
        for (let i = b; i <= a; i++) {
            answer += i;
        }
    } else {
        for (let i = a; i <= b; i++) {
            answer += i;
        }
    }
    return answer;
}

function solution2(seoul) {
    const kimIndex = seoul.indexOf('Kim');
    return `김서방은 ${kimIndex}에 있다`;
}

function solution3(arr, divisor) {
    let answer = [];
    arr.map((a) => {
        if (a % divisor === 0) {
            answer.push(a);
        }
    });
    if (answer.length === 0) {
        return [-1];
    }
    return answer.sort((a, b) => a - b);
}

function solution4(absolutes, signs) {
    let plusMinus = [];
    let answer = [];
    let result = 0;
    signs.map((a) => {
        if (a === true) {
            plusMinus.push('+');
        } else {
            plusMinus.push('-');
        }
    });
    for (let i = 0; i < absolutes.length; i++) {
        answer.push(Number(plusMinus[i] + String(absolutes[i])));
    }
    answer.map((a) => {
        result += a;
    });
    return result;
}

function solution5(numbers) {
    let cantFindIndex = [];
    let result = 0;
    for (let i = 0; i < 10; i++) {
        if (numbers.includes(i) === false) {
            cantFindIndex.push(i);
        }
    }
    cantFindIndex.map((a) => {
        result += a;
    });
    return result;
}

function solution6(s) {
    let array = s.split('');
    let answer = [];
    if (array.length % 2 === 0) {
        answer.push(array[array.length / 2 - 1]);
        answer.push(array[array.length / 2]);
    }
    if (array.length % 2 !== 0) {
        answer.push(array[Math.floor(array.length / 2)]);
    }
    return answer.join('');
}

function solution7(n) {
    let answer = [];
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            answer.push('박');
        } else {
            answer.push('수');
        }
    }
    return answer.join('');
}

function solution8(a, b) {
    let answer = 0;
    for (let i = 0; i < a.length; i++) {
        answer += a[i] * b[i];
    }
    return answer;
}
