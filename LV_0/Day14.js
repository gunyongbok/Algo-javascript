function solution1(numbers) {
    const num = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

    for (let i = 0; i < num.length; i++) {
        numbers = numbers.split(num[i]).join(i);
    }
    return Number(numbers);
}

function solution2(my_string, num1, num2) {
    const array = my_string.split('');
    array.splice(num1, 1, my_string[num2]);
    array.splice(num2, 1, my_string[num1]);
    return array.join('');
}

function solution3(s) {
    const dic = {};
    const array = s.split('');
    const answer = [];
    array.map((a) => {
        if (a in dic === false) {
            dic[a] = 1;
        } else {
            dic[a] += 1;
        }
    });
    const dicArray = Object.entries(dic);
    for (let i = 0; i < dicArray.length; i++) {
        if (dicArray[i][1] === 1) {
            answer.push(dicArray[i][0]);
        }
    }
    return answer.sort().join('');
}

function solution(n) {
    let answer = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            answer.push(i);
        }
    }
    return answer;
}
