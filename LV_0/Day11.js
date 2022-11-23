function solution1(my_string) {
    const avoidAlpha = ['a', 'e', 'i', 'o', 'u'];
    const answer = my_string.split('');
    const result = [];
    answer.map((a) => {
        if (avoidAlpha.includes(a) === false) {
            result.push(a);
        }
    });
    return result.join('');
}

function solution2(my_string) {
    const newArray = my_string.split('');
    const result = [];
    newArray.map((a) => {
        if (isNaN(a) === false) {
            result.push(Number(a));
        }
    });
    const answer = result.sort();
    console.log(answer);
}

function solution3(my_string) {
    const newArray = my_string.split('');
    const result = [];
    newArray.map((a) => {
        if (isNaN(a) === false) {
            result.push(Number(a));
        }
    });
    const newAnswer = result.sort();
    let answer = 0;
    newAnswer.map((a) => {
        answer += a;
    });
    return answer;
}

function solution(n) {
    const answer = [];
    while (n % 2 === 0) {
        answer.push(2);
        n /= 2;
    }
    for (let i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            answer.push(i);
            n /= i;
        }
    }
    if (n > 2) answer.push(n);
    const set = new Set(answer);
    return [...set];
}
