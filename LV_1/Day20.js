function solution1(survey, choices) {
    let dic = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
    let answer = [];

    for (let i = 0; i < survey.length; i++) {
        if (choices[i] === 4) continue;
        if (choices[i] > 4) {
            dic[`${survey[i][1]}`] += choices[i] - 4;
        }
        if (choices[i] < 4) {
            dic[`${survey[i][0]}`] += 4 - choices[i];
        }
    }

    dic['R'] >= dic['T'] ? answer.push('R') : answer.push('T');
    dic['C'] >= dic['F'] ? answer.push('C') : answer.push('F');
    dic['J'] >= dic['M'] ? answer.push('J') : answer.push('M');
    dic['A'] >= dic['N'] ? answer.push('A') : answer.push('N');

    return answer.join('');
}

function solution(ingredient) {
    let answer = 0;
    const arr = [];

    for (let i = 0; i < ingredient.length; i++) {
        const len = arr.push(ingredient[i]);
        if (len >= 4) {
            if (arr[len - 4] === 1 && arr[len - 3] === 2 && arr[len - 2] === 3 && arr[len - 1] === 1) {
                arr.pop();
                arr.pop();
                arr.pop();
                arr.pop();

                answer++;
            }
        }
    }

    return answer;
}
