function solution1(num, k) {
    const array = String(num).split('');
    const stringK = String(k);
    let answer;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === stringK) {
            answer = i + 1;
            break;
        }
        if (array.includes(stringK) === false) {
            answer = -1;
        }
    }
    return answer;
}

function solution2(n, numlist) {
    let answer = [];
    numlist.map((a) => {
        if (a % n === 0) {
            answer.push(a);
        }
    });
    return answer;
}

function solution3(n) {
    let result = 0;
    const answer = String(n).split('');
    answer.map((a) => {
        result += Number(a);
    });
    return result;
}

function solution4(quiz) {
    const answer = [];
    quiz.map((a) => {
        answer.push(Calculate(a));
    });
    return answer;
}

function Calculate(quiz) {
    const newQuiz = quiz.split(' ');
    if (newQuiz[1] === '-') {
        if (Number(newQuiz[0]) - Number(newQuiz[2]) === Number(newQuiz[4])) {
            return 'O';
        }
        return 'X';
    }
    if (newQuiz[1] === '+') {
        if (Number(newQuiz[0]) + Number(newQuiz[2]) === Number(newQuiz[4])) {
            return 'O';
        }
        return 'X';
    }
}

function solution5(str1, str2) {
    if (str1.indexOf(str2) === -1) {
        return 2;
    }
    return 1;
}

function solution(n) {
    if (Number.isInteger(Math.sqrt(n)) === true) {
        return 1;
    }
    return 2;
}
