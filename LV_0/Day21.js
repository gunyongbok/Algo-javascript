function solution1(numlist, n) {
    return numlist.sort((a, b) => {
        const [a1, b1] = [Math.abs(a - n), Math.abs(b - n)];
        if (a1 === b1) return b - a;
        return a1 - b1;
    });
}

const scoreAverage = (array) => {
    return (array[0] + array[1]) / 2;
};

const countArray = (arr) => {
    let answer = [];

    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] < arr[j]) count++;
        }
        answer.push(count + 1);
    }
    return answer;
};

function solution2(score) {
    let average = [];
    score.map((a) => {
        average.push(scoreAverage(a));
    });
    return countArray(average);
}

function solution3(babbling) {
    const regexp1 = /(aya|ye|woo|ma)\1+/;
    const regexp2 = /^(aya|ye|woo|ma)+$/;

    return babbling.reduce((ans, word) => (!regexp1.test(word) && regexp2.test(word) ? ++ans : ans), 0);
}

function solution(id_pw, db) {
    let count = 0;
    for (let i = 0; i < db.length; i++) {
        if (id_pw[0] === db[i][0] && id_pw[1] === db[i][1]) {
            return 'login';
        }
        if (id_pw[0] === db[i][0] && id_pw[1] !== db[i][1]) {
            return 'wrong pw';
        }
        if (id_pw[0] !== db[i][0]) {
            count++;
        }
    }
    if (count === db.length) {
        return 'fail';
    }
}
